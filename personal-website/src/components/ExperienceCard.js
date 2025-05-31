import SkillPill from "./SkillPill";

export default function ExperienceCard({ title, company, startDate, endDate, responsibilities, skills }) {
    return (
        <div className="bg-white rounded-lg p-4 sm:p-6 m-2 sm:m-4 w-full sm:w-3/4 border-2 text-left">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#064523] text-center md:text-left">{title}</h2>
            <h3 className="text-lg sm:text-xl font-semibold text-[#158749] text-center md:text-left">{company}</h3>
            <p className="text-base sm:text-lg font-normal text-slate-700">{startDate} - {endDate}</p>
            <ul className="list-disc ml-4 sm:ml-6">
                {responsibilities && responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-base sm:text-lg font-normal">{responsibility}</li>
                ))}
                {skills && skills.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                ))}
            </ul>
        </div>
    );
}