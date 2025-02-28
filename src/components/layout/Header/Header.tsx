import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import ThemeToggle from '@components/ui/Theme toggle/ThemeToggle';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>U.Astrophotography</h1>

      {/* Hamburger Icon */}
      <button
        className={styles.hamburger}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Navigation */}
      <nav
        className={`${styles.navWrapper} ${isMobileMenuOpen ? styles.open : ''}`}
      >
        <nav className={styles.nav}>
          <Link
            to="/"
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            My Gallery
          </Link>
          <Link
            to="/mygear"
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            My Gear
          </Link>
          <Link
            to="/about"
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Me
          </Link>
          <ThemeToggle />
        </nav>
      </nav>
    </header>
  );
};

export default Header;
