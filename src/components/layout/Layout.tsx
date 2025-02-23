import React from 'react';
import styles from './Layout.module.scss';
import Header from './Header';
import Footer from './Footer';
import classNames from 'classnames';
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classNames(styles.layout)}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
