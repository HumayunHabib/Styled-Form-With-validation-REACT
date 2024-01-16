// import React, { useState, useEffect } from "react";
// import {
//   Microsoftlogo,
//   chevronLeft,
//   chevronRight,
//   cola,
//   twitter,
// } from "../../../assets";

// const SliderComponent = () => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const totalSlides = document.querySelectorAll(".slider-item").length;

//   useEffect(() => {
//     showSlide(currentIndex);
//   }, [currentIndex]);

//   const showSlide = (index) => {
//     const sliderWrapper = document.querySelector(".slider-wrapper");
//     const slideWidth = document.querySelector(".slider-item").clientWidth;
//     sliderWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
//   };

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <section className="slider-section">
//       <img
//         className="slider-arrow prev-arrow"
//         src={chevronLeft}
//         alt="SliderImage1"
//         onClick={prevSlide}
//       />

//       <div className="slider-container">
//         <div className="slider-wrapper">
//           <div className="slider-item">
//             <img src={Microsoftlogo} alt="SliderImage1" />
//           </div>

//           <div className="slider-item">
//             <img src={twitter} alt="SliderImage2" />
//           </div>
//           <div className="slider-item">
//             <img src={cola} alt="SliderImage3" />
//           </div>
//           <div className="slider-item">
//             <img src={Microsoftlogo} alt="SliderImage3" />
//           </div>
//           <div className="slider-item">
//             <img src={cola} alt="SliderImage3" />
//           </div>
//         </div>
//       </div>

//       <img
//         className="slider-arrow next-arrow"
//         src={chevronRight}
//         alt="SliderImage1"
//         onClick={nextSlide}
//       />
//     </section>
//   );
// };

// export default SliderComponent;
import React, { useState, useEffect, useRef } from "react";
import {
  Microsoftlogo,
  chevronLeft,
  chevronRight,
  cola,
  twitter,
} from "../../../assets";

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderWrapperRef = useRef(null);
  const slideWidth = useRef(0);

  useEffect(() => {
    if (sliderWrapperRef.current) {
      slideWidth.current =
        sliderWrapperRef.current.querySelector(".slider-item").clientWidth;
      showSlide(currentIndex);
    }
  }, [currentIndex]);

  const showSlide = (index) => {
    if (sliderWrapperRef.current) {
      sliderWrapperRef.current.style.transform = `translateX(-${
        index * slideWidth.current
      }px)`;
    }
  };

  const totalSlides = 5; // Assuming a fixed number of slides

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="slider-section">
      <img
        className="slider-arrow prev-arrow"
        src={chevronLeft}
        alt="SliderImage1"
        onClick={prevSlide}
      />

      <div className="slider-container">
        <div className="slider-wrapper" ref={sliderWrapperRef}>
          {[Microsoftlogo, twitter, cola, Microsoftlogo, cola]?.map(
            (image, index) => (
              <div className="slider-item" key={index}>
                <img src={image} alt={`SliderImage${index + 1}`} />
              </div>
            )
          )}
        </div>
      </div>

      <img
        className="slider-arrow next-arrow"
        src={chevronRight}
        alt="SliderImage1"
        onClick={nextSlide}
      />
    </section>
  );
};

export default SliderComponent;
