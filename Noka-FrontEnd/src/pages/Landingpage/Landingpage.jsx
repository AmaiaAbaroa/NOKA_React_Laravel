import './landingpage.css';
import NavbarAtom from '../../components/atoms/NavbarAtom/NavBarAtom';
import CarouselAtom from '../../components/atoms/CarouselAtom/CarouselAtom';
import CardAccordionAtom from '../../components/atoms/CardAccordionAtom/CardAccordionAtom';
import FooterAtom from '../../components/atoms/FooterAtom/FooterAtom';

const Landingpage= () => {
    return (
    <>
        <NavbarAtom
            navbar_logo={true}
            logo_position={"no_login"}
            subnavbar_subtitle={true}
            />
        <main>
            <CarouselAtom></CarouselAtom>
            <CardAccordionAtom></CardAccordionAtom>
        </main>
        <FooterAtom logo={true}></FooterAtom>
    </>
    );
  };
  
  
  export default Landingpage;





