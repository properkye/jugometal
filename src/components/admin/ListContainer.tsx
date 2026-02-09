import React from 'react';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import { Product } from '@/context/adminContext';


interface ListContainerProps {
    items: Product[]
}

const ListContainer: React.FC<ListContainerProps> = ({items}) => {
    return (
        <div className='bg-white rounded-lg overflow-hidden mt-6 shadow-sm border border-gray-200'>
            <ListHeader />

            <div className='divide-y divide-gray-100'>
               {items.map((item) => (
                <ListItem key={item.id} category={item.category} name={item.name} subcategory={item.subcategory} rabat={item.action_price} id={item.id} brand={item.brand} price={item.regular_price} item={item}  />
            ))} 
            </div>
            
        </div>
    );
};

export default ListContainer;