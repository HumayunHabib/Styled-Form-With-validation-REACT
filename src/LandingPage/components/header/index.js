import React from "react";

import MainLogo from "../../../components/mainLogo";
import MainNav from "../../../components/mainNav";
const navLinks = ["About Us", "Registration", "Careers"];
const Header = () => {
  const scrollToRegistration = () => {
    // Implement your scroll logic here
    console.log("Scrolling to Registration");
  };
  return (
    <header>
      <MainLogo />
      <MainNav links={navLinks} onContactButtonClick={scrollToRegistration} />
      {/* <nav aria-label="Main Navigation">
        <a href="#about-us">About Us</a>
        <a href="#registration">Registration</a>
        <a href="#careers">Careers</a>
        <button onclick="scrollToRegistration()">Contact Us</button>
      </nav> */}
    </header>
  );
};

export default Header;
