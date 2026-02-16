"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HomeSection from "@/components/sections/HomeSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/ui/LogoCarousel";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar onNavClick={scrollToSection} />

      <main>
        <section id="home">
          <HomeSection />
        </section>
        <section>
          <LogoCarousel />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>

        <section id="how-we-work">
          <HowWeWorkSection />
        </section>

        <section id="solutions">
          <SolutionsSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      {/* <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#ff6900"></stop>
            <stop offset="95%" stop-color="#f78da7"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 L 0,150 C 124.03571428571428,109.82142857142857 248.07142857142856,69.64285714285714 375,93 C 501.92857142857144,116.35714285714286 631.75,203.25 757,218 C 882.25,232.75 1002.9285714285716,175.35714285714286 1116,152 C 1229.0714285714284,128.64285714285714 1334.5357142857142,139.32142857142856 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg> */}
      <Footer />
    </>
  );
}
