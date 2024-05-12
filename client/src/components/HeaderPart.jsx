import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headerdata from "../api/header.json";

function HeaderPart() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <div className="w-full h-auto">
      <div className="slider-container w-full h-full">
        <Slider {...settings}>
          {headerdata.map((item) => (
            <div className="w-full h-[25vh] md:h-[45vh] " key={item.id}>
              <img
                className="w-full h-full object-cover object-center"
                src={item.image}
                alt="all image name"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HeaderPart;
