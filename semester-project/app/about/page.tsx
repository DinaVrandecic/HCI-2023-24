import Image from 'next/image';
import eid from "../../public/pictures/eid.png";
import vision from "../../public/pictures/vision.png"; 

export default function About() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-15 text-center text-dark_blue font-serif">About us</h1>

      <section className="flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="md:w-1/2 mb-4 mt-8 md:mb-0">
          <Image
            src={eid} 
            alt="Ela and Dina"
            width={510}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-peach1 mb-4">Our founders</h2>
          <p className="mb-4 font-serif text-dark_blue">Meet the creative minds behind Elina Jewelry —  Ela and Dina. Friends with a shared passion for design, they embarked on a journey to redefine the world of accessories.</p>

          <p className="mb-4 font-serif text-dark_blue">Ela, with her innate sense of style, has an eye for trends that transcend time. Her knack for selecting unique pieces and understanding the pulse of fashion has been a driving force in curating our collection.</p>

          <p className="mb-4 font-serif text-dark_blue">Dina, on the other hand, brings a wealth of expertise in craftsmanship. Her dedication to creating pieces that not only look stunning but also stand the test of time ensures that each item in our store is a masterpiece.</p>

          <p className="mb-4 font-serif text-dark_blue">Together, they envisioned a jewelry store that goes beyond the ordinary, a place where individuals can find affordable, stylish, and modern pieces that speak to their unique personalities.</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-peach1 font-serif">Our vision</h2>
          <p className="mb-4 font-serif text-dark_blue">At Elina, we believe that everyone deserves to accessorize with confidence. Our goal is to make high-quality, stylish jewelry accessible to all, without compromising on craftsmanship or breaking the bank.</p>

          <p className="mb-4 font-serif text-dark_blue">Whether you're looking for a timeless piece or a trendy accessory to elevate your look, we have something for every style and occasion. Our commitment is to empower individuals to express themselves through affordable and modern jewelry that inspires confidence and joy.</p>
        </div>
        <div className="md:w-1/2 mb-4 mt-8 md:mb-0 md:ml-28">
          <Image
            src={vision}
            alt="Our Vision"
            width={510}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
