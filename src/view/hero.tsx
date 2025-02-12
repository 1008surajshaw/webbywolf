"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { NewsletterForm } from "../components/newsletter-form";
import bikeImg from "../../public/Graphic-Right.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center overflow-hidden"> {/* Removed w-screen */}
      <div className="w-full px-6 md:px-12 lg:pl-[4.5rem] lg:pr-0 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center lg:text-left lg:pt-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur. Felis netus eras congue quis elit sociis. Sed mi rhoncus id
              habitant. In urna tellus nisl platea morbi libero imperdiet neque. Justo suspendisse tristique posuere
              quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
            </p>
            <NewsletterForm />
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                No credit card required!
              </label>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-full h-auto lg:h-screen hidden sm:block overflow-hidden" // Added max-w-full and overflow-hidden
          >
            <Image
              src={bikeImg}
              alt="Motorcyclists riding on a road"
              width={800} // Set width explicitly
              height={600} // Set height explicitly
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
