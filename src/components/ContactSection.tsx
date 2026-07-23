"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { MALEKA_BIO } from "@/data/posts";
import { InstagramIcon } from "./SocialIcons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#225D65] text-white border-b border-[#E2D5C7]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D39932]">
            Section 08 — Connect & Booking
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#E3D8C6] mt-2 mb-4">
            Contact & Appearances
          </h2>
          <p className="text-sm text-[#E3D8C6]/80 font-light max-w-xl mx-auto">
            Reach out for speaking engagements, media interviews, sponsorships, and pageant appearances.
          </p>
          <div className="w-16 h-[2px] bg-[#D39932] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social */}
          <div className="lg:col-span-5 space-y-8 bg-[#FAF6F0] text-[#231C19] p-8 rounded-sm border border-[#E2D5C7]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#AE5238] block mb-1">
                Direct Contact
              </span>
              <h3 className="font-serif text-2xl font-light text-[#231C19] mb-4">
                Maleka Maroni
              </h3>
              <p className="text-xs text-[#6B5E57] leading-relaxed font-light mb-6">
                For official inquiries regarding Mrs Universe Central America 2026, nursing conferences, domestic violence advocacy partnerships, and media appearances.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#E2D5C7]">
              <a
                href={MALEKA_BIO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-xs uppercase tracking-widest font-semibold text-[#231C19] hover:text-[#AE5238] transition-colors p-3 bg-[#E3D8C6]/40 rounded-sm border border-[#E2D5C7]"
              >
                <InstagramIcon size={20} className="text-[#AE5238]" />
                <span>Instagram: @mrsuniversemaleka</span>
              </a>

              <div className="flex items-center space-x-3 text-xs uppercase tracking-widest font-semibold text-[#231C19] p-3 bg-[#E3D8C6]/40 rounded-sm border border-[#E2D5C7]">
                <Mail size={20} className="text-[#225D65]" />
                <span>[ Booking Email Placeholder ]</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#FAF6F0] text-[#231C19] p-8 rounded-sm border border-[#E2D5C7] shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 size={48} className="text-[#AE5238] mx-auto" />
                <h3 className="font-serif text-2xl font-light text-[#231C19]">
                  Thank You for Reaching Out
                </h3>
                <p className="text-xs text-[#6B5E57] max-w-md mx-auto">
                  Your message has been received. Maleka&apos;s team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#231C19] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full bg-[#FAF6F0] border border-[#E2D5C7] px-4 py-3 text-sm text-[#231C19] rounded-sm focus:outline-none focus:border-[#AE5238]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#231C19] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-[#FAF6F0] border border-[#E2D5C7] px-4 py-3 text-sm text-[#231C19] rounded-sm focus:outline-none focus:border-[#AE5238]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#231C19] mb-2">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[#E2D5C7] px-4 py-3 text-sm text-[#231C19] rounded-sm focus:outline-none focus:border-[#AE5238]"
                  >
                    <option>General Inquiry</option>
                    <option>Pageant Appearance</option>
                    <option>Media & Press Interview</option>
                    <option>Sponsorship & Partnership</option>
                    <option>Keynote Speaking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#231C19] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event or inquiry..."
                    className="w-full bg-[#FAF6F0] border border-[#E2D5C7] px-4 py-3 text-sm text-[#231C19] rounded-sm focus:outline-none focus:border-[#AE5238]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#AE5238] hover:bg-[#231C19] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-sm shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Submit Inquiry</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
