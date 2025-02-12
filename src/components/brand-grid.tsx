"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface BrandGridProps {
  title: string;
  subtitle: string;
  logos: { src: StaticImageData; alt: string }[];
}

export function BrandGrid({ title, subtitle, logos }: BrandGridProps) {
  return (
    <section className="w-full py-16 bg-white flex justify-center">
      <div className="w-full md:w-1/2 text-center">
        {/* Title Section */}
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-bold text-gray-900"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mt-2"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Logo Grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-center items-center px-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image src={logo.src} alt={logo.alt} width={80} height={40} className="mx-auto" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
