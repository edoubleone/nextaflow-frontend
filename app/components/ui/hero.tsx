"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Clock, ArrowUpRight } from "lucide-react";
import { AnimatedItem } from "../animatedItem";
import AvartarGroup from "../avatarGroup";
import Button from "../button";
import { useReferral } from "@/app/hooks/useReferral";
import Navbar from "./navbar";

export default function Hero() {
  const bookingUrl = useReferral();

  return (
    <section className="relative overflow-hidden bg-black border-b border-gray-700/90 text-white min-h-screen flex flex-col justify-between py-20 px-4 lg:px-16 md:px-10">
      {/* Full Hero Background Gradient Overlay*/}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          background:
            "radial-gradient(100% 100% at 50% 50%, #d4ff12 0%, rgba(128, 255, 0, 0.08) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Secondary Ambient Accent Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#80FF00]/15 blur-[140px] rounded-full z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#80FF00]/15 blur-[140px] rounded-full z-0"
      />

      {/* Navbar positioned inside the ambient glow layer */}
      <div className="relative z-20 w-full max-w-7xl mx-auto mb-12">
        <Navbar />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
          {/* Top Pill Tag */}
          <AnimatedItem index={0} delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d4ff12]/80 backdrop-blur-md border border-gray-800 px-3 py-1 text-sm text-black">
              <span>14 Days Free Trial For NextaFlow</span>
            </div>
          </AnimatedItem>

          {/* Main Headline */}
          <AnimatedItem index={0} delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[500] leading-[100%] tracking-tight text-white mb-4 max-w-2xl">
              NextaFlow Setup Done For You For Free.
            </h1>
          </AnimatedItem>

          {/* Sub-headline */}
          <AnimatedItem index={0} delay={0.15}>
            <p className="max-w-md text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-8">
              Stop wasting hours on tech and start growing your business. We
              don’t just give you the software; we build your first automation,
              sync your contacts, and launch your first campaign for you—yes,
              for free!
            </p>
          </AnimatedItem>

          {/* Action Buttons */}
          <AnimatedItem index={0} delay={0.2}>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link href={bookingUrl}>
                <Button
                  text="Start Free Trial"
                  className="bg-[var(--secondary)] text-black"
                />
              </Link>
              <a
                href="https://www.nextaflow.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  type="button"
                  className="text-sm text-[#d4ff12] rounded-[10px] hover:text-white px-4 py-3 transition-colors border border-gray-500 font-semibold"
                >
                  Discover NextaFlow
                </button>
              </a>
            </div>
          </AnimatedItem>

          {/* Social Proof / Avatar Section */}
          <AnimatedItem index={0} delay={0.25}>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-900 w-full max-w-md">
              <AvartarGroup />
              <div>
                <div className="text-xl font-bold tracking-tight text-white">
                  5X Growth
                </div>
                <p className="text-xs text-gray-400 font-light">
                  Join business owners trading app fatigue for business growth.
                </p>
              </div>
            </div>
          </AnimatedItem>
        </div>

        {/* Right Visual Column */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="relative w-full h-[400px] md:h-[620px] max-w-[550px] flex items-center justify-center">
            {/* Embedded Image Stage */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Image
                fill
                priority
                src="/assets/Hero-image.png"
                alt="hero-image"
                className="object-cover"
              />
            </div>

            {/* Top Floating Metric Card */}
            <AnimatedItem index={0} delay={0.3}>
              <div className="absolute -top-4 -right-2 sm:top-6 sm:-right-4 bg-[#121212]/90 backdrop-blur-md border border-gray-800 p-4 rounded-2xl shadow-2xl w-48 z-20">
                <div className="flex justify-between items-center mb-3">
                  <span className="p-2 bg-[#d4ff12]/10 rounded-lg text-[#d4ff12]">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </div>
                <div className="text-2xl font-semibold text-white tracking-tight">
                  100%
                </div>
                <div className="text-[10px] text-gray-400 mt-1 font-light">
                  Done-For-You Setup
                </div>
              </div>
            </AnimatedItem>

            {/* Bottom Floating Metric Card */}
            <AnimatedItem index={0} delay={0.35}>
              <div className="absolute -bottom-6 -left-2 sm:bottom-8 sm:-left-4 bg-[#121212]/90 backdrop-blur-md border border-gray-800 p-4 rounded-2xl shadow-2xl w-52 z-20">
                <div className="flex justify-between items-center mb-3">
                  <span className="p-2 bg-[#d4ff12]/10 rounded-lg text-[#d4ff12]">
                    <Clock className="w-4 h-4" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </div>
                <div className="text-2xl font-semibold text-white tracking-tight">
                  +14 Days
                </div>
                <div className="text-[10px] text-gray-400 mt-1 font-light">
                  Free Trial Recovered Time
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </div>
    </section>
  );
}
