"use client";

import React, { useState, useRef, useEffect } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Is it really free?",
    answer:
      'Yes. You get 30 days of full access and our "done-for-you" setup service at no cost.',
  },
  {
    question: "Do I need a credit card?",
    answer:
      "No credit card is required to start—we want you to see the results first.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. No hidden fees or 'gotcha' contracts.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    refs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          openIndex === index ? ref.scrollHeight + "px" : "0px";
      }
    });
  }, [openIndex]);

  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="max-w-3xl mx-auto md:px-6 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-[400] text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-[300]">
            Answers to the most common questions about NextaFlow
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-[2px] border-[var(--primary)] rounded-lg overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 bg-white flex justify-between items-center font-medium text-[20px] text-gray-900"
              >
                {faq.question}
                <span className="ml-2 text-white flex items-center justify-center rounded-full bg-black h-[30px] w-[30px] transition-transform duration-300">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {/* Answer with smooth height transition */}
              <div
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className="px-6 py-0 bg-[var(--primary)] text-white overflow-hidden text-[15px] font-[300] transition-all duration-500"
                style={{ maxHeight: "0px" }}
              >
                <div className="py-4 text-[15px]">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
