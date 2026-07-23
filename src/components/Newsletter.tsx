"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-16 md:py-20 bg-[#225D65] text-white relative overflow-hidden">
      {/* Decorative Warm Cream Tonal Circle */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#E3D8C6]/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-[#AE5238]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-semibold text-[#D39932] mb-3">
          <Mail size={14} />
          <span>Newsletter Subscription</span>
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4">
          Stay Up To Date
        </h2>

        <p className="text-sm sm:text-base text-[#E3D8C6] max-w-xl mx-auto font-light leading-relaxed mb-8">
          Receive exclusive fashion insights, skincare secrets, and trend alerts delivered directly to your inbox every week.
        </p>

        {status === "success" ? (
          <div className="bg-[#FAF6F0] text-[#231C19] p-6 rounded-sm max-w-md mx-auto flex items-center justify-center space-x-3 shadow-xl animate-in zoom-in-95 duration-200">
            <CheckCircle2 size={24} className="text-[#AE5238]" />
            <div className="text-left">
              <h4 className="font-serif font-medium text-base">You&apos;re subscribed!</h4>
              <p className="text-xs text-[#6B5E57]">Thank you for joining Camila Coelho&apos;s inner circle.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-white/10 p-1.5 rounded-sm border border-[#E3D8C6]/30 backdrop-blur-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-white/60 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#AE5238] hover:bg-[#D39932] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-sm transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Subscribe</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {status === "error" && (
              <p className="text-xs text-[#E3D8C6] mt-2 font-medium">
                {errorMessage}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
