import React from "react";

interface DeleteButtonProps {
  btnText: string;
  click: () => void;
  span: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  btnText,
  click,
  span,
}) => {
  return (
    <div className="px-8 py-4 mt-8">
      <span className="block text-[.8rem] font-light text-[#828282]">
        {span}
      </span>
      <button
        onClick={() => click()}
        className="px-8 py-2 mt-4 w-[300px] rounded-lg font-bold transition-colors duration-300 bg-[#5a5a5a] text-[white] hover:bg-black"

      >
        {btnText}
      </button>
    </div>
  );
};

export default DeleteButton;
