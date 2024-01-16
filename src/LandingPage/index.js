import React from "react";

import RegistrationForm from "./components/registrationForm";
import SliderComponent from "./components/sliderComponent";
import TrustedSection from "./components/trustedSection";
import StyledSection from "./components/styledSection";
import BannerSection from "./components/bannerSection";

export const LandingPage = () => {
  return (
    <div>
      {" "}
      <BannerSection />
      <StyledSection />
      <TrustedSection />
      <SliderComponent />
      <RegistrationForm />
    </div>
  );
};
