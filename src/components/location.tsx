import { Clock3, MapPin, Navigation, Phone } from "lucide-react";
import { mapsDirectionsHref, mapsEmbedSrc, site } from "@/lib/site";
import { ContactLink } from "@/components/contact-link";
import { OpenNowBadge } from "@/components/open-now";
import { ctaEmerald, pageWrap } from "@/components/ui";

export function Location() {
  return (
    <section id="location" className="py-16 sm:py-20">
      <div className={`${pageWrap} grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]`}>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-800">
              Location
            </p>
            <OpenNowBadge />
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Visit us in Jammu</h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Maximum Clinics sits on Residency Road, a short walk from Jewel Chowk. Call ahead if you are coming with a child or need help at the entrance.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex gap-3 rounded-[1.75rem] border border-slate-100 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-ink" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold text-navy">Address</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">
                  {site.addressLines.join(", ")}
                </span>
              </span>
            </li>
            <li className="flex gap-3 rounded-[1.75rem] border border-slate-100 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal-ink" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold text-navy">Phone</span>
                <ContactLink className="mt-1 block text-sm font-semibold text-navy hover:text-teal-ink" href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </ContactLink>
                <ContactLink className="block text-sm text-muted hover:text-teal-ink" href={`tel:${site.emergencyTel}`}>
                  Emergency {site.emergencyDisplay}
                </ContactLink>
              </span>
            </li>
            <li className="flex gap-3 rounded-[1.75rem] border border-slate-100 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-teal-ink" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold text-navy">Clinic timings</span>
                <ul className="mt-1 space-y-1">
                  {site.hours.map((row) => (
                    <li key={row.label} className="flex justify-between gap-4 text-sm text-muted">
                      <span>{row.label}</span>
                      <span className="font-medium text-navy">{row.value}</span>
                    </li>
                  ))}
                </ul>
              </span>
            </li>
          </ul>

          <a
            href={mapsDirectionsHref()}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaEmerald} mt-5`}
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Get directions
          </a>
        </div>

        <div className="min-h-80 overflow-hidden rounded-[1.75rem] border border-slate-100 bg-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <iframe
            title="Map showing Maximum Clinics on Residency Road, Jammu"
            src={mapsEmbedSrc()}
            className="h-full min-h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
