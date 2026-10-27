"use client";

import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef } from "react";
import { reviews } from "@/lib/site";
import { SectionHeading, pageWrap } from "@/components/ui";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollCards(direction: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector("article");
    const distance = (card?.clientWidth ?? scroller.clientWidth * 0.85) + 16;
    scroller.scrollBy({ left: direction * distance, behavior: "smooth" });
  }

  return (
    <section id="reviews" className="py-16 sm:py-20">
      <div className={pageWrap}>
        <div className="grid items-end gap-8 lg:grid-cols-[17.5rem_minmax(0,1fr)]">
          <div className="min-w-0">
            <SectionHeading
              align="left"
              eyebrow="Patient reviews"
              title="Families in Jammu, in their own words"
              description="Short waits, plain-language explanations, and a clinic that feels looked after — the things patients mention after a visit."
            />
            <div className="mt-6 rounded-[1.75rem] bg-slate-900 p-5 text-white shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <p className="text-4xl font-semibold tracking-tight">4.8</p>
              <Stars rating={5} />
              <p className="mt-2 text-sm text-white/75">Rating on Google Reviews</p>
            </div>
          </div>

          <div className="min-w-0">
            <div className="mb-3 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => scrollCards(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-navy shadow-sm hover:shadow-md"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCards(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-navy shadow-sm hover:shadow-md"
                aria-label="Next reviews"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div
              ref={scrollerRef}
              className="scrollbar-none flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
            >
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="w-[85%] max-w-md shrink-0 snap-start rounded-[1.75rem] border border-slate-100 bg-white/80 p-5 shadow-sm backdrop-blur-md sm:w-[calc(50%-8px)]"
                >
                  <Stars rating={review.rating} />
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{review.text}</p>
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-navy">{review.name}</p>
                      <p className="text-xs text-muted">
                        {review.area}, Jammu · {review.service}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">
                      <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      Jammu patient
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
