"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Our Story", href: "#story" },
  { label: "Schedule", href: "#schedule" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className="
          mx-auto flex max-w-7xl items-center justify-between
          rounded-full border border-white/20
          bg-[#FDFBF7]/75 px-5 py-3
          shadow-[0_12px_40px_rgba(28,53,45,0.08)]
          backdrop-blur-xl
          sm:px-7
        "
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="font-display text-2xl font-medium tracking-tight text-[#1C352D]"
        >
          EverAfter
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                relative text-[11px] font-medium uppercase
                tracking-[0.2em] text-[#17221E]/70
                transition-colors duration-300
                hover:text-[#1C352D]
              "
            >
              {link.label}
            </a>
          ))}

          <a
            href="#rsvp"
            className="
              rounded-full bg-[#1C352D] px-5 py-2.5
              text-[11px] font-medium uppercase
              tracking-[0.18em] text-[#FDFBF7]
              transition-all duration-300
              hover:bg-[#12261F]
              hover:shadow-lg
            "
          >
            RSVP
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full border border-[#1C352D]/10
            text-[#1C352D] md:hidden
          "
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`
          mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl
          border border-white/20 bg-[#FDFBF7]/95
          shadow-[0_20px_60px_rgba(28,53,45,0.12)]
          backdrop-blur-xl transition-all duration-300 md:hidden
          ${
            menuOpen
              ? "max-h-96 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }
        `}
      >
        <div className="flex flex-col px-6 py-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="
                border-b border-[#1C352D]/8 py-4
                text-xs font-medium uppercase
                tracking-[0.2em] text-[#17221E]/70
              "
            >
              {link.label}
            </a>
          ))}

          <a
            href="#rsvp"
            onClick={closeMenu}
            className="
              mt-4 rounded-full bg-[#1C352D]
              px-5 py-3 text-center
              text-xs font-medium uppercase
              tracking-[0.18em] text-[#FDFBF7]
            "
          >
            RSVP
          </a>
        </div>
      </div>
    </header>
  );
}