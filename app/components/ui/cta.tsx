"use client";

import Link from "next/link";
import Button from "../button";
import { AnimatedItem } from "../animatedItem";
import { useReferral } from "@/app/hooks/useReferral";

export default function CTA() {
const bookingUrl = useReferral();

return (
  <section className="relative overflow-hidden bg-black py-10 md:py-16">
    <div className="mx-auto w-full max-w-7xl px-5 md:px-6">
      <div
        className="
          relative
          overflow-hidden
          rounded-[18px]
          bg-black
          px-6
          py-12
          text-center
          text-white
          md:rounded-[20px]
          md:px-10
          md:py-16
        "
      >
        {/* =========================
            VISIBLE BACKGROUND SHAPES
        ========================== */}
        {/* Top-left large circle */}
        <div
          className="
  absolute
  -left-20
  -top-24
  h-64
  w-64
  rounded-full
  bg-[#272b35]
  opacity-40
"
        />

        {/* Top-left inner curve */}
        <div
          className="
  absolute
  -left-10
  -top-10
  h-40
  w-40
  rounded-full
  bg-[#343a46]
  opacity-30
"
        />

        {/* Top-center curved shape */}
        <div
          className="
  absolute
  -top-28
  left-[25%]
  h-56
  w-[420px]
  rounded-b-full
  bg-[#242934]
  opacity-40
"
        />

        {/* Top-right shape */}
        <div
          className="
  absolute
  -right-16
  -top-16
  h-56
  w-56
  rounded-bl-[100px]
  bg-[#303641]
  opacity-35
"
        />

        {/* Right middle curve */}
        <div
          className="
  absolute
  -right-20
  top-[35%]
  h-48
  w-48
  rounded-full
  bg-[#252a34]
  opacity-30
"
        />

        {/* Left middle block */}
        <div
          className="
  absolute
  -left-12
  top-[45%]
  h-40
  w-52
  rounded-r-[70px]
  bg-[#2d333e]
  opacity-35
"
        />

        {/* Bottom-left shape */}
        <div
          className="
  absolute
  -bottom-20
  -left-16
  h-52
  w-64
  rounded-tr-[100px]
  bg-[#252a34]
  opacity-35
"
        />

        {/* Bottom-center curved shape */}
        <div
          className="
  absolute
  -bottom-28
  left-[30%]
  h-64
  w-[440px]
  rounded-t-full
  bg-[#303641]
  opacity-35
"
        />

        {/* Bottom-right circle */}
        <div
          className="
  absolute
  -bottom-20
  -right-20
  h-60
  w-60
  rounded-full
  bg-[#292f39]
  opacity-40
"
        />

        {/* =========================
            CONTENT
        ========================== */}

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Icon */}
          <AnimatedItem index={0} delay={0.05}>
            <div className="mb-5 flex justify-center">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-md
                  bg-[#d4ff12]
                  shadow-[0_0_25px_rgba(212,255,18,0.15)]
                "
              >
                <span className="text-xl font-bold text-black">+</span>
              </div>
            </div>
          </AnimatedItem>

          {/* Heading */}
          <AnimatedItem index={1} delay={0.1}>
            <h2
              className="
                mx-auto
                max-w-4xl
                text-2xl
                font-medium
                leading-tight
                tracking-tight
                md:text-4xl
                lg:text-[42px]
              "
            >
              Ready to trade busywork for growth?
            </h2>
          </AnimatedItem>

          {/* Paragraph */}
          <AnimatedItem index={2} delay={0.15}>
            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                font-light
                leading-6
                text-white/75
                md:text-base
              "
            >
              Stop juggling tools that don’t talk to each other. Let NextaFlow
              build your CRM, automation, and campaigns for you so you can
              focus on growing your business.
            </p>
          </AnimatedItem>

          {/* CTA Button */}
          <AnimatedItem index={3} delay={0.2}>
            <div className="mt-7 flex justify-center">
              <Link href={bookingUrl}>
                <Button
                  text="Book a demo for free trial"
                  className="
                    rounded-full
                    bg-[#d4ff12]
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-black
                    shadow-[0_0_25px_rgba(212,255,18,0.12)]
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-[#d4ff12]
                  "
                />
              </Link>
            </div>
          </AnimatedItem>

          {/* Bottom supporting text */}
          <AnimatedItem index={4} delay={0.25}>
            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2
                text-[10px]
                font-light
                text-white/60
                md:text-xs
              "
            >
              <span className="flex items-center gap-1.5">
                <span
                  className="
                    flex
                    h-3.5
                    w-3.5
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/50
                    text-[8px]
                  "
                >
                  ✓
                </span>
                No upfront payment
              </span>

              <span className="flex items-center gap-1.5">
                <span
                  className="
                    flex
                    h-3.5
                    w-3.5
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/50
                    text-[8px]
                  "
                >
                  ✓
                </span>
                Easily cancellation
              </span>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </div>
  </section>
);
}
