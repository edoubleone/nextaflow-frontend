"use client";
import { AnimatedItem } from "../animatedItem";
import AvartarGroup from "../avatarGroup";
import Button from "../button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl md:px-6 px-4 py-24 text-center">
        {/* Headline */}
        <AnimatedItem index={0} delay={0.05}>
          <h1 className="mx-auto max-w-3xl xl:text-4xl md:text-3xl text-2xl font-[400] leading-tighter text-[var(--tertiary)] md:text-5xl md:pt-20 pt-16">
            30 Days Free Trial for
            <span className="text-[var(--primary)]">&nbsp;NextaFlow</span>&nbsp;
            with Setup Done for You for Free—Yes, for Free!
          </h1>
        </AnimatedItem>

        <AnimatedItem index={0} delay={0.1}>
          {/* Sub-headline */}
          <p className="mx-auto mt-6 max-w-3xl font-[300] md:text-lg text-sm text-[var(--tertiary)] md:text-xl">
            Stop wasting hours on tech and start growing your business. We don’t
            just give you the software; we build your first automation, sync
            your contacts, and launch your first campaign for you.
          </p>
        </AnimatedItem>

        <div className="mt-10 flex flex-col items-center gap-4">
          {/* button */}
          <AnimatedItem index={0} delay={0.15}>
            <Button
              text="Start My Free 30-Days Trial"
              className="bg-[var(--secondary)] text-black"
            />
          </AnimatedItem>

          <div className="flex items-center gap-6">
            <AnimatedItem index={0} delay={0.25}>
              {/* avatar Group */}
              <AvartarGroup />
            </AnimatedItem>
            <AnimatedItem index={0} delay={0.35}>
              {/* Social Proof */}
              <p className="md:text-[16px] text-[10px] max-w-sm text-left text-[var(--tertiary)] font-[300]">
                Join business owners who 5X their business by trading app
                fatigue for growth.
              </p>
            </AnimatedItem>
          </div>
        </div>

        {/* Video*/}
        <div className="mt-14">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-white">
            <div className="flex h-full items-center justify-center text-gray-400 bg-white">
              <video autoPlay muted loop className="w-full h-full">
                <source
                  src="/video/Dropbox_Homepage - Copy.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
