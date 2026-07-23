"use client";

import React from "react";
import { ArrowRight, Award } from "lucide-react";
import { MALEKA_BIO } from "@/data/posts";
import { InstagramIcon } from "./SocialIcons";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-16 border-b border-[#E2D5C7] bg-[#FAF6F0] relative overflow-hidden">
      {/* Soft Tonal Palette Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E3D8C6]/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#AE5238]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            


            {/* Name */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#231C19] leading-[1.1] mb-4">
              Maleka Maroni
            </h1>

            {/* Main Tagline */}
            <p className="font-serif text-xl sm:text-2xl text-[#AE5238] font-normal italic mb-4 leading-snug">
              &quot;{MALEKA_BIO.tagline}&quot;
            </p>

            <p className="text-[#6B5E57] text-sm sm:text-base leading-relaxed mb-6 font-light">
              Registered Nurse (15+ Years ICU & ER), Aesthetic Nurse Injector, Master of Science in Nursing (MSN), and Psychiatric Mental Health Nurse Practitioner Candidate. Bringing mental wellness and aesthetic medicine together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href={MALEKA_BIO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#AE5238] hover:bg-[#231C19] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-sm shadow-md transition-all flex items-center space-x-2.5 group"
              >
                <InstagramIcon size={16} />
                <span>Follow The Journey</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 bg-[#E3D8C6]/70 hover:bg-[#225D65] hover:text-white text-[#231C19] text-xs uppercase tracking-[0.2em] font-semibold rounded-sm border border-[#E2D5C7] transition-all"
              >
                Booking & Contact
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E2D5C7]/70">
              {MALEKA_BIO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="font-serif text-2xl font-normal text-[#231C19] block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#6B5E57] font-semibold block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Image Frame Container */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-sm overflow-hidden bg-[#E3D8C6] shadow-xl border border-[#E2D5C7] aspect-[4/5] sm:aspect-[4/4.5] group">
              <img
                src={MALEKA_BIO.heroImage}
                alt="Maleka Maroni - Mrs Universe Central America 2026"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Editorial Floating Sash Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF6F0]/95 backdrop-blur-md p-4 rounded-sm border border-[#E2D5C7] shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#AE5238] block">
                    Official Titleholder
                  </span>
                  <h4 className="font-serif text-base font-medium text-[#231C19]">
                    Mrs Universe Central America 2026
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#D39932] text-white flex items-center justify-center shrink-0">
                  <Award size={20} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
