import './consultationQuestionFormAtom.css';
import QuestionFormSuccessModal from './QuestionFormSuccesModal/QuestionFormSuccessModal';
import { useState } from "react";
import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";
import closeIcon from "../../../assets/icons/close_icon.svg";
import { APIService } from "../../../services/APIService";



const ConsultationQuestionFormAtom = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [question, setQuestion] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false); // Estado para mostrar/ocultar el modal

    const handleOptionChange = (e) => {
        const newValue = e.target.value;

        if (!selectedOptions.includes(newValue)) {
            setSelectedOptions([...selectedOptions, newValue]);
        }
    };

    const removeOption = (option) => {
        const updatedOptions = selectedOptions.filter((selectedOption) => selectedOption !== option);
        setSelectedOptions(updatedOptions);
    };

    const handleSubmitQuestion = async (e) => {
        e.preventDefault();

        try {
            const responseData = await APIService("/consultation", "POST", {
                question: question,
            });
            setShowSuccessModal(true);

            console.log("Respuesta de la API ENVIO QUESTION:", responseData);
        } catch (error) {
            console.error("Error al enviar la pregunta:", error);
        }
    };

    const closeModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <>
            <section className="consultation_question_container">
                <form onSubmit={handleSubmitQuestion} className="consultation_form_container" >
                    <div>
                        <label className="consulation_label"> Aukeratu erlazionatuta dauden gaiak:
                            <select id="labels" name='question_labels' onChange={handleOptionChange}>
                                 <option value="" disabled selected hidden>Etiketak</option>
                                 <option value="Nominak">Nominak</option>
                                 <option value="Jubilazioa">Jubilazioa</option>
                                 <option value="Zerbitzu Eginkizunak">Zerbitzu Eginkizunak</option>
                                 <option value="Zerrenda irekiera">Zerrenda irekiera</option>
                                 <option value="Birbaremazioak">Birbaremazioak</option>
                                 <option value="IKHA Esleipenak">IKHA Esleipenak</option>
                                 <option value="Ordezkagunea">Ordezkagunea</option>
                                 <option value="EPE-ak">EPE-ak</option>
                                 <option value="Lekualdatze L.">Lekualdatze L.</option>
                            </select>
                        </label>
                        <div className='labels_selection_container'>
                             {selectedOptions.map((option, index) => (
                                 <div key={index} className='selected_option'>
                                     {option}
                                     <button className="remove_selected_label" type="button" onClick={() => removeOption(option)}>
                                         <img src={closeIcon} alt="Ezabatu irudia" />
                                     </button>
                                </div>
                             ))}
                        </div>
                    </div>
                    <div>
                        <label className="consulation_label"> Zure kontsulta idatzi:
                            <textarea
                                id="question"
                                name="question"
                                placeholder="Idatzi hemen zure galdera (máximo 250 karaktere)"
                                rows={20}
                                cols={10}
                                wrap="wrap"
                                maxLength={250}
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <ButtonAtom
                        label={"BIDALI"}
                        color={"blue"}
                        width={"small"}
                        type={"submit"}
                    ></ButtonAtom>
                </form>
            </section>
            {showSuccessModal && <QuestionFormSuccessModal onClose={closeModal} />}
        </>
    );
};


export default ConsultationQuestionFormAtom;


