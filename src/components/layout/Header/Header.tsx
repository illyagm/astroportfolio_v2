import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import ThemeToggle from '@components/ui/Theme toggle/ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>U.Astrophotography</h1>
      <nav className={styles.navWrapper}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/gallery" className={styles.navLink}>
            My Gallery
          </Link>
          <Link to="/mygear" className={styles.navLink}>
            My Gear
          </Link>
          <Link to="/about" className={styles.navLink}>
            About Me
          </Link>
        </nav>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
