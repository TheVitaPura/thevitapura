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

interface CategoryItem {
  name: string;
  link?: string;
}

interface CategorySectionProps {
  categories?: CategoryItem[];
}

export default function CategorySection({ categories }: CategorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  const items: CategoryItem[] =
    categories?.length ? categories : DEFAULT_CATEGORIES.map((name) => ({ name }));

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const pillsContainer = pillsRef.current;
    const bg = bgRef.current;
    if (!section || !title || !pillsContainer || !bg) return;

    const ctx = gsap.context(() => {
      const pills = pillsContainer.querySelectorAll(".category-pill");

      // Enter
      gsap.from(title, {
        x: -60, opacity: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 60%" },
      });
      gsap.from(pills, {
        y: 20, opacity: 0, scale: 0.95, stagger: 0.06, duration: 0.6, delay: 0.3, ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 60%" },
      });

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
          {items.map((cat, i) => (
            <a
              key={cat.name}
              href={cat.link || "#"}
              className="category-pill pill-hover px-6 py-3 bg-white/80 backdrop-blur-sm border border-sage-200 rounded-full text-sage-800 font-medium text-sm whitespace-nowrap"
              style={{
                marginLeft: i % 3 === 1 ? "1.5rem" : i % 3 === 2 ? "0.5rem" : "0",
                marginTop: i > 2 ? "0.75rem" : "0",
              }}
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
