import React, { useState, useEffect } from 'react';
import Header from '../Header';
import ListContainer from '../ListContainer';
import Pagination from '../Pagination';
import { useAdminContext } from '@/context/adminContext';

const RezervniDelovi: React.FC = () => {

  const { data } = useAdminContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Dinamički izračunaj broj stavki na osnovu visine ekrana
  useEffect(() => {
    const calculateItemsPerPage = () => {
      const headerHeight = 82;
      const paginationHeight = 65;
      const contentPadding = 32;
      const listHeaderHeight = 53;
      const rowHeight = 69;
      
      const availableHeight = window.innerHeight - headerHeight - paginationHeight - contentPadding - listHeaderHeight;
      const calculatedItems = Math.floor(availableHeight / rowHeight);
      
      setItemsPerPage(Math.max(5, calculatedItems));
    };

    calculateItemsPerPage();
    window.addEventListener('resize', calculateItemsPerPage);
    
    return () => window.removeEventListener('resize', calculateItemsPerPage);
  }, []);
  
    const filteredItems = data
      .filter((product) => product.category === "rezervni-delovi")
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    // Reset na prvu stranicu kada se promeni pretraga
    useEffect(() => {
      setCurrentPage(1);
    }, [searchTerm]);

    return (
        <div className="flex flex-col h-screen">
          <Header 
            title="Rezervni delovi" 
            subtitle="Kontrolna tabla / Rezervni delovi" 
            itemCount={filteredItems.length}
            onSearch={setSearchTerm}
            searchValue={searchTerm}
          />
          <div className="flex-1 flex flex-col py-4 px-4 md:px-8">
            <ListContainer items={paginatedItems} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              totalItems={filteredItems.length}
            />
          </div>
        </div>
      );
};

export default RezervniDelovi;
