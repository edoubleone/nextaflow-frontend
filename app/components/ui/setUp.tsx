import { Calendar, PhoneCall, Wrench, TrendingUp } from "lucide-react";
import { AnimatedItem } from "../animatedItem";

type Step = {
  subtitle: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    subtitle: "STEP 1",
    title: "Book a Call",
    description:
      "Schedule a quick strategy call to discuss your goals and test out our trial.",
    icon: (
      <Calendar className="w-5 h-5 text-[#d4ff12] group-hover/card:text-black transition-colors duration-300" />
    ),
  },
  {
    subtitle: "STEP 2",
    title: "Onboarding Call",
    description: "We jump on a quick call to understand your business goals.",
    icon: (
      <PhoneCall className="w-5 h-5 text-[#d4ff12] group-hover/card:text-black transition-colors duration-300" />
    ),
  },
  {
    subtitle: "STEP 3",
    title: "We Build It",
    description:
      "Our experts set up your CRM pipeline, automation workflows, and messaging—usually within 48 hours.",
    icon: (
      <Wrench className="w-5 h-5 text-[#d4ff12] group-hover/card:text-black transition-colors duration-300" />
    ),
  },
  {
    subtitle: "STEP 4",
    title: "You Scale",
    description:
      "Walk into a fully functional growth engine ready to work for you.",
    icon: (
      <TrendingUp className="w-5 h-5 text-[#d4ff12] group-hover/card:text-black transition-colors duration-300" />
    ),
  },
];

export default function Setup() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden border-t border-gray-700/90">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#80FF00]/10 blur-[160px] rounded-full z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-16 md:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <AnimatedItem index={0} delay={0.05}>
            <span className="text-base font-medium text-[#d4ff12] tracking-wide uppercase mb-2">
              How the Free Setup Works
            </span>
          </AnimatedItem>
          <AnimatedItem index={0} delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto">
              A hands-off onboarding experience in 4 simple steps
            </h2>
          </AnimatedItem>
        </div>

        {/* Process Flow Container */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] border-b-2 border-dashed border-gray-600 -z-0" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <AnimatedItem key={index} index={index} delay={0.15 * index}>
                {/* Isolated group container for the entire card unit */}
                <div className="group/card flex flex-col items-center h-full">
                  {/* Floating Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-[#121212] border border-gray-800 group-hover/card:bg-[#d4ff12] group-hover/card:border-[#d4ff12] flex items-center justify-center shadow-lg mb-4 relative z-10 transition-colors duration-300">
                    {step.icon}
                  </div>

                  {/* Vertical Connector Line (Desktop) */}
                  <div className="hidden lg:block w-[2px] h-6 border-l-2 border-dashed border-gray-800 group-hover/card:border-[#d4ff12] mb-4 transition-colors duration-300" />

                  {/* Content Card */}
                  <div className="bg-[#121212] border-t-2 border-t-[#d4ff12] border-x border-b border-gray-800/80 p-6 rounded-2xl text-center flex flex-col justify-between h-full w-full transition-all duration-300 group-hover/card:bg-[#d4ff12] group-hover/card:-translate-y-1.5 shadow-xl">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 group-hover/card:text-black/70 block mb-2 transition-colors duration-300">
                        {step.subtitle}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover/card:text-black mb-3 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover/card:text-black/80 leading-relaxed transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
