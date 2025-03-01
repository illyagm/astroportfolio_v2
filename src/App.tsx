import React, { useEffect } from 'react';
import { useCounterStore } from '@store/counter';
import AppRouter from 'routes/Router';
import { Analytics } from '@vercel/analytics/react';
import { usePostsStore } from '@store/posts';

const App: React.FC = () => {
  const { count, increment } = useCounterStore();
  const { posts, fetchPosts } = usePostsStore();

  useEffect(() => {
    if (posts.length === 0) fetchPosts();
  }, [fetchPosts, posts.length]); // Dependency array should track lastScrollY changes

  return (
    <>
      <Analytics />
      <AppRouter />
    </>
  );
};

export default App;
