"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is internal help desk software and how does it work?",
    answer:
      "Internal help desk software centralizes employee and operational service requests into one system. It helps teams track, prioritize, and resolve issues efficiently with defined workflows and SLAs.",
  },
  {
    question:
      "Can different departments configure their own workflows and SLAs?",
    answer:
      "Yes, each department can customize workflows, ticket categories, priority levels, and SLA rules to match their operational requirements.",
  },
  {
    question:
      "Does the platform support asset tracking and maintenance history?",
    answer:
      "Absolutely. You can track IT assets, equipment, and maintenance records while linking them directly to related service requests.",
  },
  {
    question:
      "Can we manage multiple properties or locations from one dashboard?",
    answer:
      "Yes, the platform allows centralized management of multiple societies, properties, or office locations from a single unified dashboard.",
  },
  {
    question: "Does the system support recurring or scheduled service tasks?",
    answer:
      "Yes, recurring maintenance and scheduled tasks can be automated to ensure timely service delivery without manual follow-ups.",
  },
];

export default function FAQSection() {
  return (
    <section className="pb-12 pt-4 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-text-main">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group shadow-md rounded-2xl p-6 transition duration-300 open:shadow-lg"
            >
              <summary className="flex justify-between items-center text-text-main text-balance cursor-pointer list-none">
                <span className="text-sm md:text-lg  font-medium">
                  {faq.question}
                </span>

                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div className="mt-4 text-text-sub text-sm md:text-base leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
