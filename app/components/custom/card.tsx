import { motion } from "motion/react";

interface CardProps {
  title: string;
  icon: React.ReactNode;
}

const Card = ({ title, icon }: CardProps) => {
  return (
    <motion.div
      className="relative w-full h-28 bg-black/30 backdrop-blur-lg border border-sky-500/20 rounded-xl p-6 cursor-pointer overflow-hidden group"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(14,165,233,0.4), 0 0 25px rgba(14,165,233,0.2)",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      {/* Glowing animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-500 via-cyan-400 to-purple-500 opacity-30 blur-xl animate-gradient-slow"
        style={{ zIndex: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />

      <div className="relative flex h-full items-center justify-between z-10">
        <motion.div
          className="text-3xl text-sky-400"
          whileHover={{ scale: 1.3, rotate: 15 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          {icon}
        </motion.div>
        <h2 className="text-white text-2xl font-semibold">{title}</h2>
      </div>

      {/* Optional small glowing dots floating */}
      <motion.div
        className="absolute top-2 left-2 w-2 h-2 rounded-full bg-cyan-400 opacity-50"
        animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.div
        className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-purple-400 opacity-50"
        animate={{ y: [0, -8, 0], x: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </motion.div>
  );
};

export default Card;
