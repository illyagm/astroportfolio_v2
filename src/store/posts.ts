import { create } from 'zustand';
import { GraphQLClient, gql } from 'graphql-request';

const graphcms = new GraphQLClient(
  import.meta.env.VITE_HYGRAPH_PROJECT_API_URL,
  {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_PUBLIC_PROD_TOKEN_POSTS}`,
    },
  },
);

const QUERY = gql`
  {
    posts(orderBy: createdAt_DESC, first: 15) {
      id
      title
      description {
        html
      }
      author
      slug
      imgUrl
    }
  }
`;

type Post = {
  id: string;
  title: string;
  description: { html: string };
  author: string;
  slug: string;
  imgUrl: string;
};

type PostsState = {
  posts: Post[];
  fetchPosts: () => Promise<void>;
};

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],

  fetchPosts: async () => {
    try {
      const { posts } = await graphcms.request<{ posts: Post[] }>(QUERY);
      set({ posts });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  },
}));
