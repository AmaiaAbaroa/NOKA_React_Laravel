//FUNCIONA EL METODO SHOW, TRAE EL LA CONSULTA Nº3

// import './cardQuestionAccordionAtom.css';
// import PropTypes from 'prop-types';
// import favoriteEmptyIcon from '../../../assets/icons/favorite_empty_icon.svg';
// import expandIcon from '../../../assets/icons/expand_icon.svg';
// import likeIcon from '../../../assets/icons/like_icon.svg';
// import dislikeIcon from '../../../assets/icons/dislike_icon.svg';
// import { useEffect, useState } from 'react';
// import { APIService } from '../../../services/APIService';


// const CardQuestionAccordionAtom = ({ question_id }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [question, setQuestion] = useState(""); // Estado para almacenar la pregunta

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     // Realiza la solicitud GET para obtener la pregunta
//     const fetchQuestion = async () => {
//         try {
//             const response = await APIService(`/consultation/3`, "GET");
//             console.log("Response APIQuestion:", response);
//             // Establece la pregunta en el estado
//             setQuestion(response.question);
//             console.log("Question:", question);
//         } catch (error) {
//             console.error("Error al obtener la pregunta:", error);
//         }
//     };

//     fetchQuestion();
// }, []);

//   return (
//     <>
//         <article className='question_card_accordion_container'>
//           <input id={`article${question_id}`} type='checkbox' name={question_id} checked={isOpen} onChange={toggleAccordion} />
//           <label htmlFor={`article${question_id}`}>
//             <div className='question_accordion_user_data_container'>
//                 <p className='question_acordion_section_result'>Leire G.</p>
//                 <div className='question_accordion_data_container'>
//                     <h5 className='question_acordion_section_title'>Data:</h5>
//                     <p className='question_acordion_section_result'>2023/09/13</p>
//                 </div>
//             </div>
//             <div className='question_accordion_question_container'>
//                 <h3>{question}</h3>
//                 <button className='question_accordion_favourite_button'><img src={favoriteEmptyIcon} alt="Gorde Gogokoetan irudia"></img></button>
//             </div>
//             <div className='question_accordion_labels_container'>
//                 <div className="question_accordion_selected_label">EPE-ak</div>
//                 <div className="question_accordion_selected_label">Birbaremazioa</div>
//                 <div className="question_accordion_selected_label">Lekualdatze Lehiaketa</div>
//             </div>
//             <div className='question_accordion_answer_expand_container'>
//                 <div className='question_accordion_answer_expand'>
//                     <h5 className='question_acordion_section_title'>Erantzuna</h5>
//                     <img src={expandIcon} alt='Zabaltzeko irudia'></img>
//                 </div>
//                 <div className='question_accordion_likes_container'>
//                     <div className='question_accordion_likes_counter_container' id='question_accordion_like'>
//                         <button className='question_accordion_likes_button'><img src={likeIcon} alt="Gustoko dot erantzunaren irudia"></img></button>
//                         <p> 5 </p>
//                     </div>
//                     <div className='question_accordion_likes_counter_container' id='question_accordion_dislike'>
//                         <button className='question_accordion_likes_button'><img src={dislikeIcon} alt="Gustoko EZ dot erantzunaren irudia"></img></button>
//                         <p> 10 </p>
//                     </div>
//                 </div>
//             </div>



//           </label>

//           {/* Parte que se desplega */}
//           <div style={{ maxHeight: isOpen ? '700px' : '0', overflow: 'hidden', transition: 'max-height 0.5s' }}>
//             <textarea                                 
//             rows={10}
//             cols={10}
//             wrap="wrap"
//             maxLength={250}
//             readOnly={true} 
//             disabled = {true}
//             >
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
//                 veritatis fugiat possimus hic doloremque sint reiciendis? Quasi
//                 beatae explicabo qui quod atque a iste. Explicabo inventore quo
//                 expedita tempore amet!
//             </textarea>
//           </div>
//         </article>
//     </>
//   );
// };

