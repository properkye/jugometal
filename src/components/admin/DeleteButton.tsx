import React, { useState } from "react";

interface DeleteButtonProps {
  btnText: string;
  click: () => void;
  span: string;
  variant?: "default" | "danger";
  confirmTitle?: string;
  confirmMessage?: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  btnText,
  click,
  span,
  variant = "default",
  confirmTitle,
  confirmMessage,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (variant === "danger" && confirmTitle && confirmMessage) {
      setShowModal(true);
    } else {
      click();
    }
  };

  const handleConfirm = () => {
    setShowModal(false);
    click();
  };

  const buttonClass = variant === "danger"
    ? "px-6 md:px-8 py-2 mt-4 w-full md:w-[300px] rounded-lg font-bold transition-colors duration-300 bg-red-600 text-white hover:bg-red-700"
    : "px-6 md:px-8 py-2 mt-4 w-full md:w-[300px] rounded-lg font-bold transition-colors duration-300 bg-gray-600 text-white hover:bg-black";

  return (
    <>
      <div className="px-4 md:px-8 py-4 mt-8">
        <span className="block text-xs md:text-sm font-light text-gray-500">
          {span}
        </span>
        <button
          onClick={handleClick}
          className={buttonClass}
        >
          {btnText}
        </button>
      </div>

      {showModal && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[800]"
            onClick={() => setShowModal(false)}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[900] px-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {confirmTitle}
              </h2>
              <p className="text-gray-600 mb-8">
                {confirmMessage}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 rounded-xl font-semibold text-gray-700 bg-white border-2 border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Odustani
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 px-6 py-3 rounded-xl font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  Obrišite
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DeleteButton;
