import { createClient, Entry } from 'contentful';
import type {
  BlogPost,
  Blog,
  Service,
  Project,
  SolutionPackage,
  TeamMember,
  JobOpening,
  Testimonial,
  FAQ,
  PageContent,
  SuccessStory,
} from './types';

// Check if Contentful credentials are configured
const isContentfulConfigured = () => {
  return !!(
    process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID &&
    process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  );
};

// Create Contentful client
const client = isContentfulConfigured()
  ? createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
    })
  : null;

// Create preview client
const previewClient = isContentfulConfigured() &&
  process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
  ? createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
      host: 'preview.contentful.com',
    })
  : null;

// Get client based on preview mode
export const getClient = (preview = false) => {
  if (!isContentfulConfigured()) {
    console.warn('Contentful is not configured. Using fallback data.');
    return null;
  }
  return preview && previewClient ? previewClient : client;
};

// ===== BLOG POSTS =====

export async function getAllBlogPosts(limit = 100, preview = false): Promise<Entry<BlogPost, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      limit,
      order: ['-fields.publishDate'] as any,
    });
    return response.items as unknown as Entry<BlogPost, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string, preview = false): Promise<Entry<BlogPost, 'WITHOUT_UNRESOLVABLE_LINKS', string> | null> {
  const client = getClient(preview);
  if (!client) return null;

  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    } as any);
    return (response.items[0] as unknown as Entry<BlogPost, 'WITHOUT_UNRESOLVABLE_LINKS', string>) || null;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}

export async function getBlogPostsByCategory(categorySlug: string, limit = 10, preview = false): Promise<Entry<BlogPost, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.category.sys.contentType.sys.id': 'category',
      'fields.category.fields.slug': categorySlug,
      limit,
      order: ['-fields.publishDate'] as any,
    } as any);
    return response.items as unknown as Entry<BlogPost, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error(`Error fetching blog posts for category ${categorySlug}:`, error);
    return [];
  }
}

// ===== BLOGS (New Schema) =====

export async function getAllBlogs(limit = 100, preview = false): Promise<Entry<Blog, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const response = await client.getEntries({
      content_type: 'blogs',
      limit,
      order: ['-sys.createdAt'] as any,
    });
    return response.items as unknown as Entry<Blog, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function getBlogById(entryId: string, preview = false): Promise<Entry<Blog, 'WITHOUT_UNRESOLVABLE_LINKS', string> | null> {
  const client = getClient(preview);
  if (!client) return null;

  try {
    const entry = await client.getEntry(entryId);
    return entry as unknown as Entry<Blog, 'WITHOUT_UNRESOLVABLE_LINKS', string>;
  } catch (error) {
    console.error(`Error fetching blog with id ${entryId}:`, error);
    return null;
  }
}

// ===== SERVICES =====

export async function getAllServices(preview = false): Promise<Entry<Service, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const response = await client.getEntries({
      content_type: 'service',
      order: ['fields.order', 'fields.title'] as any,
    });
    return response.items as unknown as Entry<Service, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getServiceBySlug(slug: string, preview = false): Promise<Entry<Service, 'WITHOUT_UNRESOLVABLE_LINKS', string> | null> {
  const client = getClient(preview);
  if (!client) return null;

  try {
    const response = await client.getEntries({
      content_type: 'service',
      'fields.slug': slug,
      limit: 1,
    } as any);
    return (response.items[0] as unknown as Entry<Service, 'WITHOUT_UNRESOLVABLE_LINKS', string>) || null;
  } catch (error) {
    console.error(`Error fetching service with slug ${slug}:`, error);
    return null;
  }
}

// ===== PROJECTS / PORTFOLIO =====

export async function getAllProjects(limit = 100, preview = false): Promise<Entry<Project, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const response = await client.getEntries({
      content_type: 'project',
      limit,
      order: ['-fields.completionDate'] as any,
    });
    return response.items as unknown as Entry<Project, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProjectBySlug(slug: string, preview = false): Promise<Entry<Project, 'WITHOUT_UNRESOLVABLE_LINKS', string> | null> {
  const client = getClient(preview);
  if (!client) return null;

  try {
    const response = await client.getEntries({
      content_type: 'project',
      'fields.slug': slug,
      limit: 1,
    } as any);
    return (response.items[0] as unknown as Entry<Project, 'WITHOUT_UNRESOLVABLE_LINKS', string>) || null;
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    return null;
  }
}

