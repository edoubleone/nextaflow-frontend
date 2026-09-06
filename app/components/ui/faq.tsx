import { useState, useRef, useEffect } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { AnimatedItem } from "../animatedItem";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Is it really free?",
    answer:
      'Yes. You get 14 days of full access and our "done-for-you" setup service at no cost.',
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
          openIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  return (
    <section className="py-24 border-t border-gray-800/80 text-white relative overflow-hidden border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto md:px-10 lg:px-16 px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Badge Capsule */}
          <AnimatedItem index={0} delay={0.05}>
            <div className="text-center text-[#d4ff12] tracking-wide text-base font-medium mb-2">
              FAQ
            </div>
          </AnimatedItem>

          {/* Large Bold Title */}
          <AnimatedItem index={0} delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 max-w-2xl mx-auto">
              Frequently Asked Question
            </h2>
          </AnimatedItem>

          {/* Subtitle */}
          <AnimatedItem index={0} delay={0.15}>
            <p className="text-gray-400 text-base md:text-lg font-normal max-w-xl mx-auto">
              Find quick answers to common questions about NextaFlow.
            </p>
          </AnimatedItem>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedItem key={index} index={index} delay={0.15 * index}>
                <div
                  className={`rounded-2xl transition-all duration-300 overflow-hidden bg-[#121216] border ${
                    isOpen
                      ? "border-[#d4ff12] shadow-[0_0_25px_rgba(212,255,18,0.2)]"
                      : "border-gray-800/80 hover:border-gray-700"
                  }`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full text-left px-8 py-6 flex justify-between items-center text-lg md:text-xl font-medium text-white transition-colors duration-200"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <span className="shrink-0 text-gray-300">
                      {isOpen ? (
                        <Minus className="w-6 h-6 text-[#d4ff12]" />
                      ) : (
                        <Plus className="w-6 h-6" />
                      )}
                    </span>
                  </button>

                  {/* Collapsible Content */}
                  <div
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    className="px-8 overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: "0px" }}
                  >
                    <div className="pb-6 text-gray-400 text-base leading-relaxed font-light border-t border-gray-800/60 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}
