"use client";

import { useEffect, useState, ReactNode } from "react";
import Image from "next/image";
import logo from "@/public/assets/Nextaflow-allwhite.png";

interface PreloaderProps {
  children: ReactNode;
  duration?: number; 
}

export default function Preloader({
  children,
  duration = 2000,
}: PreloaderProps) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
        {/* Logo */}
        <div className="animate-fade">
          <Image
            src={logo}
            alt="Nextaflow logo"
            width={200}
            height={200}
            priority
          />
        </div>

        {/* Loading text */}
        <p className="mt-6 text-sm tracking-widest text-white animate-pulse">
          LOADING
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
