"use client";

import React from "react";
import { Brain, Heart, Shield, Sparkles } from "lucide-react";

export default function AdvocacySection() {
  const pillars = [
    {
      id: "mental-health",
      title: "Mental Health, For Every Age",
      badge: "Pillar 01",
      color: "#225D65",
      icon: Brain,
      description:
        "As a future Psychiatric Mental Health Nurse Practitioner, I've seen how often mental health gets treated as an afterthought — especially for women juggling careers, families, and loss. I want to change that conversation, starting with my own.",
    },
    {
      id: "empowerment",
      title: "Women's Empowerment",
      badge: "Pillar 02",
      color: "#AE5238",
      icon: Heart,
      description:
        "Confidence isn't cosmetic — it's foundational. Whether I'm in scrubs or on a pageant stage, my work is about helping women reclaim ownership of how they look, feel, and show up in the world.",
    },
    {
      id: "dv-awareness",
      title: "Domestic Violence Awareness",
      badge: "Pillar 03",
      color: "#D39932",
      icon: Shield,
      description:
        "Standing as a steadfast voice for safety, healing, and empowerment. Raising awareness, supporting community shelters, and empowering survivors to reclaim peace, independence, and dignity.",
    },
  ];

  return (
    <section id="advocacy" className="py-16 md:py-24 border-b border-[#E2D5C7] bg-[#F4ECE1]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#225D65]">
            Section 04 — Platform
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#231C19] mt-2 mb-4">
            A Voice for the Whole Woman
          </h2>
          <p className="text-sm text-[#6B5E57] font-light max-w-xl mx-auto">
            My platform stands on three causes I&apos;ve lived, not just studied.
          </p>
          <div className="w-16 h-[2px] bg-[#225D65] mx-auto mt-4" />
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-[#FAF6F0] p-8 rounded-sm border border-[#E2D5C7] hover:border-[#AE5238] transition-all hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-[10px] uppercase tracking-[0.25em] font-bold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: pillar.color }}
                    >
                      {pillar.badge}
                    </span>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: pillar.color }}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-light text-[#231C19] mb-4 group-hover:text-[#AE5238] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#6B5E57] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E2D5C7]/60 flex items-center text-xs font-semibold text-[#AE5238]">
                  <Sparkles size={14} className="mr-1.5" />
                  <span>Advocacy Initiative</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
