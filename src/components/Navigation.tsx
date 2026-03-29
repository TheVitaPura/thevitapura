"use client";

import { useState, useEffect } from "react";

const DEFAULT_LINKS = [
  { label: "Shop", href: "#picks" },
  { label: "Read", href: "#guides" },
  { label: "About", href: "#about" },
  { label: "Newsletter", href: "#newsletter" },
];

interface NavigationProps {
  siteName?: string;
  links?: { label: string; href: string }[];
}

export default function Navigation({ siteName, links }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  const name = siteName || "The Vita Pura";
  const navLinks = links?.length ? links : DEFAULT_LINKS;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex items-center justify-between px-[7vw]">
        <a
          href="#"
          className="font-display font-semibold text-xl transition-colors text-sage-900"
        >
          {name}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sage-700 hover:text-olive transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
