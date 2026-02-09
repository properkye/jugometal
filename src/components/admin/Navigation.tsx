'use client'
import { useAdminContext } from "@/context/adminContext";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTractor, FaTools, FaCogs, FaPlus } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

const dashboard = [
  { title: "Traktori", url: "traktori-list", icon: <FaTractor size={18} /> },
  { title: "Priključne mašine", url: "prikljucne-masine-list", icon: <FaTools size={18} /> },  
  { title: "Rezervni delovi", url: "rezervni-delovi-list", icon: <FaCogs size={18} /> },
];

interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { setSelectScreen, selectScreen } = useAdminContext()
  const { signOut, user } = useAuth();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Close mobile menu when screen item is selected
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [selectScreen, setIsMobileMenuOpen]);

  const logout = async () => {
    await signOut();
    // Admin stranica će automatski redirect-ovati na /login
  };

  // Get user initials from email
  const getInitials = (email: string | undefined) => {
    if (!email) return "U";
    const name = email.split("@")[0];
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className={`
      ${isCollapsed ? 'lg:w-[80px]' : 'lg:w-[280px]'} 
      fixed lg:relative
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      w-[280px]
      h-screen bg-[#f6f6f6] border-r border-gray-300 flex flex-col transition-all duration-300
      z-50
    `}>
      {/* Logo Section */}
      <div className={`flex items-center ${isCollapsed ? 'lg:justify-center' : 'justify-between'} h-[82px] py-8 ${isCollapsed ? 'lg:px-4' : 'px-6'} border-b border-gray-300`}>
        {!isCollapsed && (
          <Image 
            src="/logo.png" 
            alt="Jugometal Logo" 
            width={180} 
            height={60}
            className="object-contain"
            priority
          />
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-white transition-all duration-300 hidden lg:block"
          title={isCollapsed ? "Proširi sidebar" : "Skupi sidebar"}
        >
          <MdKeyboardArrowRight 
            className={`text-gray-600 transition-transform duration-300 ${isCollapsed ? '' : 'rotate-180'}`} 
            size={20} 
          />
        </button>
      </div>

      {/* Navigation Section */}
      <div className="flex-1 flex flex-col justify-between px-4 py-6">
        <div className="space-y-8">
          {/* Main Navigation */}
          <nav>
            {!isCollapsed && (
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3 lg:block">
                Navigacija
              </p>
            )}
            <ul className="space-y-1">
              {dashboard.map((item, index) => {
                const isActive = selectScreen === item.url;
                return (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setSelectScreen(item.url)
                      }}
                      className={`w-full flex items-center ${isCollapsed ? 'lg:justify-center' : 'gap-3'} px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-white text-gray-900 shadow-sm' 
                          : 'text-gray-600 hover:bg-white hover:text-gray-900'
                      }`}
                      title={isCollapsed ? item.title : ''}
                    >
                      <span className={isActive ? 'text-gray-900' : 'text-gray-500'}>
                        {item.icon}
                      </span>
                      <span className={`${isCollapsed ? 'lg:hidden' : ''}`}>{item.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Add Product Section */}
          <div>
            {!isCollapsed && (
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3 lg:block">
                Dodaj novi
              </p>
            )}
            <button
              onClick={() => setSelectScreen('AddNew')}
              className={`w-full flex items-center ${isCollapsed ? 'lg:justify-center' : 'gap-3'} px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectScreen === 'AddNew'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:bg-white hover:text-gray-900'
              }`}
              title={isCollapsed ? "Dodaj nov proizvod" : ''}
            >
              <span className={selectScreen === 'AddNew' ? 'text-gray-900' : 'text-gray-500'}>
                <FaPlus size={18} />
              </span>
              <span className={`${isCollapsed ? 'lg:hidden' : ''}`}>Dodaj nov proizvod</span>
            </button>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="border-t border-gray-300 pt-4">
          <div className={`flex items-center ${isCollapsed ? 'lg:justify-center' : 'gap-3'} px-3 py-3`}>
            {/* Avatar */}
            <div className={`${isCollapsed ? 'lg:w-10 lg:h-10' : 'w-10 h-10'} rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0`}>
              <span className="text-white font-semibold text-sm">
                {getInitials(user?.email)}
              </span>
            </div>
            
            {/* Email */}
            {!isCollapsed && (
              <div className="flex-1 min-w-0 text-left">
                <div className="text-sm font-medium text-gray-900 truncate">
                  {user?.email}
                </div>
              </div>
            )}
            
            {/* Logout Button */}
            {!isCollapsed && (
              <button
                onClick={logout}
                className="p-2 rounded-lg hover:bg-white transition-all duration-200 flex-shrink-0"
                title="Odjavi se"
              >
                <HiLogout className="text-gray-600 hover:text-gray-900" size={20} />
              </button>
            )}
          </div>
          
          {/* Logout for collapsed state */}
          {isCollapsed && (
            <button
              onClick={logout}
              className="w-full mt-2 p-2 rounded-lg hover:bg-white transition-all duration-200 lg:flex items-center justify-center hidden"
              title="Odjavi se"
            >
              <HiLogout className="text-gray-600" size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
