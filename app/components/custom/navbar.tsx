"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'approach', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Adjust this value based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    {name: "Xander", href: "hero"},
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Approach", href: "approach" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-md py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full px-4 md:px-8">
        <nav className="flex justify-end space-x-8">
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`transition-colors text-sm font-medium uppercase tracking-wider ${
                  activeSection === item.href 
                    ? 'text-white' 
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}