"use client";

import React from "react";
import Link from "next/link";
import Button from "../button";
import { AnimatedItem } from "../animatedItem";
import { useSearchParams } from "next/navigation";

export default function CTA() {
  const searchParams = useSearchParams();
  const referral = searchParams.get("referral");

  const signupLink = referral
    ? `/sign-up?referral=${referral}`
    : "/sign-up";

  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <AnimatedItem index={0} delay={0.05}>
          {/* Headline */}
          <h2 className="text-2xl md:text-4xl font-[500] mb-6">
            Ready to trade busywork for growth?
          </h2>
        </AnimatedItem>

        <AnimatedItem index={0} delay={0.1}>
          <p className="my-6 text-[16px] text-[var(--tertiary)] max-w-xl mx-auto font-[300]">
            Stop juggling tools that don’t talk to each other. Let NextaFlow
            build your CRM, automation, and campaigns for you so you can focus
            on growing your business.
          </p>
        </AnimatedItem>

        <AnimatedItem index={0} delay={0.15}>
          {/* CTA Button */}
          <Link href={signupLink}>
            <div className="mx-auto flex justify-center">
              <Button
                text="Claim My 30-Days Free Trial"
                className="bg-[var(--secondary)] text-black"
              />
            </div>
          </Link>
        </AnimatedItem>
      </div>
    </section>
  );
}
