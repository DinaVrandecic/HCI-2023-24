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
      <div className="relative h-[200px] w-auto -ml-[30px] mr-[30px] -mb-[170px]  bg-peach1 box-border"></div>
      <div className="relative">
      <Image
        src={heroImage}
        alt="Hero Image"
        width={200} // Adjust the width as needed
        height={200} // Adjust the height as needed
      />
      </div>

    </div>
    <button className="bg-dark_blue text-beige_text p-[5px] m-[15px]">{button_text} </button>
  </div>
);

export default Collection;


// const Collection: React.FC<CollectionProps> = ({ heroImage, button_text }) => (
//   <div className="flex flex-col items-center">
//     <div className="relative">
//       <div className="relative h-[40%] w-[40%] sm:h-[30%] sm:w-[30%] -ml-[5%] sm:-ml-[10%] bg-peach1 box-border"></div>
//       <div className="relative">
//         <Image
//           src={heroImage}
//           alt="Hero Image"
//           width={200} // Adjust the width as needed
//           height={200} // Adjust the height as needed
//         />
//       </div>
//     </div>
//     <button className="bg-dark_blue text-beige_text p-[5px] m-[15px]">{button_text}</button>
//   </div>
// );
