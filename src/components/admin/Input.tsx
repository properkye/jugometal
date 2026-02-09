import React from 'react';

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validation?: boolean;
  required:boolean
};

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, required }) => {
  return (
    <div>
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        min='0'
        className={`w-full p-4 rounded-[10px] border-2 transition-all duration-400 ease-in-out outline-none text-[#1b243b] text-[1rem] bg-[rgba(217,217,217,0.25)] focus:border-[#1b243b] focus:bg-white placeholder:text-[#cecece]`}
      />
    </div>
  );
};

export default Input;