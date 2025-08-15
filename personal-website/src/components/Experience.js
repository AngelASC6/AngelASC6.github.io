import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import Title from "./Title";
import experienceData from "../experience.json";
import Button from "./Button";

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  const toggleExperience = () => {
    setShowAll(!showAll);
  };

  // If showAll is true, show all experiences, otherwise only show relevant experiences
  const experiencesToShow = showAll
    ? experienceData.experience
    : experienceData.experience.filter(
        (experience) => experience.relevant === true
      );

  return (
    <div
      id="experience"
      className="bg-stone-100 h-auto pb-10 relative z-20 pt-10"
    >
      <Title title={showAll ? "All Experience" : "Relevant Experience"} />
      <div id="content" className="flex items-center justify-center flex-wrap">
        {experiencesToShow.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.position}
            company={experience.company}
            startDate={experience.startDate}
            endDate={experience.endDate}
            responsibilities={experience.responsibilities}
            skills={experience.skills}
          />
        ))}
      </div>
      <Button
        text={showAll ? "View Relevant Experience" : "View All Experience"}
        onClick={toggleExperience}
      />
    </div>
  );
}
