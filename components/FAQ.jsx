"use client";
const items = [
  {
    title: "How quickly do I get to see results with your approach?",
    content:
      "It takes us roughly 5 working days to get things set up for you and then we start running your ads. Results – in the form of booked appointments – can appear the first day your ads run. Although we would expect it to take a few days before the specific set-up we’ve created for you finally beds in.\n\nFrom there, we refine your ads as results come in, looking for small improvements in order to increase overall results. That can take 3 – 4 weeks. But you’ll be getting appointments in the meantime – and we’ll be aiming to run the size of campaign necessary to keep your company fully busy throughout. You need to be able to handle the increased appointments and orders before we begin your ad campaign.",
  },
  {
    title: "Why must I qualify before I can work with you?",
    content:
      "Solar & Roofing owners companies with only a few years of experience will not be able to handle the leads we send them.\n\nWe’ve seen it before.\n\nThey become overwhelmed. And so they have to switch off their ad campaign, regroup and try to work out how to handle this new situation.\n\nWhich means our services are no longer required for a while – which isn’t good business for us.\n\nWhereas bigger $1 – $10 million companies have already got things in order.\n\nEven if the new flow of leads is initially tough to handle, they’ll quickly adapt because they’ve already worked out their best processes, they already have good people in place… They simply need to upscale what they already do.\n\nBig Solar & Roofing owners don’t have to learn how to be bigger Solar & Roofing business– they just have to expand their current set-up.\n\nWe earn our money when our efforts are earning you your money.\n\nSmall companies switching everything off because they’re overwhelmed doesn’t help our bottom line. Our growth is tightly bound to yours so as new business comes in… we want to be sure you can handle it.",
  },
  {
    title:
      "What if you work with another Solar & Roofing owners in my area, won’t that hurt my business?",
    content:
      "That won’t happen.\n\nBefore we take on a new client we make sure they’re right for us. In other words we first qualify them (just like we qualify new clients for you).\n\nPart of that qualification is: do we already have a client in the area you operate in?\n\nWe routinely refuse to take on clients because their business competes with an existing client’s business.\n\nSo rest assured: if you are our client then we will not take on a new client in your area of operation.",
  },
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function FAQ() {
  return (
    <div className="py-10 px-4">
      <h1 className="font-bold text-center text-3xl mb-10">FAQ</h1>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {items.map((item, i) => (
          <AccordionItem
            value={i + 1}
            key={i}
            className="text-left border px-6 py-1 my-2"
          >
            <AccordionTrigger className="text-left">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="whitespace-pre-wrap text-base text-gray-500">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 pt-16 max-w-xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <Image src="/expert.png" alt="" width={80} height={80} />
          <h3 className="font-medium text-sm mt-1">Industry Specialists</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/guarantee.png" alt="" width={80} height={80} />
          <h3 className="font-medium text-sm mt-1">Guaranteed Results</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/leads.png" alt="" width={80} height={80} />
          <h3 className="font-medium text-sm mt-1">Qualified Leads</h3>
        </div>
      </div>
    </div>
  );
}
