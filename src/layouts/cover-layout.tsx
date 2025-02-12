"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface CoverLayoutProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: StaticImageData;
}

export function CoverLayout({ title, subtitle, description, imageSrc }: CoverLayoutProps) {
  return (
    <section className="relative w-full min-h-[400px] py-20 flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          {subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 text-md text-gray-300"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
