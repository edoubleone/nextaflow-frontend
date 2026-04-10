"use client";

import Link from "next/link";
import Button from "../button";
import Image from "next/image";
import logo from "@/public/assets/Nextaflow.png";
import { useReferral } from "@/app/hooks/useReferral";

interface NavbarProps {
  showCTA?: boolean;
}

export default function Navbar({ showCTA = true }: NavbarProps) {
  const bookingUrl = useReferral();


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
      <Link href="/" className="flex items-center">
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
      {showCTA && (
        <Link
          href={bookingUrl}
          className="hidden md:flex items-center"
        >
          <Button
            text="Start My Free 14-Days Trial"
            className="bg-[var(--secondary)] text-black"
          />
        </Link>
      )}
    </nav>
  );
}
