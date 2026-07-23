"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { CATEGORIES } from "@/data/posts";
import { InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF6F0] border-t border-[#E2D5C7] text-[#231C19] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#E2D5C7]/70">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl tracking-[0.18em] font-light uppercase text-[#231C19]">
                Camila Coelho
              </span>
              <span className="block text-[9px] uppercase tracking-[0.35em] text-[#AE5238] font-medium mt-0.5">
                Fashion · Beauty · Lifestyle
              </span>
            </Link>
            <p className="text-xs text-[#6B5E57] leading-relaxed max-w-sm font-light">
              An online luxury destination for daily fashion inspiration, skincare routines, travel guides, and lifestyle updates by Camila Coelho.
            </p>
          </div>

          {/* Column 2: Navigation Categories */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#AE5238] mb-4">
              Explore Categories
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs uppercase tracking-widest font-medium">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="hover:text-[#AE5238] transition-colors py-1 inline-block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#AE5238] mb-4">
                Connect
              </h4>
              <div className="flex space-x-3 text-[#231C19]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 bg-[#E3D8C6]/50 rounded-full hover:bg-[#AE5238] hover:text-white transition-colors"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2 bg-[#E3D8C6]/50 rounded-full hover:bg-[#AE5238] hover:text-white transition-colors"
                >
                  <YoutubeIcon size={16} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 bg-[#E3D8C6]/50 rounded-full hover:bg-[#AE5238] hover:text-white transition-colors"
                >
                  <FacebookIcon size={16} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="p-2 bg-[#E3D8C6]/50 rounded-full hover:bg-[#AE5238] hover:text-white transition-colors"
                >
                  <TwitterIcon size={16} />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#231C19] hover:text-[#AE5238] transition-colors group"
            >
              <span>Back to top</span>
              <div className="w-7 h-7 rounded-full bg-[#E3D8C6]/50 group-hover:bg-[#AE5238] group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6B5E57]">
          <p>© 2026 Camila Coelho. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-light">
            Designed with <span className="text-[#AE5238]">♥</span> & editorial elegance.
          </p>
        </div>
      </div>
    </footer>
  );
}
