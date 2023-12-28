"use client";
import Image from "next/image";
import heroImage1 from "../../public/pictures/hero.png";

export default function HeroSection() {
  return (
    <section className="container flex flex-col lg:flex-row justify-between items-center gap-10 w-screen relative mb-[200px] lg:px-10">
      <div className="flex-1 w-full max-w-[600px] flex flex-col gap-[5px] order-2 lg:order-1 md:order-1 md:m-[50px]">
        <h1 className="font-serif text-6xl font-extrabold text-blue1 whitespace-break-spaces">
          Your Ultimate Jewelry Destination
        </h1>
        <p className="font-serif text-xl whitespace-break-spaces text-brown1">
        Discover the essence of timeless elegance shimmering through every piece at Elina. From delicate necklaces to intricate bracelets, embark on our journey. At Elina, we encapsulate the allure of sophistication and affordability, ensuring each piece reflects your unique style effortlessly.
        </p>
        <div className="flex items-center justify-center">
          <a href="/about">
            <button className="font-serif w-[130px] text-peach1 bg-dark_blue hover:text-dark_blue hover:bg-peach1 mt-10 py-2 px-1 rounded-sm ">
              LEARN MORE
            </button>
          </a>
        </div>
      </div>
      <div className="flex-1 mr-[70px] order-1 lg:order-2 md:order-2 lg:mt-[95px] lg:mr-20 md:mr-20">
        <div className="relative">
          <Image
            src={heroImage1}
            alt="Hero Image"
            className="w-[650px] h-auto "
          />
          <div className="absolute w-full h-[120%] -top-[10%] left-[70px] -z-10 bg-peach1"></div>
        </div>
      </div>
    </section>
  );
}