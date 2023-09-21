import "./accordionLandingpage.css";
import attachIcon from "../../../assets/icons/attach_icon.svg";
import padlockIcon from "../../../assets/icons/padlock_icon.svg";
import ButtonLandingpageAtom from "../../atoms/ButtonsLandinpageAtom/ButtonLandingpageAtom";

const AccordionLandingpage = () => {
  return (
    <>
      <div className="accordion">
        <article className="article_card">
          <input id="article1" type="radio" name="articles" checked />
          <label htmlFor="article1">
            <div className="article_tittle_container">
              <img src={attachIcon} alt="Klip irudia" />
              <h3 className="article_title">
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

        <article className="article_card">
          <input id="article2" type="radio" name="articles" />
          <label htmlFor="article2">
            <div className="article_tittle_container">
              <img src={attachIcon} alt="Klip irudia" />
              <h3 className="article_title">PROZESU ADMINISTRATIBOAK</h3>
            </div>
            <h6 className="article_subtitle">
              Azaldutako informazio guztia dokumentu ofizialetatik hartutakoa
              da.{" "}
            </h6>
          </label>
          <div className="article_body_container">
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

        <article className="article_card">
          <input id="article3" type="radio" name="articles" />
          <label htmlFor="article3">
            <div className="article_tittle_container">
              <img src={attachIcon} alt="Klip irudia" />
              <h3 className="article_title">KALKULAGAILUA</h3>
              <img
                className="article_paddlock_img"
                src={padlockIcon}
                alt="Kandadu irudia"
              />
            </div>
            <h6 className="article_subtitle">
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

        <article className="article_card">
          <input id="article4" type="radio" name="articles" />
          <label htmlFor="article4">
            <div className="article_tittle_container">
              <img src={attachIcon} alt="Klip irudia" />
              <h3 className="article_title">EGUTEGIA</h3>
              <img
                className="article_paddlock_img"
                src={padlockIcon}
                alt="Kandadu irudia"
              />
            </div>
            <h6 className="article_subtitle">
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

        <article className="article_card">
          <input id="article5" type="radio" name="articles" />
          <label htmlFor="article5">
            <div className="article_tittle_container">
              <img src={attachIcon} alt="Klip irudia" />
              <h3 className="article_title">KONTSULTAK</h3>
              <img
                className="article_paddlock_img"
                src={padlockIcon}
                alt="Kandadu irudia"
              />
            </div>
            <h6 className="article_subtitle">
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
