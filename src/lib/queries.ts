import groq from "groq";

export const getAllPostsQuery = groq`
  *[_type == "post"] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    "categories": categories[]->{ _id, title },
    "author": author->{ _id, name, image }
  }
`;

export const getPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    body,
    "categories": categories[]->{ _id, title, description },
    "author": author->{ _id, name, image, bio }
  }
`;

export const getRecentPostsQuery = groq`
  *[_type == "post"] | order(_createdAt desc)[0...3] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    "categories": categories[]->{ _id, title },
    "author": author->{ _id, name, image }
  }
`;

export const getCategoriesQuery = groq`
  *[_type == "category"] {
    _id,
    title,
    description
  }
`;
