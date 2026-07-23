"use client";

import React from "react";
import { Crown, Globe, Calendar, MapPin, Sparkles, Award } from "lucide-react";

export default function PageantSection() {
  const pageantDetails = [
    { label: "Official Title", value: "Mrs Universe Central America 2026", icon: Crown, color: "#AE5238" },
    { label: "Date Crowned", value: "[ Date ]", icon: Calendar, color: "#D39932" },
    { label: "Venue & Location", value: "[ Venue / Location ]", icon: MapPin, color: "#225D65" },
    { label: "Region Represented", value: "Central America", icon: Globe, color: "#5C633E" },
    { label: "National Costume Theme", value: "[ National Costume Design ]", icon: Sparkles, color: "#AE5238" },
    { label: "Next Destination", value: "Mrs Universe International Final", icon: Award, color: "#D39932" },
  ];

  return (
    <section id="pageant-journey" className="py-16 md:py-24 bg-[#225D65] text-white border-b border-[#E2D5C7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D39932]">
            Section 03 — Official Crown
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#E3D8C6] mt-2 mb-4">
            Pageant Journey
          </h2>
          <p className="text-sm text-[#E3D8C6]/80 font-light max-w-xl mx-auto">
            Representing strength, resilience, and Central American heritage on the global stage.
          </p>
          <div className="w-16 h-[2px] bg-[#D39932] mx-auto mt-4" />
        </div>

        {/* Highlight Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pageantDetails.map((detail, idx) => {
            const Icon = detail.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF6F0] text-[#231C19] p-6 rounded-sm border border-[#E2D5C7] hover:border-[#AE5238] transition-all hover:shadow-xl group flex items-start space-x-4"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-sm"
                  style={{ backgroundColor: detail.color }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#6B5E57] block">
                    {detail.label}
                  </span>
                  <h3 className="font-serif text-lg font-normal text-[#231C19] mt-0.5">
                    {detail.value}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative Box */}
        <div className="bg-[#FAF6F0] text-[#231C19] p-8 md:p-12 rounded-sm shadow-2xl border-l-8 border-[#D39932]">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#AE5238] mb-2 block">
              Crowning Vision
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#231C19] mb-4">
              More Than a Title: A Global Platform for Impact
            </h3>
            <p className="text-sm sm:text-base text-[#6B5E57] font-light leading-relaxed mb-6">
              Holding the title of Mrs Universe Central America 2026 is an honor rooted in service. It represents an opportunity to amplify voices for mental health awareness, women&apos;s independence, and compassionate healthcare advocacy across borders.
            </p>
            <div className="flex items-center space-x-4">
              <span className="font-serif text-lg italic text-[#AE5238]">
                Maleka Maroni
              </span>
              <span className="text-xs uppercase tracking-widest text-[#6B5E57]">
                · Titleholder
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
