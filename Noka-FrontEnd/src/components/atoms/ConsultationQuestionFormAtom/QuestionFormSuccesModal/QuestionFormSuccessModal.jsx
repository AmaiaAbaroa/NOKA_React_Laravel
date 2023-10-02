import "./questionFormSuccessModal.css";
import PropTypes from 'prop-types';
import closeIcon from "../../../../assets/icons/close_icon.svg";

function QuestionFormSuccessModal({ onClose }) {
  return (
    <>
        <div className="consultation_form_question_succes_modal">
            <div >
                <h2 className="question_success_modal_title">Mezua bidali da!</h2>
                <p className="question_success_modal_text">Ahaik eta azkarren erantzungo da zure mezua. <br></br> Eskerrik asko!</p>
                <button className="question_succes_modal_close_button" onClick={onClose}><img src={closeIcon} alt="Itxi irudia"/></button>
            </div>
        </div>
    </>
  )
}

QuestionFormSuccessModal.propTypes = {
    onClose: PropTypes.any.isRequired,
};

export default QuestionFormSuccessModal


