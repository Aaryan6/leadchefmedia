import Image from "next/image";
import React from "react";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Contact = () => {
  return (
    <div className="bg-cover py-20 px-2 grid place-items-center relative bg-black">
      <Image
        src="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={1200}
        height={900}
        className="absolute w-full h-full top-0 left-0 object-cover opacity-30"
      />
      <div className="max-w-2xl mx-auto z-20">
        <h1
          className={`${outfit.className} text-center text-4xl font-medium text-white`}
        >
          Get 15+ Extra Exclusive and Qualified Leads or Appointment
        </h1>
        <h4 className="text-center text-xl font-medium text-sky-500 mt-2">
          Within 30 Days, or You Don’t Pay
        </h4>
        <form className="bg-white px-6 py-10 rounded-sm mt-8 grid max-w-lg mx-auto">
          <label htmlFor="name" className="mt-3 mb-1.5">
            Full Name*
          </label>
          <input
            type="text"
            placeholder="Full Name"
            required
            className="px-3 py-3 rounded-sm bg-slate-100 text-sm outline-none border"
          />
          <label htmlFor="website" className="mt-3 mb-1.5">
            Website*
          </label>
          <input
            type="text"
            placeholder="Web URL goes here"
            required
            className="px-3 py-3 rounded-sm bg-slate-100 text-sm outline-none border"
          />
          <label htmlFor="email" className="mt-3 mb-1.5">
            Email*
          </label>
          <input
            type="email"
            placeholder="Email"
            required
            className="px-3 py-3 rounded-sm bg-slate-100 text-sm outline-none border"
          />
          <label htmlFor="phone" className="mt-3 mb-1.5">
            Phone*
          </label>
          <input
            type="tel"
            placeholder="phone"
            required
            className="px-3 py-3 rounded-sm bg-slate-100 text-sm outline-none border"
          />
          <button
            type="submit"
            className={`${outfit.className} bg-sky-500 tracking-wider font-medium text-white w-full rounded-sm py-3 mt-5`}
          >
            Get More Leads!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
