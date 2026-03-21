import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  // Defensive check for Marquee component in ESM/CJS interop
  const MarqueeComponent = Marquee.default || Marquee;

  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-[#D72151] px-3 py-2">Latest</p>
      <MarqueeComponent speed={60} pauseOnHover={true} className="space-x-10">
        <p className="font-semibold px-5 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quasi.
          Doloribus, rerum?
        </p>
        <p className="font-semibold px-5 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quasi.
        </p>
        <p className="font-semibold px-5 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quasi.
        </p>
      </MarqueeComponent>
    </div>
  );
};

export default LatestNews;
