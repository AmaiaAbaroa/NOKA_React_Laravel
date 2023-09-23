import './cardCalculatorResult.css';
import PropTypes from 'prop-types';
import deleteIcon from "../../../assets/icons/delete_icon.svg";


const CardCalculatorResult = () => {
    return (
      <>
          <article className="card_calculator_container" >
            <div className="card_calculator_sections" id="card_calculator_section_data">
              <h5 className='card_calculator_section_title'>Data:</h5>
              <p className='card_calculator_section_result'>2023/09/13</p>
            </div>
            <div className="card_calculator_sections" id="card_calculator_section_process">
              <h5 className='card_calculator_section_title'>Prosezua:</h5>
              <p className='card_calculator_section_result'>Birbaremazioa</p>
            </div>
            <div className="card_calculator_sections" id="card_calculator_section_points">
              <div className="card_calculator_sections">
                <h5 className='card_calculator_section_title'>Puntuazioa:</h5>
                <p className='card_calculator_section_result'>21,564 </p>
              </div>
              <button className='card_calculator_delete_button' type='button'><img src={deleteIcon} alt="Klip irudia" /></button>
            </div>
          </article>
      </>
    );
  };

  CardCalculatorResult.propTypes = {
    color_article: PropTypes.string,
  };

  
  export default CardCalculatorResult;