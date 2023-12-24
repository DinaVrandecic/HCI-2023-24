"use client"
import Image from "next/image";
import heroImage1 from "../../public/pictures/hero.png";
import styled from "styled-components";

const RecktangleHero = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: #EBCFB2;
  height: 740px;
  margin-left: 150px;
  margin-top: 30px;

  @media (max-width: 1300px) {
    margin-left: 0;
    width: calc(100% - 10px); 
    max-width: 600px; 
  }
`;

const PictureHero = styled.div`
  position: relative;
  display: block;
  margin: -600px 40px 0 auto;
  width: 374px; /* Adjust the width as needed */
  height: 631px; /* Adjust the height as needed */
  margin-right: 41px;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    max-width: 374px;
    height: auto; /* Ensure the height adjusts accordingly */
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 50px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export default function HeroSection() {
  return (
    <section className="container flex flex-col lg:flex-row justify-between items-center gap-10 w-screen relative mb-[200px]">
      <ContentContainer>
        <h1 className="font-serif text-2xl font-extrabold text-blue1 whitespace-break-spaces">
          Your Ultimate Jewelry Destination
        </h1>
        <p className="font-serif text-lg whitespace-break-spaces text-beige1">
          Timeless elegance in every sparkle. Your journey to stylish and affordable jewelry begins here with us!
        </p>
        <div className="flex items-center justify-center">
          <a href ="/about">
          <button className="font-serif text-peach1 bg-dark_blue hover:text-dark_blue hover:bg-peach1 mt-10 py-2 px-1 rounded-sm " style={{ width: '130px' }}>
            LEARN MORE
          </button>
          </a>
        </div>
      </ContentContainer>
      <div className="flex-1 w-full">
        <RecktangleHero />
        <div className="relative">
          <Image
            src={heroImage1}
            alt="Hero Image"
            className="block mt-[-695px] mr-[200px] w-[650px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
