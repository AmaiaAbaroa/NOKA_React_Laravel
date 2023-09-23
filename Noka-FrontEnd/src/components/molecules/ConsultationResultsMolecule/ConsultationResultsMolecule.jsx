import './consultationResultsMolecule.css';

import { useState } from 'react';
import Pagination from './Pagination';
import CardQuestionAccordionAtom from './CardQuestionAccordionAtom'; // Importa tu componente

const  ConsultationResultsMolecule = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Cambia esto según tus necesidades
  const questions = [...]; // Un array de preguntas que deseas paginar

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Aquí puedes realizar alguna acción cuando cambie la página, como cargar nuevos datos.
  };

  // Calcula las preguntas para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const questionsOnCurrentPage = questions.slice(startIndex, endIndex);

  return (
    <div className="App">
      <h1>Pagination Example</h1>
      {questionsOnCurrentPage.map((question) => (
        <CardQuestionAccordionAtom key={question.id} question={question} />
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
