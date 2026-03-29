"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MailIcon, InstagramIcon, PinterestIcon } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LINKS = ["About", "Editorial Standards", "Privacy", "Terms"];

const DEFAULT_EMAIL = "hello@cleanlivinghaven.com";
const DEFAULT_COPYRIGHT = "The Vita Pura";
const DEFAULT_DISCLAIMER = "Affiliate links support our work\u2014thank you.";

interface FooterSectionProps {
  contactEmail?: string;
  copyright?: string;
  disclaimer?: string;
}

export default function FooterSection({
  contactEmail,
  copyright,
  disclaimer,
}: FooterSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const email = contactEmail || DEFAULT_EMAIL;
  const copyrightText = copyright || DEFAULT_COPYRIGHT;
  const disclaimerText = disclaimer || DEFAULT_DISCLAIMER;

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
          stagger: 0.15,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
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
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-olive hover:text-olive-dark transition-colors text-lg mb-2"
            >
              <MailIcon className="w-5 h-5" />
              {email}
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
          <p>&copy; {copyrightText}</p>
          <p>{disclaimerText}</p>
        </div>
      </div>
    </footer>
  );
}
