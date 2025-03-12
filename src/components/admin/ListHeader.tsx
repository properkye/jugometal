import React from "react";

const ListHeader: React.FC = () => {
  return (
    <div className="border grid grid-cols-[repeat(6,_1fr)_20px] items-center justify-between py-2 px-4 text-[.8rem] text-[#797979]">
      <div>Ime proizvoda</div>
      <div>Kategorija</div>
      <div>Podkategorija</div>
      <div>Proizvođač</div>
      <div>Cena</div>
      <div>Akcijska cena</div>
      <div className="w-[20px]">...</div>
    </div>
  );
};

export default ListHeader;
