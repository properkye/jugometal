'use client'
import React from 'react';
import { IoChevronBack } from "react-icons/io5";

interface BackProps {
    click: () => void;
}

const Back: React.FC<BackProps> = ({click}) => {
    return (
        <div onClick={() => click()} className='cursor-pointer w-fit py-4 px-8'>
            <IoChevronBack size={26} />
        </div>
    );
};

export default Back;