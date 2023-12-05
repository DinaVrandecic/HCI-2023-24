import Image, { StaticImageData } from "next/image";

//import heroImage1 from "@/public/hero/pierre-chatel-innocenti-pxoZSTdAzeU-unsplash.jpg";


type HeroImageObject = {
  image: StaticImageData;
  borderRadius: string;
};

// const images: HeroImageObject[] = [
//   { image: heroImage1, borderRadius: "20% 0 0 0" },
//   { image: heroImage2, borderRadius: "0 20% 0 0" },
//   { image: heroImage3, borderRadius: "0 0 0 20%" },
//   { image: heroImage4, borderRadius: "0 0 20% 0" },
// ];

/* Your Ultimate Jewelry Destination */

// position: absolute;
// width: 630px;
// height: 43px;
// left: 40px;
// top: 494px;

// font-family: 'Libre Baskerville';
// font-style: normal;
// font-weight: 700;
// font-size: 35px;
// line-height: 43px;

// color: #25669C;

// text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


const HeroSection = () => (
  <section className="container flex justify-between items-center gap-10 w-screen">
    <div className="flex flex-col justify-start gap-5 max-w-xl">
      <h1 className="font-playfair text-2xl font-extrabold text-brand-purple-900 whitespace-break-spaces">
        Your Ultimate Jewelry Destination
      </h1>
      <p className="font-roboto text-lg whitespace-break-spaces">
        Timeless Elegance in every sparkle. Your journey to exquisite jewelry begins here with Us! 
      </p>
    </div>
    <div className="flex-shrink-0">
      <div className="grid grid-cols-2 grid-rows-2 gap-2 grow">
        {/* {images.map((imageObj, index) => (
          <div key={index} className="relative h-52 w-52">
            <Image
              src={imageObj.image}
              alt={`Hero image ${index + 1}`}
              fill
              style={{
                objectFit: "cover",
                borderRadius: `${imageObj.borderRadius}`,
              }}
            />
          </div>
        ))} */}
      </div>
    </div>
  </section>
);

export default HeroSection;