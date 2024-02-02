"use client";
import { utilits } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    utilits.preloader();
  }, []);

  return <div className="preloader" />;
};
export default Preloader;
