import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none rounded-md';
  
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
    secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700 focus-visible:ring-zinc-500',
    outline: 'border border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-zinc-50 focus-visible:ring-zinc-500',
    ghost: 'text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50 focus-visible:ring-zinc-500',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 py-2 px-4 text-base',
    lg: 'h-11 px-8 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
