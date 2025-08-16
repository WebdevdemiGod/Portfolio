interface ProjectCardProps {
    title: string;
    description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard;