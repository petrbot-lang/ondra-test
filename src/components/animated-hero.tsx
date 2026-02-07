"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedHeroProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showThemeToggle?: boolean;
}

export function AnimatedHero({
  title = "Ondra Test",
  subtitle = "Dummy SaaS landing powered by VengeanceUI-style motion",
  className,
  showThemeToggle = false,
}: AnimatedHeroProps) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDarkMode = () => document.documentElement.classList.contains("dark");
    setIsDark(checkDarkMode());

    const observer = new MutationObserver(() => {
      setIsDark(checkDarkMode());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <section className={cn("relative isolate overflow-hidden rounded-3xl", className)}>
      <div
        className="absolute inset-0 animate-aurora-bg"
        style={{
          backgroundImage: `repeating-linear-gradient(
            100deg,
            var(--stripe-color) 0%,
            var(--stripe-color) 7%,
            transparent 10%,
            transparent 12%,
            var(--stripe-color) 16%
          ), repeating-linear-gradient(
            100deg,
            hsl(var(--rainbow-blue)) 10%,
            hsl(var(--rainbow-pink)) 15%,
            hsl(var(--rainbow-blue)) 20%,
            hsl(var(--rainbow-cyan)) 25%,
            hsl(var(--rainbow-blue)) 30%
          )`,
          backgroundSize: "300% 200%",
          backgroundPosition: "50% 50%",
          filter: isDark ? "blur(18px) opacity(0.55)" : "blur(18px) invert(1)",
          maskImage: "radial-gradient(ellipse at 100% 0%, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 100% 0%, black 30%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-start gap-6 px-10 py-16 text-left">
        <div className="flex w-full items-center justify-between">
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
            VengeanceUI inspired
          </span>
          {showThemeToggle && (
            <button
              type="button"
              className="rounded-full border border-white/20 p-2 text-white/70 hover:border-white/40"
              onClick={() => document.documentElement.classList.toggle("dark")}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold leading-tight text-white md:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-sm text-white/70 md:text-base"
        >
          {subtitle}
        </motion.p>

        <div className="flex flex-wrap gap-4">
          <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900">
            Start free trial
          </button>
          <button className="rounded-full border border-white/30 px-6 py-3 text-sm text-white">
            View demo
          </button>
        </div>
      </div>
    </section>
  );
}
