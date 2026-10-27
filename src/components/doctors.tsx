"use client";

import { Clock3 } from "lucide-react";
import Image from "next/image";
import { doctors } from "@/lib/site";
import { useBooking } from "@/components/booking-provider";
import { SectionHeading, ctaEmerald, glassCard, pageWrap } from "@/components/ui";

export function Doctors() {
  const { requestBooking } = useBooking();

  return (
    <section id="doctors" className="py-16 sm:py-20">
      <div className={pageWrap}>
        <SectionHeading
          eyebrow="Our doctors"
          title="Specialists you can book by name"
          description="Lead consultants for each core specialty. Hours can change on festival days — the care desk confirms your slot before you travel."
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <li key={doctor.name}>
              <article className={`group flex h-full flex-col overflow-hidden ${glassCard}`}>
                <div className="relative h-64 bg-slate-100">
                  <Image
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-semibold text-cyan-800">
                    {doctor.specialty}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-navy">{doctor.name}</h3>
                  <p className="mt-1 text-sm text-muted">{doctor.qualifications}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{doctor.focus}</p>
                  <p className="mt-3 text-sm font-medium text-navy">{doctor.experience} in practice</p>
                  <p className="mt-2 inline-flex items-start gap-2 text-sm text-muted">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-teal-ink" aria-hidden="true" />
                    {doctor.hours}
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      requestBooking({
                        specialty: doctor.specialty,
                        doctor: doctor.name,
                        note: `I would like to consult ${doctor.name}.`,
                      })
                    }
                    className={`${ctaEmerald} mt-5 w-full`}
                  >
                    Book with {doctor.name}
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
