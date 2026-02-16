import { IconType } from "react-icons";

type Props = {
  title: string;
  icon: IconType;
  points: string[];
};

export default function RoleCard({ title, icon: Icon, points }: Props) {
  return (
    <div
      className="
        group
        w-full
        bg-white rounded-3xl px-10 py-8
        shadow-md border border-slate-100
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl items-center
      "
    >
      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
        <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-slate-900 mb-4">
        {title}
      </h3>

      {/* Points */}
      <ul className="space-y-3 text-slate-600 text-sm">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
