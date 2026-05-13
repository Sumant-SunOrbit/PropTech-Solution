"use client";

import Image from "next/image";
import { useState } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

type Props = {
  onNavClick: (id: string) => void;
};

export default function Navbar({ onNavClick }: Props) {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavClick(id);
    setOpen(false); // close mobile menu
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Features", id: "features" },
    { label: "How We Work", id: "how-we-work" },
    { label: "Solutions", id: "solutions" },
    { label: "FAQ", id: "faq" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Bar */}
        <div className="flex h-16 items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 font-bold text-xl text-primary cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            {/* <div className="w-9 h-9 rounded-full bg-linear-to-br from-orange-400 to-rose-400 shadow-sm cursor-pointer flex  justify-center items-center">
              <FaHandsHelping className="text-white" />
            </div>
            <span>PropTech</span> */}
            <Image
              src="/images/logo.webp"
              alt="PropTech Logo"
              width={40}
              height={32}
            />
          </div>

          {/* Desktop Nav */}
          <div className="ml-12 hidden md:flex items-center gap-8 text-sm font-medium text-slate-700 ">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative transition-colors cursor-pointer hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="ml-auto hidden md:block">
            <button
              onClick={() => handleNavClick("contact")}
              className="rounded-full bg-primary px-6 py-2 text-sm cursor-pointer font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="ml-auto md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <HiOutlineX className="w-7 h-7 text-slate-800" />
            ) : (
              <HiOutlineMenu className="w-7 h-7 text-slate-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden z-50 pb-6 pt-5 space-y-4 text-slate-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-2 py-2 text-base font-medium hover:text-primary"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("contact")}
              className="w-full mt-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-md"
            >
              Get a Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
