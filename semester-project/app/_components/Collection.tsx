// Collection.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";

interface CollectionProps {
  heroImage: StaticImageData;
  button_text: string;
}

const Collection: React.FC<CollectionProps> = ({ heroImage, button_text }) => (
  <div className="flex flex-col items-center">
    <div>
      <Image
        src={heroImage}
        alt="Hero Image"
        width={200} // Adjust the width as needed
        height={200} // Adjust the height as needed
      />
    </div>
    <button className="bg-dark_blue text-beige_text p-[5px] m-[15px]">{button_text} </button>
  </div>
);

export default Collection;
