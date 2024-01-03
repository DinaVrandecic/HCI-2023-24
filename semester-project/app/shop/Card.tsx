import React from "react";
import Image from "next/image";
import picture from "../../public/pictures/ring.png"

export default function Card() {
    return (
        <div className="flex flex-col items-center bg-white w-fit h-fit m-[10px] hover:bg-beige_text hover:cursor-pointer">
            <div className="m-[20px]">
                <Image
                src={picture} 
                alt="Ring"
                width={300}
                height={300}
                className="object-cover"
                />
            </div>
            <p className="font-serif text-xl font-bold whitespace-break-spaces text-blue1">Flower ring</p>
            <p className="font-serif text-xl font-bold whitespace-break-spaces text-brown1">5,00 €</p>
            <button className="font-serif text-dark_blue bg-peach1 hover:text-peach1 hover:bg-dark_blue p-[7px] m-[10px] rounded-sm ">
              Add to cart
            </button>
        </div>
    );
}