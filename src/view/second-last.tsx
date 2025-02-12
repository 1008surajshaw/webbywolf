"use client"

import { motion } from "framer-motion";

export const SecondLast = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="max-w-3xl flex flex-col items-center justify- py-20 text-center bg-white mx-auto"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-300 px-6 py-2 text-lg font-bold rounded-md"
      >
        LOGO
      </motion.div>
      <h1 className="mt-4 text-3xl font-bold text-gray-900">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.</h1>
      <p className="mt-4 text-gray-600 max-w-lg">
        Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-lg"
      >
        Lorem Ipsum →
      </motion.button>
    </motion.section>
  );
};




