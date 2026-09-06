import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { AnimatedItem } from "../animatedItem";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
  title?: string;
};

const testimonials: Testimonial[] = [
  {
    title: "Like having a digital employee for free",
    quote:
      "I used to spend 5 hours a day just replying to messages. NeXtaFlow’s team set up my automated replies, and now I only talk to customers who are ready to pay.",
    name: "Chidi A.",
    role: "Agency Owner",
    image: "/assets/testimonial4.PNG",
  },
  {
    title: "Conversions skyrocketed instantly",
    quote:
      "NextaFlow helped us centralize all our communication and automate follow-ups. Our response time improved instantly, and conversions skyrocketed.",
    name: "Amaka O.",
    role: "Marketing Consultant",
    image: "/assets/testimonial7.PNG",
  },
  {
    title: "This tool pays for itself",
    quote:
      "The onboarding was seamless. Within 48 hours, everything was live and optimized. This tool pays for itself.",
    name: "Tunde K.",
    role: "E-commerce Founder",
    image: "/assets/testimonial5.PNG",
  },
  {
    title: "Replaced all our tools with one system",
    quote:
      "We were paying for multiple tools that barely worked together. NextaFlow replaced all of them with one simple system. Everything from messaging to funnels and automation is now in one place.",
    name: "Sarah M.",
    role: "Real Estate Consultant",
    image: "/assets/testimonial8.PNG",
  },
];

export default function Testimonial() {
  return (
    <section className="py-24 bg-black text-white border-t border-gray-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto md:px-10 lg:px-16 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedItem index={0} delay={0.05}>
            <span className="text-base font-medium text-[#d4ff12] tracking-wide uppercase mb-2 block">
              Testimonial
            </span>
          </AnimatedItem>
          <AnimatedItem index={0} delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              What Our Customers Say
            </h2>
          </AnimatedItem>
          <AnimatedItem index={0} delay={0.15}>
            <p className="mt-4 font-light text-lg text-gray-400">
              Real stories from businesses growing with NextaFlow
            </p>
          </AnimatedItem>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          grabCursor
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="max-w-4xl mx-auto !pb-14"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#121212] border border-gray-800 rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center shadow-2xl">
                {/* Left Profile Image Container */}
                <div className="relative w-full md:w-[320px] h-[280px] md:h-[340px] shrink-0 rounded-2xl overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Content Block */}
                <div className="flex flex-col justify-between text-left h-full py-2 flex-1">
                  <div>
                    {/* Standard Yellow Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Highlight Title */}
                    {testimonial.title && (
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                        "{testimonial.title}"
                      </h3>
                    )}

                    {/* Quote */}
                    <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author Details */}
                  <div className="mt-auto pt-2">
                    <p className="font-semibold text-white text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
