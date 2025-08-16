"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface Item {
  title: string;
  description: string;
  content?: React.ReactNode;
}

interface StickyScrollRevealProps {
  content: Item[];
  contentClassName?: string;
}

export const StickyScrollReveal: React.FC<StickyScrollRevealProps> = ({
  content,
  contentClassName,
}) => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const len = content.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const gradients = [
    "linear-gradient(to bottom right, #0f172a, #1e293b)",
    "linear-gradient(to bottom right, #1e293b, #334155)",
    "linear-gradient(to bottom right, #0f172a, #0f172a)",
  ];

  const [bgGradient, setBgGradient] = useState(gradients[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / (len - 1));
    const idx = breakpoints.reduce((acc, bp, i) =>
      Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? i : acc,
      0
    );
    setActive(idx);
  });

  useEffect(() => {
    setBgGradient(gradients[active % gradients.length]);
  }, [active]);

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen flex items-center justify-center px-0">
        <motion.div
          className="flex flex-col lg:flex-row w-full h-full gap-12 items-center justify-center p-8 rounded-none shadow-none"
          animate={{ background: bgGradient }}
        >
          <div className="flex-1 text-center lg:text-left px-6">
            <motion.h2
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              className="text-5xl lg:text-6xl font-extrabold text-white transition-opacity duration-300"
            >
              {content[active]?.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-white text-lg max-w-2xl transition-opacity duration-300 mx-auto lg:mx-0"
            >
              {content[active]?.description}
            </motion.p>
          </div>
          <div
            className={cn(
              "w-full lg:w-1/2 p-6 rounded-md transition-all duration-500 bg-white/10 text-white text-sm",
              contentClassName
            )}
          >
            {content[active]?.content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
