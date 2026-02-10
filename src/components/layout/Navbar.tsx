'use client';

type Props = {
  onNavClick: (id: string) => void;
};

export default function Navbar({ onNavClick }: Props) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center">

          {/* Logo */}
          <div
            className="flex items-center gap-2 font-bold text-xl text-primary cursor-pointer"
            onClick={() => onNavClick("home")}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 shadow-sm" />
            <span>PropTech</span>
          </div>

          {/* Navigation Links */}
          <div className="ml-12 hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            {[
              { label: "Home", id: "home" },
              { label: "Features", id: "features" },
              { label: "How We Work", id: "how-we-work" },
              { label: "Solutions", id: "solutions" },
              { label: "Contact Us", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className="relative transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="ml-auto">
            <button
              onClick={() => onNavClick("contact")}
              className="
                rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white
                shadow-md transition-all
                hover:-translate-y-0.5 hover:shadow-lg hover:opacity-95
                active:translate-y-0
              "
            >
              Get a Demo
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
