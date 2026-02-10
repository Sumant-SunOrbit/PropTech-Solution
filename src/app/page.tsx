'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HomeSection from "@/components/sections/HomeSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ContactSection from "@/components/sections/ContactSection";

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

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="how-we-work">
          <HowWeWorkSection />
        </section>

        <section id="solutions">
          <SolutionsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  );
}
