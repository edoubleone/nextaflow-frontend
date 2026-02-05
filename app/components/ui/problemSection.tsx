import React from "react";

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "The Problem",
    description:
      "Tired of paying for 10 different apps that don’t talk to each other? Struggling to scale your business and reach out to leads effectively? Managing tools, data, and workflows separately slows you down and costs you more.",
  },
  {
    title: "The NextaFlow Difference",
    description:
      "Most CRMs hand you a login and wish you luck. NextaFlow gives you an all-in-one powerhouse and a team that sets everything up for you. No coding. No headaches. Just results.",
  },
];

export default function ProblemSection()  {
  return (
    <section className="py-20 rounded-md bg-white">
      <div className="max-w-7xl mx-auto md:px-6 px-4 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-[16px] uppercase font-[500] text-[var(--primary)]">
            The Problem & Solution
          </h2>
          <p className="mt-3 text-2xl text-[#1a1a1a]">
            Why businesses choose NextaFlow
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-[#f7f7f7] border-[1px] border-[#e2e2e2]"
            >
              <h3 className="text-[20px] font-[400] text-[#1a1a1a] mb-4">
                {item.title}
              </h3>
              <p className="text-[#1a1a1a] font-[300] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

