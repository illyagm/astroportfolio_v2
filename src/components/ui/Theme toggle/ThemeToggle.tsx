import React, { useEffect } from 'react';
import { useThemeStore } from '../../../store/useThemeStore';
import styles from './ThemeToggle.module.scss';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light',
    );
  }, [isDarkMode]);

  return (
    <button className={styles.toggleButton} onClick={toggleTheme}>
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
