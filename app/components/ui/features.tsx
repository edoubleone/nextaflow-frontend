import { Inbox, Bot, LayoutDashboard, CalendarCheck } from "lucide-react";
import { AnimatedItem } from "../animatedItem";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
};

const features: Feature[] = [
  {
    title: "Smart Unified Inbox",
    description:
      "Manage every DM, text, and email from one single view never miss a lead again.",
    icon: (
      <Inbox
        className="text-[#d4ff12] group-hover:text-black transition-colors duration-300"
        size={24}
      />
    ),
    tag: "Communication",
  },
  {
    title: "24/7 Automation Engine",
    description:
      'Let the "robot" handle your follow-ups while you sleep. Automatically trigger texts, reminders, and nurturing flows.',
    icon: (
      <Bot
        className="text-[#d4ff12] group-hover:text-black transition-colors duration-300"
        size={24}
      />
    ),
    tag: "Workflow",
  },
  {
    title: "High-Converting Funnel Builder",
    description:
      "Drag-and-drop your way to professional landing pages that actually turn visitors into paying customers.",
    icon: (
      <LayoutDashboard
        className="text-[#d4ff12] group-hover:text-black transition-colors duration-300"
        size={24}
      />
    ),
    tag: "Conversion",
  },
  {
    title: "Integrated Social Planner",
    description:
      "Schedule your entire week of posts across every platform in one click.",
    icon: (
      <CalendarCheck
        className="text-[#d4ff12] group-hover:text-black transition-colors duration-300"
        size={24}
      />
    ),
    tag: "Scheduling",
  },
];

export default function Features() {
  return (
    <section className="py-24 text-white border-t border-gray-800/80 relative overflow-hidden">
      {/* Background Glow Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#80FF00]/10 blur-[150px] rounded-full z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto lg:px-16 md:px-10 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedItem index={0} delay={0.05}>
            <span className="text-base font-medium tracking-wide uppercase text-[#d4ff12]">
              Key Features
            </span>
          </AnimatedItem>
          <AnimatedItem index={0} delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto">
              Everything you need to scale faster in one platform
            </h2>
          </AnimatedItem>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimatedItem key={index} index={index} delay={0.12 * index}>
              <div className="group relative h-full flex flex-col justify-between p-7 rounded-2xl bg-[#121212] border-t-2 border-t-[#d4ff12] border-x border-b border-gray-600 hover:border-gray-700 transition-all duration-300 hover:bg-[#181818] hover:-translate-y-1.5 shadow-xl">
                <div>
                  {/* Top Header Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-black border border-gray-600 group-hover:bg-[#d4ff12] group-hover:border-[#d4ff12] transition-colors duration-300 shadow-[0_0_15px_rgba(128,255,0,0.15)]">
                      {feature.icon}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-gray-400 bg-gray-900/80 border border-gray-800 px-2.5 py-1 rounded-md">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#d4ff12] mb-3 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 font-normal text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}
