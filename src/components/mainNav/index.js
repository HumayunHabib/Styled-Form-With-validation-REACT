import React from "react";

const MainNav = ({ links, onContactButtonClick }) => {
  return (
    <nav aria-label="Footer Navigation">
      {links.map((link, index) => (
        <a key={index} href={`#${link?.toLowerCase()}`}>
          {link}
        </a>
      ))}
      <button onClick={onContactButtonClick}>Contact Us</button>
    </nav>
  );
};

export default MainNav;
