import React from 'react';

interface DisclaimerProps {
    title: string;
    text: string;
}

const Disclaimer: React.FC<DisclaimerProps> = ({title, text}) => {
    return (
        <div className='py-4 px-8'>
            <h3 className='text-[1.5rem] font-bold'>{title}</h3>
            <span className='text-[.9rem] font-extralight'>{text}</span>
        </div>
    );
};

export default Disclaimer;