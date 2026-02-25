import SkillPill from "./SkillPill";
import Title from "./Title";
import { motion } from "framer-motion";

const coreTechnicalSkills = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "HTML/CSS",
      "SQL",
      "C",
    ],
  },
  {
    title: "Frameworks and Libraries",
    skills: ["React.js", "Angular", "Node.js", "RESTful API"]
  },
  {
    title: "Cloud Computing and DevOps",
    skills: ["Azure", "AWS", "Terraform", "Docker"],
  },
  // Leaving this here for future implementation as more development tools are learned
  // developmentTools: ["GitHub", "Command Line"],
];

// TODO: Add certifications to the skills section above ^^
const certifications = [
  {
    name: "Azure Fundamentals",
    url: "https://learn.microsoft.com/en-us/users/angelvasquez-2832/credentials/60617288ab6e4c24?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
];

//   Animation variants for the skill pills
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <div id="skills" className="h-auto z-20 relative bg-stone-200 pt-10 pb-20">
      <Title title="Skills" />
      <div
        id="content"
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8"
      >
        {coreTechnicalSkills.map((section, index) => (
          <div key={index}>
            <h3 className="text-2xl md:text-3xl font-light text-[#064523]">
              {section.title}
            </h3>
            <motion.div
              d="programmingLanguages"
              className="grid grid-cols-2 sm:grid-cols-3 p-4 mx-auto w-full md:w-5/6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {section.skills.map((skill, index) => (
                <SkillPill key={index} skill={skill} variants={skillVariants} />
              ))}
            </motion.div>
          </div>
        ))}
        <div>
          <h3 className="text-2xl md:text-3xl font-light text-[#064523]">
            Certifications
          </h3>
          <motion.div
            id="certifications"
            className="grid grid-cols-2 sm:grid-cols-3 p-4 mx-auto w-full md:w-5/6 motion-safe:animate-[wiggle_1s_ease-in-out_infinite]"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {certifications.map((skill, index) => (
              <motion.div key={index} variants={skillVariants}>
                <SkillPill skill={skill.name} isLink="True" href={skill.url} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
