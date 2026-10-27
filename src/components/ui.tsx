import { type ReactNode } from "react";
import { Plus } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M20.52 3.48A11 11 0 0 0 2.05 17.2L1 23l5.94-1.56A11 11 0 0 0 20.52 3.48zM12 20.4a9.4 9.4 0 0 1-4.78-1.3l-.34-.2-3.52.92.94-3.43-.22-.35A9.4 9.4 0 1 1 12 20.4zm5.16-7.05c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.16.18-.33.21-.61.07a7.7 7.7 0 0 1-2.26-1.4 8.5 8.5 0 0 1-1.57-1.95c-.16-.28 0-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.1-.18.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34s1 2.71 1.15 2.9c.14.19 1.98 3.02 4.8 4.23.67.29 1.2.46 1.6.59.67.21 1.29.18 1.77.11.54-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.11-.26-.18-.54-.32z" />
    </svg>
  );
}

export function Logo({ tone = "default" }: { tone?: "default" | "light" }) {
  const light = tone === "light";

  return (
    <a href="#home" className="flex items-center gap-2.5 rounded-xl">
      <span
        className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-full shadow-[0_0_18px_rgba(6,182,212,0.45)] ${
          light ? "bg-white text-navy" : "bg-navy text-white"
        }`}
      >
        <Plus className="h-6 w-6" strokeWidth={2.4} aria-hidden="true" />
        <span
          className={`absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-cyan-400 ring-2 ${
            light ? "ring-navy" : "ring-white"
          }`}
        />
      </span>
      <span className="leading-tight">
        <span className={`block text-[15px] font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          {site.name}
        </span>
        <span className={`block text-[11px] font-semibold ${light ? "text-cyan-100" : "text-teal-ink"}`}>
          Multi-specialty · Jammu
        </span>
      </span>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className={centered ? "flex justify-center" : ""}>
        <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-800">
          {eyebrow}
        </span>
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}

export const pageWrap = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-800 ${className}`}
    >
      {children}
    </span>
  );
}

export const ctaEmerald =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.35)] transition duration-300 hover:bg-emerald-500 hover:shadow-[0_0_28px_rgba(16,185,129,0.5)]";

export const ctaGlass =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-6 text-sm font-semibold text-navy shadow-sm backdrop-blur-md transition duration-300 hover:border-cyan-300 hover:bg-white";

export const glassCard =
  "rounded-[1.75rem] border border-slate-100 bg-white/80 shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(6,182,212,0.16)]";
