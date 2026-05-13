"use client";

import {
  HiOutlineClipboardList,
  HiOutlineSwitchHorizontal,
  HiOutlineClock,
  HiOutlineCheckCircle,
} from "react-icons/hi";

export default function HowWeWorkSection() {
  const steps = [
    {
      step: "01",
      title: "Raise a Ticket",
      description: "Residents report issues with photos or details.",
      icon: HiOutlineClipboardList,
    },
    {
      step: "02",
      title: "Smart Assignment",
      description: "Tickets auto-route to the right department.",
      icon: HiOutlineSwitchHorizontal,
    },
    {
      step: "03",
      title: "SLA-Based Resolution",
      description: "Issues are resolved within defined timelines.",
      icon: HiOutlineClock,
    },
    {
      step: "04",
      title: "Closure & Feedback",
      description: "Transparent closure ensures satisfaction.",
      icon: HiOutlineCheckCircle,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How <span className="text-primary">PropTech</span> Helpdesk Works
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            A simple, structured, and SLA-driven workflow.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT IMAGE */}
          <div className="flex justify-center fade-in-left">
            <div className="relative">
              <div className="absolute -inset-6  rounded-full bg-linear-to-br from-orange-200 to-rose-200 blur-2xl opacity-40"></div>

              <img
                src="/Process-amico.png"
                alt="Workflow Dashboard"
                className="relative rounded-2xl shadow-xl left-7.5 md:-rotate-3 w-[85%] max-w-sm md:max-w-md"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8 md:ml-16 fade-in-right px-4 md:px-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  className={`flex items-start gap-4 sm:gap-6 ${
                    index % 2 === 0 ? "ml-0" : "md:ml-16"
                  }`}
                >
                  {/* Big Step Number */}
                  <div className="text-2xl sm:text-3xl font-bold text-orange-500 leading-none mt-1 sm:mt-2">
                    {step.step}
                  </div>

                  {/* Step Card */}
                  <div className="bg-white border border-slate-100 shadow-md rounded-2xl p-4 w-full sm:w-80 transition hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-5 w-5 text-orange-500" />
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
