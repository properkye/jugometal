"use client";

import Navigation from "../admin/Navigation";
import Content from "../admin/Content";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Backdrop from "../admin/Backdrop";
import {  useAdminContext } from "@/context/adminContext";
import Feedback from "../admin/Feedback";

const AdminLayout: React.FC = () => {
  const { feedback, setData, setMobileMenuToggle } = useAdminContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from("products").select("*");
      console.log(error);
      setData(data ?? []);
    };

    checkConnection();
  }, [setData]);

  // Set mobile menu toggle function in context
  useEffect(() => {
    setMobileMenuToggle(() => () => setIsMobileMenuOpen(prev => !prev));
  }, [setMobileMenuToggle]);
  
  

  return (
    <>
      {feedback.state && (
        <>
          <Backdrop />
          <Feedback />
        </>
      )}

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="flex h-screen overflow-hidden">
        <Navigation 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <Content />
      </div>
    </>
  );
};

export default AdminLayout;
