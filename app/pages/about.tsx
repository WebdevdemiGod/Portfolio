'use client';

import Card from "../components/custom/card";
import { ExpandableCardDemo } from "../components/ui/expandablecards";
import { Paintbrush, Code, Zap, Dumbbell } from "lucide-react";

export default function About() {
  return (
    <section className="flex flex-col min-h-screen w-full bg-gradient-to-b from-black via-black/90 to-black items-center relative overflow-hidden gap-16 px-6 lg:px-16 py-16">
      
      {/* Heading */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          About <span className="text-sky-400">Me</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          I'm a disciplinary creative who bridges the gap between design and development
        </p>
      </div>

      {/* Bio + Cards */}
      <div className="flex flex-col lg:flex-row items-start gap-12 w-full max-w-6xl mx-auto">
        
        {/* Bio */}
        <div className="lg:w-1/2 text-gray-300 text-md md:text-lg leading-relaxed text-justify">
          Hi, I&apos;m Xander Jacob Labide, currently studying at the University of San Carlos and building modern web interfaces. I specialize in crafting intuitive user experiences and clean, responsive frontends using React, TailwindCSS, and Figma. Most of my experience comes from university projects and self-driven learning, but I&apos;m actively expanding my skill set to become a full-stack developer. I&apos;m also starting to explore the world of backend development and eyeing a future path that may include cybersecurity. I believe in writing clean, readable code and designing with empathy, creating interfaces that feel natural. When I&apos;m not building interfaces, you&apos;ll likely find me at the gym, watching Formula 1, or learning something new in tech.
        </div>

        {/* Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card title="UI/UX Designer" icon={<Paintbrush className="w-6 h-6" />} />
          <Card title="Coding" icon={<Code className="w-6 h-6" />} />
          <Card title="Formula One" icon={<Zap className="w-6 h-6" />} />
          <Card title="Gym Rat" icon={<Dumbbell className="w-6 h-6" />} />
        </div>
      </div>

      {/* Academic Achievements */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
          Academic Achievements & <span className="text-sky-400">Highlights</span>
        </h2>
        <div className="border-t border-sky-500/20 my-2" />
        <ExpandableCardDemo />
      </div>
    </section>
  );
}
