// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
 ...props 
}) => {
  // Logic to determine Tailwind classes based on variant and size
  const baseClasses = 'font-semibold rounded-lg transition-colors';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    destructive: 'bg-red-500 text-white hover:bg-red-700',
  };
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ');

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;