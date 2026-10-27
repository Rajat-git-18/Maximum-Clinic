"use client";

import { ArrowRight, Baby, Bone, HeartPulse, Sparkles, Stethoscope, Venus, type LucideIcon } from "lucide-react";
import { specialties, type SpecialtyIcon } from "@/lib/site";
import { useBooking } from "@/components/booking-provider";
import { SectionHeading, glassCard, pageWrap } from "@/components/ui";

const icons: Record<SpecialtyIcon, LucideIcon> = {
  stethoscope: Stethoscope,
  baby: Baby,
  bone: Bone,
  venus: Venus,
  sparkles: Sparkles,
  heart: HeartPulse,
};

export function Specialties() {
  const { requestBooking } = useBooking();

  return (
    <section id="specialties" className="py-16 sm:py-20">
      <div className={pageWrap}>
        <SectionHeading
          eyebrow="Treatments"
          title="Care for the concerns families bring us most"
          description="Six core specialties, one reception, and a care desk that helps you reach the right doctor."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => {
            const Icon = icons[specialty.icon];
            return (
              <li key={specialty.title}>
                <article className={`group relative flex h-full flex-col overflow-hidden ${glassCard} p-5`}>
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-emerald-400/0 opacity-0 transition duration-300 group-hover:from-cyan-400/10 group-hover:to-emerald-400/10 group-hover:opacity-100" />
                  <span className="relative grid h-12 w-12 place-items-center rounded-full bg-cyan-50 text-cyan-700 shadow-[0_0_16px_rgba(6,182,212,0.25)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-4 text-lg font-semibold text-navy">{specialty.title}</h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">{specialty.description}</p>
                  <button
                    type="button"
                    onClick={() => requestBooking({ specialty: specialty.title })}
                    className="relative mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-cyan-800"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
