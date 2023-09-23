import "./consultation.css";
import NavbarAtom from "../../components/atoms/NavbarAtom/NavBarAtom";
import FooterAtom from "../../components/atoms/FooterAtom/FooterAtom";
import SearchFilterMolecule from "../../components/molecules/SearchFilterMolecule/SearchFilterMolecule";
import CardAccordionAtom from "../../components/atoms/CardAccordionAtom/CardAccordionAtom";
import ConsultationQuestionFormAtom from "../../components/atoms/ConsultationQuestionFormAtom/ConsultationQuestionFormAtom";
import WarningCard from "../../components/atoms/WarningCard/WarningCard";
import CardQuestionAccordionAtom from "../../components/atoms/CardQuestionAccordionAtom/CardQuestionAccordionAtom";

const Consultation = () => {
  return (
    <>
      <NavbarAtom navbar_logo={true} subnavbar_subtitle={false} />
      <main className="landingpage_main">
        <h3 className="pages_title">KONTSULTAK</h3>
        <SearchFilterMolecule></SearchFilterMolecule>
        <WarningCard warning_text_weight={"warning_bold"} warning_text={"GALDERA ERREPIKATUTA BADAGO, EZ DA ERANTZUNGO!!"}></WarningCard>
        <WarningCard warning_text_weight={"warning_light"} warning_text={"Gainontzeko erabiltzaileentzat baliagarriak diren galderak erantzungo dira. Galdera pertsonal eta oso zehatzetarako Hezkuntza Sailarekin jarri harremanetan, mesedez."}></WarningCard>
        <CardAccordionAtom color_article={"grey_article"} card_id_identifier={"31"} accordion_title={"BOTA ZURE KONSULTA"} accordion_body={<ConsultationQuestionFormAtom></ConsultationQuestionFormAtom>}></CardAccordionAtom>
        <CardAccordionAtom color_article={"grey_article"} card_id_identifier={"32"} accordion_title={"EMAITZAK"} accordion_body={<CardQuestionAccordionAtom question_id={51} input_name={"second_question"}></CardQuestionAccordionAtom>}></CardAccordionAtom>
      </main>
      <FooterAtom logo={true}></FooterAtom>
    </>
  );
};

export default Consultation;
