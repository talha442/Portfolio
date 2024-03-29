"use client";

import { utilits } from "@/utility";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OnePageMenu } from "./Menu";

const Header = ({ header, onePageMenu }) => {
  switch (header) {
    case 1:
      return <Header2 onePageMenu={onePageMenu} />;
    case 2:
      return <Header2 onePageMenu={onePageMenu} />;

    default:
      return <Header2 onePageMenu={onePageMenu} />;
  }
};
export default Header;

const Header2 = ({ onePageMenu }) => {
  useEffect(() => {
    utilits.stickyNav();
  }, []);

  const toggleSidebar = () => {
    document.querySelector("body").classList.add("side-content-visible");
  };

  const [toggle, setToggle] = useState(false);

  return (
    <header className="main-header header-two menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a style={{display: "flex", gap: "15px", margin: "0px"}} className="h3">
                    <i style={{color:'#C9F31D'}} className="flaticon-asterisk-1"></i> Talha Faisal
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix mx-auto">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                  <Link legacyBehavior href="/">
                  <a style={{display: "flex", gap: "15px", margin: "0px", fontSize:'20px'}} className="h3">
                    <i style={{color:'#C9F31D'}} className="flaticon-asterisk-1"></i> Talha Faisal
                  </a>
                </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle me-4"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                    onClick={() => setToggle(!toggle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className={`navbar-collapse collapse clearfix ${
                    toggle ? "show" : ""
                  }`}
                >
                    <ul className="navigation onepage clearfix">
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#about">about</a>
                      </li>
                      <li>
                        <a href="#resume">Resume</a>
                      </li>
                      <li>
                        <a href="#services">services</a>
                      </li>
                      <li>
                        <a href="#skills">skills</a>
                      </li>
                      <li>
                        <a href="#projects">projects</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              {/* menu sidbar */}
              <div className="menu-sidebar d-none d-lg-block">
                <button onClick={() => toggleSidebar()}>
                  <img
                    src="assets/images/shape/sidebar-tottler-white.svg"
                    alt="Toggler"
                  />
                </button>
              </div>
              <Link legacyBehavior href="#contact">
                <a className="theme-btn"> let,s talk</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
