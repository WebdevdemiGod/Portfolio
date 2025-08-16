"use client"

import ProjectCard from "../components/custom/projectcard"

export default function Projects() {
  return (
   <section className="min-h-screen w-full bg-black flex items-center p-4 relative overflow-hidden flex-col">
    <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white">Recent <span className="text-sky-400">Projects</span></h1>
        <p className="text-white">A showcase of my recent work across development and design</p>
    </div>

    <div>
      <ProjectCard title="Budget Buddy" description="Web Development 2 Final Project - A budgeting app that helps you manage your expenses" />
      <ProjectCard title="B.I.T.S" description="Capstone Project: A web appl that helps the Department of Computer Information Sciences and Mathematics on their Booking and Inventory Management" />
      <ProjectCard title="6 AM Ticketing" description="Side Project Under DEVGO: A ticketing system for the 6 AM Services where they sell concert tickets" />
    </div>
  
   </section>
  )
}
