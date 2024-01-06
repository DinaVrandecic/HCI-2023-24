import React from 'react';
import Image from 'next/image';
import ep from "@/public/pictures/ep.png";

const NotFound404: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beige">
      <div className="text-center flex items-center justify-center flex-wrap">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="lg:mr-8">
            <Image src={ep} alt="error image" width={400} height={400} />
          </div>
          <div className="text-left items-center lg:text-center lg:items-start">
            <h1 className="text-6xl font-bold font-serif text-peach1 mb-2">404</h1>
            <p className="mt-2 text-2xl font-medium font-serif font-bold text-dark_blue">Page Not Found</p>
            <p className="mt-4 text-lg text-dark_bl ue text-serif font-serif">
              Looks like this page is as elusive as your favorite earring that always manages to disappear!
              <br />
              Fear not, we're polishing up this page to be as radiant as our jewelry.
              <br />
            </p>
            <a href="/">
              <button className="font-serif text-peach1 w-max px-3 py-2 mt-6 bg-dark_blue hover:bg-peach1 hover:text-dark_blue">
                TAKE ME TO HOMEPAGE
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
