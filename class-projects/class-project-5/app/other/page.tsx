import Link from "next/link";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const pages = {
    contact: "/contact",
    faq: "/faq",
    terms: "/terms",
  };

  export default function Other() {
  
    return (
      <div>
          <nav className="flex items-center justify-center p-4">
  
            <ul className="flex gap-8">
              {Object.entries(pages).map(([name, path]) => (
                <li key={name}>
                  <Link href={`other/${path}`}>{name}</Link>
                </li>
              ))}
            </ul>
            
          </nav>
          {/* {children} */}
      </div>
    );
  }