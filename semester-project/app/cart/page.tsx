import Image from "next/image";
import Link from "next/link";
import cart from "../../public/pictures/cart.png";

function ShoppingCartPage() {
  return (
    <div className="container-fluid mt-5 px-4">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center text-3xl font-bold font-serif text-dark_blue">My Cart</h1>
            </div>
            <div className="card-body cart">
              <div className="flex justify-center items-center mt-5 mb-5">
                <Image
                  src={cart}
                  alt="Cart Image"
                  width={280}
                  height={300}
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-dark_blue font-serif font-bold">Your Jewelry Box is Empty :( </h3>
                <h4 className="text-dark_blue font-serif font-bold mt-3">Add something! </h4>
                <Link legacyBehavior href="/shop">
                  <a className="bg-dark_blue font-serif hover:bg-peach1 text-peach1 hover:text-dark_blue py-2 px-4 mt-3 mb-3 text-serif">
                    SHOP ALL
                  </a>
                </Link>

                {/* Payment Method Section */}
                <div className="mt-5">
                  <h2 className="text-2xl font-bold font-serif text-dark_blue mb-3">Payment Methods</h2>
                  <p className="text-dark_blue font-serif mb-3">
                    We accept the following payment methods for your jewelry purchases:
                  </p>
                  <ul className="list-disc list-inside text-dark_blue font-bold font-serif">
                    <li>Credit Cards (Visa, MasterCard, American Express)</li>
                    <li>PayPal</li>
                    <li>Bank Transfer</li>
                  </ul>
                  <p className="text-dark_blue mt-3 font-serif">
                    Rest assured that your payment information is encrypted and protected during the entire transaction process.
                  </p>
                </div>

                {/* Delivery Information Section */}
                <div className="mt-5">
                  <h2 className="text-2xl font-bold font-serif text-dark_blue mb-3">Delivery Information</h2>
                  <p className="text-dark_blue font-serif mb-3">
                    We partnered with the best delivery companies so you could enjoy a fast and reliable delivery of your goods:
                  </p>
                  <ul className="list-disc list-inside text-dark_blue font-bold font-serif">
                    <li>Standard Shipping: 5-7 business days</li>
                    <li>Express Shipping: 2-3 business days</li>
                    <li>International Shipping available</li>
                  </ul>
                  <p className="text-dark_blue mt-3 font-serif">
                    Track your order and receive updates on your delivery status for a worry-free shopping experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;



// import Link from "next/link";
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'


// const pages = {
//     delivery: "/delivery",
//     order: "/order",
//     payment: "/payment",
//   };

//   export default function Cart() {
  
//     return (
//       <div>
//           <nav>
//           <h3 className="flex items-center justify-center">CART</h3>
//             <ul className="flex gap-8 flex items-center justify-center p-4">
//               {Object.entries(pages).map(([name, path]) => (
//                 <li key={name}>
//                   <Link href={`cart/${path}`}>{name}</Link>
//                 </li>
//               ))}
//             </ul>
            
//           </nav>
//           {/* {children} */}
//       </div>
//     );
//   }