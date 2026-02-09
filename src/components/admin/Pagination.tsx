import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    itemsPerPage: number;
    totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    itemsPerPage,
    totalItems,
}) => {
    const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 5; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            }
        }
        
        return pages;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 bg-white mt-4 gap-3">
            <div className="text-xs md:text-sm text-gray-600 order-2 md:order-1">
                <span className="hidden sm:inline">Prikazano {startItem}-{endItem} od {totalItems} stavki</span>
                <span className="sm:hidden">{startItem}-{endItem} / {totalItems}</span>
            </div>
            
            <div className="flex items-center gap-1 md:gap-2 order-1 md:order-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <FiChevronLeft size={18} />
                </button>

                <div className="hidden md:flex items-center gap-2">
                    {getPageNumbers().map((page, index) => (
                        page === '...' ? (
                            <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">
                                ...
                            </span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => onPageChange(page as number)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    currentPage === page
                                        ? 'bg-gray-900 text-white'
                                        : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                                }`}
                            >
                                {page}
                            </button>
                        )
                    ))}
                </div>

                {/* Mobile page indicator */}
                <div className="md:hidden px-3 py-2 text-sm font-medium text-gray-900">
                    {currentPage} / {totalPages}
                </div>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <FiChevronRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
