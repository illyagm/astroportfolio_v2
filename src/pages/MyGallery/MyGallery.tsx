import Card from '@components/ui/Card';
import { usePostsStore } from '@store/posts';
import React, { useEffect, useState } from 'react';
import styles from 'App.module.scss';
import galleryStyles from './MyGallery.module.scss';
import cardStyles from '../../components/ui/Card/Card.module.scss';
import classNames from 'classnames';
import Button from '@components/ui/Button';

const MyGallery: React.FC = () => {
  const { posts, fetchPosts } = usePostsStore();

  useEffect(() => {
    if (posts.length === 0) fetchPosts();
  }, [fetchPosts, posts.length]); // Dependency array should track lastScrollY changes

  return (
    <>
      {/* <div className={styles.grid4}>
        <Button variant={'secondary'} onClick={fetchPosts}>
          EQ3/DSL equipment
        </Button>
        <Button variant={'secondary'} onClick={fetchPosts}>
          EQ6R/Dedicated Camera
        </Button>
        <Button variant={'secondary'} onClick={fetchPosts}>
          Refresh Posts
        </Button>
      </div> */}
      {posts.length === 0 ? <p>Loading posts...</p> : <></>}
      <div className={classNames(galleryStyles.galleryContainer)}>
        {posts.map((post) => (
          <div className={cardStyles.galleryCard}>
            <Card backgroundImage={post.imgUrl} footer={post.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MyGallery;
