"use client";

import React from "react";
import Link from "next/link";
import Button from "../button";

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary)] border-[1px] border-white/30 pt-6 text-gray-300">
      <div className="max-w-7xl mx-auto md:px-6 px-4 py-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">NextaFlow</h3>
            <p className="mt-4 max-w-lg text-[16px] font-[300] text-[#1a1a1a]">
              NextaFlow is an all-in-one CRM and automation platform designed to
              help businesses grow without juggling multiple tools. We don’t
              just give you the software we set it up for you.
            </p>
          </div>

          {/* Signup */}
          <div className="text-center md:text-right">
            <p className="text-sm text-[#1a1a1a] mb-4">
              Start your 30-day free trial with free setup.
            </p>
            <Button text=" Sign Up for Free" className="bg-black text-white" />

            <p className="mt-3 text-xs text-[#1a1a1a]">
              No credit card required · Cancel anytime
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-6 text-center text-[13px] text-[#1a1a1a] font-[200]">
          © 2026 NextaFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
