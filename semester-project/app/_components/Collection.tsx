// Collection.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";

interface CollectionProps {
  heroImage: StaticImageData;
  button_text: string;
}

const Collection: React.FC<CollectionProps> = ({ heroImage, button_text }) => (
  <div className="flex flex-col items-center">
      <div className="relative">
        <Image
          src={heroImage}
          alt="Hero Image"
          width={400} 
          height={400} 
        />
        <div className="absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1"></div>
      </div>
    <button className="text-dark_blue bg-peach1 p-[7px] m-[10px] rounded-sm font-serif">{button_text} </button>
  </div>
);

export default Collection;
