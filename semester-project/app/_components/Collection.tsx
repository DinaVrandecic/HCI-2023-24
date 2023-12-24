// Collection.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";

interface CollectionProps {
  heroImage: StaticImageData;
  button_text: string;
}

const Collection: React.FC<CollectionProps> = ({ heroImage, button_text }) => (
  <div className="flex flex-col items-center">
    <div >
      <div className="relative">
        <Image
          src={heroImage}
          alt="Hero Image"
          width={200} 
          height={200} 
        />
        <div className="absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1"></div>
      </div>

    </div>
    
    <button className="text-dark_blue bg-transparent border border:dark_blue hover:text-peach1 hover:bg-border-transparent p-[7px] m-[10px] rounded-sm">{button_text} </button>
  </div>
);

export default Collection;
