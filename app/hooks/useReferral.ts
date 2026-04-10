"use client";

import { useEffect, useState } from "react";

const DEFAULT_URL = process.env.NEXT_PUBLIC_DEFAULT_BOOKING_URL ?? "https://link.nextaflow.net/widget/booking/XchFTkMnL0ZY5QnwUtWN";
const STORAGE_KEY = "nf_ref";

function parseReps(): Record<string, string> {
  const raw = process.env.NEXT_PUBLIC_REPS ?? "";
  if (!raw) return {};
  return Object.fromEntries(
    raw.split("|").map((entry) => {
      const idx = entry.indexOf(":");
      const code = entry.slice(0, idx).trim();
      const url = entry.slice(idx + 1).trim();
      return [code, url];
    })
  );
}

export function useReferral() {
  const [bookingUrl, setBookingUrl] = useState(DEFAULT_URL);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const refFromUrl = params.get("ref");

    // If a ref is in the URL, persist it
    if (refFromUrl) {
      localStorage.setItem(STORAGE_KEY, refFromUrl);
    }

    const ref = refFromUrl ?? localStorage.getItem(STORAGE_KEY);

    if (!ref) {
      setBookingUrl(DEFAULT_URL);
      return;
    }

    const reps = parseReps();
    const repUrl = reps[ref];

    setBookingUrl(repUrl ?? DEFAULT_URL);
  }, []);

  return bookingUrl;
}
