import React from 'react';

interface HeaderProps {
    title:string;
    subtitle:string;
}

const Header: React.FC<HeaderProps> = ({title,subtitle}) => {
    return (
        <header className='border-b border-[#ededed] h-[10vh] py-4 px-8'>
            <h1 className='text-[1.3rem] font-extralight text-[#b1b1b1]'>ScopeCMS <span className='font-bold text-[black]'>{title}</span></h1>
            <p className='text-[.9rem] text-[#919191]'>{subtitle}</p>
        </header>
    );
};

export default Header;