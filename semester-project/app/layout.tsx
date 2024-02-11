import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './globals.css'
import Hamburger from "../components/Hamburger"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ELINA',
  description: 'Jewelry Webshop',
}


const pages: Record<string, `/${string}`> = {
  home: "/",
  shop: "/shop",
  login: "/login",
  cart: "/cart",
  about: "/about",
}; 


<ul className="flex gap-8">
  {Object.entries(pages).map(([name, path]) => (
    <li key={name}>
      <Link href={path}>{name}</Link>
    </li>
  ))}
</ul>;



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
<body className={`${inter.className} bg-page_background`}>


      <Navbar pages={pages} />
      <Hamburger pages={pages} />
        {children}
        <Footer />
      </body>

    </html>
  );
}