import React from "react";
import { Inbox, Bot, LayoutDashboard, CalendarCheck } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Smart Unified Inbox",
    description:
      "Manage every DM, text, and email from one single view never miss a lead again.",
    icon: <Inbox className="text-black" size={23} />,
  },
  {
    title: "24/7 Automation Engine",
    description:
      'Let the "robot" handle your follow-ups while you sleep. Automatically trigger texts, reminders, and nurturing flows.',
    icon: <Bot className="text-black" size={23} />,
  },
  {
    title: "High-Converting Funnel Builder",
    description:
      "Drag-and-drop your way to professional landing pages that actually turn visitors into paying customers.",
    icon: <LayoutDashboard className="text-black" size={23} />,
  },
  {
    title: "Integrated Social Planner",
    description:
      "Schedule your entire week of posts across every platform in one click.",
    icon: <CalendarCheck className="text-black" size={23} />,
  },
];

export default function Features ()  {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto md:px-6 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[16px] font-[500] uppercase text-[var(--primary)]">
            Key Features
          </h2>
          <p className="mt-3 font-[300] text-2xl text-[var(--tertiary)]">
            Everything you need to scale faster in one platform
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--secondary)] mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-[400] text-gray-900">
                {feature.title}
              </h3>

              <p className="text-[#1a1a1a] font-[300] leading-relaxed py-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


