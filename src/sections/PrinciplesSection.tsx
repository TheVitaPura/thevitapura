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

const PRINCIPLES = [
  { icon: NoFragranceIcon, text: "No synthetic fragrance / phthalates" },
  { icon: NoParabensIcon, text: "No parabens or formaldehyde releasers" },
  { icon: BiodegradableIcon, text: "Biodegradable where possible" },
  { icon: CrueltyFreeIcon, text: "Cruelty-free & transparent sourcing" },
];

export default function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const title = titleRef.current;
    const list = listRef.current;
    if (!section || !bg || !title || !list) return;

    const ctx = gsap.context(() => {
      const items = list.querySelectorAll(".principle-item");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.6,
        },
      });

      // Animate title in
      tl.fromTo(
        title,
        { x: "-40vw", opacity: 0 },
        { x: 0, opacity: 1, ease: "none" },
        0
      );

      // Animate principle items in
      tl.fromTo(
        items,
        { x: "40vw", opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.04, ease: "none" },
        0.05
      );

      // Animate out
      tl.fromTo(
        title,
        { opacity: 1 },
        { opacity: 0, x: "-15vw", ease: "power2.in" },
        0.72
      ).fromTo(
        items,
        { opacity: 1 },
        { opacity: 0, x: "15vw", stagger: 0.02, ease: "power2.in" },
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
          {PRINCIPLES.map((item) => (
            <div
              key={item.text}
              className="principle-item flex items-center gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-sage-100 rounded-full">
                <item.icon className="w-5 h-5 text-olive" />
              </div>
              <span className="text-sage-800 font-medium">{item.text}</span>
            </div>
          ))}
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
