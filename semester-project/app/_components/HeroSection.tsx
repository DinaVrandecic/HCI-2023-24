"use client";
import Image from "next/image";
import heroImage1 from "../../public/pictures/hero.png";

export default function HeroSection() {
  return (
    <section className="container flex flex-col lg:flex-row justify-between items-center gap-10 w-screen relative mb-[200px] lg:px-10">
      <div className="flex-1 w-full max-w-[600px] flex flex-col gap-[5px] md:m-[50px]">
        <h1 className="font-serif text-2xl font-extrabold text-blue1 whitespace-break-spaces">
          Your Ultimate Jewelry Destination
        </h1>
        <p className="font-serif text-lg whitespace-break-spaces text-beige1">
          Timeless elegance in every sparkle. Your journey to stylish and
          affordable jewelry begins here with us!
        </p>
        <div className="flex items-center justify-center">
          <a href="/about">
            <button className="font-serif w-[130px] text-peach1 bg-dark_blue hover:text-dark_blue hover:bg-peach1 mt-10 py-2 px-1 rounded-sm ">
              LEARN MORE
            </button>
          </a>
        </div>
      </div>
      <div className="flex-1 lg:mt-[95px] lg:mr-20 ">
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