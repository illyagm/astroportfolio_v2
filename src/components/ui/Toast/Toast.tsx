import React, { useEffect, useState } from 'react';
import styles from './Toast.module.scss';

type ToastProps = {
  message: string;
  duration?: number; // Auto-dismiss in ms (default: 3000ms)
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // Wait for fade-out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className={styles.toast}>
      {message}
      <button className={styles.close} onClick={onClose}>
        ✖
      </button>
    </div>
  );
};

export default Toast;
