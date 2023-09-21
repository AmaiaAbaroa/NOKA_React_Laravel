import './cardCalculatorResult.css';
import PropTypes from 'prop-types';
import deleteIcon from "../../../assets/icons/delete_icon.svg";


const CardCalculatorResult = () => {
    return (
      <>
          <article className="" >
            <div>
              <h5>Data:</h5>
              <p>2023/09/13</p>
            </div>
            <div>
              <h5>Prosezua:</h5>
              <p>Birbaremazioa</p>
            </div>
            <div>
              <div>
                <h5>Puntuazio osoa:</h5>
                <p>21,564 puntu</p>
              </div>
              <img src={deleteIcon} alt="Klip irudia" />
            </div>
          </article>
      </>
    );
  };

  CardCalculatorResult.propTypes = {
    color_article: PropTypes.string.isRequired,
  };

  
  export default CardCalculatorResult;