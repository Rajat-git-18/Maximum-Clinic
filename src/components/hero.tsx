"use client";

import { ArrowRight, Star, Zap } from "lucide-react";
import Image from "next/image";
import { heroImage, site, whatsappHref } from "@/lib/site";
import { useBooking } from "@/components/booking-provider";
import { ContactLink } from "@/components/contact-link";
import { Pill, WhatsAppIcon, ctaEmerald, ctaGlass, pageWrap } from "@/components/ui";

export function Hero() {
  const { requestBooking } = useBooking();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.22),transparent_36%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_28%)]" />
      <div className={`${pageWrap} relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20`}>
        <div className="fade-up">
          <Pill>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Premier Healthcare in Jammu, J&K
          </Pill>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.08] lg:text-6xl">
            Healthcare That Cares. Medicine That Heals.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Expert specialists, diagnostic lab, and personal care available right here in Jammu.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => requestBooking()} className={ctaEmerald}>
              Book Instant Appointment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <ContactLink
              href={whatsappHref(site.whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaGlass}
            >
              <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
              Chat on WhatsApp
            </ContactLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {["Top Jammu specialists", "On-site diagnostics", "Care desk on WhatsApp"].map((item) => (
              <li key={item}>
                <Pill>{item}</Pill>
              </li>
            ))}
          </ul>
        </div>

        <div className="fade-up-delayed relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.18)] ring-1 ring-white/40">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={1200}
              height={1500}
              priority
              className="aspect-[5/4] h-auto w-full object-cover sm:aspect-[4/5] lg:aspect-auto lg:h-[540px]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
              <p className="text-sm font-medium text-cyan-100">Same-day slots, when available</p>
              <p className="mt-1 text-xl font-semibold">Care that starts by listening</p>
            </div>
          </div>

          <div className="float-card absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/70 bg-white/85 px-3 py-2 shadow-md backdrop-blur-md">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-amber-50 text-amber-500">
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-900">4.8 Google Rating</span>
              <span className="block text-[11px] text-muted">Patient reviews</span>
            </span>
          </div>

          <div className="float-card-delayed absolute top-20 right-4 flex items-center gap-2 rounded-full border border-white/70 bg-white/85 px-3 py-2 shadow-md backdrop-blur-md sm:top-24">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <Zap className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-900">15 Min Avg Wait</span>
              <span className="block text-[11px] text-muted">Once you are checked in</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
