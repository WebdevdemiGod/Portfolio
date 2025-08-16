"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";

export default function Approach() {
  return (
    <section className="min-h-screen w-fullflex items-center p-4 relative overflow-hidden flex-col bg-black ">
      <div className="flex flex-col items-center py-8 mt-10">
        <h1 className="text-6xl font-bold text-white">
          My <span className="text-sky-400">Approach</span>
        </h1>
        <p className="text-white mt-4">
        I design and build with a clear strategy to bring each project to its fullest potential through smart, goal-driven execution.
        </p>
      </div>

      <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        <Card 
          title="Planning & Strategy" 
          icon={<PhaseIcon number={1} />}
          description="We’ll collaborate to map out your website’s goals, target audience, and key functionalities, We’ll Discuss things like site structure, navigationm and content requirements"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card 
          title="Development" 
          icon={<PhaseIcon number={2} />}
          description="Once we agree on the plan, I cue my Alternative Rock playlist and dive into designing and Coding. From initial sketches to polished code, I keep you updated every step of the way"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card 
          title="Development & Launch" 
          icon={<PhaseIcon number={3} />}
          description="This is where the magic happens! Based on the approved design with or without adjustments, I’ll translate everything into functional code, building your website from ground up"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem]  "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-sm text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-2 group-hover/canvas-card:text-white transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

const PhaseIcon = ({ number }: { number: number }) => {
  // Solid colors for each phase
  const phaseColors = {
    1: 'bg-emerald-500',
    2: 'bg-indigo-500',
    3: 'bg-amber-500'
  };

  // Icons for each phase
  const phaseIcons = {
    1: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    2: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    3: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  };

  // Phase titles
  const phaseTitles = {
    1: 'Plan',
    2: 'Develop',
    3: 'Launch'
  };

  return (
    <div className="relative group">
      <div className="relative flex flex-col items-center p-6 bg-black/50 backdrop-blur-sm rounded-2xl">
        <div className={`flex items-center justify-center w-16 h-16 rounded-full ${phaseColors[number as keyof typeof phaseColors]} text-white text-2xl font-bold mb-4 transform group-hover:scale-105 transition-transform duration-300`}>
          {phaseIcons[number as keyof typeof phaseIcons]}
        </div>
        <div className="text-center">
          <span className="text-white/80 text-sm font-medium tracking-wider">
            PHASE {number}
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            {phaseTitles[number as keyof typeof phaseTitles]}
          </h3>
        </div>
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};