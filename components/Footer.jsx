import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="py-0 pb-6">
      <div className="text-center py-5">
        <Image
          src="/logo.png"
          alt="leadchef media"
          width={500}
          height={500}
          className="h-16 md:h-20 w-auto mx-auto"
        />
      </div>
      <p className="text-center text-sm md:text-base">
        <b>LeadChefMedia</b> - {new Date().getFullYear()} &copy; All Rights
        Reserved
      </p>
    </div>
  );
};

export default Footer;
