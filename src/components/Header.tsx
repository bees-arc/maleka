"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, ChevronDown } from "lucide-react";
import { CATEGORIES, MALEKA_BIO } from "@/data/posts";
import SearchModal from "./SearchModal";
import MobileMenu from "./MobileMenu";
import { InstagramIcon } from "./SocialIcons";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFollowOpen, setIsFollowOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF6F0]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E2D5C7]"
            : "bg-[#FAF6F0] py-6 border-b border-[#E2D5C7]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Nav / Hamburger */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-1.5 text-[#231C19] hover:text-[#AE5238] transition-colors"
                aria-label="Open Menu"
              >
                <Menu size={24} />
              </button>

              <nav className="hidden lg:flex items-center space-x-8">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="text-xs uppercase tracking-[0.2em] font-medium text-[#231C19] hover:text-[#AE5238] transition-colors py-1 relative group"
                  >
                    {cat.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#AE5238] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Center Logo */}
            <div className="text-center">
              <Link href="/" className="inline-block group">
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.18em] font-light uppercase text-[#231C19] group-hover:text-[#AE5238] transition-colors">
                  Maleka Maroni
                </span>
                <span className="block text-[9px] uppercase tracking-[0.35em] text-[#AE5238] font-semibold text-center mt-0.5">
                  Mrs Universe Central America 2026
                </span>
              </Link>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Follow Dropdown */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setIsFollowOpen(!isFollowOpen)}
                  onBlur={() => setTimeout(() => setIsFollowOpen(false), 200)}
                  className="flex items-center space-x-1.5 text-xs uppercase tracking-[0.15em] font-medium text-[#231C19] hover:text-[#AE5238] transition-colors py-1"
                >
                  <span>Follow</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      isFollowOpen ? "rotate-180 text-[#AE5238]" : ""
                    }`}
                  />
                </button>

                {isFollowOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#FAF6F0] border border-[#E2D5C7] shadow-lg rounded-sm py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <a
                      href={MALEKA_BIO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-4 py-2 text-xs text-[#231C19] hover:bg-[#E3D8C6]/50 hover:text-[#AE5238] transition-colors font-medium"
                    >
                      <InstagramIcon size={15} />
                      <span>Instagram</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-1.5 text-[#231C19] hover:text-[#AE5238] transition-colors flex items-center space-x-2 group"
                aria-label="Search"
              >
                <Search size={19} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline text-xs uppercase tracking-widest font-medium">
                  Search
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modals & Menus */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
