import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { getBlogById } from '@/lib/contentful/client';
import { renderRichText } from '@/lib/contentful/richTextRenderer';
import { notFound } from 'next/navigation';

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;

  // Fetch blog with error handling
  let blog;
  try {
    blog = await getBlogById(resolvedParams.id, false);
  } catch (error) {
    console.error('Error fetching blog:', error);
    notFound();
  }

  if (!blog || !blog.fields) {
    notFound();
  }

  // Safely extract fields with fallbacks
  const title = blog.fields.titleBlogs || 'Untitled Blog Post';
  const content = blog.fields.autobotBlogs;
  const image = blog.fields.imagesBlogs as any; // Type assertion for Contentful Asset
  const revBlogs = blog.fields.revBlogs as any[] | undefined; // Type assertion for related blogs array

  // Safe image URL extraction
  let imageUrl: string | null = null;
  try {
    if (image?.fields?.file?.url) {
      const url = image.fields.file.url as string;
      imageUrl = url.startsWith('//') ? `https:${url}` : url;
    }
  } catch (e) {
    // Fallback if image access fails
    imageUrl = null;
  }

  const createdAt = new Date(blog.sys.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/resources/blog"
              className="inline-flex items-center gap-2 text-[#116366] hover:text-[#0d4d50] mb-8 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>

            <div className="flex items-center gap-4 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{createdAt}</span>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="ml-auto border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {imageUrl && (
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-none">
              <CardContent className="prose prose-lg max-w-none p-0">
                {content ? (
                  <div className="rich-text-content">
                    {renderRichText(content)}
                  </div>
                ) : (
                  <p className="text-gray-600">No content available for this blog post.</p>
                )}
              </CardContent>
            </Card>

            {/* Related Blogs */}
            {revBlogs && Array.isArray(revBlogs) && revBlogs.length > 0 && (
              <div className="mt-16 pt-16 border-t border-gray-200">
                <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {revBlogs.slice(0, 2).map((relatedBlog: any) => {
                    if (!relatedBlog?.fields) return null;

                    const relatedTitle = relatedBlog.fields.titleBlogs || 'Untitled';
                    const relatedImage = relatedBlog.fields.imagesBlogs as any;

                    // Safe image URL extraction for related blog
                    let relatedImageUrl: string | null = null;
                    try {
                      if (relatedImage?.fields?.file?.url) {
                        const url = relatedImage.fields.file.url as string;
                        relatedImageUrl = url.startsWith('//') ? `https:${url}` : url;
                      }
                    } catch (e) {
                      relatedImageUrl = null;
                    }

                    return (
                      <Link
                        key={relatedBlog.sys.id}
                        href={`/resources/blog/${relatedBlog.sys.id}`}
                        className="group"
                      >
                        <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                          {relatedImageUrl && (
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={relatedImageUrl}
                                alt={relatedTitle}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold group-hover:text-[#116366] transition-colors line-clamp-2">
                              {relatedTitle}
                            </h3>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
