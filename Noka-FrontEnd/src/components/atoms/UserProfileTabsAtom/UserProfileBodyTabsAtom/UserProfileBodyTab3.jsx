import './userProfileBodyTabsAtom.css';
import CardAccordionAtom from '../../CardAccordionAtom/CardAccordionAtom';

function UserProfileBodyTab3() {

  return (
    <>
      <section>
        <div className='tabs_title_container'>
            <h4 className="tabs_title">Nire emaitzak</h4>
        </div>
            <CardAccordionAtom color_article={"yellow_article"} card_id_identifier={21} card_number_identifier={21} accordion_title={"NIK GALDETUTAKOAK"} accordion_body={"Hemen beste tarjeta batzuk joango dira"}></CardAccordionAtom>
            <CardAccordionAtom color_article={"yellow_article"} card_id_identifier={22} card_number_identifier={22} accordion_title={"GORDETAKOAK"} accordion_body={"Hemen beste tarjeta batzuk joango dira"}></CardAccordionAtom>
      </section>
    </>
  );
}

export default UserProfileBodyTab3;