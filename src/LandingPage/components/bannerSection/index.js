import React from "react";

import { image1, image2, image3, bannerImage, line } from "../../../assets";

const BannerSection = () => {
  return (
    <section className="banner">
      <div className="banner-left">
        <div class="mainHeading">
          <h1>
            Lorem ipsum
            <span class="dolor">
              dolor <img src={line} alt="LineImage" />
            </span>
            sit amet yo
            <span>👋</span>
          </h1>
        </div>
        {/* <img
          style={{ marginBottom: "64px" }}
          src={heading}
          alt="Andrew Schultz"
        /> */}

        <div className="profile-card">
          <img src={image1} alt="Andrew Schultz" />
          <div className="description">
            <h3>Andrew Schultz</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
              tristique senectus dui pharetra sit.
            </p>
          </div>
        </div>
        <div className="profile-card">
          <img src={image2} alt="Andrew Schultz" />
          <div className="description">
            <h3>Andrew Schultz</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
              tristique senectus dui pharetra sit.
            </p>
          </div>
        </div>
        <div className="profile-card no-margin-bottom">
          <img src={image3} alt="Andrew Schultz" />
          <div className="description">
            <h3>Andrew Schultz</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
              tristique senectus dui pharetra sit.
            </p>
          </div>
        </div>
      </div>

      <div className="banner-right">
        <img src={bannerImage} alt="BannerImage" />
      </div>
    </section>
  );
};

export default BannerSection;
