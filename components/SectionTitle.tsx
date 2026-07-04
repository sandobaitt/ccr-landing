import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  children,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col space-y-4 mb-10 ${alignmentClasses[align]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-zinc-600 max-w-2xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
