import { TECH_ICONS } from "@/components/ui/tech-icons";

export default function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];

  return (
    <div className="mask-fade-x overflow-hidden border-y border-line-soft py-6">
      <div className="flex w-max animate-marquee items-center gap-10">
        {track.map((item, i) => {
          const Icon = TECH_ICONS[item];
          return (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 text-muted-2"
            >
              {Icon ? (
                <Icon title={item} size={22} color="currentColor" />
              ) : (
                <span className="font-mono text-sm uppercase tracking-widest">
                  {item}
                </span>
              )}
              <span className="text-signal">·</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
