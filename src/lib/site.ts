/**
 * Clinic content for the Maximum Clinics site.
 * Replace the phone numbers, WhatsApp ID, address, doctors, and reviews
 * before this page is used with real patients.
 */

export const site = {
  name: "Maximum Clinics",
  city: "Jammu, J&K",
  phoneDisplay: "+91 99999 99999",
  phoneTel: "+919999999999",
  emergencyDisplay: "+91 99999 99900",
  emergencyTel: "+919999999900",
  /** Country code + number, no plus sign. Used by https://wa.me/ */
  whatsappNumber: "919999999999",
  whatsappGreeting: "Hi Maximum Clinics, I want to book an appointment",
  addressLines: ["14, Residency Road", "Near Jewel Chowk", "Jammu, Jammu & Kashmir 180001"],
  mapsQuery: "Residency Road, Jewel Chowk, Jammu",
  hoursBadge: "Mon–Sat · 9:00 AM – 8:00 PM",
  hours: [
    { label: "Monday – Saturday", value: "9:00 AM – 8:00 PM" },
    { label: "Sunday", value: "10:00 AM – 2:00 PM" },
    { label: "Emergency phone", value: "24 × 7" },
  ],
  instagram: "https://instagram.com/maximumclinics",
  facebook: "https://facebook.com/maximumclinics",
  instagramHandle: "@maximumclinics",
  /**
   * WhatsApp chats and phone calls stay off until the client approves.
   * Set this to true to open wa.me and tel: links again.
   */
  contactActionsEnabled: false,
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#specialties", label: "Specialties" },
  { href: "#doctors", label: "Our Doctors" },
  { href: "#reviews", label: "Patient Reviews" },
  { href: "#location", label: "Location" },
] as const;

export type SpecialtyIcon =
  | "stethoscope"
  | "baby"
  | "bone"
  | "venus"
  | "sparkles"
  | "heart";

export type Specialty = {
  title: string;
  description: string;
  icon: SpecialtyIcon;
};

export const specialties: Specialty[] = [
  {
    title: "Cardiology",
    description: "Blood pressure, chest discomfort, and heart-health opinions on scheduled days.",
    icon: "heart",
  },
  {
    title: "Orthopedics",
    description: "Joint pain, fractures, back pain, and sports injuries, with a clear recovery plan.",
    icon: "bone",
  },
  {
    title: "Pediatrics",
    description: "Unhurried visits for newborns, children, and teens — illness, growth, and vaccines.",
    icon: "baby",
  },
  {
    title: "Dermatology",
    description: "Acne, allergies, hair fall, and skin procedures guided by a dermatologist.",
    icon: "sparkles",
  },
  {
    title: "General Medicine",
    description: "Fever, diabetes, blood pressure, and everyday adult care with a senior physician.",
    icon: "stethoscope",
  },
  {
    title: "Gynaecology",
    description: "Women’s health, menstrual concerns, and pregnancy counselling in a private setting.",
    icon: "venus",
  },
];

export const departments = [
  ...specialties.map((item) => item.title),
  "Lab Tests & Diagnostics",
  "Pharmacy Query",
] as const;

export type QuickActionKind = "book" | "whatsapp" | "scroll";

export type QuickAction = {
  title: string;
  description: string;
  icon: "calendar" | "lab" | "pharmacy" | "directions";
  kind: QuickActionKind;
  specialty?: string;
  message?: string;
  targetId?: string;
};

export const quickActions: QuickAction[] = [
  {
    title: "Book Specialist",
    description: "Choose a department and send your preferred day on WhatsApp.",
    icon: "calendar",
    kind: "book",
  },
  {
    title: "Lab Tests & Diagnostics",
    description: "Ask about blood work and routine tests available at the clinic.",
    icon: "lab",
    kind: "book",
    specialty: "Lab Tests & Diagnostics",
  },
  {
    title: "Pharmacy Support",
    description: "Message the care desk about a prescription or medicine availability.",
    icon: "pharmacy",
    kind: "whatsapp",
    message: "Hi Maximum Clinics, I have a question about medicines.",
  },
  {
    title: "Jammu Clinic Location & Hours",
    description: "Residency Road, near Jewel Chowk. See the map and timings.",
    icon: "directions",
    kind: "scroll",
    targetId: "location",
  },
];

export type Doctor = {
  name: string;
  specialty: string;
  qualifications: string;
  experience: string;
  hours: string;
  focus: string;
  image: string;
  imageAlt: string;
};

