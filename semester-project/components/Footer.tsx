import Image from "next/image";
import logoImage  from "../public/pictures/logo.jpeg";
export default function Footer(){
    return (
        <div>
            <hr className="bg-brown1 h-0.5" />
            <div className="flex justify-between">
                <div className="p-[30px]">
                <div className="flex justify-center">
                    <Image
                        src={logoImage}
                        alt="Hero Image"
                        width={150} 
                        height={150} 
                    />
                </div>
                    <p className="text-center text-faded_beige">copyright © 2023</p>
                    <p className="text-center text-blue1 font-bold">“Your Ultimate Jewelry Destination”</p>
                </div>
                <div className="flex">
                    <div className="p-[30px] text-beige1">
                        <h1 className="text-blue1 font-bold">SITEMAP</h1>
                        <p>Shop</p>
                        <p>About Us</p>
                        <p>Other</p>
                        <p>Shopping cart</p>
                        <p>Register/Log in</p>
                    </div>
                    <div className="p-[30px] text-beige1">
                        <p className="text-blue1 font-bold">CONTACT</p>
                        <p>385 007 700</p>
                        <p>elina@elina.hr</p>
                        <p>Ulica S. Radica,</p>
                        <p>21000, Split, Croatia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}