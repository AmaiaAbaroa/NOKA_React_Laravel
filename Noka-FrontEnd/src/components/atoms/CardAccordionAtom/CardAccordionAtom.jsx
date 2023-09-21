import "./cardAccordionAtom.css";
import PropTypes from 'prop-types';
import attachIcon from "../../../assets/icons/attach_icon.svg";
import expandIcon from "../../../assets/icons/expand_icon.svg";

const AccordionLandingpage = ({color_article, card_id_identifier, card_number_identifier, accordion_title, accordion_subtitle, accordion_body }) => {
    return (
      <>
        <div className="accordion">
          <article className={`article_card ${color_article}`}>
            <input id={`article${card_id_identifier}`} type="radio" name="articles"/>
            <label htmlFor={`article${card_number_identifier}`}>
              <div className="article_tittle_container">
                <div className="attach_tittle">
                    <img src={attachIcon} alt="Klip irudia" />
                    <h3 className="article_title">
                    {accordion_title}
                    </h3>
                </div>
                <img src={expandIcon} alt="Zabaldu irudia" />
              </div>
              <h6 className="article_subtitle">
                {accordion_subtitle}
              </h6>
            </label>

            <div className="article_body_container">
              {accordion_body}
            </div>

          </article>
          </div>

      </>
    );
  };

  AccordionLandingpage.propTypes = {
    color_article: PropTypes.string.isRequired,
    card_id_identifier: PropTypes.number.isRequired,
    card_number_identifier: PropTypes.number.isRequired,
    accordion_title: PropTypes.string.isRequired,
    accordion_subtitle: PropTypes.string,
    accordion_body: PropTypes.element.isRequired,
  };

  
  export default AccordionLandingpage;