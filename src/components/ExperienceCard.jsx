import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ExperienceCard = ({ company, role, date, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300"
  >
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-lg">{role}</h3>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>
      <span className="text-gray-500 text-sm">{date}</span>
    </div>
  </motion.div>
);

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
};

export default ExperienceCard;