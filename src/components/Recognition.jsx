import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Recognition = ({ title, organization, date }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 flex items-center justify-between"
  >
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">B</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-600">{organization}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-gray-500">{date}</span>
    </div>
  </motion.div>
);

Recognition.propTypes = {
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Recognition;