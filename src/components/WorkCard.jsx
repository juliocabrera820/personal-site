import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const WorkCard = ({ image, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="rounded-3xl bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
  >
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-serif mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

WorkCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default WorkCard;