import { Cable, CreditCard, BetweenHorizonalStart, ShoppingCart } from 'lucide-react';
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Cable,
      title: "Third-party API Integration",
      description: "Efficiently connecting your website with external services and platforms through professional API integration to expand your site's functionality"
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description: "Implementing secure payment solutions to enable smooth transactions through popular payment providers and financial services"
    },
    {
      icon: BetweenHorizonalStart,
      title: "Crafting ETL pipelines",
      description: "Develop robust data pipelines for extracting, transforming, and loading data efficiently, ensuring seamless integration between your data sources and destinations"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce development",
      description: "Creating powerful online stores with fluid shopping experiences, inventory management, and secure payment processing to help your business thrive in the digital marketplace"
    }
  ];

  return (
    <section className="mb-24">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-serif mb-12">What i do</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  </section>)

}

export default Services;