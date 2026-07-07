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
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none rounded-full active:scale-95';
  
  const variants = {
    primary: 'bg-gradient-to-r from-red-500 to-rose-500 text-white hover:from-red-600 hover:to-rose-600 shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 hover:-translate-y-1 focus-visible:ring-red-600',
    secondary: 'bg-gradient-to-r from-violet-100 to-fuchsia-100 text-fuchsia-900 hover:from-violet-200 hover:to-fuchsia-200 shadow-md hover:shadow-lg hover:-translate-y-1 focus-visible:ring-fuchsia-500 border border-fuchsia-200',
    outline: 'border-2 border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 focus-visible:ring-zinc-500 hover:border-zinc-300 hover:-translate-y-1',
    ghost: 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-zinc-500 hover:scale-105',
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
