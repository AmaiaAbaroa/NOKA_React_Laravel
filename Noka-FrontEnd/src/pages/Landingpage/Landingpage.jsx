import './landingpage.css';
import PropTypes from 'prop-types';
import NavbarAtom from '../../components/atoms/NavbarAtom/NavBarAtom';
import CarouselAtom from '../../components/atoms/CarouselAtom/CarouselAtom';


const ButtonAtom = () => {
    return (
    <>
        <NavbarAtom
            navbar_logo={true}
            logo_position={"no_login"}
            subnavbar_subtitle={true}
            />
        <CarouselAtom></CarouselAtom>
    
    </>
    );
  };
  
  ButtonAtom.propTypes = {
    label: PropTypes.string.isRequired,

  };
  
  export default ButtonAtom;





