import React from "react";

import { lock, signal, trophy } from "../../../assets";

const StyledSection = () => {
  return (
    <section className="styled-section">
      <div className="card">
        <img src={lock} alt="CardImage1" />
        <div>
          <h3>24/7 Support</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>

      <div className="card">
        <img src={signal} alt="CardImage2" />
        <div>
          <h3>1000+ of reviews</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="card">
        <img src={trophy} alt="CardImage3" />
        <div>
          <h3>And more!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default StyledSection;
