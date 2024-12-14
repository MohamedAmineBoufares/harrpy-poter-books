type Links = {
  self: string;
  current: string;
};

type Meta = {
  pagination: {
    current: number;
    records: number;
  };
  copyright: string;
  generated_at: string;
};

type RelationShip = { id: string; type: string };
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
      data: RelationShip[];
    };
  };
  links: {
    self: string;
  };
}

export interface Chapter {
  id: string;
  type: string;
  attributes: {
    slug: string;
    order: 1;
    summary: string | null;
    title: string;
  };
  relationships: {
    book: {
      data: RelationShip;
    };
  };
  links: {
    self: string;
  };
}

export type Response<T> = {
  data: T;
  links: Links;
  meta: Meta;
};
