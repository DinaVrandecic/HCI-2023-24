import React from "react";

export default function Search() {
    return (
        <div className="flex items-center">
            <div className="flex ">
                <input
                    type="text"
                    className="block w-[80px] lg:w-full p-[3px] lg:px-4 py-2 text-brown1 bg-page_background focus:ring-peach1 focus:outline-none focus:ring focus:ring-opacity-70"
                    placeholder="Search..."
                />
                <button className="px-4 text-peach1 bg-dark_blue  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                </button>
            </div>
        </div>
    );
}