'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/Nextaflow-allwhite.png"; 

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      {/* Logo */}
      <div className="animate-fade">
        <Image
          src={logo}
          alt="Nextaflow logo"
          width={200}
          height={200}
        />
      </div>

      {/* Loading text */}
      <p className="mt-6 text-sm tracking-widest text-white animate-pulse">
        LOADING
      </p>
    </div>
  );
}

