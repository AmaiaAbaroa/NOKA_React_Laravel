// import './consultationResultsMolecule.css';

// import { useState } from 'react';
// import Pagination from './Pagination';
// import CardQuestionAccordionAtom from './CardQuestionAccordionAtom'; // Importa tu componente

// const  ConsultationResultsMolecule = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Cambia esto según tus necesidades
//   const questions = [...]; // Un array de preguntas que deseas paginar

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     // Aquí puedes realizar alguna acción cuando cambie la página, como cargar nuevos datos.
//   };

//   // Calcula las preguntas para la página actual
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const questionsOnCurrentPage = questions.slice(startIndex, endIndex);

//   return (
//     <div className="App">
//       <h1>Pagination Example</h1>
//       {questionsOnCurrentPage.map((question) => (
//         <CardQuestionAccordionAtom key={question.id} question={question} />
//       ))}
//       <Pagination
//         totalItems={questions.length}
//         itemsPerPage={itemsPerPage}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// }

// export default ConsultationResultsMolecule;



import { useEffect, useState } from 'react';
import Pagination from '../../atoms/PaginationAtom/PaginationAtom';
import CardQuestionAccordionAtom from '../../atoms/CardQuestionAccordionAtom/CardQuestionAccordionAtom';

const ConsultationResultsMolecule = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de preguntas por página
  const [questions, setQuestions] = useState([]); // Estado para almacenar las preguntas

  useEffect(() => {
    // Realiza la solicitud GET para obtener todas las preguntas desde tu API
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/api.php/consultation');
        const data = await response.json();
        setQuestions(data); // Almacena las preguntas en el estado
      } catch (error) {
        console.error("Error al obtener las preguntas:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calcula las preguntas para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const questionsOnCurrentPage = questions.slice(startIndex, endIndex);

  return (
    <div className="App">
      {questionsOnCurrentPage.map((question) => (
        <CardQuestionAccordionAtom key={question.id} question_id={question.id} />
      ))}
      <Pagination
        totalItems={questions.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ConsultationResultsMolecule;
