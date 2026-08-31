import React from 'react'
import '../styles/Paginacija.css'


interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

function Paginacija({currentPage, totalPages,onPageChange}: PaginationProps) {
    if (totalPages <= 1) {
        return null;
    }
  return (
    <div className="pagination">

            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                ←
            </button>


            {Array.from(
                { length: totalPages },
                (_, index) => index + 1
            ).map(page => (

                <button
                    key={page}
                    className={
                        currentPage === page
                            ? "active"
                            : ""
                    }
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>

            ))}


            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                →
            </button>

        </div>
  )
}

export default Paginacija