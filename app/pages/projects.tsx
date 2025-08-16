'use client';

import ProjectCard from '../components/custom/projectcard';

export default function Projects() {
  const projects = [
    {
      title: 'Budget Buddy',
      description: 'A budgeting app that helps you manage your expenses.',
      imageUrl: 'https://www.stampli.com/wp-content/uploads/2022/06/01-STAMPLI__-expense-accounts-hero.png',
      imagePosition: 'left',
    },
    {
      title: 'B.I.T.S',
      description: 'A web app for booking and inventory management.',
      imageUrl: 'https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/07/shutterstock_311463287.webp',
      imagePosition: 'right',
    },
    {
      title: '6 AM Ticketing',
      description: 'A ticketing system for 6 AM Services.',
      imageUrl: 'https://static.ra.co/images/promoter/us-6amgroup-logo.jpg?dateUpdated=1752223958047',
      imagePosition: 'left',
    },
  ];  

  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white">Recent Projects</h1>
        <p className="text-lg text-gray-300">A showcase of my recent work across development and design</p>
      </div>
      <div className="container mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            imagePosition={project.imagePosition as 'left' | 'right'}
          />
        ))}
      </div>
    </section>
  );
}
