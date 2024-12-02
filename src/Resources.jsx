import React, { useState } from "react";
import Card from "./Cards";
import data from "/resourcesData.json";

const Resources = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

  // Calculate the indices for slicing data
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  // Handle Pagination
  const totalPages = Math.ceil(data.length / cardsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Cards */}
      <div className="w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[60vw] flex flex-wrap justify-center items-center mx-auto gap-4">
        {currentCards.map((d, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[48%] md:w-[30%] lg:w-[18%] flex justify-center"
          >
            <Card val={d} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-3">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg text-sm sm:text-base font-semibold ${
            currentPage === 1
              ? "bg-darkBlue text-siteLavender cursor-not-allowed"
              : "bg-siteLavender text-darkBlue hover:bg-darkBlue hover:text-siteLavender"
          }`}
        >
          Previous
        </button>
        <span className="text-siteYellow text-sm sm:text-base font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg text-sm sm:text-base font-semibold ${
            currentPage === totalPages
              ? "bg-darkBlue text-siteLavender cursor-not-allowed"
              : "bg-siteLavender text-darkBlue hover:bg-darkBlue hover:text-siteLavender"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Resources;
