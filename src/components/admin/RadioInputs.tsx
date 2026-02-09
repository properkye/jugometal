import React, { ReactNode } from 'react';

interface RadioInputsProps {
    children: ReactNode
}

const RadioInputs: React.FC<RadioInputsProps> = ({children}) => {
    return (
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between items-center'>
            {children}
        </div>
    );
};

export default RadioInputs;