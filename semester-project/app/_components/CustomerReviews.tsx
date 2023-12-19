import React from "react";
import Image from "next/image";
import a1 from "../../public/pictures/a1.png";
import a2 from "../../public/pictures/a2.png";
import a3 from "../../public/pictures/a3.png";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating ? "★" : "☆";
      stars.push(
        <span key={i} className="text-yellow-600 mr-0.5">
          {filled}
        </span>
      );
    }
    return <div className="flex justify-center">{stars}</div>;
  };

  return <div>{renderStars()}</div>;
};

const CustomerReviews: React.FC = () => (
  <div className="flex flex-col items-center mt-10 py-10 bg-peach1">

    <h2 className="text-2xl font-bold text-[#25669C] mb-7">
      CUSTOMER REVIEWS
    </h2>
    <div className="flex space-x-5 justify-center">
      <div className="text-center">
        <div className="review-content flex flex-col items-center">
          <Image src={a1} alt="Customer Review 1" className="review-image mb-5" width={350} height={350} />
          <div className="text-and-stars w-full text-[#25669C]">
            <p className="font-bold">SIOBHAN ROY</p>
            <p className="italic mt-5 mb-2">
              "I absolutely love the jewelry I purchased. The quality is amazing and it is even
              more beautiful in person."
            </p>
            <StarRating rating={5} />
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="review-content flex flex-col items-center">
          <Image src={a2} alt="Customer Review 2" className="review-image mb-5" width={350} height={350} />
          <div className="text-and-stars w-full text-[#25669C]">
            <p className="font-bold">NADIA MORALES</p>
            <p className="italic mt-5 mb-2">
              "The jewelry exceeded my expectations. It's elegant and the attention to detail is superb. Highly
              recommended!"
            </p>
            <StarRating rating={5} />
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="review-content flex flex-col items-center">
          <Image src={a3} alt="Customer Review 3" className="review-image mb-5" width={350} height={350} />
          <div className="text-and-stars w-full text-[#25669C]">
            <p className="font-bold">PAMELA BEESLY-HALPERT</p>
            <p className="italic mt-5 mb-2">
              "Beautiful pieces! I received many compliments wearing them. The shipping was fast and the
              packaging was lovely."
            </p>
            <StarRating rating={5} />
          </div>
        </div>
      </div>
    </div>

    <hr className="bg-brown1 h-0.5 mt-10" />
  </div>
);

export default CustomerReviews;
