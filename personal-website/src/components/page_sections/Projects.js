import { useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectsData from "../../projects.json";
import ProjectModal from "../ProjectModal";
import Title from "../Title";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="container mx-auto px-4 pt-10" id="projects">
      <Title title="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {ProjectsData.projects?.map((project, index) => (
          <ProjectCard
            key={index}
            project={{
              ...project,
              image: require(`../../assets/projects/${project.image}`),
            }}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}