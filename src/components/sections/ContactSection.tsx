"use client";
import Image from "next/image";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: ContactFormData = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    console.log(payload);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <section className="relative bg-section">
        <div className="relative mx-auto max-w-6xl px-6 py-18 z-30">
          <div className="grid grid-cols-1 items-center gap-6 md:gap-12 lg:grid-cols-2">
            {/* LEFT – SIMPLE IMAGE + TEXT */}
            <div>
              <h2 className="text-2xl font-bold text-center text-text-main">
                Let’s talk about your property operations
              </h2>
              <p className="mt-3 text-center text-sm text-text-sub">
                Reach out to learn how our smart helpdesk can simplify issue
                tracking, improve response time, and bring transparency to your
                societies.
              </p>
              <Image
                src="/images/contact.png"
                alt="Helpdesk Dashboard"
                width={420}
                height={400}
                priority
              />
            </div>

            {/* RIGHT – FORM */}
            <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <h3 className="mb-5 text-2xl font-bold leading-tight tracking-normal text-center md:text-left text-text-main">
                <span className="text-primary ">Contact</span> Us
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label className="mb-1 block text-xs font-medium text-text-sub">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1 block text-xs font-medium text-text-sub">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-1 block text-xs font-medium text-text-sub">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Product Demo / Support / General Query"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1 block text-xs font-medium text-text-sub">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    required
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="cursor-pointer mt-3 w-full rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(249,115,22,0.35)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <Image
          src="images/wave.svg"
          alt="Wave"
          width={1440}
          height={200}
          className="w-full hidden lg:block absolute top-55 z-20 left-0"
        />
      </section>
    </>
  );
}
