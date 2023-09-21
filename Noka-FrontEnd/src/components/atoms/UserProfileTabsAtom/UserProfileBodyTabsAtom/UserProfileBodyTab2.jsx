import './userProfileBodyTabsAtom.css';
import CardAccordionAtom from '../../CardAccordionAtom/CardAccordionAtom';
import CardCalculatorResult from '../../CardCalculatorResult/CardCalculatorResult';

function UserProfileBodyTab2() {

  return (
    <>
      <section>
        <div className='tabs_title_container'>
            <h4 className="tabs_title">Nire emaitzak</h4>
        </div>
            <CardAccordionAtom color_article={"blue_article"} card_id_identifier={5} card_number_identifier={5} accordion_title={"BIRBAREMAZIOA"} accordion_body={<CardCalculatorResult/>}></CardAccordionAtom>
            <CardAccordionAtom color_article={"blue_article"} card_id_identifier={4} card_number_identifier={4} accordion_title={"EPE -ak"} accordion_body={"Hemen beste tarjeta batzuk joango dira"}></CardAccordionAtom>
            <CardAccordionAtom color_article={"blue_article"} card_id_identifier={3} card_number_identifier={3} accordion_title={"LEKUALDATZE LEHIAKETA"} accordion_body={"Hemen beste tarjeta batzuk joango dira"}></CardAccordionAtom>
      </section>
    </>
  );
}

export default UserProfileBodyTab2;