import React from "react";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const servicesList = [
    "Residential Communities",
    "Property Management Companies",
    "Facility Management Firms",
    "Real Estate Developers",
    "Multi-Site Enterprise Operators",
    "Service & Maintanance Teams",
  ];

  const companyList = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How We Work", href: "#how-we-work" },
    { label: "Solutions", href: "#solutions" },
    { label: "Contact Us", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "" },
    { icon: FaLinkedinIn, href: "" },
    { icon: FaXTwitter, href: "" },
    { icon: FaInstagram, href: "" },
  ];

  return (
    <>
      <footer className="relative overflow-hidden bg-linear-to-br px-5 md:px-0 from-slate-950 via-slate-900 to-slate-950 text-slate-300">
        {/* Soft orange glow */}
        <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          {/* Top Grid */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                  <Building2 className="text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-linear-to-br from-orange-400 to-rose-400 shadow-sm text-transparent bg-clip-text">
                    PropTech
                  </h1>
                  <p className="text-xs text-slate-400">
                    Smart Property Solutions
                  </p>
                </div>
              </div>

              <p className="mb-4 text-slate-400">
                One platform to manage societies, residents, and service
                requests SLA assured.
              </p>

              <p className="text-sm text-slate-500">
                Built for modern property management
              </p>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">
                Our Solutions
              </h4>
              <ul className="space-y-2 text-sm">
                {servicesList.map((service, i) => (
                  <li key={i}>
                    <Link href="#" className="transition hover:text-primary">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                {companyList.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="transition hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">
                Contact Us
              </h4>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 text-primary" size={18} />
                  <span>Quick Office, Baner, Pune – 411057</span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="text-primary" size={18} />
                  <span>+91 1234567891</span>
                </li>

                <li>
                  <Link
                    href="mailto:support@proptech.com"
                    className="flex items-center gap-3 transition hover:text-primary hover:underline"
                  >
                    <Mail className="text-primary" size={18} />
                    <span>support@proptech.com</span>
                  </Link>
                </li>
              </ul>

              {/* Social */}
              <div className="mt-6 flex gap-4">
                {socialLinks.map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-primary hover:text-white"
                  >
                    <social.icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
            Copyright © {new Date().getFullYear()} PropTech. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
