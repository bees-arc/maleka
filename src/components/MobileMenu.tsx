"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/posts";
import { InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon } from "./SocialIcons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-sm bg-[#FAF6F0] h-full flex flex-col justify-between p-6 z-10 shadow-2xl animate-in slide-in-from-left duration-300 border-r border-[#E2D5C7]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E2D5C7]">
            <span className="font-serif text-xl tracking-[0.15em] text-[#231C19]">
              CAMILA COELHO
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-[#231C19] hover:text-[#AE5238] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-8 space-y-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={onClose}
                className="flex items-center justify-between py-2 text-sm uppercase tracking-[0.2em] font-medium text-[#231C19] hover:text-[#AE5238] transition-colors border-b border-[#E2D5C7]/40 group"
              >
                <span>{cat.name}</span>
                <ArrowRight
                  size={16}
                  className="text-[#AE5238] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer / Socials */}
        <div className="pt-6 border-t border-[#E2D5C7]">
          <p className="text-[10px] uppercase tracking-widest text-[#AE5238] font-semibold mb-4">
            Follow Camila
          </p>
          <div className="flex space-x-4 text-[#231C19]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#E3D8C6]/50 rounded-full hover:bg-[#AE5238] hover:text-white transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#E3D8C6]/50 rounded-full hover:bg-[#AE5238] hover:text-white transition-colors"
            >
              <YoutubeIcon size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#E3D8C6]/50 rounded-full hover:bg-[#AE5238] hover:text-white transition-colors"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#E3D8C6]/50 rounded-full hover:bg-[#AE5238] hover:text-white transition-colors"
            >
              <TwitterIcon size={18} />
            </a>
          </div>
          <p className="text-[11px] text-[#6B5E57] mt-6">
            © 2026 Camila Coelho. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
