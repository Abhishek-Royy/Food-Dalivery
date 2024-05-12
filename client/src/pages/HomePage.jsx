import React, { useState } from "react";

import HeaderPart from "../components/HeaderPart";
import ExploreMenu from "../components/ExploreMenu";

function HomePage() {
  const [category, setcategory] = useState("All");

  return (
    <>
      <div className="main w-[98%] m-auto md:w-full md:m-0  min-h-[100vh] bg-[#FFFFFF] px-2 pt-10 md:px-16 md:pt-16">
        <HeaderPart />

        <div className="section-1 w-full h-auto mt-8">
          <h2 className="text-3xl md:text-2xl font-semibold text-[#FF9F1C]">
            Order Your Favourite Food Here
          </h2>
          <p className="w-[95%] md:w-[70%] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            voluptatem temporibus esse voluptas necessitatibus doloremque,
            incidunt id numquam ullam deleniti laudantium ipsa nisi placeat nemo
            sed perferendis quia! Quisquam, accusantium.
          </p>
          <a href="#explore">
            <button className="mt-2 w-1/2 py-3 bg-[#FF9E16] text-lg rounded-md text-white md:w-[20%] md:py-3 hover:bg-[#FE4C01]">
              View Menu
            </button>
          </a>
        </div>

        <div className="explore__menu" id="explore">
          <ExploreMenu category={category} setcategory={setcategory} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
