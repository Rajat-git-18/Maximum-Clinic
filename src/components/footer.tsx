import { navLinks, site } from "@/lib/site";
import { ContactLink } from "@/components/contact-link";
import { Logo, pageWrap } from "@/components/ui";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.1C12.2 3 11 4.4 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.3l.4-2.8h-2.7z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-8 bg-slate-900 text-white">
      <div className={`${pageWrap} grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4`}>
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Multi-specialty care in Jammu — senior doctors, a clean OPD, and a care desk that confirms every visit.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#booking" className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">
                Book Appointment
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>{site.addressLines.join(", ")}</li>
            <li>
              <ContactLink className="hover:text-white" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </ContactLink>
            </li>
            <li>
              <ContactLink className="hover:text-white" href={`tel:${site.emergencyTel}`}>
                Emergency {site.emergencyDisplay}
              </ContactLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Follow</p>
          <div className="mt-3 flex gap-2">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/15"
              aria-label={`Instagram ${site.instagramHandle}`}
            >
              <InstagramIcon />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/15"
              aria-label="Facebook Maximum Clinics"
            >
              <FacebookIcon />
            </a>
          </div>
          <p className="mt-3 text-sm text-white/70">{site.instagramHandle}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className={`${pageWrap} py-4 text-xs text-white/60`}>
          © 2026 Maximum Clinics, Jammu. All rights reserved. For a medical emergency, call the emergency line or go to the nearest hospital.
        </p>
      </div>
    </footer>
  );
}
