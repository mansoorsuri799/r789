import Image from 'next/image';

/** Bust CDN/browser cache after logo flatten fix */
export const R789_LOGO_SRC = '/r789.webp?v=20261002';

const imgDefaults = {
  quality: 100,
  unoptimized: true as const,
};

type R789LogoProps = {
  variant: 'hero' | 'download' | 'about' | 'blog' | 'header' | 'mobile';
  alt?: string;
  title?: string;
  priority?: boolean;
};

export default function R789Logo({
  variant,
  alt = 'R789 logo',
  title,
  priority = false,
}: R789LogoProps) {
  if (variant === 'hero') {
    return (
      <div className="w-64 md:w-80 shrink-0 overflow-hidden rounded-[4.5rem] md:rounded-[5.5rem] bg-primary leading-none">
        <Image
          src={R789_LOGO_SRC}
          alt={alt}
          title={title}
          width={512}
          height={512}
          className="w-full h-auto block"
          priority={priority}
          fetchPriority={priority ? 'high' : undefined}
          sizes="(max-width: 768px) 256px, 320px"
          {...imgDefaults}
        />
      </div>
    );
  }

  if (variant === 'download') {
    return (
      <div className="overflow-hidden rounded-[3.25rem] md:rounded-[4rem] bg-primary leading-none w-[260px] md:w-[320px] drop-shadow-2xl">
        <Image
          src={R789_LOGO_SRC}
          alt={alt}
          title={title}
          width={320}
          height={320}
          className="w-full h-auto block"
          priority={priority}
          sizes="(max-width: 768px) 260px, 320px"
          {...imgDefaults}
        />
      </div>
    );
  }

  if (variant === 'about') {
    return (
      <div className="overflow-hidden rounded-[3rem] md:rounded-[3.5rem] bg-primary leading-none w-[260px] md:w-[300px]">
        <Image
          src={R789_LOGO_SRC}
          alt={alt}
          title={title}
          width={300}
          height={300}
          className="w-full h-auto block"
          priority={priority}
          sizes="(max-width: 768px) 260px, 300px"
          {...imgDefaults}
        />
      </div>
    );
  }

  if (variant === 'blog') {
    return (
      <div className="overflow-hidden rounded-[2.75rem] md:rounded-[3.25rem] bg-primary leading-none w-[200px] md:w-[240px] shadow-xl">
        <Image
          src={R789_LOGO_SRC}
          alt={alt}
          title={title}
          width={240}
          height={240}
          className="w-full h-auto block"
          sizes="(max-width: 768px) 200px, 240px"
          {...imgDefaults}
        />
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-primary leading-none">
        <Image
          src={R789_LOGO_SRC}
          alt={alt}
          width={40}
          height={40}
          className="h-full w-full object-contain"
          priority={priority}
          fetchPriority={priority ? 'high' : undefined}
          {...imgDefaults}
        />
      </div>
    );
  }

  return (
    <div className="relative w-9 h-9 shrink-0 overflow-hidden rounded-lg bg-primary leading-none">
      <Image
        src={R789_LOGO_SRC}
        alt={alt}
        fill
        sizes="36px"
        className="object-contain"
        priority={priority}
        {...imgDefaults}
      />
    </div>
  );
}
