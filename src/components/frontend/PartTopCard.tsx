import React from 'react'

interface PartTopCardProps {
    title: string;
}

const PartTopCard:React.FC<PartTopCardProps> = ({title}) => {
    return (
      <div className="flex justify-between">
        <div className="">
          <h3 className="font-semibold text-[18px] leading-[26px] text-dark tracking-[-0.4px] md:text-[1.5rem] lg:text-[1.5rem] 2xl:text-[1.5rem]">
            {title}
          </h3>
        </div>
      </div>
    );
  };

  export default PartTopCard
  
