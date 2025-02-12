"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import keyExc from "../../public/bikers/milestone_achive.png";

const testimonials = [
  {
    image: keyExc,
    name: "Artist & Investor",
    message:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisi quis est ...",
  },
  {
    image: keyExc,
    name: "Entrepreneur & Speaker",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices nulla a velit feugiat, et molestie mi malesuada.",
  },
  {
    image: keyExc,
    name: "Tech Innovator",
    message:
      "Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
  },
];

export const DynamicTestimonialSection = () => {

  const index = 0;
 

  return (
    <div className="flex flex-col items-center text-center p-10">
      <h2 className="text-3xl font-bold mb-4">LOREM IPSUM DOLOR SIT AMET</h2>
      <p className="text-gray-600 max-w-2xl">
        Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies.
      </p>

      {/* Testimonial Section */}
      <div className="relative w-full max-w-5xl h-[300px] mt-10 flex items-center justify-center">
        <AnimatePresence>
          {testimonials.map(
            (testimonial, i) =>
              index === i && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full flex items-center justify-between"
                >
                  {/* Image - 70% Width */}
                  <div className="w-[55%] h-[300px] relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>

                  {/* Card - 30% Width (Less Height than Image) */}
                  <div className="w-[50%] p-5 flex items-center absolute right-12">
                    <div className="bg-white p-6 shadow-lg rounded-lg max-w-md relative -top-5 -right-5">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-gray-600 mt-2">{testimonial.message}</p>
                      <a href="#" className="text-blue-600 mt-3 block font-semibold">
                        Read Full Story →
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