export const doctors: Doctor[] = [
  {
    name: "Dr. Ananya Sharma",
    specialty: "General Medicine",
    qualifications: "MBBS, MD (General Medicine)",
    experience: "14 years",
    hours: "Mon, Wed, Fri · 10:00 AM – 1:30 PM",
    focus: "Diabetes, blood pressure, fever, and adult check-ups.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Portrait of Dr. Ananya Sharma",
  },
  {
    name: "Dr. Rohit Khajuria",
    specialty: "Orthopedics",
    qualifications: "MBBS, MS (Orthopedics)",
    experience: "12 years",
    hours: "Tue, Thu, Sat · 11:00 AM – 3:00 PM",
    focus: "Knee and back pain, fractures, and mobility care.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Portrait of Dr. Rohit Khajuria",
  },
  {
    name: "Dr. Mehak Gupta",
    specialty: "Gynaecology",
    qualifications: "MBBS, MS (Obstetrics & Gynecology)",
    experience: "11 years",
    hours: "Mon–Sat · 2:30 PM – 6:00 PM",
    focus: "Women’s health visits and pregnancy counselling.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Portrait of Dr. Mehak Gupta",
  },
  {
    name: "Dr. Farhan Ahmed",
    specialty: "Pediatrics",
    qualifications: "MBBS, MD (Pediatrics)",
    experience: "10 years",
    hours: "Mon–Fri · 4:00 PM – 7:30 PM",
    focus: "Childhood illness, growth, and vaccination advice.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Portrait of Dr. Farhan Ahmed",
  },
  {
    name: "Dr. Priya Raina",
    specialty: "Dermatology",
    qualifications: "MBBS, MD (Dermatology)",
    experience: "9 years",
    hours: "Wed, Fri, Sat · 11:00 AM – 4:00 PM",
    focus: "Acne, skin allergies, and hair concerns.",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Portrait of Dr. Priya Raina",
  },
  {
    name: "Dr. Vikram Singh",
    specialty: "Cardiology",
    qualifications: "MBBS, MD, DM (Cardiology)",
    experience: "16 years",
    hours: "Thu & Sat · 9:30 AM – 1:00 PM",
    focus: "Blood pressure reviews and heart-health opinions.",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Portrait of Dr. Vikram Singh",
  },
];

export type Review = {
  name: string;
  area: string;
  rating: number;
  service: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Neha Gupta",
    area: "Gandhi Nagar",
    rating: 5,
    service: "General Medicine",
    text: "I brought my father for a blood-pressure review. We were called close to our time, and the doctor explained every tablet in simple words. The waiting area was clean and quiet.",
  },
  {
    name: "Imran Malik",
    area: "Bakshi Nagar",
    rating: 5,
    service: "Orthopedics",
    text: "Knee pain had kept me from Friday prayers. Dr. Khajuria examined me properly and told me what to do this week, not just what to buy. Staff helped me book the follow-up on WhatsApp.",
  },
  {
    name: "Suman Devi",
    area: "Trikuta Nagar",
    rating: 5,
    service: "Gynaecology",
    text: "I felt comfortable from the reception onwards. The consultation was private, unhurried, and I left knowing exactly when to come back. A relief to have this in Jammu.",
  },
  {
    name: "Arjun Sharma",
    area: "Residency Road",
    rating: 4,
    service: "Pediatrics",
    text: "Our son had a high fever at night. The care desk picked up, gave us a morning slot, and the pediatrician was gentle with him. We waited a little, but the visit itself was thorough.",
  },
  {
    name: "Ruksana Bano",
    area: "Talab Tillo",
    rating: 5,
    service: "Dermatology",
    text: "I had tried creams on my own for months. Here they looked at my skin properly and wrote a plan I could follow. The clinic feels hygienic, which mattered to me.",
  },
];

export const heroImage = {
  src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1600&q=80",
  alt: "Physician speaking with a patient during a consultation",
};

export function isClinicOpen(now: Date) {
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  if (day === 0) return minutes >= 10 * 60 && minutes < 14 * 60;
  return minutes >= 9 * 60 && minutes < 20 * 60;
}

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Opens WhatsApp only while contact actions are approved. Returns false when they are off. */
export function openWhatsAppChat(message: string) {
  if (!site.contactActionsEnabled) return false;
  window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  return true;
}

export function mapsEmbedSrc() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&output=embed`;
}

export function mapsDirectionsHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToSection(id: string) {
  if (id === "home") {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
    return;
  }

  document.getElementById(id)?.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
}

export function todayISO() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

export function addDaysISO(days: number) {
  const now = new Date();
  now.setDate(now.getDate() + days);
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

export function formatDisplayDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  return new Date(year, month - 1, day).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}

export function bookingMessage(details: {
  name: string;
  phone: string;
  date: string;
  specialty: string;
  doctor?: string;
  note?: string;
}) {
  const lines = [
    site.whatsappGreeting + ".",
    "",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Preferred date: ${formatDisplayDate(details.date)}`,
    `Department: ${details.specialty}`,
  ];

  if (details.doctor) lines.push(`Doctor: ${details.doctor}`);
  if (details.note?.trim()) lines.push(`Note: ${details.note.trim()}`);
  lines.push("", "Please confirm a suitable time.");
  return lines.join("\n");
}
