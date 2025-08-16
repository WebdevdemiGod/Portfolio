import { StickyScrollReveal } from "../components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Design and Planning",
    description: "Figma, Canva, Coolors, etc..",
    content: <div className="text-white">Detailed skills here</div>,
  },
  {
    title: "Frontend Development",
    description: "React, Next.js, Tailwind CSS, etc.",
    content: <div className="text-white">Detailed skills here</div>,
  },
  {
    title: "Backend Development",
    description: "Node.js, Supabase, PostgreSQL, etc.",
    content: <div className="text-white">API experience</div>,
  },
  {
    title: "",
    description: "",
    content: null,
  },
];

export default function SkillsPage() {
  return <StickyScrollReveal content={content}/>;
}
