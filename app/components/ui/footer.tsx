"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { AnimatedItem } from "../animatedItem";
import { useReferral } from "@/app/hooks/useReferral";
import logo from "@/public/assets/Nextaflow-allblk.png";

export default function Footer() {
  const bookingUrl = useReferral();

  return (
    <footer className="text-gray-400 py-24 border border-gray-800/80 px-4 md:px-10 lg:px-16 border-t border-gray-800/60 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12">
          {/* Brand & Socials Column */}
          <div className="md:col-span-6 lg:col-span-5 space-y-6">
            <AnimatedItem index={0} delay={0.05}>
              <Image
                src={logo}
                alt="Nextaflow Logo"
                className="h-8 w-auto brightness-0 invert"
                width={200}
                height={200}
              />
            </AnimatedItem>

            <AnimatedItem index={0} delay={0.1}>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-normal">
                NextaFlow is an all-in-one CRM and automation platform designed
                to help businesses grow without juggling multiple tools. We
                don’t just give you the software — we set it up for you.
              </p>
            </AnimatedItem>

            {/* Social Icons Inline */}
            <AnimatedItem index={0} delay={0.15}>
              <div className="flex items-center gap-4 text-gray-300 pt-2">
                <a
                  href="https://www.instagram.com/edoubleone_nextaflow?igsh=MXRlZGoyMHp1ZW0yMQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/company/e-double-one-inc/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </AnimatedItem>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <AnimatedItem index={1} delay={0.1}>
              <h3 className="text-white text-sm font-semibold tracking-wide mb-4">
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-gray-400 font-normal">
                <li className="flex items-center gap-2.5">
                  <MdLocationOn size={18} className="shrink-0 text-gray-400" />
                  <span>55 Coker Road, Ilupeju, Lagos</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <MdEmail size={18} className="shrink-0 text-gray-400" />
                  <a
                    href="mailto:info@edoubleone.net"
                    className="hover:text-white transition-colors"
                  >
                    info@edoubleone.net
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MdPhone size={18} className="shrink-0 text-gray-400" />
                  <a
                    href="tel:+12029339591"
                    className="hover:text-white transition-colors"
                  >
                    +1 (202)-933-9591
                  </a>
                </li>
              </ul>
            </AnimatedItem>
          </div>

          {/* Legal & Actions Column */}
          <div className="md:col-span-3 lg:col-span-4 space-y-3">
            <AnimatedItem index={2} delay={0.15}>
              <h3 className="text-white text-sm font-semibold tracking-wide mb-4">
                Legal
              </h3>
              <ul className="space-y-2.5 text-sm font-normal">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security-policy"
                    className="hover:text-white transition-colors"
                  >
                    Security Policy
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    href={bookingUrl}
                    className="inline-block text-[#d4ff12] hover:underline font-medium"
                  >
                    Book for Free →
                  </Link>
                </li>
              </ul>
            </AnimatedItem>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/80 pt-8" />

        {/* Bottom Bar Section */}
        <AnimatedItem index={3} delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-normal">
            <div>© 2026 NEXTAFLOW. All rights reserved.</div>

            <div className="flex items-center gap-1.5">
              <MdEmail size={14} className="text-gray-400" />
              <span>Powered by </span>
              <a
                href="http://edoubleone.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Edoubleone.net
              </a>
            </div>
          </div>
        </AnimatedItem>
      </div>
    </footer>
  );
}
