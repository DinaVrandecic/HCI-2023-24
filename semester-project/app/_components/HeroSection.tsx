"use client"
import Image from "next/image";
import heroImage1 from "../../public/pictures/hero.png";
import styled from "styled-components";

const RecktangleHero = styled.div`
  font-family: Raleway, sans-serif;
  box-sizing: border-box;
  position: relative;
  background-color: #EBCFB2;
  height: 740px;
  margin-left: 200px;
  margin-top: 30px;
  width: 600px;
`;

const PictureHero = styled.div`
position: 'relative',
display: 'block',
margin: '-600px 40px 0 auto',
width: '374px',
height: '631px',
marginRight: '41px',
`;


export default function HeroSection() {
  return (
    <section className="container flex justify-between items-center gap-10 w-screen relative">
      <div className="flex flex-1 w-1/2 flex-col justify-start gap-5 max-w-xl m-[50px]">
        <h1 className="font-playfair text-2xl font-extrabold text-blue1 whitespace-break-spaces">
          Your Ultimate Jewelry Destination
        </h1>
        <p className="font-roboto text-lg whitespace-break-spaces text-beige1">
          Timeless Elegance in every sparkle. Your journey to exquisite jewelry begins here with Us!
        </p>
        <button className="bg-dark_blue text-beige_text py-[15px] mx-[15px] ">Learn more</button>
      </div>
      <div className="flex-1 w-1/2">
        <RecktangleHero />
        <div className="relative">
          <Image
            src={heroImage1}
            alt="Hero Image"
            className="block mt-[-695px]  mr-[200px] w-[650px] h-auto"
          />
        </div>

      </div>
    </section>
  );
}


// "use client"
// import Image from "next/image";
// import heroImage1 from "../../public/pictures/hero.png";
// import styled from "styled-components";

// const RecktangleHero = styled.div`
//   font-family: Raleway, sans-serif;
//   box-sizing: border-box;
//   position: relative;
//   background-color: #c0c6d4;
//   height: 449px;
//   margin: 30px 0;
//   width: 310px;
// `;

// const PictureHero = styled.div`
// position: 'relative',
// display: 'block',
// margin: '-600px 40px 0 auto',
// width: '374px',
// height: '631px',
// marginRight: '41px',
// `;


// export default function HeroSection() {
//   return (
//     <section className="container flex justify-between items-center gap-10 w-screen relative">
//       <div className="flex flex-col justify-start gap-5 max-w-xl m-[50px]">
//         <h1 className="font-playfair text-2xl font-extrabold text-blue1 whitespace-break-spaces">
//           Your Ultimate Jewelry Destination
//         </h1>
//         <p className="font-roboto text-lg whitespace-break-spaces text-beige1">
//           Timeless Elegance in every sparkle. Your journey to exquisite jewelry begins here with Us!
//         </p>
//         <button className="bg-dark_blue text-beige_text py-[15px] mx-[15px] ">Learn more</button>
//       </div>
//       <div>
//         <RecktangleHero />
//         <PictureHero>
//           <Image src={heroImage1} alt="Hero Image" width={374} height={631} />
//         </PictureHero>
//       </div>
//     </section>
//   );
// }




// import Image from "next/image";
// import heroImage1 from "../../public/pictures/hero.png";

// const HeroSection = () => (
//   <section className="container flex justify-between items-center gap-10 w-screen relative">
//     <div className="flex flex-col justify-start gap-5 max-w-xl m-[50px]">
//       <h1 className="font-playfair text-2xl font-extrabold text-blue1 whitespace-break-spaces">
//         Your Ultimate Jewelry Destination
//       </h1>
//       <p className="font-roboto text-lg whitespace-break-spaces text-beige1">
//         Timeless Elegance in every sparkle. Your journey to exquisite jewelry begins here with Us!
//       </p>
//       <button className="bg-dark_blue py-2 px-4">Learn more </button>
//     </div>
//     <div className="relative">
//       <div className="absolute top-0 left-0 right-0 bottom-0 m-[100px] bg-peach1"></div>
//       <div className="relative z-10">
//         <Image src={heroImage1} alt="Hero Image" className="scale-50" />
//       </div>
//     </div>
//   </section>
// );

// export default HeroSection;

// -webkit-text-size-adjust: 100%;
// font-size: 1rem;
// line-height: 1.6;
// font-family: Raleway,sans-serif;
// box-sizing: border-box;
// position: relative;
// color: #111111;
// background-color: #c0c6d4;
// height: 449px;
// background-image: none;
// margin: -92px 0 0 auto;
// width: 310px;
// pointer-events: initial;



