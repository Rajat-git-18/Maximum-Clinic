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
    <header
      className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur-md transition-shadow ${
        scrolled ? "border-slate-200 shadow-[0_8px_24px_rgba(10,77,104,0.06)]" : "border-slate-200/80"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-navy"
              onClick={(event) => {
                event.preventDefault();
                handleNav(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ContactLink
            href={whatsappHref(site.whatsappGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
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
            className="inline-flex h-10 items-center justify-center rounded-xl bg-navy px-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-deep sm:px-4"
          >
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book Appointment</span>
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-navy lg:hidden"
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
        <nav id="mobile-nav" className="border-t border-slate-200 bg-white lg:hidden" aria-label="Mobile">
          <ul className="mx-auto flex w-full max-w-7xl flex-col px-3 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-navy hover:bg-slate-50"
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
