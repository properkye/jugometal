import React from "react";

interface TextareaProps {
  label: string;
  placeholder: string;
  value: string;
  change: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({ label, placeholder, value, change }) => {
  return (
    <div className="w-fit flex flex-col p-2">
      <label className="mb-2 font-bold text-[1.2rem]">{label}</label>
      <textarea placeholder={placeholder} value={value} onChange={(e) => change(e.target.value)} className="outline-none rounded-lg px-4 py-2 border border-gray-300 text-[.9rem] h-[200px] w-[500px] resize-none" />
    </div>
  );
};

export default Textarea;
