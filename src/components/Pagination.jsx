// import React from "react";
// eslint-disable-next-line react/prop-types
function Pagination({ page, totalPages, onPageChange }) {
  // generate an array of page numbers
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="p-2 border rounded-l hover:bg-gray-200"
      >
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`p-2 border ${
            p === page ? "bg-blue-500 text-white" : "hover:bg-gray-200"
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="p-2 border rounded-r hover:bg-gray-200"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
