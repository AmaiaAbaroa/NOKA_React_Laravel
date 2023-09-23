import './warningCard.css';
import PropTypes from 'prop-types';
import warningIcon from "../../../assets/icons/warning_icon.svg";


const WarningCard = ({warning_text, warning_text_weight}) => {
    return (
      <>
          <article className={`warning_card_container ${warning_text_weight}`} >
            <img src={warningIcon} alt="Oharpen irudia" />
            <p>{warning_text}</p>
          </article>
      </>
    );
  };

  WarningCard.propTypes = {
    warning_text: PropTypes.string.Required,
    warning_text_weight: PropTypes.string.Required,
  };

  
  export default WarningCard;