import AwardCard from "./Recognition";

const Recognitions = () => {
  return (
    <section className="mb-24">
    <h2 className="text-3xl font-serif mb-8">Recognitions</h2>
    <AwardCard 
      title="Bootcamp Ruby on Rails"
      organization="Brigthcoders"
      date="Aug 2021"
    />
  </section>
  );
}

export default Recognitions;