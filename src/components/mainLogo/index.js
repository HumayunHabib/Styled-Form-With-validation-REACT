import React from "react";
import { logo } from "../../assets";

const MainLogo = () => {
  return (
    <div>
      <img
        className="logo"
        src={logo}
        alt="Logo"
        style={{
          width: "90px",
          height: "55px",
          maxWidth: "100%",
        }}
      />
    </div>
  );
};

export default MainLogo;
