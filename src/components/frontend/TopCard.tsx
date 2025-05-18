import { brandLogo } from '@/data2';
import Image from 'next/image';
import React from 'react';

interface TopCardProps {
    title: string;
    brand: string;
  }
  
  const TopCard: React.FC<TopCardProps> = ({ title, brand }) => {
    return (
      <div className="flex justify-between">
        <div className="w-[50%]">
          <h3 className="font-semibold text-[18px] leading-[26px] text-dark tracking-[-0.4px] md:text-[1.5rem] lg:text-[1.5rem] 2xl:text-[1.5rem]">
            {title}
          </h3>
        </div>
        <div className="w-[100px] h-[30px] relative">
          <Image
            src={brandLogo(brand)}
            alt={title}
            priority={true}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    );
  };

export default TopCard;
