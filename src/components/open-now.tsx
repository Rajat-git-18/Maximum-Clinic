"use client";

import { useSyncExternalStore } from "react";
import { isClinicOpen } from "@/lib/site";

type HoursStatus = "unknown" | "open" | "closed";

function subscribe() {
  return () => {};
}

function getSnapshot(): HoursStatus {
  return isClinicOpen(new Date()) ? "open" : "closed";
}

function getServerSnapshot(): HoursStatus {
  return "unknown";
}

export function OpenNowBadge() {
  const status = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const open = status === "open";
  const label = status === "unknown" ? "Clinic hours" : open ? "Open now" : "Closed now";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
        open ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"
      }`}
    >
      <span className="relative flex h-2 w-2">
        {open ? <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /> : null}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${open ? "bg-emerald-500" : "bg-slate-400"}`} />
      </span>
      {label}
    </span>
  );
}
