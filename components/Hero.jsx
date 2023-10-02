import React from "react";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Hero = () => {
  return (
    <div className="bg-cover h-screen grid place-items-center relative bg-black">
      <video
        src="/solar.mp4"
        muted
        autoPlay
        loop
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      />
      <div className="grid place-items-center text-center max-w-5xl mx-auto text-white z-10">
        <h1
          className={`${outfit.className} font-semibold text-6xl leading-tight`}
        >
          We generate exclusive and pre-qualified{" "}
          <span className="font-bold text-sky-500">solar leads</span> and{" "}
          <span className="font-bold text-sky-500">appointments</span> for you!
        </h1>
        <h5 className="text-xl mt-4">No Heavy Lifting Required!</h5>
        <button className="mt-10 py-3 px-10 rounded-full text-white bg-transparent border-white border-2 hover:bg-white hover:text-black text-lg duration-150">
          Get More Leads
        </button>
      </div>
    </div>
  );
};

export default Hero;
