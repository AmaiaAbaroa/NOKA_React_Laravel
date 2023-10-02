import { useState } from 'react';
import PropTypes from 'prop-types';
import attachIcon from "../../../assets/icons/attach_icon.svg";
import expandIcon from "../../../assets/icons/expand_icon.svg";
import "./cardAccordionAtom.css";

const CardAccordionAtom = ({
  color_article,
  card_id_identifier,
  accordion_title,
  accordion_subtitle,
  accordion_body,
  
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <article className={`article_card ${color_article}`}>
        <input
          id={`article${card_id_identifier}`}
          type="checkbox"
          name={card_id_identifier}
          checked={isOpen}
          onChange={toggleAccordion}
        />
        <label htmlFor={`article${card_id_identifier}`}>
          <div className="article_tittle_container">
            <div className="attach_tittle">
              <img src={attachIcon} alt="Klip irudia" />
              <h3 className="article_title">{accordion_title}</h3>
            </div>
            <img src={expandIcon} alt="Zabaldu irudia" />
          </div>
          <h6 className="article_subtitle">{accordion_subtitle}</h6>
        </label>

        <div className="article_body_container">
          <>{isOpen && accordion_body}</>
        </div>
      </article>
    </div>
  );
};

CardAccordionAtom.propTypes = {
  color_article: PropTypes.string.isRequired,
  card_id_identifier: PropTypes.number.isRequired,
  
  accordion_title: PropTypes.string.isRequired,
  accordion_subtitle: PropTypes.string,
  accordion_body: PropTypes.any.isRequired,
};

export default CardAccordionAtom;

