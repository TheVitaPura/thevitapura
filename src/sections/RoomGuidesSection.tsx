"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  KitchenIcon,
  BathroomIcon,
  LaundryIcon,
  ChevronRightIcon,
} from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

const GUIDES = [
  {
    icon: KitchenIcon,
    title: "Kitchen",
    description:
      "Dish soaps, cleaners, and food storage that skip the plastic and the perfume.",
  },
  {
    icon: BathroomIcon,
    title: "Bathroom",
    description:
      "Personal care swaps with transparent ingredients\u2014and refill options.",
  },
  {
    icon: LaundryIcon,
    title: "Laundry",
    description:
      "Concentrates, dryer alternatives, and stain removers that actually work.",
  },
];

export default function RoomGuidesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const intro = introRef.current;
    const cards = cardsRef.current;
    const cta = ctaRef.current;
    if (!section || !title || !intro || !cards || !cta) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        title,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "top 35%",
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        intro,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: intro,
            start: "top 80%",
            end: "top 55%",
            scrub: 0.5,
          },
        }
      );

      const guideCards = cards.querySelectorAll(".guide-card");
      gsap.fromTo(
        guideCards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: cards,
            start: "top 85%",
            end: "top 60%",
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        cta,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: cta,
            start: "top 85%",
            end: "top 65%",
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="guides" className="relative bg-sage-50 py-0">
      <div className="h-[18vh] w-full overflow-hidden">
        <img
          src="/images/guides_banner.jpg"
          alt="Room guides banner"
          className="w-full h-full object-cover opacity-85"
        />
      </div>
      <div className="max-w-[920px] mx-auto px-6 py-16">
        <h2
          ref={titleRef}
          className="section-title font-display font-semibold text-[clamp(34px,3.6vw,52px)] leading-[1.0] text-sage-900 mb-4"
        >
          Room-by-room guides
        </h2>
        <p
          ref={introRef}
          className="section-intro text-lg text-sage-700 leading-relaxed mb-12 max-w-[600px]"
        >
          Start with the space that matters most. Each guide includes product
          picks, ingredient notes, and simple routines.
        </p>
        <div ref={cardsRef} className="space-y-6">
          {GUIDES.map((guide) => (
            <div
              key={guide.title}
              className="guide-card flex items-start gap-5 p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-sage-100 rounded-xl shrink-0">
                <guide.icon className="w-6 h-6 text-olive" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-xl text-sage-900 mb-2 group-hover:text-olive transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {guide.description}
                </p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-sage-400 group-hover:text-olive group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </div>
          ))}
        </div>
        <div ref={ctaRef} className="mt-10 text-center">
          <a
            href="#"
            className="btn-hover inline-block px-8 py-4 bg-olive text-cream rounded-full font-medium text-sm tracking-wide"
          >
            Explore all guides
          </a>
        </div>
      </div>
    </section>
  );
}
