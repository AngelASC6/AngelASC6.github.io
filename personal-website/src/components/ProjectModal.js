import { useEffect } from "react";
import SkillPill from "./SkillPill";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!project) return null;

  const { image, title, description, skills, liveUrl, githubUrl, isLive } = project;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-modal-in" onClick={(e) => e.stopPropagation()}>
        
        {/* Image + close button */}
        <div className="relative h-56">
          <img className="w-full h-full object-cover" src={image} alt={title} />
          {isLive && <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Live</span>}
          <button onClick={onClose} className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8" aria-label="Close">✕</button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-5">{description}</p>

          {skills?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, i) => <SkillPill key={i} skill={skill} />)}
            </div>
          )}

          <div className="flex gap-3">
            {liveUrl && isLive && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-medium py-2.5 rounded-lg text-sm">View Live →</a>}
            {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 text-center font-medium py-2.5 rounded-lg text-sm">GitHub</a>}
          </div>
        </div>

      </div>
    </div>
  );
}