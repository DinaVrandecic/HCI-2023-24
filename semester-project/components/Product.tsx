import React from "react";
import Image from "next/image";
import Link from "next/link";


interface ProductProps {
  imageUrl: string;
  category: string;
  title: string;
  price: string;
  onAddToCart: () => void;
}

const Product: React.FC<ProductProps> = ({imageUrl, category, title, price, onAddToCart }) => {
  const urlNew = title.trim().replaceAll(" ", "-");

  return (
    <div className="flex flex-col items-center w-fit h-fit m-[10px]">
      <div className="m-[20px]">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          style={{ width: '300px', height: '300px' }}
        />
      </div>
      <p className="font-serif text-xl font-bold whitespace-break-spaces text-blue1">
        {title}
      </p>
      <p className="font-serif text-xl font-bold whitespace-break-spaces text-brown1">
        {price}
      </p>
      <Link href={"/shop/" + category + "/" + urlNew}>
        <button
          className="font-serif text-dark_blue bg-peach1 hover:text-peach1 hover:bg-dark_blue p-[7px] m-[10px] rounded-sm"
          onClick={onAddToCart}
          >
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default Product;
