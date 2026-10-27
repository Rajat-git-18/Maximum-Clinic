"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { scrollToSection } from "@/lib/site";

export type BookingPrefill = {
  specialty?: string;
  doctor?: string;
  note?: string;
};

type BookingContextValue = {
  prefill: BookingPrefill;
  token: number;
  requestBooking: (prefill?: BookingPrefill) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [prefill, setPrefill] = useState<BookingPrefill>({});
  const [token, setToken] = useState(0);

  const requestBooking = useCallback((next?: BookingPrefill) => {
    setPrefill(next ?? {});
    setToken((current) => current + 1);
    scrollToSection("booking");
  }, []);

  const value = useMemo(
    () => ({ prefill, token, requestBooking }),
    [prefill, token, requestBooking],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return context;
}
