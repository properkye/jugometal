import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface RadioInputProps {
  title: string;
  option: string;
  value: string;
  onChange: () => void;
  type?: boolean;
}

const RadioInput: React.FC<RadioInputProps> = ({
  title,
  value,
  onChange,
  option,
  type,
}) => {
  return (
    <div
      className={`bg-[rgba(217,217,217,0.25)] rounded-[10px] p-4 outline-none border-2 text-[#1b243b] w-full cursor-pointer flex flex-row-reverse justify-between items-center transition-all duration-400 ease-in-out text-base h-fit relative z-10 
            ${option === value ? "border border-black bg-white" : "border border-gray-200"} 
            ${type ? "p-[0.6rem_1rem] text-[0.6rem]" : ""}`}
      onClick={onChange}
    >
      <input
        type="radio"
        onChange={onChange}
        checked={option === value}
        id={value}
        value={value}
        className="hidden peer"
      />
      <div className="w-[35px] h-[35px] rounded-full border border-[rgba(57,127,174,0.2)] transition-all duration-400 bg-transparent grid place-content-center peer-checked:bg-[#25d366] peer-checked:border-none">
        {option === value && <AiOutlineCheck style={{ color: "#fff" }} />}
      </div>

      <span
        style={{
          color: `${option === value ? "rgba(0,0,0,.9)" : "rgba(0,0,0,.4)"}`,
        }}
        className="text-base text-[#1b243b91] font-semibold cursor-pointer"
      >
        {title}
      </span>
    </div>
  );
};

export default RadioInput;
