"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightIcon } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_LABEL = "Seasonal edit";
const DEFAULT_TITLE = "Spring refresh.";
const DEFAULT_DESCRIPTION =
  "Open windows, lighter scents, and a few swaps that make the whole room feel new.";
const DEFAULT_GUIDE_TITLE = "The 10-Minute Bathroom Reset";
const DEFAULT_GUIDE_DESCRIPTION =
  "Low-waste tools + a cleaning routine that actually fits your week.";

interface SeasonalSectionProps {
  label?: string;
  title?: string;
  description?: string;
  featuredGuideTitle?: string;
  featuredGuideDescription?: string;
}

export default function SeasonalSection({
  label,
  title,
  description,
  featuredGuideTitle,
  featuredGuideDescription,
}: SeasonalSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const sLabel = label || DEFAULT_LABEL;
  const sTitle = title || DEFAULT_TITLE;
  const sDescription = description || DEFAULT_DESCRIPTION;
  const gTitle = featuredGuideTitle || DEFAULT_GUIDE_TITLE;
  const gDescription = featuredGuideDescription || DEFAULT_GUIDE_DESCRIPTION;

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !bg || !left || !right) return;

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(left, { x: "-50vw", opacity: 0 });
      gsap.set(right, { x: "50vw", opacity: 0 });

      // Enter animation timeline
      const enterTl = gsap.timeline({ paused: true });
      enterTl.to(left, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      });
      enterTl.to(
        right,
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        },
        0.15
      );

      // Exit animation timeline
      const exitTl = gsap.timeline({ paused: true });
      exitTl.to(left, {
        opacity: 0,
        x: "-15vw",
        duration: 0.7,
        ease: "power2.in",
      });
      exitTl.to(
        right,
        {
          opacity: 0,
          x: "15vw",
          duration: 0.7,
          ease: "power2.in",
        },
        0.05
      );
      exitTl.to(
        bg,
        { scale: 1.06, y: "-2vh", duration: 0.8, ease: "power2.in" },
        0
      );

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=100%",
        pin: true,
        onEnter: () => enterTl.play(),
        onLeave: () => exitTl.play(),
        onEnterBack: () => exitTl.reverse(),
        onLeaveBack: () => enterTl.reverse(),
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned z-50">
      <img
        ref={bgRef}
        src="/images/seasonal_bg.jpg"
        alt="Botanical background"
        className="bg-botanical"
      />
      <div className="absolute inset-0 vignette-overlay" />
      <div className="absolute inset-0 flex items-center">
        <div ref={leftRef} className="absolute left-[7vw] top-[18vh] w-[40vw]">
          <p className="text-xs uppercase tracking-[0.18em] text-sage-600 mb-4">
            {sLabel}
          </p>
          <h2 className="font-display font-semibold text-[clamp(34px,3.6vw,52px)] leading-[1.0] text-sage-900 mb-6">
            {sTitle}
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            {sDescription}
          </p>
        </div>
        <div ref={rightRef} className="absolute left-[56vw] top-[24vh] w-[36vw]">
          <div className="bg-white rounded-2xl shadow-card p-8">
            <span className="inline-block px-3 py-1 bg-sage-100 text-olive text-xs font-medium rounded-full mb-4">
              Guide
            </span>
            <h3 className="font-display font-semibold text-2xl text-sage-900 mb-3">
              {gTitle}
            </h3>
            <p className="text-sage-600 leading-relaxed mb-6">
              {gDescription}
            </p>
            <a
              href="#guides"
              className="inline-flex items-center gap-2 text-olive hover:text-olive-dark transition-colors text-sm font-medium group"
            >
              Read the guide
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
