// Types for the blog data from Sanity
export type Author = {
  _id: string;
  name: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  bio: any[];
};

export type Category = {
  _id: string;
  title: string;
  description: string;
};

export type Post = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  mainImage: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  body: any[];
  categories: Category[];
  author: Author;
};
