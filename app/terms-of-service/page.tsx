import { AnimatedItem } from "../components/animatedItem";

export default function TermsOfService() {
  const sections = [
    {
      title: "Service Description",
      content: [
        'Nextaflow is a comprehensive business automation and customer relationship management (CRM) platform. Our services include CRM functionality, conversation management across multiple channels, marketing automation, calendar booking, funnel creation, mobile applications, and business analytics. We provide these services on an "as-is" basis to help small businesses automate their operations and scale their customer acquisition.',
      ],
    },
    {
      title: "User Accounts and Responsibilities",
      content: [
        "When you create a Nextaflow account, you agree to provide accurate information and maintain the confidentiality of your login credentials. You are responsible for all activities that occur under your account. You must notify us immediately of any unauthorized access. Users must comply with all applicable laws and regulations when using our platform, particularly regarding customer communication and data handling.",
      ],
    },
    {
      title: "Acceptable Use Policy",
      content: [
        "Users agree not to use Nextaflow for illegal purposes, spam, harassment, or violation of others' rights. You may not attempt to gain unauthorized access to the platform or circumvent security measures. Prohibited activities include phishing, malware distribution, and automated scraping. Violation of these terms may result in account suspension or termination.",
      ],
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "Nextaflow and all its contents, features, and functionality are owned by Edoubleone and protected by copyright, trademark, and other intellectual property laws. Your use of our platform does not grant you ownership of any intellectual property rights in Nextaflow or its content. You retain all rights to customer data and content you create within the platform.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, Nextaflow and Edoubleone shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability is limited to the amount you paid for our services in the past 12 months. Some jurisdictions do not allow limitation of liability, so this may not apply to you.",
        "We strive for 99.5% platform uptime but do not guarantee uninterrupted service",
        "We are not liable for data loss caused by user error or third-party integrations",
        "Users accept responsibility for compliance with applicable laws",
        "We reserve the right to modify or discontinue services with notice",
      ],
    },
    {
      title: "Payment Terms and Cancellation",
      content: [
        "Subscription fees are billed according to your selected plan. Cancellation can be made anytime through your account settings. Upon cancellation, you retain access until the end of your billing period. Data retention after cancellation follows our Privacy Policy. We do not provide refunds for partial months unless cancellation is due to service failure on our part.",
      ],
    },
    {
      title: "Modifications to Terms",
      content: [
        "Nextaflow reserves the right to modify these terms at any time. We will provide notice of significant changes via email or platform announcement. Your continued use of Nextaflow after modifications constitutes acceptance of updated terms. For questions about these terms, contact us at info@edoubleone.net.",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 ">
      <div className="md:px-6 px-4">
        <h1 className="md:text-3xl font-[500] text-xl text-[#1a1a1a] pt-14 pb-6">
          Terms of Service
        </h1>

        {sections.map((section, index) => (
          <AnimatedItem key={index} index={index} delay={0.05 * index}>
            <div key={index} className="mb-10">
              <h2 className="md:text-[23px] text-[17px] font-[500] text-[#1a1a1a] mb-3">
                {section.title}
              </h2>

              {section.content.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-[#1a1a1a] font-[300] mb-3 leading-relaxed md:text-[17px] text-[15px] ${
                    section.content.length > 1
                      ? "pl-2 list-disc before:content-['•'] before:text-black before:mr-2 before:inline-block"
                      : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedItem>
        ))}
      </div>
    </section>
  );
}
