import { site, whatsappHref } from "@/lib/site";
import { ContactLink } from "@/components/contact-link";
import { WhatsAppIcon } from "@/components/ui";

export function WhatsAppFloat() {
  return (
    <ContactLink
      href={whatsappHref(site.whatsappGreeting)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center sm:right-6 sm:bottom-6"
      aria-label="Chat with Maximum Clinics on WhatsApp"
    >
      <span className="wa-pulse absolute inset-0 rounded-full bg-emerald-400/70" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition-transform duration-300 hover:scale-110">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </ContactLink>
  );
}
