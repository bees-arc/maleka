"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, X, ArrowRight } from "lucide-react";
import { Article } from "@/data/posts";

interface VideoGridProps {
  videos: Article[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const [selectedVideo, setSelectedVideo] = useState<Article | null>(null);

  return (
    <section className="py-12 md:py-16 border-b border-[#E2D5C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E2D5C7]/70">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#5C633E]">
              Watch Camila
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#231C19]">
              Latest Videos
            </h2>
          </div>

          <Link
            href="/category/video"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-[#231C19] hover:text-[#AE5238] transition-colors mt-3 sm:mt-0 group"
          >
            <span>View All Videos</span>
            <ArrowRight
              size={14}
              className="ml-1 text-[#AE5238] group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div key={vid.id} className="group flex flex-col justify-between">
              <div>
                {/* Thumbnail with Play Overlay */}
                <div
                  onClick={() => setSelectedVideo(vid)}
                  className="relative rounded-sm overflow-hidden bg-[#E3D8C6] aspect-[16/9] border border-[#E2D5C7] cursor-pointer"
                >
                  <img
                    src={vid.imageUrl}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#AE5238] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={22} className="ml-1 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-[#5C633E] text-white text-[10px] uppercase tracking-widest px-2 py-0.5 font-semibold rounded-xs">
                    {vid.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-normal text-[#231C19] group-hover:text-[#AE5238] transition-colors leading-snug mt-3 mb-1">
                  <button onClick={() => setSelectedVideo(vid)} className="text-left">
                    {vid.title}
                  </button>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#231C19] rounded-sm overflow-hidden shadow-2xl border border-[#E2D5C7]/30">
            <div className="flex items-center justify-between p-4 bg-[#1A1412] text-white border-b border-white/10">
              <h3 className="font-serif text-base font-light text-[#E3D8C6] truncate pr-4">
                {selectedVideo.title}
              </h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 text-white/70 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
            </div>

            <div className="relative aspect-[16/9] w-full bg-black">
              {selectedVideo.videoUrl ? (
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white/70">
                  <Play size={48} className="text-[#AE5238] mb-2" />
                  <p className="font-serif text-lg">Playing Video Stream</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
