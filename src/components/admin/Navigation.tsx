'use client'
import { useAdminContext } from "@/context/adminContext";
import React from "react";
import { FaTractor,FaTools, FaCogs, FaPlus } from "react-icons/fa";


const dashboard = [
  { title: "Traktori", url: "traktori-list", icon: <FaTractor /> },
  { title: "Priključne mašine", url: "prikljucne-masine-list", icon: <FaTools /> },  
  { title: "Rezervni delovi", url: "rezervni-delovi-list", icon: <FaCogs /> },
];


const Navigation:React.FC = () => {
  const {setSelectScreen} = useAdminContext()

  const logout = () => {
    console.log("Logging out...");
    // Ovdje možeš dodati logout funkcionalnost
  };

  return (
    <div className="w-[260px] h-[100vh] border p-2 bg-[#f9f9f9]">
      <div className="flex gap-2 items-center p-2">
        <div className="w-[40px] h-[40px] rounded-lg bg-black"></div>
        <div>
          <h1 className="text-[1rem] tracking-tighter">Scope CMS</h1>
          <p className="text-[.7rem] text-gray-400">Jugometal</p>
        </div>
      </div>

      <div className="flex flex-col justify-between h-[95%] p-2">
       <div>
       <ul className="mt-10">
          <p className="text-[.7rem] text-gray-400">Navigation</p>
          {dashboard.map((item, index) => (
            <li
              key={index}
              className="text-[.9rem] flex items-center gap-4 my-1 text-[#1e1e1e] p-2 px-3 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#f1f1f1]"
              onClick={() => {
                setSelectScreen(item.url)
                console.log(item.url)
              }}
            >
                <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-10">
          <p className="text-[.7rem] text-gray-400">Data entry</p>
            <li
              className="text-[.9rem] my-1 flex items-center gap-4 text-[#1e1e1e] p-2 px-3 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#f1f1f1]"
              onClick={() => setSelectScreen('AddNew')}
            >
                <span><FaPlus /></span>
                <span>Dodajte nov proizvod</span>
            </li>
        </ul>
       </div>
        

        <div
          className="p-2 mb-4 rounded-lg flex gap-2 items-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#f1f1f1]"
          onClick={logout}
        >
          <div className="w-[40px] h-[40px] rounded-lg bg-black"></div>
          <div>
            <h1 className="text-[1rem] tracking-tighter">Logout</h1>
            <p className="text-[.7rem] text-gray-400">Close the session</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
