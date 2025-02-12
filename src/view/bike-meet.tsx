"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';


export const BikeMeet = () => {
  return (
    <div className="relative w-full min-h-screen my-8 md:my-16">
      {/* Main background component */}
      <div className="absolute inset-0 bg-gray-100 mx-4 md:mx-auto max-w-6xl my-10 md:my-20 rounded-xl shadow-lg">
        {/* Content container with centered layout */}
        <div className="relative h-full flex items-center justify-center">
          <div className="relative w-full md:w-[90%] h-full flex flex-col md:flex-row items-center md:items-start px-4 md:px-16 pt-20 md:pt-0 justify-end">
          <motion.div 
              className="absolute left-0 md:-left-12 -top-6 md:-top-[80px] w-48 md:w-auto"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image 
                src="/bikers/bikersmeet.png"
                alt="Two people discussing"
                width={380}
                height={320}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </motion.div>

            {/* Left text section */}
            <motion.div 
              className="w-full md:w-3/5 py-4 md:py-16 px-4 z-10"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
                <p className='text-blue-600 font-semibold text-lg mb-4'>Lorem ipusm</p>
              <div className="text-blue-600 text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                LOREM <span className='text-black'>IPSUM DOLOR SIT AMET CONSECTETUR.
                DIGNISSIM TELLUS.</span>
                
              </div>
              <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit 
                laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt 
                ultricies faucibus mauris.
              </p>
              {[...Array(3)].map((_, i) => (
                    <div key={i} className=' my-4'>
                    <ul className="mt-2 space-y-2 flex justify-between ">
                        {[...Array(2)].map((_, j) => (
                        <motion.li 
                            key={j} 
                            whileHover={{ scale: 1.1, color: "#60A5FA" }}
                            className="text-gray-400 cursor-pointer   pr-8"
                        >
                            Lorem Ipsum
                        </motion.li>
                        ))}
                    </ul>
                    </div>
                ))}
              <Button className="bg-blue-600 text-white px-6 md:px-8 text-sm md:text-base">
                Learn more <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

          

           
          </div>
        </div>
      </div>
    </div>
  );
};

