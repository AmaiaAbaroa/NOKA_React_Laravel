import './buttonLandingpage.css'
import PropTypes from 'prop-types';



const ButtonLandingpageAtom = ({ label, color , typeButton, action}) => {
  return (
    <div className='button_landingpage_container'>
        <button className={`button_landingpage_atom ${color} `} type={typeButton} onClick={action} >
        {label} 
        </button>
    </div>
  );
};

ButtonLandingpageAtom.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  typeButton: PropTypes.string,
  action: PropTypes.any,
};

export default ButtonLandingpageAtom;