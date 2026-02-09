import React from 'react';
import { FiSearch, FiX, FiMenu } from 'react-icons/fi';
import { IoChevronBack } from "react-icons/io5";
import { useAdminContext } from "@/context/adminContext";

interface HeaderProps {
    title: string;
    subtitle: string;
    itemCount?: number;
    onSearch?: (term: string) => void;
    searchValue?: string;
    onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, itemCount, onSearch, searchValue = '', onBack }) => {
    const { mobileMenuToggle } = useAdminContext();
    
    return (
        <>
            {/* Desktop: Everything in one header */}
            <header className='hidden md:flex border-b border-gray-200 bg-white h-[82px] py-8 px-4 md:px-8 items-center'>
                <div className='flex items-center justify-between w-full gap-4'>
                    <div className='flex items-center gap-2 md:gap-4 flex-1 min-w-0'>
                        {onBack && (
                            <button 
                                onClick={onBack}
                                className='p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors'
                                title="Nazad"
                            >
                                <IoChevronBack size={24} className='text-gray-600' />
                            </button>
                        )}
                        <div className='min-w-0'>
                            <h1 className='text-lg md:text-2xl font-bold text-gray-900 mb-1 truncate'>{title}</h1>
                            <p className='text-xs md:text-sm text-gray-500 truncate'>{subtitle}</p>
                        </div>
                    </div>
                    
                    <div className='flex items-center gap-3 flex-shrink-0'>
                        {itemCount !== undefined && (
                            <span className='text-xs md:text-sm text-gray-600 whitespace-nowrap'>
                                {itemCount} {itemCount === 1 ? 'stavka' : 'stavki'}
                            </span>
                        )}
                        
                        {onSearch && (
                            <div className="relative w-[280px]">
                                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Pretražite"
                                    value={searchValue}
                                    className="pl-10 pr-10 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent w-full"
                                    onChange={(e) => onSearch(e.target.value)}
                                />
                                {searchValue && (
                                    <button
                                        onClick={() => onSearch('')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <FiX size={18} />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Mobile: Header Content - Non-sticky part */}
            <div className='md:hidden border-b border-gray-200 bg-white'>
                <div className='py-4 px-4'>
                    <div className='flex items-center justify-between w-full gap-4'>
                        <div className='flex items-center gap-2 flex-1 min-w-0'>
                            {/* Mobile Menu Button */}
                            <button 
                                onClick={mobileMenuToggle}
                                className='p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors'
                                title="Meni"
                            >
                                <FiMenu size={24} className='text-gray-600' />
                            </button>
                            
                            <div className='min-w-0'>
                                <h1 className='text-lg font-bold text-gray-900 mb-1 truncate'>{title}</h1>
                                <p className='text-xs text-gray-500 truncate'>{subtitle}</p>
                            </div>
                        </div>
                        
                        {itemCount !== undefined && (
                            <span className='text-xs text-gray-600 whitespace-nowrap flex-shrink-0'>
                                {itemCount} {itemCount === 1 ? 'stavka' : 'stavki'}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Mobile: Search Box - Sticky */}
            {onSearch && (
                <div className="md:hidden sticky top-0 z-20 bg-white border-b border-gray-200 px-4 py-3">
                    <div className="relative w-full">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Pretražite"
                            value={searchValue}
                            className="pl-10 pr-10 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent w-full"
                            onChange={(e) => onSearch(e.target.value)}
                        />
                        {searchValue && (
                            <button
                                onClick={() => onSearch('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <FiX size={18} />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;