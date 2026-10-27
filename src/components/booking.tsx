"use client";

import { CircleCheck, Phone } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  addDaysISO,
  bookingMessage,
  departments,
  formatDisplayDate,
  normalizePhone,
  openWhatsAppChat,
  site,
  todayISO,
  whatsappHref,
} from "@/lib/site";
import { useBooking } from "@/components/booking-provider";
import { ContactLink } from "@/components/contact-link";
import { WhatsAppIcon, ctaEmerald, ctaGlass, pageWrap } from "@/components/ui";

type FormState = {
  name: string;
  phone: string;
  date: string;
  specialty: string;
  note: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: "",
  phone: "",
  date: "",
  specialty: "",
  note: "",
};

const fieldClass =
  "mt-1.5 h-12 w-full rounded-full border border-slate-200 bg-white/80 px-4 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:shadow-[0_0_0_4px_rgba(6,182,212,0.12)]";

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  const name = form.name.trim();
  if (name.length < 2) errors.name = "Enter the patient’s full name.";
  else if (!/^[\p{L}\s.'-]{2,80}$/u.test(name)) errors.name = "Use letters only for the name.";

  const phone = normalizePhone(form.phone);
  if (!/^[6-9]\d{9}$/.test(phone)) errors.phone = "Enter a 10-digit Indian mobile number.";

  if (!form.date) errors.date = "Choose a preferred date.";
  else if (form.date < todayISO()) errors.date = "Choose today or a future date.";
  else if (form.date > addDaysISO(90)) errors.date = "Bookings open up to 90 days ahead.";

  if (!form.specialty) errors.specialty = "Select a department.";
  if (form.note.trim().length > 300) errors.note = "Keep the note under 300 characters.";

  return errors;
}

export function Booking() {
  const { prefill, token } = useBooking();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [doctor, setDoctor] = useState("");
  const [doctorSpecialty, setDoctorSpecialty] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [readyMessage, setReadyMessage] = useState("");
  const [appliedToken, setAppliedToken] = useState(token);

  if (token !== appliedToken) {
    setAppliedToken(token);
    setDoctor(prefill.doctor ?? "");
    setDoctorSpecialty(prefill.doctor ? (prefill.specialty ?? "") : "");
    setForm((current) => ({
      ...current,
      specialty: prefill.specialty ?? current.specialty,
      note: prefill.note ?? (prefill.doctor ? `I would like to consult ${prefill.doctor}.` : current.note),
    }));
    setErrors({});
    setStatus("idle");
  }

  useEffect(() => {
    if (token === 0) return;
    const timer = window.setTimeout(() => {
      document.getElementById("patient-name")?.focus({ preventScroll: true });
    }, 450);
    return () => window.clearTimeout(timer);
  }, [token]);

  const bindDate = useCallback((node: HTMLInputElement | null) => {
    if (!node) return;
    node.min = todayISO();
    node.max = addDaysISO(90);
  }, []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (status === "ready") setStatus("idle");
  }

  function snapshot() {
    return {
      name: form.name.trim(),
      phone: normalizePhone(form.phone),
      date: form.date,
      specialty: form.specialty,
      doctor,
      note: form.note.trim(),
    };
  }

  function openWhatsApp() {
    if (!site.contactActionsEnabled) return;
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    const message = bookingMessage(snapshot());
    setReadyMessage(message);
    setStatus("ready");
    openWhatsAppChat(message);
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    openWhatsApp();
  }

  return (
    <section id="booking" className="py-16 sm:py-20">
      <div className={`${pageWrap} grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]`}>
        <div>
          <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-800">
            Appointments
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Book a visit in under a minute
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Tell us who is coming, which specialty you need, and the day that suits you. The care desk confirms the time by phone or WhatsApp.
          </p>
          <ol className="mt-6 space-y-4">
            {[
              "Share your name, number, and preferred day.",
              "Send the request on WhatsApp, or call the clinic.",
              "Arrive once the care desk has confirmed the slot.",
            ].map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm leading-relaxed text-foreground">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-2xl border border-line bg-white p-4 text-sm leading-relaxed text-muted shadow-sm">
            For chest pain, severe bleeding, trouble breathing, or a child who is hard to wake, call emergency{" "}
            <ContactLink className="font-semibold text-navy" href={`tel:${site.emergencyTel}`}>
              {site.emergencyDisplay}
            </ContactLink>{" "}
            or go to the nearest hospital. Do not wait on this form.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-slate-100 bg-white/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-md sm:p-7">
          {status === "ready" ? (
            <div role="status" aria-live="polite">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                <CircleCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-navy">Opening WhatsApp with your request</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                If WhatsApp did not open, use the button below. The care desk confirms the time in that chat. This page does not hold a slot by itself.
              </p>
              <dl className="mt-5 space-y-2 rounded-2xl bg-slate-50 p-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Name</dt>
                  <dd className="font-semibold text-navy">{form.name.trim()}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Phone</dt>
                  <dd className="font-semibold text-navy">{normalizePhone(form.phone)}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Date</dt>
                  <dd className="text-right font-semibold text-navy">{formatDisplayDate(form.date)}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Department</dt>
                  <dd className="text-right font-semibold text-navy">{form.specialty}</dd>
                </div>
                {doctor ? (
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Doctor</dt>
                    <dd className="text-right font-semibold text-navy">{doctor}</dd>
                  </div>
                ) : null}
              </dl>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <ContactLink
                  href={whatsappHref(readyMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaEmerald} flex-1`}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Send on WhatsApp
                </ContactLink>
                <ContactLink
                  href={`tel:${site.phoneTel}`}
                  className={`${ctaGlass} flex-1`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call the clinic
                </ContactLink>
              </div>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm font-semibold text-teal-ink"
              >
                Edit details
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-navy">Appointment request</h3>
                  <p className="mt-1 text-sm text-muted">Fields marked required must be filled before sending.</p>
                </div>
              </div>

              {doctor ? (
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-teal-ink">
                  Requested doctor: {doctor}
                  <button
                    type="button"
                    className="underline"
                    onClick={() => {
                      setDoctor("");
                      setDoctorSpecialty("");
                      setForm((current) => ({
                        ...current,
                        note: current.note.startsWith("I would like to consult") ? "" : current.note,
                      }));
                    }}
                  >
                    Remove
                  </button>
                </p>
              ) : null}

              {Object.values(errors).some(Boolean) ? (
                <p role="alert" className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  Please correct the highlighted fields.
                </p>
              ) : null}

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-navy sm:col-span-2">
                  Full name
                  <input
                    id="patient-name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    className={fieldClass}
                    placeholder="Patient’s full name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                  />
                  {errors.name ? (
                    <span id="name-error" className="mt-1 block text-xs font-medium text-rose-600">
                      {errors.name}
                    </span>
                  ) : null}
                </label>

                <label className="block text-sm font-semibold text-navy">
                  Phone number
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    className={fieldClass}
                    placeholder="10-digit mobile"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    required
                  />
                  {errors.phone ? (
                    <span id="phone-error" className="mt-1 block text-xs font-medium text-rose-600">
                      {errors.phone}
                    </span>
                  ) : null}
                </label>

                <label className="block text-sm font-semibold text-navy">
                  Preferred date
                  <input
                    ref={bindDate}
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={(event) => update("date", event.target.value)}
                    className={fieldClass}
                    aria-invalid={Boolean(errors.date)}
                    aria-describedby={errors.date ? "date-error" : undefined}
                    required
                  />
                  {errors.date ? (
                    <span id="date-error" className="mt-1 block text-xs font-medium text-rose-600">
                      {errors.date}
                    </span>
                  ) : null}
                </label>

                <label className="block text-sm font-semibold text-navy sm:col-span-2">
                  Department / specialty
                  <select
                    name="specialty"
                    value={form.specialty}
                    onChange={(event) => {
                      const value = event.target.value;
                      update("specialty", value);
                      if (doctor && doctorSpecialty && value !== doctorSpecialty) setDoctor("");
                    }}
                    className={fieldClass}
                    aria-invalid={Boolean(errors.specialty)}
                    aria-describedby={errors.specialty ? "specialty-error" : undefined}
                    required
                  >
                    <option value="">Select a department</option>
                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                  {errors.specialty ? (
                    <span id="specialty-error" className="mt-1 block text-xs font-medium text-rose-600">
                      {errors.specialty}
                    </span>
                  ) : null}
                </label>

                <label className="block text-sm font-semibold text-navy sm:col-span-2">
                  Optional note
                  <textarea
                    name="note"
                    value={form.note}
                    onChange={(event) => update("note", event.target.value)}
                    className={`${fieldClass} h-28 resize-y rounded-[1.5rem] py-3`}
                    placeholder="Symptoms, preferred time, or the doctor you want to see"
                    maxLength={300}
                    aria-invalid={Boolean(errors.note)}
                    aria-describedby={errors.note ? "note-error" : undefined}
                  />
                  {errors.note ? (
                    <span id="note-error" className="mt-1 block text-xs font-medium text-rose-600">
                      {errors.note}
                    </span>
                  ) : null}
                </label>
              </div>

              <div className="mt-5">
                <button type="submit" className={`${ctaEmerald} w-full`}>
                  Confirm Appointment
                  <WhatsAppIcon className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Confirm Appointment opens WhatsApp with your name, number, specialty, and date filled in. The clinic confirms the time there.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
