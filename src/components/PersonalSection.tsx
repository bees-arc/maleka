"use client";

import React from "react";
import { Heart, Dog, Users, ShieldCheck } from "lucide-react";

export default function PersonalSection() {
  const personalHighlights = [
    {
      title: "Mother to Two",
      subtitle: "Daughter (17, Recent High School Grad) & Son (13, Incoming 8th Grader)",
      icon: Users,
      color: "#AE5238",
    },
    {
      title: "Resilience & Triumph",
      subtitle: "Widow & Cancer Survivor — Healing and Inspiring Hope",
      icon: ShieldCheck,
      color: "#225D65",
    },
    {
      title: "Dog Mom to Romeo",
      subtitle: "Cherished Havanese Companion",
      icon: Dog,
      color: "#D39932",
    },
    {
      title: "Community Youth Leader",
      subtitle: "Dedicated Boy Scout Leader Mentoring Youth",
      icon: Heart,
      color: "#5C633E",
    },
  ];

  return (
    <section id="personal" className="py-16 md:py-24 border-b border-[#E2D5C7] bg-[#F4ECE1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#AE5238]">
            Section 06 — Life Outside The Crown
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#231C19] mt-2 mb-4">
            Family, Heart & Community
          </h2>
          <p className="text-sm text-[#6B5E57] font-light max-w-xl mx-auto">
            Balancing motherhood, community leadership, and warm everyday moments.
          </p>
          <div className="w-16 h-[2px] bg-[#AE5238] mx-auto mt-4" />
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {personalHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF6F0] p-8 rounded-sm border border-[#E2D5C7] hover:border-[#AE5238] transition-all hover:shadow-lg flex items-start space-x-6 group"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon size={26} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#231C19] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B5E57] font-light leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
