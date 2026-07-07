import { ReactNode } from 'react';
import ScrollFloat from './ScrollFloat/ScrollFloat';

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

  const titleColor = 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 bg-[length:200%_200%] animate-gradient';
  const subtitleColor = 'text-zinc-600 font-medium';

  return (
    <div className={`flex flex-col space-y-4 mb-6 md:mb-10 ${alignmentClasses[align]} ${className}`}>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName={`text-2xl sm:text-3xl md:text-5xl font-black tracking-tight ${titleColor} drop-shadow-sm text-balance`}
      >
        {title}
      </ScrollFloat>
      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl ${subtitleColor} text-balance`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
