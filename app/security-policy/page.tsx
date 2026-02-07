import { AnimatedItem } from "../components/animatedItem";

export default function SecurityPolicy() {
  const sections = [
    {
      title: "Security Infrastructure",
      description:
        "Nextaflow maintains a comprehensive security infrastructure designed to protect your business data, customer information, and automation workflows. Our security framework includes:",
      list: [
        "Enterprise-grade SSL/TLS encryption for all data transmission",
        "Multi-layer security architecture with firewalls and intrusion detection",
        "Role-based access control (RBAC) for platform administration",
        "Regular vulnerability assessments and penetration testing",
        "ISO 27001 compliant security management systems",
      ],
    },
    {
      title: "Data Encryption and Storage",
      description:
        "All data transmitted to and from the Nextaflow platform is encrypted using industry-standard TLS 1.2 or higher. Sensitive information such as customer data, authentication credentials, and automation configurations are encrypted at rest using AES-256 encryption. Our database infrastructure is hosted on secure, monitored servers with redundant backup systems.",
    },
    {
      title: "Access Control and Authentication",
      description:
        "Nextaflow implements strong authentication mechanisms including password requirements, two-factor authentication (2FA), and session management. All user access is logged and monitored. Administrative access is restricted to authorized personnel only and requires multi-factor authentication. API keys and tokens are encrypted and regularly rotated.",
    },
    {
      title: "Incident Response and Monitoring",
      description:
        "We maintain a 24/7 security monitoring system that detects and responds to potential security threats. Our incident response team follows established protocols to address any security concerns promptly.",
      paragraph:
        "In the event of a security incident affecting user data, we will notify affected users within 48 hours. We maintain detailed incident logs and conduct thorough post-incident reviews to prevent future occurrences.",
    },
    {
      title: "Compliance and Certifications",
      description:
        "Nextaflow complies with major data protection regulations including GDPR, CCPA, and other applicable privacy laws. Our platform undergoes regular compliance audits and maintains certifications in data security standards. We work with third-party security auditors to ensure continuous compliance.",
      list: [
        "Regular security training for all team members",
        "Mandatory security updates and patch management",
        "Third-party security assessments and audits",
        "Disaster recovery and business continuity planning",
      ],
    },
    {
      title: "Third-Party Security",
      description:
        "All third-party integrations connected to Nextaflow are vetted for security compliance. We ensure partners maintain equivalent security standards. Integration authentication is secured through OAuth 2.0 and API key management. Users maintain full control over connected integrations and can revoke access at any time.",
    },
    {
      title: "Reporting Security Vulnerabilities",
      description:
        "If you discover a security vulnerability in Nextaflow, please report it responsibly to security@edoubleone.net. We appreciate your help in keeping our platform secure and will acknowledge receipt of your report within 24 hours.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="md:px-6 px-4">
        <h1 className="text-3xl font-semibold text-[#1a1a1a] pt-14 pb-6">
          Security Policy
        </h1>

        {sections.map((section, index) => (
          <AnimatedItem key={index} index={index} delay={0.05 * index}>
            <div key={index} className="mb-12">
              <h2 className="md:text-[23px] text-[17px] font-[500] text-[#1a1a1a] mb-4">
                {section.title}
              </h2>

              {section.description && (
                <p className="text-[#1a1a1a] md:text-[17px] text-[15px] mb-4 font-[300]">
                  {section.description}
                </p>
              )}

              {section.paragraph && (
                <p className="text-[#1a1a1a] md:text-[17px] text-[15px] mb-4 leading-relaxed font-[300]">
                  {section.paragraph}
                </p>
              )}

              {section.list && (
                <ul className="list-disc pl-6 space-y-2 text-[#1a1a1a] md:text-[17px] text-[15px] font-[300]">
                  {section.list.map((item, i) => (
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
