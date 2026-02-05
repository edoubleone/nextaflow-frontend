"use client";

import React from "react";
import Link from "next/link";
import Button from "../button";

export default function Navbar() {
  return (
    <nav
      className="
        fixed inset-x-0 top-0 z-50 
        bg-black text-white
        flex items-center justify-between
        md:px-6 px-4 py-6
        backdrop-blur-sm
      "
    >
      {/* Brand */}
      <Link href="/" className="text-xl font-semibold">
        Nexta <span className="text-[var(--primary)]">Flow</span>
      </Link>

      {/* CTA button */}
      <div className="hidden md:flex">
        <Button
          text="Start My Free 30-Days Trial"
          className="bg-[var(--secondary)] text-black"
        />
      </div>
    </nav>
  );
}
