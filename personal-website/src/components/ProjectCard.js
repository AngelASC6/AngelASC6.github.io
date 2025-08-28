import { Link } from "react-router";
import SkillPill from "./SkillPill";

export default function ProjectCard({ image, title, description, isLive, skills,link }) {
  return ( 
    <Link to={link}>
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:cursor-pointer m-4 max-w-md">
      <div className="h-48 overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={`Photo for ${title}`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div id="skills-container" className="flex flex-wrap gap-2">
          {skills && skills.length > 0 && skills.map((skill, index) => (
              <SkillPill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
    </Link>
  );
}
