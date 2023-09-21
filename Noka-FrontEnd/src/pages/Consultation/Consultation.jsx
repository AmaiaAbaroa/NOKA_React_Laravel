import "./consultation.css";
import NavbarAtom from "../../components/atoms/NavbarAtom/NavBarAtom";
import FooterAtom from "../../components/atoms/FooterAtom/FooterAtom";
import SearchFilterMolecule from "../../components/molecules/SearchFilterMolecule/SearchFilterMolecule";
import CardAccordionAtom from "../../components/atoms/CardAccordionAtom/CardAccordionAtom";
import ConsultationQuestionFormAtom from "../../components/atoms/ConsulationQuestionFormAtom/ConsultationQuestionFormAtom";

const Consultation = () => {
  return (
    <>
      <NavbarAtom navbar_logo={true} subnavbar_subtitle={false} />
      <main className="landingpage_main">
        <SearchFilterMolecule></SearchFilterMolecule>
        <CardAccordionAtom color_article={"grey_article"} card_id_identifier={"1"} card_number_identifier={"1"} accordion_title={"BOTA ZURE KONSULTA"} accordion_body={<ConsultationQuestionFormAtom/>}></CardAccordionAtom>
        <CardAccordionAtom color_article={"blue_article"} card_id_identifier={"2"}  card_number_identifier={"2"} accordion_title={"EMAITZAK"} accordion_body={"Heme formulario bat joan beharko litzateke"}></CardAccordionAtom>
      </main>
      <FooterAtom logo={true}></FooterAtom>
    </>
  );
};

export default Consultation;
