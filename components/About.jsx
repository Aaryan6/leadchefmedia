import React from "react";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const para = [
  {
    title: "Gather Content",
    content:
      "In the initial step, we collect visuals that highlight your craftsmanship. These form the foundation of our strategy, serving to attract a greater number of potential clients to your business.",
  },
  {
    title: "Launch Ads",
    content:
      "Next, we launch ads based on the content we've collected. These ads are strategically designed and placed on popular social media platforms to capture clients attention.",
  },
  {
    title: "Generate Leads",
    content:
      "Finally, we collect information from individuals who are genuinely interested in your services. Prioritising quote-ready leads and eliminating tire kickers.",
  },
];

const About = () => {
  return (
    <div className="py-20 px-3 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className={`${outfit.className} text-4xl font-semibold`}>
            Who Are We?
          </h2>
          <p className="mt-4 max-w-4xl mx-auto">
            We&apos;re a solar Leads and Apointment generation agency that helps
            solar companies by delivering top-tier, quote-ready
            leads/appointment through strategic advertising on popular social
            media sites. Our targeted approach not only frees you up to
            concentrate on your work, but also ensures your growth is driven by
            genuinely interested clients, making your business growth smooth and
            efficient.
          </p>
        </div>
        <div className="pt-20">
          <h2 className="text-3xl font-medium text-center">Our Process</h2>
          <div className="grid grid-cols-3 justify-between gap-x-5 mt-10">
            {para.map((item, i) => (
              <div
                className="flex gap-x-4 shadow-md py-10 px-4 bg-white"
                key={i}
              >
                <div className="w-12 h-12 grid place-items-center bg-sky-500 text-lg text-white rounded-full">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="mt-2 text-gray-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
