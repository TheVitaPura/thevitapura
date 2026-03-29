"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  NoFragranceIcon,
  NoParabensIcon,
  BiodegradableIcon,
  CrueltyFreeIcon,
  ArrowRightIcon,
} from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP: Record<string, typeof NoFragranceIcon> = {
  fragrance: NoFragranceIcon,
  parabens: NoParabensIcon,
  biodegradable: BiodegradableIcon,
  crueltyFree: CrueltyFreeIcon,
};

const DEFAULT_PRINCIPLES = [
  { icon: "fragrance", text: "No synthetic fragrance / phthalates" },
  { icon: "parabens", text: "No parabens or formaldehyde releasers" },
  { icon: "biodegradable", text: "Biodegradable where possible" },
  { icon: "crueltyFree", text: "Cruelty-free & transparent sourcing" },
];

interface PrincipleItem {
  icon: string;
  text: string;
}

interface PrinciplesSectionProps {
  principles?: PrincipleItem[];
}

export default function PrinciplesSection({
  principles,
}: PrinciplesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const items = principles?.length ? principles : DEFAULT_PRINCIPLES;

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const title = titleRef.current;
    const list = listRef.current;
    if (!section || !bg || !title || !list) return;

    const ctx = gsap.context(() => {
      const listItems = list.querySelectorAll(".principle-item");

      gsap.from(title, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 60%" },
      });
      gsap.from(listItems, {
        x: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 60%" },
      });

      // Exit
      gsap.to(title, {
        x: -80, opacity: 0, duration: 0.6, ease: "power2.in",
        scrollTrigger: { trigger: section, start: "bottom 60%", scrub: true },
      });
      gsap.to(listItems, {
        x: 60, opacity: 0, stagger: 0.03, duration: 0.6, ease: "power2.in",
        scrollTrigger: { trigger: section, start: "bottom 60%", scrub: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-pinned z-40">
      <img
        ref={bgRef}
        src="/images/principles_bg.jpg"
        alt="Botanical background"
        className="bg-botanical"
      />
      <div className="absolute inset-0 vignette-overlay" />
      <div className="absolute inset-0 flex items-center">
        <div ref={titleRef} className="absolute left-[7vw] top-[18vh] w-[40vw]">
          <h2 className="font-display font-semibold text-[clamp(34px,3.6vw,52px)] leading-[1.05] text-sage-900">
            What we look&nbsp;for.
          </h2>
        </div>
        <div
          ref={listRef}
          className="absolute left-[56vw] top-[22vh] w-[36vw] space-y-5"
        >
          {items.map((item) => {
            const IconComponent = ICON_MAP[item.icon] || NoFragranceIcon;
            return (
              <div
                key={item.text}
                className="principle-item flex items-center gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-sage-100 rounded-full">
                  <IconComponent className="w-5 h-5 text-olive" />
                </div>
                <span className="text-sage-800 font-medium">{item.text}</span>
              </div>
            );
          })}
          <a
            href="#guides"
            className="principle-item inline-flex items-center gap-2 text-olive hover:text-olive-dark transition-colors text-sm font-medium mt-4 ml-4"
          >
            See how we test
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
