const Pagination = ({ currentPage, totalPages, onPrev, onNext }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg transition ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-amber-400 text-white hover:bg-amber-500"
        }`}
      >
        Prev
      </button>
      <h1>{currentPage} of {totalPages}</h1>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg transition ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-amber-400 text-white hover:bg-amber-500"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
