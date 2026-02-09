import React, { ReactNode } from 'react';

interface ProductsContainerProps {
  children: ReactNode;
}
const ProductsContainer: React.FC<ProductsContainerProps> = ({ children }) => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="wrapper py-10 flex flex-col gap-8 items-center md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 md:px-[2%] md:items-start lg:grid lg:grid-cols-3 lg:justify-between lg:gap-x-4 lg:gap-y-8 lg:px-0 lg:items-start xl:grid xl:grid-cols-3 xl:gap-8 xl:px-0 xl:items-start">
        {children}
      </div>
    </div>
  );
};

export default ProductsContainer;