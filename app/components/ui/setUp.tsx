import React from "react";
import { UserPlus, PhoneCall, Settings, TrendingUp } from "lucide-react";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Sign Up",
    description: "Claim your 30-day free trial and get instant access.",
    icon: <UserPlus className="w-6 h-6 text-black" />,
  },
  {
    title: "Onboarding Call",
    description: "We jump on a quick call to understand your business goals.",
    icon: <PhoneCall className="w-6 h-6 text-black" />,
  },
  {
    title: "We Build It",
    description:
      "Our experts set up your CRM pipeline, automation workflows, and messaging—usually within 48 hours.",
    icon: <Settings className="w-6 h-6 text-black" />,
  },
  {
    title: "You Scale",
    description:
      "Walk into a fully functional growth engine ready to work for you.",
    icon: <TrendingUp className="w-6 h-6 text-black" />,
  },
];

export default function Setup()  {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto md:px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[16px] uppercase font-[500] text-[var(--primary)]">
            How the Free Setup Works
          </h2>
          <p className="mt-3 text-2xl text-[#1a1a1a]">
            A hands-off onboarding experience designed for fast results
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-10 lg:px-20 px-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Icon */}
              <div className="absolute lg:-left-[29px] -left-[14px] lg:top-0 -top-[14px] w-14 h-14 rounded-full bg-[var(--secondary)] flex items-center justify-center shadow-lg">
                {step.icon}
              </div>

              {/* Content Card */}
              <div className="bg-[#f7f7f7] p-8 rounded-xl border border-[#e2e2e2]">
                <span className="text-sm font-[400] text-[#1a1a1a]">
                  Step {index + 1}
                </span>

                <h3 className="mt-2 text-xl font-[400] text-[#1a1a1a] ">
                  {step.title}
                </h3>

                <p className="mt-3 text-[#1a1a1a] font-[300]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

