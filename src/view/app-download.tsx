"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import handImg from "../../public/Background.png"
import appStore from "../../public/share/App_Store.png"
import playStore from "../../public/share/Google_Play_Store.png"
export function AppDownload() {
  return (
    <section className="bg-gray-100 overflow-hidden flex justify-center min-h-[300px]">
      <div className="max-w-screen-md w-full py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-blue-600 font-medium">Lorem Ipsum</span>
            <h2 className="text-3xl font-bold">Lorem Ipsum Dolor Sit Amet</h2>
            <p className="text-gray-600 max-w-sm">
              Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Image
                  src={playStore}
                  alt="Get it on Google Play"
                  width={130}
                  height={38}
                  className="h-[38px] w-auto"
                />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Image
                  src={appStore}
                  alt="Download on the App Store"
                  width={130}
                  height={38}
                  className="h-[38px] w-auto"
                />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[350px]"
          >
            <Image
              src={handImg}
              alt="Mobile app preview"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
