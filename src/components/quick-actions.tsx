"use client";

import { ArrowUpRight, CalendarCheck, FlaskConical, MapPinned, Pill, type LucideIcon } from "lucide-react";
import { openWhatsAppChat, quickActions, scrollToSection, type QuickAction } from "@/lib/site";
import { useBooking } from "@/components/booking-provider";
import { pageWrap, glassCard } from "@/components/ui";

const icons: Record<QuickAction["icon"], LucideIcon> = {
  calendar: CalendarCheck,
  lab: FlaskConical,
  pharmacy: Pill,
  directions: MapPinned,
};

const iconStyles: Record<QuickAction["icon"], string> = {
  calendar: "bg-navy text-white",
  lab: "bg-cyan-50 text-teal-ink",
  pharmacy: "bg-emerald-50 text-emerald-700",
  directions: "bg-sky-50 text-sky-700",
};

export function QuickActions() {
  const { requestBooking } = useBooking();

  function run(action: QuickAction) {
    if (action.kind === "book") {
      requestBooking(action.specialty ? { specialty: action.specialty } : undefined);
      return;
    }
    if (action.kind === "whatsapp" && action.message) {
      openWhatsAppChat(action.message);
      return;
    }
    if (action.targetId) scrollToSection(action.targetId);
  }

  return (
    <section className="relative z-10 pb-6" aria-label="Quick actions">
      <div className={`${pageWrap} grid gap-3 sm:grid-cols-2 lg:grid-cols-4`}>
        {quickActions.map((action) => {
          const Icon = icons[action.icon];
          return (
            <button
              key={action.title}
              type="button"
              onClick={() => run(action)}
              className={`group flex h-full flex-col ${glassCard} p-5 text-left hover:border-cyan-200`}
            >
              <span className="flex items-start justify-between gap-3">
                <span className={`grid h-12 w-12 place-items-center rounded-full shadow-[0_0_16px_rgba(6,182,212,0.25)] ${iconStyles[action.icon]}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-teal-ink" aria-hidden="true" />
              </span>
              <span className="mt-4 block text-sm font-semibold text-navy">{action.title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-muted">{action.description}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
