import { TECH_ICONS } from "@/components/ui/tech-icons";

export default function TechStack({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap items-center gap-4 ${className ?? ""}`}>
      {items.map((name) => {
        const Icon = TECH_ICONS[name];
        return (
          <li key={name} className="group/tech relative">
            {Icon ? (
              <Icon
                title={name}
                size={20}
                color="currentColor"
                className="text-muted-2 transition-colors group-hover/tech:text-paper"
              />
            ) : (
              <span className="font-mono text-xs uppercase tracking-wide text-muted-2">
                {name}
              </span>
            )}
            <span className="sr-only">{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
