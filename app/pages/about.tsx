"use client"

import { main } from "motion/react-client"
import Card from "../components/custom/card"
import { ExpandableCardDemo } from "../components/ui/expandablecards"

export default function About() {
  return (

    <main className="min-h-screen w-full bg-black flex-col items-center p-4 relative overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white">About <span className="text-sky-400">Me</span></h1>
        <p className="text-white">I'm a disciplinary creative who bridge the gap between design and development</p>
      </div>

      <div className="flex px-5 mt-20">
        <p>Hi, I’m Xander Jacob Labide,  currently studying at the University of San Carlos and building modern web interfaces, I specialize in crafting intuitive user experiences and clean, responsive frontends using React, TailwindCSS, and Figma. Most of my experience comes from university projects and self-driven learning, but I’m actively expanding my skill set to become a full-stack developer. I'm also starting to explore the world of backend development and eyeing a future path that may include cybersecurity. I believe in writing clean, readable code and designing with empathy creating interfaces that feel natural .When I’m not building interfaces, you’ll likely find me at the gym, watching Formula 1, or learning something new in tech.</p>
        <div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      <div>
        <h1 className="flex justify-center items-center text-4xl font-bold text-white mt-20 ">Academic Achievements & <span className="text-sky-400">  Highlights</span></h1>
        <ExpandableCardDemo/>
      </div>
    </main>
  )
}