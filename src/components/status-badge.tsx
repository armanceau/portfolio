"use client";

import { useState, useEffect } from "react";
import { estEnLigne } from "@/lib/verification-url";

interface StatusBadgeProps {
  url: string;
}

export function StatusBadge({ url }: StatusBadgeProps) {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const verifierStatut = async () => {
      try {
        setIsLoading(true);
        const status = await estEnLigne(url);
        if (isMounted) {
          setIsOnline(status);
        }
      } catch {
        if (isMounted) {
          setIsOnline(false);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    verifierStatut();

    const interval = setInterval(verifierStatut, 5 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [url]);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="relative flex items-center">
          <div className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground" />
        </div>
        <span className="text-sm text-muted-foreground">Vérification...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center">
        <div
          className={`h-2 w-2 rounded-full ${
            isOnline ? "bg-green-500" : "bg-red-500"
          }`}
        />
        {isOnline && (
          <div className="absolute h-2 w-2 animate-ping rounded-full bg-green-500 opacity-75" />
        )}
      </div>
      <span className="text-sm text-muted-foreground">
        {isOnline ? "En ligne" : "Hors ligne"}
      </span>
    </div>
  );
}
