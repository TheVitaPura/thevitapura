"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_CATEGORIES = [
  "Kitchen",
  "Bathroom",
  "Laundry",
  "Air & Water",
  "Cleaning",
  "Baby",
  "Pets",
];

interface CategorySectionProps {
  categories?: { name: string }[];
}

export default function CategorySection({ categories }: CategorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  const categoryNames =
    categories?.length ? categories.map((c) => c.name) : DEFAULT_CATEGORIES;

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const pillsContainer = pillsRef.current;
    const bg = bgRef.current;
    if (!section || !title || !pillsContainer || !bg) return;

    const ctx = gsap.context(() => {
      const pills = pillsContainer.querySelectorAll(".category-pill");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.6,
        },
      });

      // Animate title in from left
      tl.fromTo(
        title,
        { x: "-55vw", opacity: 0 },
        { x: 0, opacity: 1, ease: "none" },
        0
      );

      // Animate pills in from right with stagger
      tl.fromTo(
        pills,
        { x: "55vw", y: "10vh", opacity: 0, scale: 0.92 },
        { x: 0, y: 0, opacity: 1, scale: 1, stagger: 0.03, ease: "none" },
        0.06
      );

      // Animate out
      tl.fromTo(
        title,
        { x: 0, opacity: 1 },
        { x: "-18vw", opacity: 0, ease: "power2.in" },
        0.7
      ).fromTo(
        pills,
        { x: 0, opacity: 1 },
        { x: "18vw", opacity: 0, stagger: 0.02, ease: "power2.in" },
        0.72
      ).fromTo(
        bg,
        { scale: 1, y: 0 },
        { scale: 1.06, y: "-2vh", ease: "none" },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned z-20">
      <img
        ref={bgRef}
        src="/images/category_bg.jpg"
        alt="Botanical background"
        className="bg-botanical"
      />
      <div className="absolute inset-0 vignette-overlay" />
      <div className="absolute inset-0 flex items-center">
        <div ref={titleRef} className="absolute left-[7vw] top-[18vh] w-[34vw]">
          <p className="text-xs uppercase tracking-[0.18em] text-sage-600 mb-4">
            Explore
          </p>
          <h2 className="font-display font-semibold text-[clamp(34px,3.6vw,52px)] leading-[1.0] text-sage-900 mb-6">
            Shop by room.
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            We test, compare, and explain&mdash;so you can swap with confidence.
          </p>
        </div>
        <div
          ref={pillsRef}
          className="absolute left-[52vw] top-[22vh] w-[40vw] h-[56vh] flex flex-wrap content-start gap-3"
        >
          {categoryNames.map((cat, i) => (
            <span
              key={cat}
              className="category-pill pill-hover px-6 py-3 bg-white/80 backdrop-blur-sm border border-sage-200 rounded-full text-sage-800 font-medium text-sm whitespace-nowrap"
              style={{
                marginLeft: i % 3 === 1 ? "1.5rem" : i % 3 === 2 ? "0.5rem" : "0",
                marginTop: i > 2 ? "0.75rem" : "0",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
