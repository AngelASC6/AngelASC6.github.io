import SkillPill from "./SkillPill";
import Title from "./Title";

const coreTechnicalSkills = {
    programmingLanguages: [
      "Python",
      "Java",
      "JavaScript",
      "HTML/CSS",
      "PostgreSQL",
      "C",
      "RESTful API",
    ],
    frameworksAndLibraries: ["React.js", "Angular", "Node.js"],
    cloudAndInfrastructure: ["Azure", "AWS", "Terraform","Docker"]
    // Leaving this here for future implementation as more development tools are learned
    // developmentTools: ["GitHub", "Command Line"],
  };
  
  const softwareDevelopmentExpertise = [
    "Full-Stack Website Development (Front-End & Back-End)",
    "Agile Development Practices",
    "Object-Oriented Programming",
  ];
  
  const certifications = [{name:"Azure Fundamentals",url:"https://learn.microsoft.com/en-us/users/angelvasquez-2832/credentials/60617288ab6e4c24?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    
  }];

export default function Skills() {
    return(
        <div id="skills" className="h-auto z-20 relative bg-stone-200 pt-10 pb-20">
            <Title title="Skills"/>
            <div id="content" className="grid grid-cols-2">
                <div>
                    <h3 className="text-3xl font-light text-[#064523]">Programming Languages</h3>
                    <div id="programmingLanguages" className="grid grid-cols-3 p-4 mx-auto w-5/6">
                        {coreTechnicalSkills.programmingLanguages.map((skill, index) => (
                            <SkillPill key={index} skill={skill} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl font-light text-[#064523]">Frameworks and Libraries</h3>
                    <div id="frameworks" className="grid grid-cols-3 p-4 mx-auto w-5/6">
                        {coreTechnicalSkills.frameworksAndLibraries.map((skill, index) => (
                            <SkillPill key={index} skill={skill} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl font-light text-[#064523]">Cloud Computing and DevOps</h3>
                    <div id="cloudSkills" className="grid grid-cols-3 p-4 mx-auto w-5/6">
                        {coreTechnicalSkills.cloudAndInfrastructure.map((skill, index) => (
                            <SkillPill key={index} skill={skill} />
                        ))}
                    </div>
                </div>
                <div>
                    {/* TODO: Make skill wiggle to indicate to user that it is clickable */}
                    <h3 className="text-3xl font-light text-[#064523]">Certifications</h3>
                    <div id="certifications" className="grid grid-cols-3 p-4 mx-auto w-5/6">
                        {certifications.map((skill, index) => (
                            <SkillPill key={index} skill={skill.name} isLink="True" href={skill.url}/>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )

}