"use client";
import { utilits } from "@/utility";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({
  children,
  header,
  footer,
  noFooter,
  onePageMenu,
}) => {
  useEffect(() => {
    utilits.animaiton();
  }, []);

  return (
    <div className="page-wrapper">
      <Header header={header} onePageMenu={onePageMenu} />
      <SideBar />
      {children}
      {!noFooter && <Footer footer={footer} />}
    </div>
  );
};
export default Layout;
