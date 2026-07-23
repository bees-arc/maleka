"use client";

import React from "react";
import { Stethoscope, GraduationCap, Sparkles } from "lucide-react";
import { MALEKA_BIO } from "@/data/posts";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-[#E2D5C7] bg-[#F4ECE1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#AE5238]">
            Section 02 — Story & Vision
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#231C19] mt-2 mb-4">
            A Life Built on Resilience
          </h2>
          <div className="w-16 h-[2px] bg-[#AE5238] mx-auto" />
        </div>

        {/* 2 Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden bg-[#E3D8C6] border border-[#E2D5C7] shadow-lg aspect-[4/5]">
              <img
                src={MALEKA_BIO.nurseImage}
                alt="Maleka Maroni Nurse Practitioner & Pageant Titleholder"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Callout Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#225D65] text-white p-6 rounded-sm shadow-xl max-w-xs hidden sm:block border border-[#E2D5C7]/30">
              <Sparkles size={24} className="text-[#D39932] mb-2" />
              <p className="font-serif text-sm italic">
                &quot;Bringing mental wellness and aesthetic medicine together.&quot;
              </p>
            </div>
          </div>

          {/* Column 2: Editorial Text */}
          <div className="lg:col-span-7 space-y-6 text-[#231C19]">
            <p className="text-base sm:text-lg text-[#382E2B] leading-relaxed font-light">
              I&apos;m a registered nurse with 15 years of experience, having built my career in the ICU and Emergency Medicine before discovering my true calling in aesthetics as a nurse injector. That path led me back to school — I recently completed my Master of Science in Nursing (MSN), and I&apos;m now preparing for my board certification as a Psychiatric Mental Health Nurse Practitioner (PMHNP).
            </p>

            <div className="p-6 bg-[#FAF6F0] rounded-sm border-l-4 border-[#AE5238] border-y border-r border-[#E2D5C7]">
              <p className="font-serif text-lg text-[#AE5238] italic font-normal">
                &quot;My goal is simple: bring mental wellness and aesthetic medicine together, so the people I care for feel confident, healthy, and empowered from the inside out.&quot;
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#6B5E57] leading-relaxed font-light">
              But my story didn&apos;t start in a clinic. Nearly ten years ago, I lost my husband and best friend — a loss that reshaped everything I thought I knew about strength. I&apos;m also a cancer survivor. Both experiences could have broken me. Instead, they deepened my compassion and sharpened my belief that even in life&apos;s hardest chapters, hope, purpose, and joy can still prevail.
            </p>

            <p className="text-sm sm:text-base text-[#231C19] font-medium leading-relaxed">
              Today, I carry that belief into every room I walk into — as a nurse, as a mother, and now, as Mrs Universe Central America 2026.
            </p>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 p-3 bg-[#FAF6F0] rounded-sm border border-[#E2D5C7]">
                <Stethoscope size={20} className="text-[#AE5238]" />
                <div>
                  <span className="text-xs font-semibold block">15 Yrs Nursing</span>
                  <span className="text-[10px] text-[#6B5E57]">ICU & ER Veteran</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-[#FAF6F0] rounded-sm border border-[#E2D5C7]">
                <GraduationCap size={20} className="text-[#225D65]" />
                <div>
                  <span className="text-xs font-semibold block">MSN & PMHNP</span>
                  <span className="text-[10px] text-[#6B5E57]">Mental Health Practitioner</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
