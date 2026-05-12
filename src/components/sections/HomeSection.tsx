import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Gradient Blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-130 w-130 rounded-full bg-linear-to-br from-orange-400 via-orange-300 to-rose-300 opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-105 w-105 rounded-full bg-linear-to-tr from-orange-300 to-orange-200 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-5 md:py-24">
        <div className="grid grid-cols-1 text-center md:text-left items-center gap-6 md:gap-16 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="animate-fade-up space-y-6">
            <h1 className="text-3xl font-extrabold leading-tight tracking-normal text-text-main md:text-3xl lg:text-4xl">
              <span className="text-primary">Smart Helpdesk</span> for Modern
              <br /> Property Management
            </h1>

            <p className="max-w-xl text-lg text-text-sub">
              A centralized, SLA-driven helpdesk platform designed for real
              estate service providers to manage societies, residents, and
              service requests effortlessly.
            </p>

            <p className="max-w-xl text-base text-text-sub">
              Replace scattered calls and WhatsApp complaints with a structured,
              transparent, and efficient system.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex justify-center md:justify-start flex-wrap gap-4 pt-4">
              <Link
                href="#contact"
                className="cursor-pointer rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(249,115,22,0.35)]"
              >
                Get a Demo
              </Link>

              <Link
                href="#features"
                className="cursor-pointer rounded-full border border-primary/30 px-7 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/5"
              >
                Explore Features
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center animate-slide-in-right ">
            <div className="relative animate-float">
              <Image
                src="/images/img1.png"
                alt="Helpdesk Dashboard"
                width={420}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
