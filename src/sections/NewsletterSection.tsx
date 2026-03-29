"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_HEADLINE = "Get one clean swap a week.";
const DEFAULT_DESCRIPTION =
  "Join 12,000+ readers. We test products, explain ingredients, and share deals\u2014no spam, ever.";
const DEFAULT_SUCCESS = "Welcome! Check your inbox for a confirmation.";
const DEFAULT_BUTTON = "Join the list";

interface NewsletterSectionProps {
  headline?: string;
  description?: string;
  successMessage?: string;
  buttonText?: string;
}

export default function NewsletterSection({
  headline,
  description,
  successMessage,
  buttonText,
}: NewsletterSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const headlineText = headline || DEFAULT_HEADLINE;
  const descText = description || DEFAULT_DESCRIPTION;
  const successText = successMessage || DEFAULT_SUCCESS;
  const btnText = buttonText || DEFAULT_BUTTON;

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className="relative min-h-[70vh] flex items-center justify-center py-20"
    >
      <img
        src="/images/newsletter_bg.jpg"
        alt="Newsletter background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 vignette-overlay" />
      <div
        ref={contentRef}
        className="relative z-10 max-w-[720px] mx-auto px-6 text-center"
      >
        <h2 className="font-display font-semibold text-[clamp(34px,3.6vw,52px)] leading-[1.0] text-sage-900 mb-4">
          {headlineText}
        </h2>
        <p className="text-lg text-sage-700 leading-relaxed mb-8 max-w-[560px] mx-auto">
          {descText}
        </p>

        {submitted ? (
          <div className="px-8 py-4 bg-sage-100 rounded-full inline-block">
            <span className="text-olive font-medium">
              {successText}
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto"
          >
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-white/90 backdrop-blur-sm border border-sage-200 rounded-full text-sage-800 placeholder:text-sage-400 focus:outline-none focus:ring-2 focus:ring-olive/30"
              required
            />
            <button
              type="submit"
              className="btn-hover px-8 py-4 bg-olive text-cream rounded-full font-medium text-sm tracking-wide whitespace-nowrap"
            >
              {btnText}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-sage-500">
          Unsubscribe anytime. We never share your email.
        </p>
      </div>
    </section>
  );
}
