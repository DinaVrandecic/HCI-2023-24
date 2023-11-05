import Link from "next/link";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const pages = {
    delivery: "/delivery",
    order: "/order",
    payment: "/payment",
  };

  export default function Cart() {
  
    return (
      <div>
          <nav>
          <h3 className="flex items-center justify-center">CART</h3>
            <ul className="flex gap-8 flex items-center justify-center p-4">
              {Object.entries(pages).map(([name, path]) => (
                <li key={name}>
                  <Link href={`cart/${path}`}>{name}</Link>
                </li>
              ))}
            </ul>
            
          </nav>
          {/* {children} */}
      </div>
    );
  }