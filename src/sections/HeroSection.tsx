"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightIcon } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!section || !bg || !content) return;

    const ctx = gsap.context(() => {
      // Pin section and animate content
      const words = content.querySelectorAll(".word");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set([...Array.from(words), content], {
              opacity: 1,
              x: 0,
              y: 0,
            });
          },
        },
      });

      // Animate words in
      tl.fromTo(
        words,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, ease: "none" },
        0
      );

      // Animate content out
      tl.fromTo(
        content,
        { x: 0, opacity: 1 },
        { x: "-18vw", opacity: 0, ease: "power2.in" },
        0.7
      );

      // Parallax bg
      tl.fromTo(bg, { scale: 1, y: 0 }, { scale: 1.06, y: "-2vh", ease: "none" }, 0.7);
    }, section);

    return () => ctx.revert();
  }, []);

  const headingWords = ["Small", "swaps.", "calmer", "home."];

  return (
    <section ref={sectionRef} className="section-pinned z-10">
      <img
        ref={bgRef}
        src="/images/hero_bg.jpg"
        alt="Clean living botanical background"
        className="bg-botanical"
      />
      <div className="absolute inset-0 vignette-overlay" />
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col justify-center px-[7vw]"
      >
        <h1 className="font-display font-semibold text-[clamp(44px,5vw,72px)] leading-[0.95] tracking-[-0.01em] text-sage-900 max-w-[46vw]">
          {headingWords.map((word, i) => (
            <span key={i} className="word inline-block">
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="mt-8 text-lg text-sage-700 max-w-[34vw] leading-relaxed">
          Curated clean products for kitchen, bath, laundry, and
          air&mdash;reviewed so you don&apos;t have to.
        </p>
        <div className="mt-10 flex items-center gap-6">
          <a
            href="#guides"
            className="btn-hover px-8 py-4 bg-olive text-cream rounded-full font-medium text-sm tracking-wide"
          >
            Browse the guides
          </a>
          <a
            href="#picks"
            className="flex items-center gap-2 text-sage-700 hover:text-olive transition-colors text-sm font-medium"
          >
            See this week&apos;s picks
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
