"use client";

import React from "react";
import { Stethoscope, Syringe, GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function CareerSection() {
  const credentials = [
    {
      title: "Registered Nurse (RN)",
      detail: "15 Years Experience in ICU & Emergency Medicine",
      icon: Stethoscope,
      color: "#AE5238",
    },
    {
      title: "Nurse Injector",
      detail: "Specialized in Aesthetic Medicine & Skin Restoration",
      icon: Syringe,
      color: "#D39932",
    },
    {
      title: "MSN Graduate",
      detail: "Master of Science in Nursing Completed",
      icon: GraduationCap,
      color: "#225D65",
    },
    {
      title: "PMHNP Board Candidate",
      detail: "Psychiatric Mental Health Nurse Practitioner Certification",
      icon: Award,
      color: "#5C633E",
    },
  ];

  return (
    <section id="career" className="py-16 md:py-24 border-b border-[#E2D5C7] bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#5C633E]">
            Section 05 — Clinical Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#231C19] mt-2 mb-4">
            Career & Healthcare Expertise
          </h2>
          <p className="text-sm text-[#6B5E57] font-light max-w-xl mx-auto">
            Bridging mental wellness and aesthetic medicine for confidence that starts from within.
          </p>
          <div className="w-16 h-[2px] bg-[#5C633E] mx-auto mt-4" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF6F0] p-6 rounded-sm border border-[#E2D5C7] hover:border-[#AE5238] transition-all hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: cred.color }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="font-serif text-xl font-normal text-[#231C19] mb-2 group-hover:text-[#AE5238] transition-colors">
                    {cred.title}
                  </h3>

                  <p className="text-xs text-[#6B5E57] leading-relaxed font-light">
                    {cred.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2D5C7]/60 flex items-center text-[11px] text-[#225D65] font-semibold">
                  <CheckCircle2 size={13} className="mr-1.5 text-[#5C633E]" />
                  <span>Verified Credential</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
