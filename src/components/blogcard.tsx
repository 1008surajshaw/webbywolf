"use client";

import { motion } from "framer-motion";
import Image , {StaticImageData} from "next/image";

export const BlogCard = ({ title, description, image }: { title: string; description: string; image: StaticImageData }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-xl overflow-hidden max-w-[450px] mx-auto"
      >
        <Image src={image} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
        <div className="p-5">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <button className="mt-3 text-blue-600 font-semibold hover:underline">Learn More</button>
        </div>
      </motion.div>
    );
  };
  