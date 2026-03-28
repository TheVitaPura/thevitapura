"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MailIcon, InstagramIcon, PinterestIcon } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LINKS = ["About", "Editorial Standards", "Privacy", "Terms"];

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [left, right],
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 60%",
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} className="bg-sage-100 py-16 px-[7vw]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div ref={leftRef} className="md:w-[40vw]">
            <h3 className="font-display font-semibold text-3xl text-sage-900 mb-4">
              Contact
            </h3>
            <a
              href="mailto:hello@cleanlivinghaven.com"
              className="flex items-center gap-2 text-olive hover:text-olive-dark transition-colors text-lg mb-2"
            >
              <MailIcon className="w-5 h-5" />
              hello@cleanlivinghaven.com
            </a>
            <p className="text-sage-600 text-sm">
              We reply within 1&ndash;2 business days.
            </p>
          </div>
          <div ref={rightRef} className="md:w-[40vw]">
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sage-700 hover:text-olive transition-colors text-sm font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-sage-600 hover:text-olive hover:shadow-md transition-all"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-sage-600 hover:text-olive hover:shadow-md transition-all"
              >
                <PinterestIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-sage-200 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-sage-500 text-sm">
          <p>&copy; The Vita Pura</p>
          <p>Affiliate links support our work&mdash;thank you.</p>
        </div>
      </div>
    </footer>
  );
}
