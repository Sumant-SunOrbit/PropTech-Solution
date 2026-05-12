"use client";

export default function SolutionsSection() {
  const solutions = [
    {
      title: "Residential Communities",
      description:
        "Enable structured complaint management with SLA-driven tracking, real-time visibility, and transparent service governance for residents and committees.",
      img: "/solutions/residential.svg",
    },
    {
      title: "Property Management Companies",
      description:
        "Manage multiple societies through centralized dashboards, escalation workflows, and standardized operational monitoring.",
      img: "/solutions/property-management.svg",
    },
    {
      title: "Facility Management Firms",
      description:
        "Streamline department-based ticket routing, monitor SLA compliance, and improve on-ground team performance across sites.",
      img: "/solutions/facility.svg",
    },
    {
      title: "Real Estate Developers",
      description:
        "Ensure structured post-handover service workflows with transparent tracking and reputation-focused issue resolution.",
      img: "/solutions/developer.svg",
    },
    {
      title: "Multi-Site Enterprise Operators",
      description:
        "Centralized governance and control across distributed property portfolios with role-based administrative access.",
      img: "/solutions/enterprise.svg",
    },
    {
      title: "Service & Maintenance Teams",
      description:
        "Efficient task allocation, escalation handling, and resolution monitoring for structured service delivery.",
      img: "/solutions/maintenance.svg",
    },
  ];

  return (
    <section className="relative py-5 md:py-16 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Responsive Background Blobs */}
      <div className="absolute -top-20 -left-20 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-orange-200/40 blur-2xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-rose-200/40 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Enterprise <span className="text-primary">Solutions</span> for
            Modern Real Estate Operations
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Built to streamline service management across societies, facility
            teams, and multi-site property portfolios.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-y-8 sm:gap-y-14 gap-x-6 sm:gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="text-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 rounded-2xl p-4 sm:p-6"
            >
              {/* Illustration */}
              <div className="flex justify-center mb-3 sm:mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-44 h-32 sm:w-60 sm:h-40 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
