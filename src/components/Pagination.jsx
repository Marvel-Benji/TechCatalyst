import React from 'react';

// This component receives pagination data and functions through props
const Pagination = ({ 
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageChange,
 }) => {

  // Create an array containing all page numbers
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  
  return (
    <div>
      {/* Go to the previous page */}
      <button 
        onClick={onPrevious}
        // Prevent going before page 1
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Loop through every page number and create a button for it */}
      {pageNumbers.map((pageNumber) => (
        <button 
          key={pageNumber}
          // Change the current page when this button is clicked
          // Tell the parent component which page the user selected
          onClick={() => onPageChange(pageNumber)}
          // Disable the button for the page we're currently viewing
          disabled={currentPage === pageNumber}
          // Add a different class to the active page
            className={
              currentPage === pageNumber
               ? "px-3 py-2 mx-1 rounded bg-blue-600 text-white font-bold"
               : "px-3 py-2 mx-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
            }
        >
          {pageNumber}
        </button>
      ))}

      {/* Show the current page and total number of pages */}
      {/* <span>
        Page {currentPage} of {totalPages}
      </span> */}

      {/* Go to the next page */}
      <button 
        onClick={onNext}
        // Prevent going beyond the last page
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;