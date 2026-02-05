import React from "react";
import Link from "next/link";
import Button from "../button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-[500] mb-6">
          Ready to trade busywork for growth?
        </h2>
        <p className="my-6 text-[16px] text-[var(--tertiary)] max-w-xl mx-auto font-[300]">
          Stop juggling tools that don’t talk to each other. Let NextaFlow build
          your CRM, automation, and campaigns for you so you can focus on
          growing your business.
        </p>

        {/* CTA Button */}
        <div className="mx-auto flex justify-center">
          <Button
            text="Claim My 30-Days Free Trial"
            className="bg-[var(--secondary)] text-black"
          />
        </div>
      </div>
    </section>
  );
}
