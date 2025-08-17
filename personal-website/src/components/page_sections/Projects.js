import ProjectCard from "../ProjectCard";
import ProjectsData from "../../projects.json";

export default function Projects() {
    return(
        <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#064523] text-center mb-6">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ProjectsData.projects && ProjectsData.projects.length > 0 && ProjectsData.projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        image={require(`../../assets/projects/${project.image}`)}
                        title={project.title}
                        description={project.description}
                        skills={project.skills}
                        isLive={project.isLive}
                    />
                ))}
            </div>
        </div>
    )
}