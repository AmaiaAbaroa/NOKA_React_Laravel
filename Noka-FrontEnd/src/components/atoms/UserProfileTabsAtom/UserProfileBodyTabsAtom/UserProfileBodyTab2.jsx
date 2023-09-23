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
            <CardAccordionAtom color_article={"blue_article"} card_id_identifier={11} accordion_title={"BIRBAREMAZIOA"} accordion_body={<CardCalculatorResult ></CardCalculatorResult>}></CardAccordionAtom>
            <CardAccordionAtom color_article={"blue_article"} card_id_identifier={12} accordion_title={"EPE -ak"} accordion_body={"Momentu honetan utzik dago atal hau"}></CardAccordionAtom>
            <CardAccordionAtom color_article={"blue_article"} card_id_identifier={13} accordion_title={"LEKUALDATZE LEHIAKETA"} accordion_body={<CardCalculatorResult></CardCalculatorResult>}></CardAccordionAtom>
      </section>
    </>
  );
}

export default UserProfileBodyTab2;