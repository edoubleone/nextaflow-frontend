"use client";

import Button from "../button";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { AnimatedItem } from "../animatedItem";
import logo from "@/public/assets/Nextaflow-allblk.png";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Footer() {

  const searchParams = useSearchParams();
  const referral = searchParams.get("referral");

  const signupLink = referral
    ? `/sign-up?referral=${referral}`
    : "/sign-up";

  return (
    <footer className="bg-[#f7f7f7] border-[1px] border-white/30 pt-6 text-gray-300">
      <div className="md:px-6 px-4 pt-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12">
          <AnimatedItem index={0} delay={0.05}>
            {/* Brand */}
            <div className="max-w-xl">
              <Image
                src={logo}
                alt="Nextaflow Logo"
                className="md:h-8 h-5 w-auto"
                width={200}
                height={200}
              />
              <p className="mt-4 max-w-sm lg:text-[16px] text-[13px] font-[300] text-[#1a1a1a]">
                NextaFlow is an all-in-one CRM and automation platform designed
                to help businesses grow without juggling multiple tools. We
                don’t just give you the software — we set it up for you.
              </p>
            </div>
          </AnimatedItem>
          <AnimatedItem index={1} delay={0.1}>
            {/* Contact Info */}
            <div className="space-y-2 text-[#1a1a1a] pt-8 md:pt-0">
              <h2>Address</h2>
              <div className="flex items-center gap-2">
                <MdLocationOn size={20} />
                <span className="font-[300] max-w-sm lg:text-[16px] text-[13px]">
                  {" "}
                  7404 Executive place, Lanham MD 20706, United States
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail size={20} />
                <span className="font-[300] lg:text-[16px] text-[13px]">
                  info@edoubleone.net
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone size={20} />
                <span className="font-[300] lg:text-[16px] text-[13px]">
                  +1 (202) 971-0392
                </span>
              </div>
            </div>
          </AnimatedItem>

          <div className="flex-col flex md:mt-0 mt-8">
            {/* Signup */}
            <Link href={signupLink} className="text-center md:text-right">
              <Button text="Sign Up for Free" className="bg-black text-white" />
            </Link>
            <AnimatedItem index={2} delay={0.15}>
              {/* Social Icons */}
              <div className="flex gap-2 items-center mt-4">
                <h2 className="text-black lg:text-[16px] text-[13px] font-[300]">
                  Follow Us :
                </h2>
                <div className="flex justify-center gap-4">
                  {/* Twitter */}
                  <a
                    href="https://x.com/edoubleoneinc?t=lrNy6KIiT9EGCUUO2fVenw&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full border border-transparent transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 cursor-pointer"
                  >
                    <FaTwitter size={20} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/edoubleoneinc?igsh=MWFhanV0YWh6eXM2aQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full border border-transparent transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 cursor-pointer"
                  >
                    <FaInstagram size={20} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/e-double-one-inc/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full border border-transparent transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 cursor-pointer"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
        <AnimatedItem index={4} delay={0.25}>
          {/* Divider */}
          <div className="border-t border-white/10 pt-24 pb-10 text-center text-[13px] text-[#1a1a1a] font-[200]">
            © 2026 NextaFlow. All rights reserved.
          </div>
        </AnimatedItem>
      </div>
    </footer>
  );
}
