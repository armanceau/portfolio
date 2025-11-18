import { ArrowUpRight } from "lucide-react";
import { StatusBadge } from "./status-badge";

interface ProjectCardProps {
  title: string;
  description: string;
  key: string;
  tags: string[];
  link: string;
}

export function ProjetCard({
  title,
  description,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-foreground hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-medium text-foreground group-hover:underline">
              {title}
            </h3>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </div>

          <p className="leading-relaxed text-muted-foreground">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <StatusBadge url={link} />
      </div>
    </a>
  );
}
