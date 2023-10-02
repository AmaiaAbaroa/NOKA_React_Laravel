import './paginationAtom.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const PaginationAtom = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? 'active' : ''}>
          <button onClick={() => handlePageClick(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <ul>
        {totalPages > 1 && (
          <>
            <li
              className={currentPage === 1 ? 'disabled' : ''}
              onClick={() => handlePageClick(currentPage - 1)}
            >
              <button>Previous</button>
            </li>
            {renderPageNumbers()}
            <li
              className={currentPage === totalPages ? 'disabled' : ''}
              onClick={() => handlePageClick(currentPage + 1)}
            >
              <button>Next</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

PaginationAtom.propTypes = {
    totalItems: PropTypes.any.isRequired,
    itemsPerPage: PropTypes.any.isRequired,
    onPageChange: PropTypes.any.isRequired,
  };
  


export default PaginationAtom;
