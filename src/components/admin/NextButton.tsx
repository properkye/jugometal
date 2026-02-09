'use client'
import React from 'react';

interface NextButtonProps {
    btnText: string;
    span: string;
    selected:string
    click: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ btnText, span, selected, click }) => {

    return (
        <div className="px-4 md:px-8 py-4 mt-8">
            <span className="block text-xs md:text-sm font-light text-gray-500">{span}</span>
            <button
            onClick={() => click()}
                className={`px-6 md:px-8 py-2 mt-4 w-full md:w-[300px] rounded-lg font-bold transition-colors duration-300 ${
                    selected
                        ? "bg-black text-white cursor-pointer"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
            >
                {btnText}
            </button>
        </div>
    );
};
export default NextButton;