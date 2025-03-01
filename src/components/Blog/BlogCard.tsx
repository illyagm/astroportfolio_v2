import React from 'react';
import styles from './Blog.module.scss';

import classNames from 'classnames';
import { truncateText } from 'utils/utils';
import Button from '@components/ui/Button';
import { format, parseISO } from 'date-fns';
type BlogCardProps = {
  image: string;
  title: string;
  description: any;
  date?: Date;
};

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  date,
}) => {
  const sanitizedTimestamp = date?.toString().split('.')[0] + 'Z';
  const parsedDate = parseISO(sanitizedTimestamp);
  return (
    <div className={classNames(styles.blogCard)}>
      <img src={image} width={'250px'} height={'250px'} />
      <div className={styles.blogCardContent}>
        <h1 className={styles.blogTitle}>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: [truncateText(description?.html || '', 200)],
          }}
        />
        <div className={styles.blogDatePublished}>
          Published: {format(parsedDate, 'dd/MM/yyyy HH:mm')}
        </div>
        <p />
        <Button variant="inline">Read full post</Button>
      </div>
    </div>
  );
};

export default BlogCard;
