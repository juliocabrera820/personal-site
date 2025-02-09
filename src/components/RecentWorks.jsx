import WorkCard from "./WorkCard";
import Links from '../assets/projects/linktri.png'
import Bingo from '../assets/projects/bingo.png'

const projects = [
  {
    image: Links,
    title: "Linktri",
    description: "Web app to display links to your social media profiles, websites, and more with a single link."
  },
  {
    image: Bingo,
    title: "Bingo - Bands",
    description: "Web app to play bingo with your friends using the names of your favorite bands."
  }
];

const RecentWorks = () => {
  return (
    <section className="mb-24">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-serif mb-12">Recent works</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((work, index) => (
          <WorkCard 
            key={index}
            image={work.image}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </div>
  </section>
  );
}

export default RecentWorks;