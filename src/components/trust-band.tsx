import { Building2, MessageCircle, ShieldCheck } from "lucide-react";
import { pageWrap } from "@/components/ui";

const points = [
  {
    icon: Building2,
    title: "Six specialties, one roof",
    text: "Medicine, children, bones, women’s health, skin, and heart consultations.",
  },
  {
    icon: ShieldCheck,
    title: "A calm, hygienic OPD",
    text: "Clean rooms, clear queues, and time to explain the plan in plain language.",
  },
  {
    icon: MessageCircle,
    title: "Reply on phone or WhatsApp",
    text: "The care desk confirms your visit so you are not left guessing.",
  },
];

export function TrustBand() {
  return (
    <section className="py-4" aria-label="Why patients choose Maximum Clinics">
      <ul className={`${pageWrap} grid gap-3 sm:grid-cols-3`}>
        {points.map((point) => (
          <li key={point.title} className="flex gap-4 rounded-[1.75rem] border border-slate-100 bg-white/70 px-5 py-5 shadow-sm backdrop-blur-md">
            <point.icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" aria-hidden="true" />
            <span>
              <span className="block font-semibold text-navy">{point.title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-muted">{point.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
