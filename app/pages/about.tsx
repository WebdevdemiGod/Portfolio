"use client"

import { main } from "motion/react-client"
import Card from "../components/custom/card"
import { ExpandableCardDemo } from "../components/ui/expandablecards"
import { Paintbrush, Code, Zap, Dumbbell } from "lucide-react"

export default function About() {
  return (
    <section className="flex min-h-screen w-full bg-black flex-col items-center p-4 pt-0 relative overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white">About <span className="text-sky-400">Me</span></h1>
        <p className="text-white">I'm a disciplinary creative who bridges the gap between design and development</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-5 mt-10 w-full  mx-auto">
        <div className="lg:w-1/2">
          <p className="text-gray-300 text-lg leading-relaxed text-justify">
            Hi, I&apos;m Xander Jacob Labide, currently studying at the University of San Carlos and building modern web interfaces. I specialize in crafting intuitive user experiences and clean, responsive frontends using React, TailwindCSS, and Figma. Most of my experience comes from university projects and self-driven learning, but I&apos;m actively expanding my skill set to become a full-stack developer. I&apos;m also starting to explore the world of backend development and eyeing a future path that may include cybersecurity. I believe in writing clean, readable code and designing with empathy, creating interfaces that feel natural. When I&apos;m not building interfaces, you&apos;ll likely find me at the gym, watching Formula 1, or learning something new in tech.
          </p>
        </div>
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card 
            title="UI/UX Designer" 
            icon={<Paintbrush className="w-8 h-8" />} 
          />
          <Card 
            title="Coding" 
            icon={<Code className="w-8 h-8" />} 
          />
          <Card 
            title="Formula One" 
            icon={<Zap className="w-8 h-8" />} 
          />
          <Card 
            title="Gym Rat" 
            icon={<Dumbbell className="w-8 h-8" />} 
          />
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="flex justify-center items-center text-4xl font-bold text-white  mt-5">Academic Achievements & <span className="text-sky-400">Highlights</span></h1>
        <ExpandableCardDemo/>
      </div>
    </section>
  )
}