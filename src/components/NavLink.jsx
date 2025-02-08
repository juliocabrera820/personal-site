import PropTypes from 'prop-types';

const NavLink = ({ children, href }) => (
  <a 
    href={href} 
    className="text-gray-700 hover:text-black transition-colors duration-300"
  >
    {children}
  </a>
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};

export default NavLink;
