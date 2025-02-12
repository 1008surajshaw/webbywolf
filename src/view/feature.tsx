"use client";
import Image from "next/image";
import { useState } from "react";
import handshake from "../../public/handShake.png"

export default function Features() {
  const [selectedTab, setSelectedTab] = useState("Research");

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-6 md:px-16 my-10">
      {/* Left Side Content */}
      <div className="max-w-6xl flex justify-center">

      <div className="max-w-xl space-y-8 items-center my-auto">
        <h2 className="text-2xl md:text-3xl font-bold uppercase">
          Lorem Ipsum Dolor Sit Amet
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 ">
          {["Research", "Plan", "Design"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 border rounded-lg ${
                selectedTab === tab
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Paragraph */}
        <p className="text-gray-600">
          Egestas fringilla aliquam leo,{" "}
          <span className="text-blue-600 font-medium">
            habitasse arcu varius lorem elit.
          </span>{" "}
          Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
          felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in
          accumsan.
        </p>

        {/* CTA Link */}
        <a href="#" className="text-blue-600 font-medium flex items-center">
          Check tools →
        </a>
      </div>

      {/* Right Side Image */}
      <div className="w-full md:w-1/2 items-center flex justify-end">
        <Image
          src={handshake} 
          alt="Handshake"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
      </div>
    </section>
  );
}
