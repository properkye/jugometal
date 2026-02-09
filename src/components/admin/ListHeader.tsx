import React from "react";

const ListHeader: React.FC = () => {
  return (
    <div className="hidden lg:grid bg-gray-50 grid-cols-[2fr_1fr_1.2fr_1fr_120px_120px] items-center py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
      <div>Ime proizvoda</div>
      <div>Kategorija</div>
      <div>Podkategorija</div>
      <div>Proizvođač</div>
      <div className="text-left">Cena</div>
      <div className="text-left">Akcijska cena</div>
    </div>
  );
};

export default ListHeader;
