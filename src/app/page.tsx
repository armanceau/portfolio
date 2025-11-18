import { ProjetCard } from "@/components/projet-card";
import DarkModeToggle from "@/lib/darkMode";
import { ArrowUpRight } from "lucide-react";
import projets from "@/data/projets.json";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium text-foreground">
              armanceau 🐵
            </h1>
            <DarkModeToggle />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-5 mt-5">
        <div className="mb-12">
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Réalisations
          </h3>
        </div>

        <div className="space-y-2">
          {projets.map((projet) => (
            <ProjetCard
              key={projet.url}
              title={projet.titre}
              description={projet.description}
              link={projet.url}
              tags={projet.tags}
            />
          ))}
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              © 2025. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/armanceau"
                className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/arthur-manceau/"
                className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
