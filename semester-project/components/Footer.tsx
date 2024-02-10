// Import necessary modules/components
import Image from "next/image";
import Link from "next/link";
import logoImage from "../public/pictures/logo.png";

// Define the Footer component
export default function Footer() {
  return (
    <div className="bg-nf_blue py-8 mt-20 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="p-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Link legacyBehavior href="/">
              <a>
                <Image
                  src={logoImage}
                  alt="logo Image"
                  width={150}
                  height={150}
                />
              </a>
            </Link>
          </div>
          <p className="font-serif text-peach1 mt-2 mb-3">copyright © 2023</p>
          <p className="text-dark_blue font-bold font-serif">
            Your Ultimate Jewelry Destination
          </p>
        </div>

        <div className="p-8 font-serif text-blue1 flex-grow md:w-1/3 text-center">
          <h1 className="font-bold">SITEMAP</h1>
          <Link legacyBehavior href="/shop">
            <a className="hover:text-peach1">Shop</a>
          </Link>
          <br />
          <Link legacyBehavior href="/about">
            <a className="hover:text-peach1">About Us</a>
          </Link>
          <br />
          <Link legacyBehavior href="/cart">
            <a className="hover:text-peach1">Shopping cart</a>
          </Link>
          <br />
          <Link legacyBehavior href="/login">
            <a className="hover:text-peach1">Register/Log in</a>
          </Link>
        </div>

        <div className="p-8 font-serif text-blue1 md:w-1/3 text-right">
          <p className="font-bold">CONTACT</p>
          <p>+385 007 700</p>
          <p>elina@elina.hr</p>
          <p>Ulica R.Boskovica</p>
          <p>21000, Split, Croatia</p>
        </div>
      </div>
    </div>
  );
}