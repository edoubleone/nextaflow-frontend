import { AnimatedItem } from "../animatedItem";

type Feature = {
  tag: string;
  title: string;
  description: string;
  footerText: string;
};

const features: Feature[] = [
  {
    tag: "Problem",
    title: "The Challenge",
    description:
      "Tired of paying for 10 different apps that don’t talk to each other? Struggling to scale your business and reach out to leads effectively? Managing tools, data, and workflows separately slows you down and costs you more.",
    footerText: "10+ APPS / HIGH COST",
  },
  {
    tag: "Solution",
    title: "The NextaFlow Difference",
    description:
      "Most CRMs hand you a login and wish you luck. NextaFlow gives you an all-in-one powerhouse and a team that sets everything up for you. No coding. No headaches. Just results.",
    footerText: "ALL-IN-ONE / DONE FOR YOU",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto md:px-10 px-4 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-10">
          <AnimatedItem index={0} delay={0.05}>
            <h2 className="text-base uppercase tracking-wide font-medium text-[#d4ff12]">
              The Business Challenges and Solutions
            </h2>
          </AnimatedItem>
          <AnimatedItem index={0} delay={0.1}>
            <p className="mt-2 md:text-5xl tracking-tight max-w-2xl mx-auto text-3xl font-semibold text-white">
              Why businesses choose NextaFlow
            </p>
          </AnimatedItem>
        </div>

        {/* Content Cards Container */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {features.map((item, index) => (
            <AnimatedItem key={index} index={index} delay={0.15 * index}>
              <div className="group relative h-full flex flex-col justify-between p-6 rounded-2xl bg-[#121212] text-white border-t-2 border-t-[#d4ff12] border-x border-b border-gray-600 shadow-md transition-all duration-300 hover:bg-[#d4ff12] hover:text-black hover:-translate-y-1">
                <div>
                  {/* Pill Tag */}
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-800 text-gray-300 group-hover:bg-black group-hover:text-white text-[10px] font-semibold tracking-wider uppercase mb-5 transition-colors duration-300">
                    {item.tag}
                  </span>

                  {/* Main Headline */}
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-black mb-3 leading-snug transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 group-hover:text-black/80 font-normal text-sm leading-relaxed transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tag / Metric */}
                <div className="flex items-center gap-2.5 pt-6 mt-4 border-t border-gray-800/80 group-hover:border-black/20 transition-colors duration-300">
                  <div className="w-6 h-6 rounded-full bg-gray-800 text-white group-hover:bg-black group-hover:text-white flex items-center justify-center font-bold text-xs transition-colors duration-300">
                    +
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 group-hover:text-black uppercase transition-colors duration-300">
                    {item.footerText}
                  </span>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}
