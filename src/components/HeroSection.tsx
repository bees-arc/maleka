"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Article } from "@/data/posts";

interface HeroSectionProps {
  article: Article;
}

export default function HeroSection({ article }: HeroSectionProps) {
  return (
    <section className="py-8 md:py-12 border-b border-[#E2D5C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#AE5238] mb-3">
              <span>{article.category}</span>
              {article.subcategory && (
                <>
                  <span>·</span>
                  <span className="text-[#6B5E57]">{article.subcategory}</span>
                </>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#231C19] leading-[1.15] mb-4 hover:text-[#AE5238] transition-colors">
              <Link href={`/article/${article.slug}`}>
                {article.title}
              </Link>
            </h1>

            <p className="text-[#6B5E57] text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-[#E2D5C7]/60">
              <div className="flex items-center space-x-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-9 h-9 rounded-full object-cover border border-[#E2D5C7]"
                />
                <div>
                  <span className="block text-xs font-semibold text-[#231C19]">
                    {article.author.name}
                  </span>
                  <span className="flex items-center text-[11px] text-[#6B5E57] mt-0.5">
                    <Clock size={12} className="mr-1 text-[#AE5238]" />
                    {article.date} · {article.readTime}
                  </span>
                </div>
              </div>

              <Link
                href={`/article/${article.slug}`}
                className="w-12 h-12 rounded-full bg-[#AE5238] text-white flex items-center justify-center hover:bg-[#231C19] transition-all hover:scale-105 shadow-sm group"
                aria-label="Read full story"
              >
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image Container */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Link href={`/article/${article.slug}`} className="block group">
              <div className="relative rounded-sm overflow-hidden bg-[#E3D8C6] shadow-md border border-[#E2D5C7] aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#225D65] text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold rounded-sm shadow-sm">
                  Featured Story
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
