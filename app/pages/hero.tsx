"use client";
import { motion } from "framer-motion";
import { Spotlight } from "../components/ui/spotlight-new";
import { Button } from "../components/custom/button";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center p-4 relative overflow-hidden">
      
      <Spotlight />
      <div className="w-full px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left Content */}
        <div className="w-full text-left">
          {/* Intro Line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-300 mb-2"
          >
            Hi, I’m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-purple-400"
          >
            XANDER JACOB LABIDE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-200">
              A creative{" "}
              <span className="text-sky-400 font-medium">designer</span> and{" "}
              <span className="text-sky-400 font-medium">developer</span>{" "}
              crafting beautiful digital experiences
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl mb-8 leading-relaxed"
          >
            <TextGenerateEffect 
              words="I build modern web apps and craft smooth, intuitive user experiences through thoughtful design. Right now, I'm expanding my skills to become a full-stack developer, so I can bring ideas to life from front to back. I am ready to develop to turn every pixel into a feature."
              className="text-neutral-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="#projects">
              <Button className="bg-purple-500 text-white hover:bg-purple-600 transition-colors">
                View My Work
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-shrink-0 w-[400px] h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]"
        >
          <div className="relative w-full h-full">
            <img
              src="/images/profile.jpg" 
              alt="Xander Jacob Labide"
              className="w-full h-full rounded-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="text-sm text-neutral-400 mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 bg-neutral-400 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
