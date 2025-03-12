"use client";

import Navigation from "../admin/Navigation";
import Content from "../admin/Content";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Backdrop from "../admin/Backdrop";
import {  useAdminContext } from "@/context/adminContext";
import Feedback from "../admin/Feedback";

const AdminLayout: React.FC = () => {
  const { feedback, setData } = useAdminContext();

  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from("products").select("*");
      console.log(error);
      setData(data ?? []);
    };

    checkConnection();
  }, [setData]);
  
  

  return (
    <>
      {feedback.state && (
        <>
          <Backdrop />
          <Feedback />
        </>
      )}

      <div className="flex overflow-hidden">
        <Navigation />
        <Content />
      </div>
    </>
  );
};

export default AdminLayout;
