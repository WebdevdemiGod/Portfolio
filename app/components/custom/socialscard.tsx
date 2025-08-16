import { motion } from "framer-motion";
import Link from "next/link";

interface SocialCardProps {
    title: string;
    icon: React.ReactNode;
    description: string;
    href?: string;
}

const SocialCard = ({ title, icon, description, href = "#" }: SocialCardProps) => {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <motion.div 
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                whileHover={{ x: 5 }}
            >
                <div className="p-2 bg-sky-900/30 rounded-lg group-hover:bg-sky-600/50 transition-colors">
                    {icon}
                </div>
                <div>
                    <h3 className="text-white font-medium">{title}</h3>
                    <p className="text-gray-400 text-sm">{description}</p>
                </div>
            </motion.div>
        </Link>
    );
};

export default SocialCard;