// CardQuestionAccordionAtom.propTypes = {
//   question_id: PropTypes.string.isRequired,
// };

// export default CardQuestionAccordionAtom;


import './cardQuestionAccordionAtom.css';
import PropTypes from 'prop-types';
import favoriteEmptyIcon from '../../../assets/icons/favorite_empty_icon.svg';
import expandIcon from '../../../assets/icons/expand_icon.svg';
import likeIcon from '../../../assets/icons/like_icon.svg';
import dislikeIcon from '../../../assets/icons/dislike_icon.svg';
import { useEffect, useState } from 'react';
import { APIService } from '../../../services/APIService';

const CardQuestionAccordionAtom = () => {
  const [isOpen, setIsOpen] = useState({});
  const [questions, setQuestions] = useState([]);

  const toggleAccordion = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    // Realiza la solicitud GET para obtener las consultas
    const fetchQuestions = async () => {
      try {
        const response = await APIService('/consultation', 'GET');
        console.log("APIQuestionMAP:" ,response);
        setQuestions(response.data); // Suponiendo que 'data' contiene la lista de consultas
        console.log("QUESTIONMAP:", questions)
      } catch (error) {
        console.error('Error al obtener las consultas:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      {questions.map((question) => (
        <article key={question.id} className='question_card_accordion_container'>
          <input
            id={`article${question.id}`}
            type='checkbox'
            name={question.id}
            checked={isOpen[question.id] || false}
            onChange={() => toggleAccordion(question.id)}
          />
          <label htmlFor={`article${question.id}`}>
             <div className='question_accordion_user_data_container'>
                 <p className='question_acordion_section_result'>Leire G.</p>
                 <div className='question_accordion_data_container'>
                    <h5 className='question_acordion_section_title'>Data:</h5>
                    <p className='question_acordion_section_result'>2023/09/13</p>
                 </div>
            </div>
            <div className='question_accordion_question_container'>
                 <h3>{question.question}</h3>
                 <button className='question_accordion_favourite_button'><img src={favoriteEmptyIcon} alt="Gorde Gogokoetan irudia"></img></button>
             </div>
             <div className='question_accordion_labels_container'>
                 <div className="question_accordion_selected_label">EPE-ak</div>
                 <div className="question_accordion_selected_label">Birbaremazioa</div>
                 <div className="question_accordion_selected_label">Lekualdatze Lehiaketa</div>
             </div>
             <div className='question_accordion_answer_expand_container'>
                 <div className='question_accordion_answer_expand'>
                     <h5 className='question_acordion_section_title'>Erantzuna</h5>
                     <img src={expandIcon} alt='Zabaltzeko irudia'></img>
                 </div>
                 <div className='question_accordion_likes_container'>
                     <div className='question_accordion_likes_counter_container' id='question_accordion_like'>
                         <button className='question_accordion_likes_button'><img src={likeIcon} alt="Gustoko dot erantzunaren irudia"></img></button>
                         <p> 5 </p>
                     </div>
                     <div className='question_accordion_likes_counter_container' id='question_accordion_dislike'>
                         <button className='question_accordion_likes_button'><img src={dislikeIcon} alt="Gustoko EZ dot erantzunaren irudia"></img></button>
                         <p> 10 </p>
                     </div>
                 </div>
             </div>
          </label>
          {/* Parte que se despliega */}
          <div
            style={{
              maxHeight: isOpen[question.id] ? '700px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.5s',
            }}
          >
            <textarea
              rows={10}
              cols={10}
              wrap='wrap'
              maxLength={250}
              readOnly={true}
              disabled={true} >
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                 veritatis fugiat possimus hic doloremque sint reiciendis? Quasi
                 beatae explicabo qui quod atque a iste. Explicabo inventore quo
                 expedita tempore amet!
            </textarea>
          </div>
        </article>
      ))}
    </div>
  );
};

CardQuestionAccordionAtom.propTypes = {
  question_id: PropTypes.string.isRequired,
};

export default CardQuestionAccordionAtom;
