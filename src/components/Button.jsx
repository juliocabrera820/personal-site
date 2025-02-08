import PropTypes from 'prop-types';

const Button = ({ text, variant = 'primary', href = '#' }) => {
  const baseStyles = "px-6 py-2 rounded-full transition-all duration-300 hover:scale-105";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border border-gray-200 hover:border-gray-400",
    tertiary: "bg-transparent text-black border border-black hover:bg-black hover:text-white"
  };

  return (
    <a href={href} target='_blank' className={`${baseStyles} ${variants[variant]}`}>
      {text}
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  href: PropTypes.string
};

export default Button;