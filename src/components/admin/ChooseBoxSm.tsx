import React from "react";

interface ChooseBoxProps {
  category: string;
  title: string;
  selected: string;
  setSelected: (category: string) => void;
  selectCategory:() => void
}

const ChooseBoxSm: React.FC<ChooseBoxProps> = ({
  title,
  category,
  selected,
  setSelected,
  selectCategory
}) => {
  return (
    <div
      className={`border rounded-lg cursor-pointer transition-colors duration-300 px-6 py-2 ${
        selected === category
          ? "border-black bg-black text-white"
          : "border-gray-300 bg-gray-200 text-black"
      }`}
      onClick={() => {
        setSelected(category)
        selectCategory()
      }}
    >
      {title}
    </div>
  );
};

export default ChooseBoxSm;
