import { useState } from 'react';
import Link from "next/link";
import {cn} from "../lib/utils";
import { usePathname } from 'next/navigation'

interface DropdownProps {
  link: string;
}

const Dropdown: React.FC<DropdownProps> = ({ link }) => {
  const pathName = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const items: Record<string, `/${string}`> = {
    Earrings: "/shop",
    Rings: "/shop",
    Bracelets: "/shop",
    Necklaces: "/shop",

  }; 

  const baseClass =
    'uppercase whitespace-nowrap font-serif text-base px-5 py-3 rounded-sm text-dark_blue hover:bg-dark_blue hover:text-peach1 hover:cursor-pointer';

  return (
    <div className=" inline-block">
      <a
                  className={cn(baseClass, {
                    "bg-dark_blue text-peach1":
                      link === pathName,
                  })}
        onClick={() => setShowDropdown(!showDropdown)}
      >
          SHOP
      </a>
      {showDropdown && (
        <ul className="flex flex-col justify-center items-start  my-[20px] "
        >
          {Object.entries(items).map(([name, path]) =>  (
            <li key={name
            }>
                <Link 
                    href={link}
                    className={`text-brown1 px-3 py-2 block ml-[20px] hover:bg-dark_blue  hover:text-peach1` //add inside of classes
                    }
>
                    {name}
                </Link>
            </li>

          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;