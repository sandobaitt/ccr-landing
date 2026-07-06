import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  children,
  align = 'center',
  theme = 'light',
  className = '',
}: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const titleColor = theme === 'dark' ? 'text-white' : 'text-zinc-900';
  const subtitleColor = theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600';

  return (
    <div className={`flex flex-col space-y-4 mb-10 ${alignmentClasses[align]} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
