import ExperienceCard from "./ExperienceCard";

const workExperience = [
  {
    company: "Reservamos",
    role: "Backend Developer",
    date: "Sep 2021 - Present",
    icon: <div className="w-8 h-8 md:w-8 md:h-8 bg-pink-400 rounded-full" />
  },
  {
    company: "Coatí Labs",
    role: "Fullstack Developer",
    date: "Oct 2020 - Dec 2020",
    icon: <div className="w-8 h-8 md:w-8 md:h-8 bg-teal-500 rounded-full" />
  }
];
const Experience = () => {
  return (
    <section className="mb-24">
    <h2 className="text-3xl font-serif mb-8">Working experience</h2>
    <div className="space-y-4">
      {workExperience.map((experience, index) => (
        <ExperienceCard 
          key={index}
          company={experience.company}
          role={experience.role}
          date={experience.date}
          icon={experience.icon}
        />
      ))}
    </div>
  </section>
  );
}

export default Experience;