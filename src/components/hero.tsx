"use client";

import { ArrowRight, Clock3, Star, Stethoscope } from "lucide-react";
import Image from "next/image";
import { heroImage, site, whatsappHref } from "@/lib/site";
import { useBooking } from "@/components/booking-provider";
import { ContactLink } from "@/components/contact-link";
import { WhatsAppIcon, pageWrap } from "@/components/ui";

const proof = [
  { value: "4.8", label: "Google rating", icon: Star },
  { value: "6", label: "Specialties, one roof", icon: Stethoscope },
  { value: "15 min", label: "After check-in", icon: Clock3 },
];

export function Hero() {
  const { requestBooking } = useBooking();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f3fafc_0%,#ffffff_62%)]">
      <div className={`${pageWrap} grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-16`}>
        <div className="fade-up">
          <p className="text-xs font-semibold tracking-[0.22em] text-teal-ink uppercase">Jammu · Multi-specialty clinic</p>
          <h1 className="mt-4 max-w-xl text-[2.55rem] leading-[1.05] font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Healthcare That Cares.
            <span className="mt-1 block text-navy">Medicine That Heals.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
            Expert specialists, diagnostic lab, and personal care available right here in Jammu.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => requestBooking()}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-navy px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(10,77,104,0.22)] transition hover:bg-navy-deep"
            >
              Book Instant Appointment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <ContactLink
              href={whatsappHref(site.whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-navy shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
              Chat on WhatsApp
            </ContactLink>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-slate-200/80 pt-6">
            {proof.map((item) => (
              <div key={item.label}>
                <dt className="flex items-center gap-1.5 text-xl font-semibold tracking-tight text-navy sm:text-2xl">
                  <item.icon className="h-4 w-4 text-teal-ink" aria-hidden="true" />
                  {item.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="fade-up-delayed relative">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-[0_24px_60px_rgba(10,77,104,0.16)]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={1200}
              height={1500}
              priority
              className="aspect-[4/3] h-auto w-full object-cover object-[center_22%] sm:aspect-[5/4] lg:aspect-auto lg:h-[560px]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
          </div>

          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md sm:inset-x-5 sm:bottom-5">
            <div>
              <p className="text-sm font-semibold text-navy">Same-day slots, when available</p>
              <p className="mt-0.5 text-xs text-muted">Care that starts by listening</p>
            </div>
            <span className="hidden shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 sm:inline">
              Consults in Jammu
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
