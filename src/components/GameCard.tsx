'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GameCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export default function GameCard({ title, description, imageSrc, link }: GameCardProps) {
  return (
    <div className="relative group">
      {/* Card */}
      <div className="bg-secondary rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-[1.02] border border-gray-800">
        {/* Card Top */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />

          {/* R789 branding badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-[#0EA5E9]/80 text-white text-xs font-bold px-2 py-1 rounded-full">
              R789
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-accent mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          <Link href={link}>
            <div className="inline-block bg-primary hover:bg-secondary border border-accent text-accent font-medium py-2 px-4 rounded-lg transition-colors">
              Learn More
            </div>
          </Link>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-[#0EA5E9] opacity-0 group-hover:opacity-30 rounded-xl blur-sm transition-opacity duration-300" />
    </div>
  );
}
