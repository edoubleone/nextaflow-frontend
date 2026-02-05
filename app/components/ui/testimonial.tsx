"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import { Navigation } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I used to spend 5 hours a day just replying to messages. Nestaflow’s team set up my automated replies, and now I only talk to customers who are ready to pay. It's like having a digital employee for free.",
    name: "Chidi A.",
    role: "Agency Owner",
    image: "/assets/testimonial4.PNG",
  },
  {
    quote:
      "Nestaflow helped us centralize all our communication and automate follow-ups. Our response time improved instantly, and conversions skyrocketed.",
    name: "Amaka O.",
    role: "Marketing Consultant",
    image: "/assets/testimonial7.PNG",
  },
  {
    quote:
      "The onboarding was seamless. Within 48 hours, everything was live and optimized. This tool pays for itself.",
    name: "Tunde K.",
    role: "E-commerce Founder",
    image: "/assets/testimonial5.PNG",
  },
  {
    quote:
      "We were paying for multiple tools that barely worked together. Nestaflow replaced all of them with one simple system. Everything from messaging to funnels and automation is now in one place — and their team handled the entire setup for us.",
    name: "Sarah M.",
    role: "Real Estate Consultant",
    image: "/assets/testimonial8.PNG",
  },
];

export default function Testimonial() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto md:px-6 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[16px] font-[500] uppercase text-[var(--primary)]">
            Testimonial
          </h2>
          <h2 className="font-[500] py-4 text-4xl text-[var(--tertiary)]">
            What Our Customers Say
          </h2>
          <p className="mt-4 font-[300] text-xl text-[var(--tertiary)]">
            Real stories from businesses growing with NextaFlow
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          effect="coverflow"
          centeredSlides
          grabCursor
          slidesPerView="auto"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
            slideShadows: false,
          }}
          className="max-w-3xl mx-auto md:h-[350px] h-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="w-[320px] md:w-[320px]">
              <div className="bg-[var(--secondary)] rounded-2xl p-8 shadow-xl border border-gray-200 h-full flex flex-col">
                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full h-[80px] w-[80px] object-cover"
                  />
                </div>
                {/* Quote */}
                <p className="text-[#1a1a1a] font-[300] leading-relaxed text-lg">
                  “{testimonial.quote}”
                </p>
                <div className="pt-6 pb-10">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
