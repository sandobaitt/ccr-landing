import { ReactNode } from 'react';
import ScrollFloat from './ScrollFloat/ScrollFloat';

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
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName={`text-3xl md:text-4xl font-bold font-serif tracking-tight ${titleColor}`}
      >
        {title}
      </ScrollFloat>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
