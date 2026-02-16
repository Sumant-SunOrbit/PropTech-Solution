import RoleCard from "./RoleCard";
import { rolesData } from "./rolesData";

export default function RoleFeaturesSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-main">
      
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-orange-200/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-rose-200/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-down">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Built for <span className="text-primary">Everyone</span> Involved
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Role-based capabilities designed to simplify operations and
            improve service delivery.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {rolesData.map((role, index) => (
            <div
              key={index}
              className={`animate-fade-up animate-delay-${index + 1}`}
            >
              <RoleCard
                title={role.title}
                icon={role.icon}
                points={role.points}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
