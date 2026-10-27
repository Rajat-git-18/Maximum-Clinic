"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, scrollToSection, site, whatsappHref } from "@/lib/site";
import { useBooking } from "@/components/booking-provider";
import { ContactLink } from "@/components/contact-link";
import { Logo, WhatsAppIcon } from "@/components/ui";

export function Header() {
  const { requestBooking } = useBooking();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  function handleNav(href: string) {
    setOpen(false);
    scrollToSection(href.replace("#", ""));
  }

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto flex max-w-7xl items-center gap-3 rounded-full border border-slate-200/70 bg-white/80 px-3 py-2 shadow-sm backdrop-blur-md transition-shadow sm:px-5 ${
          scrolled ? "shadow-[0_10px_30px_rgba(15,23,42,0.08)]" : ""
        }`}
      >
        <Logo />

        <nav className="ml-4 hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm font-semibold text-slate-600 transition hover:text-navy"
              onClick={(event) => {
                event.preventDefault();
                handleNav(link.href);
              }}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ContactLink
            href={whatsappHref(site.whatsappGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-emerald-500 px-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.45)] transition duration-300 hover:scale-[1.03] hover:bg-emerald-600 sm:px-4"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sr-only sm:hidden">WhatsApp</span>
          </ContactLink>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              requestBooking();
            }}
            className="inline-flex h-10 items-center justify-center rounded-full bg-navy px-3 text-sm font-semibold text-white transition duration-300 hover:bg-slate-900 sm:px-4"
          >
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book Appointment</span>
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="mx-auto mt-2 max-h-[calc(100vh-6rem)] max-w-7xl overflow-y-auto rounded-3xl border border-slate-200/70 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-md lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full px-4 py-3 text-base font-semibold text-navy hover:bg-cyan-50"
                  onClick={(event) => {
                    event.preventDefault();
                    handleNav(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
