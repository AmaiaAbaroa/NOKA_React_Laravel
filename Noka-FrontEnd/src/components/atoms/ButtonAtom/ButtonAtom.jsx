import './buttonAtom.css';
import PropTypes from 'prop-types';



const ButtonAtom = ({ label, color , width,  typeButton, action}) => {
  return (
    <button className={`button_atom ${color} ${width}`} type={typeButton} onClick={action} >
      {label} 
    </button>
  );
};

ButtonAtom.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  typeButton: PropTypes.string,
  action: PropTypes.any,
};

export default ButtonAtom;