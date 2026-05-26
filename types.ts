export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name?: string;
    bio?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    role?: string;
  };
}

export interface Robot extends CosmicObject {
  type: 'robots';
  metadata: {
    name?: string;
    model_number?: string;
    description?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    specs?: string;
    status?: string;
  };
}

export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    title?: string;
    excerpt?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: Author;
    featured_robot?: Robot;
    category?: string;
    published_date?: string;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}