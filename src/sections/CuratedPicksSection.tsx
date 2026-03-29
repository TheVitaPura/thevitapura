"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRightIcon } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_PRODUCTS: ProductItem[] = [
  {
    tag: "Dish Soap",
    name: "Grove Co. Dish Soap",
    description: "Cuts grease without synthetic fragrance.",
    cta: "View on Amazon",
  },
  {
    tag: "Laundry",
    name: "Branch Basics Concentrate",
    description: "One bottle, loads of uses\u2014unscented option.",
    cta: "View on Amazon",
  },
  {
    tag: "Air Care",
    name: "P.F. Candle Co. Room Spray",
    description: "Essential oil\u2013based, no synthetic musks.",
    cta: "View on Amazon",
  },
];

interface ProductItem {
  tag: string;
  name: string;
  description: string;
  link?: string;
  cta: string;
}

interface CuratedPicksSectionProps {
  products?: ProductItem[];
}

export default function CuratedPicksSection({
  products,
}: CuratedPicksSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const items = products?.length ? products : DEFAULT_PRODUCTS;

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;
    if (!section || !bg || !title || !cards) return;

    const ctx = gsap.context(() => {
      const cardEls = cards.querySelectorAll(".product-card");

      // Set initial state
      gsap.set(title, { y: 30, opacity: 0 });
      gsap.set(cardEls, { y: "15vh", opacity: 0, scale: 0.92 });

      // Enter animation timeline
      const enterTl = gsap.timeline({ paused: true });
      enterTl.to(title, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
      enterTl.to(
        cardEls,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: "power2.out",
        },
        0.2
      );

      // Exit animation timeline
      const exitTl = gsap.timeline({ paused: true });
      exitTl.to([title, ...Array.from(cardEls)], {
        opacity: 0,
        y: "-10vh",
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.in",
      });
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
    <section ref={sectionRef} id="picks" className="section-pinned z-30">
      <img
        ref={bgRef}
        src="/images/picks_bg.jpg"
        alt="Botanical background"
        className="bg-botanical"
      />
      <div className="absolute inset-0 vignette-overlay" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div ref={titleRef} className="absolute left-[7vw] top-[10vh]">
          <p className="text-xs uppercase tracking-[0.18em] text-sage-600 mb-3">
            This week
          </p>
          <h2 className="font-display font-semibold text-[clamp(34px,3.6vw,52px)] leading-[1.0] text-sage-900">
            Curated picks
          </h2>
        </div>
        <div
          ref={cardsRef}
          className="flex items-center justify-center gap-6 mt-[10vh] px-[7vw]"
        >
          {items.map((product, idx) => (
            <div
              key={product.name}
              className="product-card w-[26vw] min-w-[280px] max-w-[380px] bg-white rounded-2xl shadow-card p-6 animate-float"
              style={{
                animationDelay: `${idx * 0.8}s`,
              }}
            >
              <span className="inline-block px-3 py-1 bg-sage-100 text-olive text-xs font-medium rounded-full mb-4">
                {product.tag}
              </span>
              <h3 className="font-display font-semibold text-2xl text-sage-900 mb-2">
                {product.name}
              </h3>
              <p className="text-sage-600 text-sm leading-relaxed mb-6">
                {product.description}
              </p>
              <a
                href={product.link || "#"}
                className="flex items-center gap-2 text-olive hover:text-olive-dark transition-colors text-sm font-medium group"
              >
                {product.cta}
                <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
