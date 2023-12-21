import Image from "next/image";
import logoImage from "../public/pictures/logo.png";

export default function Footer() {
  return (
    <div className="bg-nf_blue py-8 mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="p-8 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Image src={logoImage} alt="Hero Image" width={150} height={150} />
            </div>
            <p className="font-serif text-faded_beige mt-2 mb-3">copyright © 2023</p>
            <p className="text-dark_blue font-bold font-serif">
              Your Ultimate Jewelry Destination
            </p>
          </div>
          <div className="flex flex-col md:flex-row mt-4 md:mt-0">
            <div className="p-8 font-serif text-blue1">
              <h1 className="font-serif text-blue1 font-bold">SITEMAP</h1>
              <p>Shop</p>
              <p>About Us</p>
              <p>Other</p>
              <p>Shopping cart</p>
              <p>Register/Log in</p>
            </div>
            <div className="p-8 font-serif text-blue1 mt-4 md:mt-0">
              <p className="font-serif text-blue1 font-bold">CONTACT</p>
              <p>+385 007 700</p>
              <p>elina@elina.hr</p>
              <p>Ulica R.Boskovica</p>
              <p>21000, Split, Croatia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
