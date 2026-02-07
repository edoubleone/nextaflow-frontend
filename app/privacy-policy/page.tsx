import { AnimatedItem } from "../components/animatedItem";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information Collection",
      content: [
        "Account registration data (name, email, company information)",
        "Business and customer data you input into our platform",
        "Usage analytics and platform interaction data",
        "Communication preferences and contact information",
        "Payment and billing information",
      ],
      type: "list",
    },
    {
      title: "How We Use Your Information",
      content: [
        "Process and manage your automation workflows",
        "Provide customer support and technical assistance",
        "Send service updates and feature announcements",
        "Improve platform performance based on usage patterns",
        "Ensure platform security and prevent fraudulent activity",
      ],
      type: "list",
      description:
        "We use the information we collect to deliver and improve our Nextaflow automation platform, including CRM functionality, inbox management, automation workflows, calendar booking, and reporting features. Your data helps us:",
    },
    {
      title: "Data Collection and Use",
      description:
        "We collect information through your direct interaction with our platform. This includes data you input while using Nextaflow's CRM, automation, booking systems, and reporting features. We also collect technical information about how you use our platform to continuously improve your experience and ensure optimal performance.",
    },
    {
      title: "Data Protection and Security",
      description:
        "Your data security is paramount to us. Nextaflow implements industry-leading encryption and security protocols to protect your business information, customer data, and automation workflows.",
      type: "list",
      paragraph:
        "We use SSL/TLS encryption for data transmission, secure database storage, and regular security audits. Your sensitive business information, customer contacts, and automation configurations are protected with enterprise-grade security measures. Access to your data is restricted to authorized personnel only and monitored continuously.",
    },
    {
      title: "Data Retention and Deletion",
      content: [
        "Data is encrypted and securely stored on our servers",
        "Automatic backups are maintained for business continuity",
        "Access logs are monitored for unauthorized attempts",
        "Regular security audits ensure compliance with data protection standards",
      ],
      type: "list",
      description:
        "We retain your data for as long as necessary to provide our services and maintain your account. You have the right to request deletion of your data at any time. Upon request, we will delete your personal information within 30 days, except where we're required to retain it for legal or compliance purposes.",
    },
    {
      title: "Third-Party Integrations",
      description:
        "Nextaflow integrates with various third-party services to enhance your automation capabilities. When you connect integrations such as payment processors, email providers, or communication platforms, you authorize us to share necessary data with these partners. We ensure all third-party partners maintain similar data protection standards. You can disconnect any integration at any time through your account settings.",
    },
    {
      title: "Your Privacy Rights",
      description:
        "You have the right to access, modify, or request deletion of your personal data. To exercise these rights, contact our privacy team at info@edoubleone.net. We will respond to legitimate requests within 30 days. You can also manage your communication preferences and update your information directly through your Nextaflow account dashboard.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="rounded-2xl md:px-6 px-4 pt-14">
        <h1 className="md:text-3xl text-xl font-[500] text-[#1a1a1a] my-4">
          Privacy Policy
        </h1>

        <p className="text-[#1a1a1a] font-[300] mb-10 md:text-[17px] text-[15px] leading-relaxed">
          At Nextaflow, we collect information necessary to provide our business
          automation, CRM, and customer relationship management services. We
          gather information including:
        </p>

        {sections.map((section, index) => (
          <AnimatedItem key={index} index={index} delay={0.05 * index}>
            <div key={index} className="mb-10">
              <h2 className="md:text-[23px] md:text-[17px] font-[500] text-[#1a1a1a] mb-3">
                {section.title}
              </h2>

              {section.description && (
                <p className="text-[#1a1a1a] md:text-[17px] text-[15px] font-[300] mb-4 leading-relaxed">
                  {section.description}
                </p>
              )}

              {section.paragraph && (
                <p className="text-[#1a1a1a] mb-4 md:text-[17px] text-[15px] leading-relaxed font-[300]">
                  {section.paragraph}
                </p>
              )}

              {section.type === "list" && section.content && (
                <ul className="list-disc pl-6 space-y-2 text-[#1a1a1a] md:text-[17px] text-[15px] font-[300]">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </AnimatedItem>
        ))}
      </div>
    </section>
  );
}
