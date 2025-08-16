'use client';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
}

const ProjectCard = ({ title, description, imageUrl, imagePosition }: ProjectCardProps) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between w-full mb-12 ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full md:w-1/2 p-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-semibold text-white mb-4">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
