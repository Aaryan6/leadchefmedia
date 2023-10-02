import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white text-center py-3 px-3">
      <Image
        src="/logo2.png"
        alt="leadchef media"
        width={500}
        height={500}
        className="h-16 w-auto mx-auto"
      />
    </div>
  );
};

export default Navbar;
