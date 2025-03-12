import React from 'react';

interface SelectSectionProps {
    num:string;
    label:string;
    description:string;
    children: React.ReactNode
}

const SelectSection: React.FC<SelectSectionProps> = ({ label, description, children}) => {
    return (
        <div className='flex px-8 py-4'>
            {/* <span className='text-[4rem] w-[10%] font-bold mt-[-.5rem]'>{num}</span> */}
            <div className='w-[90%] '>
                <div className='mb-[1rem]'>
                    <h3 className='text-[2rem] font-bold'>{label}</h3>
                    <p className='text-[1rem] mb-[1rem]'>{description}</p>
                </div>
                {children}
            </div>
        </div>
    );
};

export default SelectSection;