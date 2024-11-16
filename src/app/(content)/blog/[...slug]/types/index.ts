export interface Params {
  params: {
    slug?: string[];
    id?: string;
  };
}

export interface Frontmatter {
  title: string
  subtitle: string
  backgroundImage?: string
  description?: string
  publishedDate?: string
  tags?: string[]
}