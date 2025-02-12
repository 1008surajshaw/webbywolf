"use client"
import { motion } from "framer-motion";

export const FooterSection = () => {
    return (
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-900 text-white py-10"
      >
        <div className="container mx-auto px-6 grid grid-cols-4 gap-4 py-8">
          <div>
            <div className="bg-gray-300 px-6 py-2 text-lg font-bold rounded-md text-black">LOGO</div>
          </div>
          {[...Array(3)].map((_, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-3">Lorem Ipsum</h3>
              <ul className="mt-2 space-y-2">
                {[...Array(5)].map((_, j) => (
                  <motion.li 
                    key={j} 
                    whileHover={{ scale: 1.1, color: "#60A5FA" }}
                    className="text-gray-400 cursor-pointer hover:text-blue-400"
                  >
                    Lorem Ipsum
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.footer>
    );
  };
