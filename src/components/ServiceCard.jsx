import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-8 rounded-3xl bg-white hover:shadow-lg transition-all duration-300"
  >
    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="text-2xl font-serif mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ServiceCard;