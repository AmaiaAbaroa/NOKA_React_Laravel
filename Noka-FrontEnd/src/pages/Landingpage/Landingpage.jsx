import "./landingpage.css";
import NavbarAtom from "../../components/atoms/NavbarAtom/NavBarAtom";
import CarouselAtom from "../../components/atoms/CarouselAtom/CarouselAtom";
import AccordionLandingpage from "../../components/molecules/AccordionLandingape/AccordionLandingpage";
import FooterAtom from "../../components/atoms/FooterAtom/FooterAtom";
import SearchAtom from "../../components/atoms/SearchAtom/SearchAtom";
const Landingpage = () => {
  return (
    <>
      <NavbarAtom
        navbar_logo={true}
        logo_position={"no_login"}
        subnavbar_subtitle={true}
      />
      <main className="landingpage_main">
        <SearchAtom></SearchAtom>
        <CarouselAtom></CarouselAtom>
        <AccordionLandingpage></AccordionLandingpage>
      </main>
      <FooterAtom logo={true}></FooterAtom>
    </>
  );
};

export default Landingpage;
