// components/Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, color = 'blue', size = 'medium' }) => {
  const styles = `px-4 py-2 bg-${color}-500 text-white rounded ${size === 'large' ? 'text-lg' : size === 'small' ? 'text-sm' : 'text-base'}`;
  return (
    <button className={styles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
