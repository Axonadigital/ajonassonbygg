"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Hem", href: "/#hero" },
  { label: "Tjänster", href: "/#tjanster" },
  { label: "Om oss", href: "/#om-oss" },
  { label: "Projekt", href: "/#projekt" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent endast högst upp på startsidan (mörk hero-bild bakom).
  // På övriga sidor är bakgrunden ljus, så headern är alltid solid där.
  const solid = scrolled || pathname !== "/" || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-light border-b border-ink/10 shadow-md" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src={solid ? "/logo.png" : "/logo-light.png"}
            alt="A Jonasson Byggservice AB"
            width={120}
            height={80}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest uppercase font-sans transition-colors duration-200 ${
                link.label === "Kontakt"
                  ? solid
                    ? "border border-accent-dark text-accent-dark px-4 py-2 hover:bg-accent-dark hover:text-light"
                    : "border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-background"
                  : solid
                    ? "text-ink/70 hover:text-accent-dark"
                    : "text-foreground/80 hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Öppna meny"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${solid ? "bg-ink" : "bg-accent"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${solid ? "bg-ink" : "bg-accent"} ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${solid ? "bg-ink" : "bg-accent"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-light border-t border-ink/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-ink/70 hover:text-accent-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
