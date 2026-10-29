import { Clock3, MapPin, Phone, Siren } from "lucide-react";
import { ContactLink } from "@/components/contact-link";
import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden bg-slate-900 text-white sm:block">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2 text-xs font-medium sm:px-6 lg:px-8">
        <ContactLink href={`tel:${site.phoneTel}`} className="inline-flex items-center gap-1.5 hover:text-cyan-100">
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          {site.phoneDisplay}
        </ContactLink>
        <ContactLink
          href={`tel:${site.emergencyTel}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 hover:bg-white/15"
        >
          <Siren className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
          Emergency {site.emergencyDisplay}
        </ContactLink>
        <span className="inline-flex items-center gap-1.5 text-white/85">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {site.city}
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1">
          <Clock3 className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
          {site.hoursBadge}
        </span>
      </div>
    </div>
  );
}
