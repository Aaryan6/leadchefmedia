"use client";
import Image from "next/image";
import React from "react";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Contact = () => {
  const { toast } = useToast();

  const StoreInfo = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const company_name = e.target[1].value;
    const email = e.target[2].value;
    const phone = e.target[3].value;

    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        company_name,
        email,
        phone,
      }),
    });

    if (response.status == 200) {
      toast({
        title: `Thanks ${name}, with connecting us!`,
        description: "We will contact you soon...",
        close: 3,
      });
    } else {
      toast({
        title: `Something is wrong! Please try again.`,
        close: 2,
      });
    }
  };

  return (
    <section
      id="contact"
      className="bg-cover py-20 px-2 grid place-items-center relative bg-black"
    >
      <Toaster />
      <Image
        src="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={1200}
        height={900}
        className="absolute w-full h-full top-0 left-0 object-cover opacity-30"
      />
      <div className="max-w-2xl mx-auto z-20">
        <h1
          className={`${outfit.className} text-center text-3xl md:text-4xl font-medium text-white`}
        >
          Get 15+ Extra Exclusive and Qualified Leads or Appointment
        </h1>
        <h4 className="text-center text-xl font-medium text-[#4593ff] mt-2">
          Within 30 Days, or You Don’t Pay
        </h4>
        <form
          onSubmit={StoreInfo}
          className="bg-white px-6 py-10 rounded-sm mt-8 grid max-w-lg mx-auto"
        >
          <label htmlFor="fullname" className="mt-3 mb-1.5">
            Full Name*
          </label>
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            required
            className="px-3 py-3 rounded-sm bg-slate-100 text-sm outline-none border"
          />
          <label htmlFor="companyname" className="mt-3 mb-1.5">
            Company Name*
          </label>
          <input
            type="text"
            placeholder="Company Name"
            name="companyname"
            required
            className="px-3 py-3 rounded-sm bg-slate-100 text-sm outline-none border"
          />
          <label htmlFor="email" className="mt-3 mb-1.5">
            Email*
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="px-3 py-3 rounded-sm bg-slate-100 text-sm outline-none border"
          />
          <label htmlFor="phone" className="mt-3 mb-1.5">
            Phone*
          </label>
          <input
            type="tel"
            placeholder="phone"
            name="phone"
            required
            className="px-3 py-3 rounded-sm bg-slate-100 text-sm outline-none border"
          />
          <button
            type="submit"
            className={`${outfit.className} bg-[#4593ff] tracking-wider font-medium text-white w-full rounded-sm py-3 mt-5`}
          >
            Get More Leads!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
