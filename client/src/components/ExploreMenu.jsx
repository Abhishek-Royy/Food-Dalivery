import React from "react";
import "../stylesheets/exploreMenu.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import exploremenu from "../api/explore.json";

function ExploreMenu({ category, setcategory }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className="main w-full h-auto mt-16"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="slider-container">
          <Slider {...settings}>
            {exploremenu.map((item, _) => (
              <div
                onClick={() =>
                  setcategory((prev) =>
                    prev === item.title ? "All" : item.title
                  )
                }
                key={item.id}
                className="box w-[12%] h-[25vh] p-2"
              >
                <div className="image w-full h-[20vh] cursor-pointer  rounded-full">
                  <img
                    className={`w-full h-full rounded-full object-cover ${
                      category === item.title ? "active" : ""
                    }`}
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <p className="text-lg text-center font-semibold">
                  {item.title}
                </p>
              </div>
            ))}
          </Slider>
        </div>
        <hr />
      </div>
    </>
  );
}

export default ExploreMenu;
