"use client";

import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 inset-x-0 z-50
        text-white
        flex items-center justify-between
        px-4 lg:px-16 md:px-10
        h-20
        transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-gray-800/80 shadow-lg"
            : "bg-transparent border-b border-transparent"
        }
      `}
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
        <Link href={bookingUrl} className="hidden md:flex items-center">
          <Button
            text="Start 14-Days Trial"
            className="bg-[var(--secondary)] text-black"
          />
        </Link>
      )}
    </nav>
  );
}
