import './landingpage.css';
import NavbarAtom from '../../components/atoms/NavbarAtom/NavBarAtom';
import CarouselAtom from '../../components/atoms/CarouselAtom/CarouselAtom';
import CardAccordionAtom from '../../components/atoms/CardAccordionAtom/CardAccordionAtom';

const Landingpage= () => {
    return (
    <>
        <NavbarAtom
            navbar_logo={true}
            logo_position={"no_login"}
            subnavbar_subtitle={true}
            />
        <CarouselAtom></CarouselAtom>
        <CardAccordionAtom></CardAccordionAtom>
    </>
    );
  };
  
  
  export default Landingpage;





