import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Tag, ArrowRight, TrendingUp, BookOpen, Sparkles, Shield } from 'lucide-react';
import { getAllBlogs } from '@/lib/contentful/client';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export default async function BlogPage() {
  // Fetch blogs from Contentful
  const blogsFromContentful = await getAllBlogs(50, false);

  // Check if we have blogs from Contentful
  const hasContentfulBlogs = blogsFromContentful.length > 0;
  const categories = ['All', 'Technology', 'AI & ML', 'Web Development', 'Mobile', 'Cloud', 'Best Practices'];

  const featuredPost = {
    title: 'Building Scalable AI Applications with Custom LLMs',
    excerpt: 'Learn how to design and deploy custom Large Language Models for your business use cases with practical examples and best practices.',
    author: 'Dr. Ahmad Rahman',
    date: 'November 15, 2025',
    category: 'AI & ML',
    readTime: '8 min read',
    gradient: 'from-[#116366] to-[#14b8a6]',
  };

  const posts = [
    {
      title: 'Next.js 15: What\'s New and Why You Should Upgrade',
      excerpt: 'Explore the latest features in Next.js 15 and how they can improve your web development workflow.',
      author: 'Siti Nurhaliza',
      date: 'November 12, 2025',
      category: 'Web Development',
      readTime: '5 min read',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      title: 'Implementing SIMRS: Best Practices from 50+ Hospital Projects',
      excerpt: 'Key lessons learned from implementing Hospital Information Systems across Indonesia.',
      author: 'Dr. Budi Santoso',
      date: 'November 10, 2025',
      category: 'Technology',
      readTime: '10 min read',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      title: 'Flutter vs React Native: 2025 Comprehensive Comparison',
      excerpt: 'An in-depth comparison of the two leading cross-platform mobile frameworks.',
      author: 'Ahmad Fauzi',
      date: 'November 8, 2025',
      category: 'Mobile',
      readTime: '12 min read',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      title: 'Cloud Cost Optimization: Save 40% on AWS Bills',
      excerpt: 'Practical strategies to reduce your AWS infrastructure costs without sacrificing performance.',
      author: 'Linda Wijaya',
      date: 'November 5, 2025',
      category: 'Cloud',
      readTime: '7 min read',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      title: 'Building Real-time IoT Dashboards with React and MQTT',
      excerpt: 'Step-by-step guide to creating responsive IoT monitoring dashboards.',
      author: 'Rudi Hermawan',
      date: 'November 3, 2025',
      category: 'Technology',
      readTime: '15 min read',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      title: 'Cybersecurity Best Practices for Indonesian SMEs',
      excerpt: 'Essential security measures every small and medium business should implement.',
      author: 'Dewi Lestari',
      date: 'November 1, 2025',
      category: 'Best Practices',
      readTime: '6 min read',
      gradient: 'from-purple-500 to-indigo-500',
    },
  ];

  const trendingTopics = [
    'AI Implementation',
    'Cloud Migration',
    'Digital Transformation',
    'ERP Systems',
    'Mobile Development',
    'Cybersecurity',
  ];

  return (
    <>
      <Hero
        subtitle="Resources & Insights"
        title="Tech Blog & Knowledge Base"
        description="Stay updated with the latest technology trends, best practices, and insights from our team of experts."
        primaryCTA={{ text: 'Subscribe Newsletter', href: '#newsletter' }}
        secondaryCTA={{ text: 'Browse All', href: '#posts' }}
        image={
          <div className="relative">
            <div className="bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <BookOpen className="w-12 h-12 text-white mb-3" />
                  <div className="space-y-2">
                    <div className="h-3 bg-white/40 rounded w-full"></div>
                    <div className="h-3 bg-white/30 rounded w-4/5"></div>
                    <div className="h-3 bg-white/20 rounded w-3/5"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2].map((item) => (
                    <div key={item} className="bg-white/15 backdrop-blur-sm rounded-lg p-4">
                      <div className="w-8 h-8 bg-white/30 rounded mb-2"></div>
                      <div className="h-2 bg-white/30 rounded w-full mb-1"></div>
                      <div className="h-2 bg-white/20 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#14b8a6]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#116366]/20 rounded-full blur-xl"></div>
          </div>
        }
      />

      {/* Featured Post */}
      <Section className="relative bg-white overflow-hidden">
        <Container className="relative z-10">
          <Card className="group border border-gray-200 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className={`bg-gradient-to-br ${featuredPost.gradient} min-h-[400px] flex items-center justify-center text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <BackgroundPattern variant="circuit" opacity={0.3} className="text-white" />
                </div>
                <div className="relative z-10 text-center p-8">
                  <BookOpen className="w-24 h-24 mx-auto mb-4 opacity-90" />
                  <div className="text-6xl font-bold">Featured</div>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${featuredPost.gradient} bg-opacity-10 text-sm font-bold mb-4 w-fit`}>
                  <Tag className="w-4 h-4" />
                  <span className={`bg-gradient-to-r ${featuredPost.gradient} bg-clip-text text-transparent`}>
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-4 group-hover:text-[#116366] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className={`bg-gradient-to-r ${featuredPost.gradient} hover:opacity-90 text-white w-fit shadow-lg hover:shadow-xl transition-all`}>
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Category Filter */}
      <Section id="posts" className="relative bg-gray-50 overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className={
                  category === 'All'
                    ? 'bg-gradient-to-r from-[#116366] to-[#14b8a6] hover:from-[#0d4d50] hover:to-[#116366] text-white shadow-lg'
                    : 'border-2 border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hasContentfulBlogs ? (
              // Display blogs from Contentful
              blogsFromContentful.map((blog, index) => {
                // Safety check
                if (!blog?.fields) return null;

                const title = blog.fields.titleBlogs || 'Untitled Blog Post';
                const content = blog.fields.autobotBlogs;
                const excerpt = content
                  ? documentToPlainTextString(content).slice(0, 150) + '...'
                  : 'No content available';
                const image = blog.fields.imagesBlogs as any;

                // Safe image URL extraction
                let imageUrl: string | null = null;
                try {
                  if (image?.fields?.file?.url) {
                    const url = image.fields.file.url as string;
                    imageUrl = url.startsWith('//') ? `https:${url}` : url;
                  }
                } catch (e) {
                  imageUrl = null;
                }

                const createdAt = new Date(blog.sys.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                });
                const gradient = 'from-[#116366] to-[#14b8a6]';

                return (
                  <Card key={blog.sys.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 overflow-hidden">
                    {imageUrl ? (
                      <div className="h-56 relative overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className={`h-56 bg-gradient-to-br ${gradient} flex items-center justify-center text-white relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-20">
                          <BackgroundPattern variant="grid" opacity={0.3} className="text-white" />
                        </div>
                        <div className="relative z-10 text-center p-6">
                          <BookOpen className="w-16 h-16 mx-auto mb-2 opacity-90" />
                          <div className="text-sm opacity-90">Blog Post</div>
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-[#116366] transition-colors leading-tight line-clamp-2">
                        {title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-3">
                        {excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {createdAt}
                      </div>
                      <Link
                        href={`/resources/blog/${blog.sys.id}`}
                        className={`text-sm font-bold flex items-center group-hover:gap-2 transition-all bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                      >
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              // Fallback to hardcoded posts if Contentful is not configured
              posts.map((post, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 overflow-hidden">
                  <div className={`h-56 bg-gradient-to-br ${post.gradient} flex items-center justify-center text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <BackgroundPattern variant="grid" opacity={0.3} className="text-white" />
                    </div>
                    <div className="relative z-10 text-center p-6">
                      <div className="text-5xl font-bold mb-2">{post.category.slice(0, 3).toUpperCase()}</div>
                      <div className="text-sm opacity-90">{post.category}</div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} bg-opacity-10 text-xs font-bold mb-3 w-fit`}>
                      <Tag className="w-3 h-3" />
                      <span className={`bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent`}>
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-[#116366] transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <Link href={`/resources/blog/${index}`} className={`text-sm font-bold flex items-center group-hover:gap-2 transition-all bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent`}>
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white">
              Load More Articles
            </Button>
          </div>
        </Container>
      </Section>

      {/* Sidebar Content */}
      <Section className="relative bg-white overflow-hidden">
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Trending Topics */}
            <Card className="border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Trending Topics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-[#116366]/10 to-[#14b8a6]/10 text-[#116366] text-sm font-medium rounded-full hover:from-[#116366] hover:to-[#14b8a6] hover:text-white transition-all cursor-pointer border border-[#116366]/20">
                      {topic}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card id="newsletter" className="border border-gray-200 shadow-xl lg:col-span-2 bg-gradient-to-br from-[#116366] via-[#14b8a6] to-[#5eead4] text-white overflow-hidden relative">
              <BackgroundPattern variant="circuit" opacity={0.1} className="text-white" />
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">Subscribe to Our Newsletter</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-white/90 text-lg">
                  Get weekly insights on technology, best practices, and industry trends delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
                  />
                  <Button className="bg-white text-[#116366] hover:bg-gray-100 px-8 shadow-lg hover:shadow-xl transition-all">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-white/70 mt-4 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  No spam, unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
