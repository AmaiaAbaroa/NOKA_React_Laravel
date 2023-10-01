// import { useState } from "react";
// import './consultationQuestionFormAtom.css';
// import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";
// import closeIcon from "../../../assets/icons/close_icon.svg";
// import { APIService } from "../../../services/APIService";

// const ConsultationQuestionFormAtom = () => {
//     const [selectedOptions, setSelectedOptions] = useState([]); // Para rastrear las opciones seleccionadas
//     const [question, setQuestion] = useState("");
    
//     const handleOptionChange = (e) => {
//         const newValue = e.target.value;

//         // Verificar si la opción ya está en el array de opciones seleccionadas
//         if (!selectedOptions.includes(newValue)) {
//             // Agregar la opción seleccionada al array
//             setSelectedOptions([...selectedOptions, newValue]);
//         }
//     };

//     const removeOption = (option) => {
//         // Filtrar las opciones seleccionadas para eliminar la opción específica
//         const updatedOptions = selectedOptions.filter((selectedOption) => selectedOption !== option);
//         setSelectedOptions(updatedOptions);
//     };

//     const handleSubmitQuestion = async (e) => {
//         e.preventDefault(); 

//         try {
//             // Envía la pregunta a la API
//             const responseData = await APIService("/consultation", "POST", {
//                 question: question, 
                
//             });

//             // Maneja la respuesta de la API aquí, si es necesario
//             console.log("Respuesta de la API ENVIO QUESTION:", responseData);
//         } catch (error) {
//             console.error("Error al enviar la pregunta:", error);
//         }
//     };

//     return (
//         <>
//             <section className="consultation_question_container">
//                 <form onSubmit={handleSubmitQuestion} className="consultation_form_container" >
//                     <div>
//                         <label className="consulation_label"> Aukeratu erlazionatuta dauden gaiak:
//                             <select  id="labels"name='question_labels'onChange={handleOptionChange}>
//                                 <option value="" disabled selected hidden>Etiketak</option>
//                                 <option value="Nominak">Nominak</option>
//                                 <option value="Jubilazioa">Jubilazioa</option>
//                                 <option value="Zerbitzu Eginkizunak">Zerbitzu Eginkizunak</option>
//                                 <option value="Zerrenda irekiera">Zerrenda irekiera</option>
//                                 <option value="Birbaremazioak">Birbaremazioak</option>
//                                 <option value="IKHA Esleipenak">IKHA Esleipenak</option>
//                                 <option value="Ordezkagunea">Ordezkagunea</option>
//                                 <option value="EPE-ak">EPE-ak</option>
//                                 <option value="Lekualdatze L.">Lekualdatze L.</option>
//                             </select>
//                         </label>
//                         <div className='labels_selection_container'>
//                             {selectedOptions.map((option, index) => (
//                                 <div key={index} className='selected_option'>
//                                     {option}
//                                     <button className="remove_selected_label" type="button" onClick={() => removeOption(option)}>
//                                         <img src={closeIcon} alt="Ezabatu irudia" />
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div>
//                         <label className="consulation_label"> Zure kontsulta idatzi:
//                             <textarea
//                                 id="question"
//                                 name="question"
//                                 placeholder="Idatzi hemen zure galdera (máximo 250 karaktere)"
//                                 rows={20}
//                                 cols={10}
//                                 wrap="wrap"
//                                 maxLength={250}
//                                 value={question} // Asigna el valor del estado a la textarea
//                                 onChange={(e) => setQuestion(e.target.value)} // Actualiza el estado al cambiar el texto
//                                 required
//                             />
//                         </label>
//                     </div>
//                     <ButtonAtom
//                         label={"BIDALI"}
//                         color={"blue"}
//                         width={"small"}
//                         type={"submit"}
//                     ></ButtonAtom>
//                 </form>
//             </section>
//         </>
//     );
// };

// export default ConsultationQuestionFormAtom;


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
            // Envía la pregunta a la API
            const responseData = await APIService("/consultation", "POST", {
                question: question,
            });

            // Muestra el modal de éxito
            setShowSuccessModal(true);

            // Maneja la respuesta de la API aquí, si es necesario
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




//   rows = {2}    // Specifies the number of visible text lines
//   cols = {150}    // Specifies the width of the textarea in characters
//   value = "Hello World"   // Specifies the initial value of the textarea
//   placeholder = "Add your text"   // Specifies a short hint that describes the expected value of the textarea
//   wrap = "soft"   // Specifies how the text in the textarea should be wrapped
//   readOnly = {true}   // Specifies that the textarea is read-only, meaning the user cannot modify its content
//   name = "name"   // Specifies the name of the textarea, which can be used when submitting a form
//   disabled = {true}   //  Specifies that the textarea is disabled, meaning the user cannot interact with it
//   minLength = {150}   // Specifies the minimum number of characters required in the textarea
//   maxLength = {200}   // Specifies the maximum number of characters allowed in the textarea
