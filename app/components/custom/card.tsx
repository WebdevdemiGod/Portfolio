import {motion} from "motion/react"


interface CardProps{
  title: string;
  icon: React.ReactNode;
}


const Card = ({title, icon}: CardProps) => {
  return (
    <motion.div className="w-full h-30 bg-black/50 backdrop-blur-sm border border-sky-500/30 rounded-lg p-6 hover:border-sky-400/70 transition-all duration-300 group"
    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(56, 189, 248, 0.1)" }}
    >
      <div className="flex  h-full justify-between">
        <div className="text-sky-400 group hover:text-white transition-colors duration-300">{icon}</div>
        <h2 className="text-white text-xl font-medium group-hover:text-sky-400 transition-colors duration-300">{title}</h2>
      </div>
    </motion.div>
  )
}


export default Card;