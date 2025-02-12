"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative  min-h-screen my-8 md:my-16">
      {/* Main background component */}
      <div className="absolute inset-0 bg-gray-100 mx-4 md:mx-auto max-w-6xl my-10 md:my-20 rounded-xl shadow-lg">
        {/* Content container with centered layout */}
        <div className="relative h-full flex items-center justify-center">
          <div className="relative w-full md:w-[90%] h-full flex flex-col md:flex-row items-center md:items-start px-4 md:px-16 pt-20 md:pt-0">
            {/* Left text section */}
            <motion.div 
              className="w-full md:w-3/5 py-4 md:py-16 px-4 z-10"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-blue-600 text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                LOREM IPSUM DOLOR SIT
                AMET CONSECTETUR.
                DIGNISSIM TELLUS.
              </div>
              <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit 
                laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt 
                ultricies faucibus mauris.
              </p>
              <Button className="bg-blue-600 text-white px-6 md:px-8 text-sm md:text-base">
                Learn more <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Right image - smaller size */}
            <motion.div 
              className="absolute right-0 md:-right-12 -top-6 md:-top-[80px] w-48 md:w-auto"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image 
                src="/keyExc.png"
                alt="Two people discussing"
                width={380}
                height={320}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </motion.div>

            {/* Bottom card */}
            <motion.div 
              className="absolute left-4 md:left-16 bottom-[-40px] md:bottom-[-60px] w-[90%] md:w-[420px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-4 md:p-8 bg-white shadow-xl text-xs md:text-sm">
                <h3 className="font-semibold mb-2 md:mb-4">Lorem ipsum dolor sit</h3>
                <p className="text-gray-600 mb-2 md:mb-4">
                  Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
                </p>
                <p className="text-gray-600 mb-2 md:mb-4">
                  Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse.
                </p>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;