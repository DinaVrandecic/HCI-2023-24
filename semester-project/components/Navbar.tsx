"use client"
import { FC } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import {cn} from "../lib/utils";
import Image from "next/image";
import logoImage  from "../public/pictures/logo.png";

interface NavbarProps {
  // Record of string keys and string values where each value is a path starting with a slash
  pages: Record<string, `/${string}`>;
}
const baseClass =
"uppercase whitespace-nowrap font-serif text-base px-5 py-3 rounded-sm text-dark_blue  hover:bg-dark_blue hover:text-peach1";

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const pathName = usePathname();

  return ( 
    <div>
    <div className=" justify-between hidden md:flex lg:flexg:w-1/2l bg-nf_blue mb-15">
      <div className="mx-[30px] mt-[30px]">
      <Image
        src={logoImage}
        alt="Hero Image"
        width={150} 
        height={150} 
      />
      </div>
    <nav className="flex items-center justify-end px-20 py-10">
      <ul className="flex gap-2">
        {Object.entries(pages).map(([name, path]) => (
          <li key={name}>
            <Link href={path}>
              <span
                className={cn(baseClass, {
                  "bg-dark_blue text-peach1 pointer-events-none":
                    path === pathName,
                })}
              >
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </div>

    </div>
  );
};
export default Navbar;
