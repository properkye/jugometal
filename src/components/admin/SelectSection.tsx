import React from 'react';

interface SelectSectionProps {
    num:string;
    label:string;
    description:string;
    children: React.ReactNode
}

const SelectSection: React.FC<SelectSectionProps> = ({ label, description, children}) => {
    return (
        <div className='flex px-4 md:px-8 py-4'>
            {/* <span className='text-[4rem] w-[10%] font-bold mt-[-.5rem]'>{num}</span> */}
            <div className='w-full'>
                <div className='mb-4'>
                    <h3 className='text-2xl md:text-3xl font-bold'>{label}</h3>
                    <p className='text-sm md:text-base mb-4'>{description}</p>
                </div>
                {children}
            </div>
        </div>
    );
};

export default SelectSection;