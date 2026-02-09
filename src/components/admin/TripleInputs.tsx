import React, { ReactNode } from "react";

interface TripleInputsProps {
  children: ReactNode;
}

const TripleInputs: React.FC<TripleInputsProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[40%_29.5%_29.5%] gap-x-[1%] gap-y-4 justify-between mt-6">
      {children}
    </div>
  );
};

export default TripleInputs;
