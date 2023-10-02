import "./accordionLandingpage.css";
import attachIcon from "../../../assets/icons/attach_icon.svg";
import padlockIcon from "../../../assets/icons/padlock_icon.svg";
import ButtonLandingpageAtom from "../../atoms/ButtonsLandinpageAtom/ButtonLandingpageAtom";

const AccordionLandingpage = () => {
  return (
    <>
      <div className="landingpage_accordion_container">
        <article className="landingpage_article_card">
          <input id="article1" type="checkbox" name="article1"/>
          <label htmlFor="article1">
            <div className="landingpage_article_tittle_container">
              <img src={attachIcon} alt="Klip irudia" />
              <h3 className="landingpage_article_title">
                INFO OROKORRA -<br></br>BURUA KOKATZEN
              </h3>
            </div>
            <h6 className="article_subtitle">
              Irakaskuntza publikoaren munduan murgildu aurretik jakin beharreko
              oinarrizko hainbat ideia.
            </h6>
          </label>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            veritatis fugiat possimus hic doloremque sint reiciendis? Quasi
            beatae explicabo qui quod atque a iste. Explicabo inventore quo
            expedita tempore amet!
          </div>
        </article>

        <article className="landingpage_article_card">
          <input id="article2" type="checkbox" name="article2" />
          <label htmlFor="article2">
            <div className="landingpage_article_tittle_container">
              <img src={attachIcon} alt="Klip irudia" />
              <h3 className="landingpage_article_title">PROZESU ADMINISTRATIBOAK</h3>
            </div>
            <h6 className="landingpage_article_subtitle">
              Azaldutako informazio guztia dokumentu ofizialetatik hartutakoa
              da.{" "}
            </h6>
          </label>
          <div className="landingpage_article_body_container">
            <ButtonLandingpageAtom
              label={"ZERRENDA IREKIERA"}
              color="blue_land"
            ></ButtonLandingpageAtom>
            <ButtonLandingpageAtom
              label={"BIRBAREMAZIOA"}
              color="green_land"
            ></ButtonLandingpageAtom>
            <ButtonLandingpageAtom
              label={"IKASTURTE HASIERAKO ESLEIPENAK"}
              color="red_land"
            ></ButtonLandingpageAtom>
            <ButtonLandingpageAtom
              label={"ORDEZKAGUNEA"}
              color="yellow_land"
            ></ButtonLandingpageAtom>
            <ButtonLandingpageAtom
              label={"EPE -ak"}
              color="orange_land"
            ></ButtonLandingpageAtom>
            <ButtonLandingpageAtom
              label={"LEKUALDATZE LEHIAKETA"}
              color="purple_land"
            ></ButtonLandingpageAtom>
          </div>
        </article>

        <article className="landingpage_article_card">
          <input id="article3" type="checkbox" name="article3" />
          <label htmlFor="article3">
            <div className="landingpage_article_tittle_container">
              <img src={attachIcon} alt="Klip irudia" />
              <h3 className="landingpage_article_title">KALKULAGAILUA</h3>
              <img
                className="landingpage_article_paddlock_img"
                src={padlockIcon}
                alt="Kandadu irudia"
              />
            </div>
            <h6 className="landingpage_article_subtitle">
              Norberaren titulu/ziurtagiri eta abarrak prozesu bakoitzaren
              baremoan sartu eta kalkulatzeko.{" "}
            </h6>
          </label>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            veritatis fugiat possimus hic doloremque sint reiciendis? Quasi
            beatae explicabo qui quod atque a iste. Explicabo inventore quo
            expedita tempore amet!
          </div>
        </article>

        <article className="landingpage_article_card">
          <input id="article4" type="checkbox" name="article4" />
          <label htmlFor="article4">
            <div className="landingpage_article_tittle_container">
              <img src={attachIcon} alt="Klip irudia" />
              <h3 className="landingpage_article_title">EGUTEGIA</h3>
              <img
                className="landingpage_article_paddlock_img"
                src={padlockIcon}
                alt="Kandadu irudia"
              />
            </div>
            <h6 className="landingpage_article_subtitle">
              Ikasturtean zehar dauden prozesuen egutegi orokorra eta data
              zehatzak berriak argitaratu ahala.
            </h6>
          </label>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            veritatis fugiat possimus hic doloremque sint reiciendis? Quasi
            beatae explicabo qui quod atque a iste. Explicabo inventore quo
            expedita tempore amet!
          </div>
        </article>

        <article className="landingpage_article_card">
          <input id="article5" type="checkbox" name="article5" />
          <label htmlFor="article5">
            <div className="landingpage_article_tittle_container">
              <img src={attachIcon} alt="Klip irudia" />
              <h3 className="landingpage_article_title">KONTSULTAK</h3>
              <img
                className="landingpage_article_paddlock_img"
                src={padlockIcon}
                alt="Kandadu irudia"
              />
            </div>
            <h6 className="landingpage_article_subtitle">
              Zuen zalantzak erantzuten saiatuko gara.
            </h6>
          </label>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            veritatis fugiat possimus hic doloremque sint reiciendis? Quasi
            beatae explicabo qui quod atque a iste. Explicabo inventore quo
            expedita tempore amet!
          </div>
        </article>
      </div>
    </>
  );
};

export default AccordionLandingpage;
