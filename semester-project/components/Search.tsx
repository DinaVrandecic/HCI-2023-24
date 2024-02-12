// "use client"
// import React, { useRef, useState, useEffect } from "react";
// import { fetchGraphQL } from "@/utils/networking/contentfulFetch";
// import Link from "next/link";

// export default function Search() {
//     return (
//         <div className="flex items-center">
//             <div className="flex ">
//                 <input
//                     type="text"
//                     className="block w-[80px] lg:w-full p-[3px] lg:px-4 py-2 text-brown1 bg-page_background focus:ring-peach1 focus:outline-none focus:ring focus:ring-opacity-70"
//                     placeholder="Search..."
//                 />
//                 <Link href="/notFound" className="flex">
//                     <button className="px-4 text-peach1 bg-dark_blue  ">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//                     </svg>
//                     </button>
//                 </Link>

//             </div>
//         </div>
//     );
// }




"use client";
import React, { useRef, useState, useEffect } from "react";
import { fetchGraphQL } from "@/lib/contentfulFetch";
import Link from "next/link";

const space_id = "w4hubm46n8vc";
const access_token = "N45HXFp-MbSa4GvLTotphSM4O3Ey5jCx9Qvb8-9p5PE";

interface Product {
  name: string;
  category: string;

}

function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchReults, setSearchResults] = useState<Product[]>([]); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const       query = `
    query {
      productCollection (where: {name_contains: "${e.target.value}"}) {
        items {
          name
          price
          category
          picture {
            title
            description
            contentType
            url
          }
        }
      }
    }
  `;
    if (e.target.value !== "") {
      fetchData(query);
    } else {
      setSearchResults([]);
    }
  };


  const fetchData = async (query: string) => {

    try {
      const response = await fetchGraphQL(query, space_id, access_token);
      const data = await response.json();
      setSearchResults(data.data.productCollection.items);
    } catch (error) {
      console.log("Error fetching Contentful data:", error);
    } 
  };

  return (
    <div className="hidden md:flex lg:flex  items-center justify-evenly  shrink-5 relative">
      <input
        ref={inputRef}
        onChange={handleInputChange}
        type="text"
        placeholder="Search..."
        className="font-sans px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm w-32 lg:w-64 xl:w-80"
      />
      {searchReults.length > 0 && (
        <div className="absolute w-full bg-white max-h-64 h-content top-full z-10 rounded-sm overflow-y-auto text-black">
          {searchReults.map((product, index) => (
            <Link
              onClick={() => {
                if (inputRef.current !== null) {
                  inputRef.current.value = "";
                }
                setSearchResults([]);
              }}
              href={`/shop/${product.name}`}
              key={index}
            >
              <div className="font-sans text-sm my-1" key={index}>
                {product.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;