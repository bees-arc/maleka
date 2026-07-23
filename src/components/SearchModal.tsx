"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { ARTICLES, Article } from "@/data/posts";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const q = query.toLowerCase();
      const filtered = ARTICLES.filter(
        (art) =>
          art.title.toLowerCase().includes(q) ||
          art.category.toLowerCase().includes(q) ||
          art.excerpt.toLowerCase().includes(q) ||
          art.tags.some((t) => t.toLowerCase().includes(q))
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#FAF6F0]/98 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Top Close Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-4 flex justify-end">
        <button
          onClick={onClose}
          className="p-2 text-[#231C19] hover:text-[#AE5238] transition-colors rounded-full hover:bg-[#E3D8C6]/40"
          aria-label="Close search"
        >
          <X size={26} />
        </button>
      </div>

      {/* Main Search Input */}
      <div className="max-w-4xl mx-auto w-full px-4 pt-8 pb-6 flex-1 flex flex-col">
        <div className="relative border-b-2 border-[#231C19] pb-3 focus-within:border-[#AE5238] transition-colors">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fashion, beauty, travel..."
            className="w-full bg-transparent text-2xl sm:text-4xl font-serif font-light text-[#231C19] placeholder-[#9A8C82] focus:outline-none pr-12"
          />
          <Search
            size={28}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#9A8C82]"
          />
        </div>

        {/* Popular Tags */}
        {query.length === 0 && (
          <div className="mt-8">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#AE5238] mb-4">
              Trending Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Skin Care", "Camila Coelho Collection", "Makeup", "Terracotta", "Amalfi Coast", "Mindfulness"].map(
                (tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 bg-[#E3D8C6]/50 hover:bg-[#AE5238] hover:text-white text-xs uppercase tracking-wider text-[#231C19] rounded-full transition-colors"
                  >
                    {tag}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {/* Results Grid */}
        {query.length > 1 && (
          <div className="mt-8 flex-1 overflow-y-auto pr-2">
            <p className="text-xs uppercase tracking-widest text-[#6B5E57] mb-6">
              Found {results.length} article{results.length === 1 ? "" : "s"} for &quot;{query}&quot;
            </p>

            {results.length === 0 ? (
              <div className="text-center py-12 text-[#6B5E57]">
                <p className="font-serif text-xl">No stories found matching your query.</p>
                <p className="text-xs mt-2">Try searching for &quot;Beauty&quot;, &quot;Skincare&quot;, or &quot;Fashion&quot;.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                {results.map((art) => (
                  <Link
                    key={art.id}
                    href={`/article/${art.slug}`}
                    onClick={onClose}
                    className="group flex space-x-4 bg-white/60 p-3 rounded border border-[#E2D5C7] hover:border-[#AE5238] transition-all hover:shadow-md"
                  >
                    <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm bg-[#E3D8C6]">
                      <img
                        src={art.imageUrl}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-semibold text-[#AE5238]">
                          {art.category}
                        </span>
                        <h3 className="font-serif text-sm font-normal text-[#231C19] group-hover:text-[#AE5238] transition-colors line-clamp-2 mt-1">
                          {art.title}
                        </h3>
                      </div>
                      <div className="flex items-center text-[11px] text-[#6B5E57] font-medium mt-2">
                        <span>Read Story</span>
                        <ArrowRight size={12} className="ml-1 text-[#AE5238] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
