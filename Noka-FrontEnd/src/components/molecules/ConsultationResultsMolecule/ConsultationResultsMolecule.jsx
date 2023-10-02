import { useEffect, useState } from 'react';
import Pagination from '../../atoms/PaginationAtom/PaginationAtom';
import CardQuestionAccordionAtom from '../../atoms/CardQuestionAccordionAtom/CardQuestionAccordionAtom';

const ConsultationResultsMolecule = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/api.php/consultation');
        const data = await response.json();
        setQuestions(data); 
      } catch (error) {
        console.error("Error al obtener las preguntas:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
