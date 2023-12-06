// CollectionSection.tsx
import React from "react";
import Collection from "./Collection";
import heroImage1 from "../../public/pictures/ring.png";
import heroImage2 from "../../public/pictures/earring.png";
import heroImage3 from "../../public/pictures/chains.png";


const CollectionSection = () => (
    <div >
          <div className="flex space-x-20">
    <Collection heroImage={heroImage1} button_text="Rings" />
    <Collection heroImage={heroImage2} button_text="Earrings" />
    <Collection heroImage={heroImage3} button_text="Chains" />
  </div>
  <div className="flex justify-center">
  <button className=" text-dark_blue bg-beige_text p-[5px] m-[15px] ">SHOP ALL</button>
  </div>

    </div>

);

export default CollectionSection;
