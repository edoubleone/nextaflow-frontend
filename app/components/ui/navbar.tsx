"use client";

import Link from "next/link";
import Button from "../button";
import Image from "next/image";
import logo from "@/public/assets/Nextaflow.png";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
  const searchParams = useSearchParams();
  const referral = searchParams.get("referral");

  const signupLink = referral
    ? `/sign-up?referral=${referral}`
    : "/sign-up";

  const homeLink = referral
    ? `/?referral=${referral}`
    : "/";

  return (
    <nav
      className="
        fixed top-0 inset-x-0 z-50
        bg-black text-white
        flex items-center justify-between
        px-4 md:px-6
        h-20
      "
    >
      {/* Logo */}
      <Link href={homeLink} className="flex items-center">
        <Image
          src={logo}
          alt="Nextaflow logo"
          className="md:h-8 h-5 w-auto"
          width={200}
          height={200}
          priority
        />
      </Link>

      {/* CTA Button */}
      <Link href={signupLink} className="hidden md:flex items-center">
        <Button
          text="Start My Free 30-Days Trial"
          className="bg-[var(--secondary)] text-black"
        />
      </Link>
    </nav>
  );
}
