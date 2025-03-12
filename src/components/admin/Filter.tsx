import React from 'react';

interface FilterProps {
    setSearchTerm: (term: string) => void;
  }

const Filter: React.FC<FilterProps> = ({ setSearchTerm,  }) => {
    return (
      <div className="border border-[#cecece] w-[300px] rounded">
        <input
          type="text"
          placeholder="Pretražite proizvode"
          className="py-2 px-2 w-full outline-none border-none"
          onChange={(e) => setSearchTerm(e.target.value)} // 1️⃣ Ažurira searchTerm
        />
      </div>
    );
  };

export default Filter;