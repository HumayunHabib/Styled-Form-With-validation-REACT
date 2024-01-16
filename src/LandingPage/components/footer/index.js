import React from "react";
import MainLogo from "../../../components/mainLogo";
import MainNav from "../../../components/mainNav";

const Footer = () => {
  const navLinks = ["FAQs", "Privacy Policy", "Other"];

  const scrollToRegistration = () => {
    // Implement your scroll logic here
    console.log("Scrolling to Registration");
  };
  return (
    <section class="footer-section">
      <footer>
        <MainLogo />
        <MainNav links={navLinks} onContactButtonClick={scrollToRegistration} />
      </footer>
      <p>Copyright © 2023 i2c inc. All rights reserved.</p>
    </section>
  );
};

export default Footer;
