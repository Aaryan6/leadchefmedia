import React from "react";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Hero = () => {
  return (
    <div className="bg-cover h-[calc(100vh-8rem)] md:h-[calc(100vh-5rem)] grid place-items-center relative bg-black">
      <video
        muted
        autoPlay
        loop
        src="/solar.mp4"
        poster="https://plus.unsplash.com/premium_photo-1677942035529-db39d2a25915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      ></video>

      <div className="grid place-items-center text-center max-w-7xl mx-auto text-white z-10 px-4">
        <h1
          className={`${outfit.className} font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl`}
        >
          We generate exclusive and pre-qualified{" "}
          <span className="font-bold text-sky-500">solar leads</span> and{" "}
          <span className="font-bold text-sky-500">appointments</span> for you!
        </h1>
        <h5 className="text-lg md:text-xl font-medium mt-4">
          No Heavy Lifting Required!
        </h5>
        <button className="mt-10 py-3 px-10 text-sm md:text-lg rounded-full text-white bg-transparent border-white border-2 hover:bg-white hover:text-black duration-150">
          Get More Leads
        </button>
      </div>
    </div>
  );
};

export default Hero;
