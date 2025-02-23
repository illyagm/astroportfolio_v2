import React from 'react';
import styles from './Card.module.scss';
import cn from 'classnames';

type CardProps = {
  title?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  backgroundImage?: string;
  nostyle?: boolean;
};

const Card: React.FC<CardProps> = ({
  title,
  content,
  footer,
  backgroundImage,
  nostyle,
}) => {
  return (
    <div
      className={cn(nostyle ? styles['no-style'] : styles.card)}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: backgroundImage ? 'cover' : 'none',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.header}>{title}</div>
      <div className={styles.body}>{content}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;
