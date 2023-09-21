// import './consultationQuestionFormAtom.css';
// import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";



// const ConsultationQuestionFormAtom = () => {
//     return (
//         <>
//             <section className="consultation_question_container">

//                 <form onSubmit={""} className="consultation_form_container">
//                     <div>
//                         <label> Aukeratu erlazionatuta dauden gaiak:
//                         <select id="labels" name='question_labels'>
//                             <option value="" disabled selected hidden>Etiketak</option>
//                             <option value="nominak">Nominak</option>
//                             <option value="jubilazioa">Jubilazioa</option>
//                             <option value="zerbitzu_eginkizunak">Zerbitzu Eginkizunak</option>
//                             <option value="zerbitzu_eginkizunak">Zerrenda irekiera</option>
//                             <option value="zerbitzu_eginkizunak">Birbaremazioak</option>
//                             <option value="zerbitzu_eginkizunak">IKHA Esleipenak</option>
//                             <option value="zerbitzu_eginkizunak">Ordezkagunea</option>
//                             <option value="zerbitzu_eginkizunak">EPE-ak</option>
//                             <option value="zerbitzu_eginkizunak">Lekualdatze L.</option>
//                         </select>
//                         </label>
                        
//                     </div>
//                     <div>
//                         <label> Zure kontsulta idatzi:
//                             <textarea
//                             id="question"
//                             name="question"
//                             placeholder="Idatzi hemen zure galdera (máximo 250 karaktere)"
//                             rows = {20}
//                             cols = {10}  
//                             wrap = "wrap"
//                             maxLength = {250}
//                             required
//                             />
//                         </label>
//                     </div>
//                     <ButtonAtom
//                         label={"SARTU"}
//                         color={"blue"}
//                         width={"small"}
//                         type={"submit"}
//                     ></ButtonAtom>
//                 </form>
//             </section>
        
//         </>
//     );
//   };
  

  
//   export default ConsultationQuestionFormAtom;

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


import { useState } from "react";
import './consultationQuestionFormAtom.css';
import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";
import closeIcon from "../../../assets/icons/close_icon.svg";

const ConsultationQuestionFormAtom = () => {
    const [selectedOptions, setSelectedOptions] = useState([]); // Para rastrear las opciones seleccionadas

    const handleOptionChange = (e) => {
        const newValue = e.target.value;

        // Verificar si la opción ya está en el array de opciones seleccionadas
        if (!selectedOptions.includes(newValue)) {
            // Agregar la opción seleccionada al array
            setSelectedOptions([...selectedOptions, newValue]);
        }
    };

    const removeOption = (option) => {
        // Filtrar las opciones seleccionadas para eliminar la opción específica
        const updatedOptions = selectedOptions.filter((selectedOption) => selectedOption !== option);
        setSelectedOptions(updatedOptions);
    };

    return (
        <>
            <section className="consultation_question_container">
                <form onSubmit={""} className="consultation_form_container" >
                    <div>
                        <label className="consulation_label"> Aukeratu erlazionatuta dauden gaiak:
                            <select  id="labels"name='question_labels'onChange={handleOptionChange}>
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
                                required
                            />
                        </label>
                    </div>
                    <ButtonAtom
                        label={"SARTU"}
                        color={"blue"}
                        width={"small"}
                        type={"submit"}
                    ></ButtonAtom>
                </form>
            </section>
        </>
    );
};

export default ConsultationQuestionFormAtom;






