export interface Book {
  id: string;
  type: string;
  attributes: {
    slug: string;
    author: string;
    cover: string;
    dedication: string;
    pages: number;
    release_date: string;
    summary: string;
    title: string;
    wiki: string;
  };
  relationships: {
    chapters: {
      data: { id: string; type: string }[];
    };
  };
  links: {
    self: string;
  };
}