export async function getProjectsByCategory(category: string, limit = 10, preview = false): Promise<Entry<Project, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const response = await client.getEntries({
      content_type: 'project',
      'fields.category': category,
      limit,
      order: ['-fields.completionDate'] as any,
    } as any);
    return response.items as unknown as Entry<Project, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error(`Error fetching projects for category ${category}:`, error);
    return [];
  }
}

// ===== SOLUTION PACKAGES =====

export async function getAllSolutionPackages(preview = false): Promise<Entry<SolutionPackage, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const response = await client.getEntries({
      content_type: 'solutionPackage',
      order: ['fields.order', 'fields.name'] as any,
    });
    return response.items as unknown as Entry<SolutionPackage, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error('Error fetching solution packages:', error);
    return [];
  }
}

export async function getSolutionPackagesByCategory(category: string, preview = false): Promise<Entry<SolutionPackage, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const response = await client.getEntries({
      content_type: 'solutionPackage',
      'fields.category': category,
      order: ['fields.order'] as any,
    } as any);
    return response.items as unknown as Entry<SolutionPackage, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error(`Error fetching solution packages for category ${category}:`, error);
    return [];
  }
}

// ===== TEAM MEMBERS =====

export async function getAllTeamMembers(preview = false): Promise<Entry<TeamMember, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const response = await client.getEntries({
      content_type: 'teamMember',
      order: ['fields.order', 'fields.name'] as any,
    });
    return response.items as unknown as Entry<TeamMember, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

// ===== JOB OPENINGS =====

export async function getAllJobOpenings(preview = false): Promise<Entry<JobOpening, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const response = await client.getEntries({
      content_type: 'jobOpening',
      'fields.active': true,
      order: ['-sys.createdAt'] as any,
    } as any);
    return response.items as unknown as Entry<JobOpening, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error('Error fetching job openings:', error);
    return [];
  }
}

export async function getJobOpeningBySlug(slug: string, preview = false): Promise<Entry<JobOpening, 'WITHOUT_UNRESOLVABLE_LINKS', string> | null> {
  const client = getClient(preview);
  if (!client) return null;

  try {
    const response = await client.getEntries({
      content_type: 'jobOpening',
      'fields.slug': slug,
      limit: 1,
    } as any);
    return (response.items[0] as unknown as Entry<JobOpening, 'WITHOUT_UNRESOLVABLE_LINKS', string>) || null;
  } catch (error) {
    console.error(`Error fetching job opening with slug ${slug}:`, error);
    return null;
  }
}

// ===== TESTIMONIALS =====

export async function getAllTestimonials(limit = 100, preview = false): Promise<Entry<Testimonial, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const response = await client.getEntries({
      content_type: 'testimonial',
      limit,
      order: ['fields.order', '-sys.createdAt'] as any,
    });
    return response.items as unknown as Entry<Testimonial, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

// ===== FAQ =====

export async function getAllFAQs(category?: string, preview = false): Promise<Entry<FAQ, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const query: any = {
      content_type: 'faq',
      order: ['fields.order', 'fields.question'] as any,
    };

    if (category) {
      query['fields.category'] = category;
    }

    const response = await client.getEntries(query);
    return response.items as unknown as Entry<FAQ, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

// ===== SUCCESS STORIES =====

export async function getAllSuccessStories(preview = false): Promise<Entry<SuccessStory, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const response = await client.getEntries({
      content_type: 'successStory',
      order: ['fields.order', '-sys.createdAt'] as any,
    });
    return response.items as unknown as Entry<SuccessStory, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  } catch (error) {
    console.error('Error fetching success stories:', error);
    return [];
  }
}

// ===== PAGE CONTENT =====

export async function getPageContentBySlug(slug: string, preview = false): Promise<Entry<PageContent, 'WITHOUT_UNRESOLVABLE_LINKS', string> | null> {
  const client = getClient(preview);
  if (!client) return null;

  try {
    const response = await client.getEntries({
      content_type: 'pageContent',
      'fields.slug': slug,
      limit: 1,
    } as any);
    return (response.items[0] as unknown as Entry<PageContent, 'WITHOUT_UNRESOLVABLE_LINKS', string>) || null;
  } catch (error) {
    console.error(`Error fetching page content with slug ${slug}:`, error);
    return null;
  }
}

// ===== HELPER: Extract image URL from Contentful Asset =====

export function getImageUrl(asset: any): string {
  if (!asset?.fields?.file?.url) return '';
  const url = asset.fields.file.url;
  return url.startsWith('//') ? `https:${url}` : url;
}

// ===== HELPER: Format date =====

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
