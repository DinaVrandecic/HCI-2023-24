import React from "react";
import Collection from "./Collection";
import heroImage1 from "../../public/pictures/ring.png";
import heroImage2 from "../../public/pictures/earring.png";
import heroImage3 from "../../public/pictures/chains.png";

const CollectionSection = () => (
  <div className="w-full">
    <div className="flex flex-col items-center md:flex-row justify-center md:space-x-20 mt-20 mb-2 font-serif rounded-full">
      <Collection heroImage={heroImage1} button_text="RINGS" />
      <Collection heroImage={heroImage2} button_text="EARRINGS" />
      <Collection heroImage={heroImage3} button_text="NECKLACES" />
    </div>
    <div className="flex justify-center">
      <button className=" font-serif text-peach1 bg-dark_blue hover:text-dark_blue hover:bg-peach1 p-[5px] m-[5px] mb-10 md:w-1/4 lg:w-1/12 rounded-sm">
        SHOP ALL
      </button>
    </div>
  </div>
);

export default CollectionSection;
