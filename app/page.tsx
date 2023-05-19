"use client";

import { useState } from "react";
import ThankState from "./components/ThankState";
import ActiveState from "./components/ActiveState";

const Home = () => {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="sm:max-w-[55%] sm:h-[60%] md:max-w-[45%] md:h-[55%] max-w-[80%] h-[55%]  bg-gradient-to-t from-gray-900 to-gray-600 pt-5 px-8 rounded-3xl">
        {isSubmitted ? (
          <ThankState rating={rating} />
        ) : (
          <ActiveState setRating={setRating} setIsSubmitted={setIsSubmitted} />
        )}
      </div>
    </div>
  );
};

export default Home;
