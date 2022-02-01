import React, { useState, useEffect } from "react";
// import logo from "../public/assets/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
import Link from "next/link";

const Navbar = () => {
  const [navFixed, setNavFixed] = useState("navbar");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80 ? setNavFixed("navbar-fixed") : setNavFixed("");
    }
  };
  return (
    <nav className={`navbar ${navFixed}`}>
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <a>
              <img src="images/logo.svg" alt="logo" />
            </a>
          </Link>
          <button className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
