import React from 'react';

interface ChooseBoxProps {
    category: string;
    title:string;
    selected:string;
    setSelected: (category: string) => void;
    height: string;
    width:string;
    selectCategory:() => void
}

const ChooseBox: React.FC<ChooseBoxProps> = ({ title, category, selected, setSelected, width, height, selectCategory }) => {
  
  
    return (
      <div className="">
        <div
          className={`border rounded-lg cursor-pointer transition-colors duration-300 ${
            selected === category
              ? "border-black bg-black"
              : "border-gray-300 bg-gray-200"
          }`}
          style={{ width, height }}
          onClick={() => {
            setSelected(category)
            selectCategory()
          }}
        ></div>
        <span className="text-center block mt-4 font-bold">{title}</span>
      </div>
    );
  };

export default ChooseBox;