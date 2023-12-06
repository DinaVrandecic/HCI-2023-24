import Image from "next/image";
import heroImage1 from "../../public/pictures/hero.png";

const HeroSection = () => (
  <section className="container flex justify-between items-center gap-10 w-screen relative">
    <div className="flex flex-col justify-start gap-5 max-w-xl m-[50px]">
      <h1 className="font-playfair text-2xl font-extrabold text-blue1 whitespace-break-spaces">
        Your Ultimate Jewelry Destination
      </h1>
      <p className="font-roboto text-lg whitespace-break-spaces text-beige1">
        Timeless Elegance in every sparkle. Your journey to exquisite jewelry begins here with Us!
      </p>
      <button className="bg-dark_blue text-beige_text py-[15px] mx-[15px] ">Learn more </button>
    </div>
    <div className="relative ">
      <div className="absolute top-0 left-0 right-0 bottom-0 h-[500px] w-[400px] m-[100px] bg-peach1"></div>
      <div className="relative z-10">
        <Image src={heroImage1} alt="Hero Image" className="scale-50" />
      </div>
    </div>
  </section>
);

export default HeroSection;




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




