"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Article } from "@/data/posts";

interface ArticleGridProps {
  title?: string;
  subtitle?: string;
  articles: Article[];
  columns?: 2 | 3;
  viewAllLink?: string;
  hasBackground?: boolean;
}

export default function ArticleGrid({
  title = "Latest Articles",
  subtitle,
  articles,
  columns = 3,
  viewAllLink = "/category/fashion",
  hasBackground = false,
}: ArticleGridProps) {
  // Category color helper from the user palette
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "fashion":
        return "#AE5238"; // Terracotta Rust
      case "beauty":
        return "#225D65"; // Deep Teal
      case "travel":
        return "#D39932"; // Mustard Yellow
      case "wellness":
        return "#5C633E"; // Olive Green
      default:
        return "#AE5238";
    }
  };

  return (
    <section
      className={`py-12 md:py-16 border-b border-[#E2D5C7] ${
        hasBackground ? "bg-[#F4ECE1]/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#E2D5C7]/70">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#231C19]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs uppercase tracking-[0.2em] text-[#AE5238] font-medium mt-1">
                {subtitle}
              </p>
            )}
          </div>

          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-[#231C19] hover:text-[#AE5238] transition-colors mt-3 sm:mt-0 group"
            >
              <span>View All</span>
              <ArrowRight
                size={14}
                className="ml-1 text-[#AE5238] group-hover:translate-x-1 transition-transform"
              />
            </Link>
          )}
        </div>

        {/* Grid Layout */}
        <div
          className={`grid grid-cols-1 ${
            columns === 2 ? "md:grid-cols-2 gap-8 lg:gap-12" : "sm:grid-cols-2 lg:grid-cols-3 gap-8"
          }`}
        >
          {articles.map((art) => {
            const catColor = getCategoryColor(art.category);

            return (
              <article key={art.id} className="group flex flex-col justify-between">
                <div>
                  {/* Image */}
                  <Link href={`/article/${art.slug}`} className="block mb-4">
                    <div className="relative rounded-sm overflow-hidden bg-[#E3D8C6] aspect-[4/3] sm:aspect-square border border-[#E2D5C7]">
                      <img
                        src={art.imageUrl}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </Link>

                  {/* Metadata */}
                  <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold mb-2">
                    <span style={{ color: catColor }}>{art.category}</span>
                    {art.subcategory && (
                      <>
                        <span className="text-[#9A8C82]">•</span>
                        <span className="text-[#6B5E57]">{art.subcategory}</span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#231C19] group-hover:text-[#AE5238] transition-colors leading-snug mb-2">
                    <Link href={`/article/${art.slug}`}>{art.title}</Link>
                  </h3>

                  {columns === 2 && (
                    <p className="text-xs sm:text-sm text-[#6B5E57] line-clamp-2 leading-relaxed mb-4">
                      {art.excerpt}
                    </p>
                  )}
                </div>

                {/* Footer timestamp */}
                <div className="pt-3 flex items-center text-[11px] text-[#6B5E57] font-medium border-t border-[#E2D5C7]/40 mt-3">
                  <Clock size={12} className="mr-1 text-[#AE5238]" />
                  <span>{art.date}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
