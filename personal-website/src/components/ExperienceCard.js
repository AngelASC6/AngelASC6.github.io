import SkillPill from "./SkillPill";

export default function ExperienceCard({ title, company, startDate, endDate, responsibilities, skills }) {
    return (
        <div className="bg-white rounded-lg p-6 m-4 w-3/4 border-2 text-left">
            <h2 className="text-4xl font-bold text-[#064523]">{title}</h2>
            <h3 className="text-xl font-semibold text-[#158749]">{company}</h3>
            <p className="text-lg font-normal text-slate-700">{startDate} - {endDate}</p>
            <ul className="list-disc ml-6">
                {responsibilities && responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-lg font-normal">{responsibility}</li>
                ))}
                {skills && skills.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                ))}
            </ul>
        </div>
    );
}