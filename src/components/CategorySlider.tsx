"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Article } from "@/data/posts";

interface CategorySliderProps {
  categoryTitle: string;
  articles: Article[];
}

export default function CategorySlider({
  categoryTitle,
  articles,
}: CategorySliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#F4ECE1]/80 border-b border-[#E2D5C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2D5C7]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#225D65]">
              Category Spotlight
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#231C19]">
              {categoryTitle}
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll("left")}
              className="p-2.5 rounded-full border border-[#231C19]/20 hover:border-[#AE5238] hover:bg-[#AE5238] hover:text-white text-[#231C19] transition-all"
              aria-label="Previous posts"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-2.5 rounded-full border border-[#231C19]/20 hover:border-[#AE5238] hover:bg-[#AE5238] hover:text-white text-[#231C19] transition-all"
              aria-label="Next posts"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {articles.map((art) => (
            <div
              key={art.id}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start group"
            >
              <Link href={`/article/${art.slug}`} className="block mb-3">
                <div className="relative rounded-sm overflow-hidden bg-[#E3D8C6] aspect-[4/3] border border-[#E2D5C7]">
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FAF6F0]/90 backdrop-blur-xs text-[#225D65] text-[10px] uppercase tracking-wider px-2 py-0.5 font-semibold rounded-xs">
                    {art.subcategory || art.category}
                  </div>
                </div>
              </Link>

              <h3 className="font-serif text-base font-normal text-[#231C19] group-hover:text-[#AE5238] transition-colors line-clamp-2 leading-snug mb-1">
                <Link href={`/article/${art.slug}`}>{art.title}</Link>
              </h3>

              <div className="flex items-center text-[11px] text-[#6B5E57]">
                <Clock size={11} className="mr-1 text-[#AE5238]" />
                <span>{art.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
