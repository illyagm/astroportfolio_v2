import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'dark' | 'danger' | 'inline';
  size?: 'halfsize' | 'fullsize';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'halfsize',
  disabled,
}) => {
  return (
    <button
      className={cn(styles[variant], styles[size])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
