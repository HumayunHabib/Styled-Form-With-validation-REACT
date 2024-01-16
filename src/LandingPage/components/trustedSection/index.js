import React from "react";
import { line } from "../../../assets";

const TrustedSection = () => {
  return (
    <section className="trusted-section">
      <div>
        <h2>Trusted by</h2>
        <img src={line} alt="LineImage" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
        tristique senectus dui pharetra sit.
      </p>
    </section>
  );
};

export default TrustedSection;
