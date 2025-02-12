"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { useInView } from "framer-motion"
import keyexc from '../../public/keyExc.png'
import biker1 from "../../public/bikers/bikers1.png"
import biker2 from "../../public/bikers/bikers2.png"
import biker3 from "../../public/bikers/bikers3.png"

export function ImageGridSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div 
          className="grid lg:grid-cols-2 gap-6"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {/* Left Column */}
          <div className="space-y-6">
            {/* Content Area */}
            <div className="space-y-4 pb-6">
              <p className="text-primary font-medium">NO LIMITS</p>
              <h2 className="text-[42px] font-bold leading-tight tracking-[-0.02em] text-[#222222] font-roboto">
                LOREM IPSUM DOLOR SIT AMET
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullum.
              </p>
              <Button className="bg-primary text-white">
                Lorem ipsum
                <span className="ml-2">→</span>
              </Button>
            </div>

            {/* Left Column Grid */}
            <div className="grid grid-cols-6 grid-rows-[40px_250px] gap-4">
              {/* Vertical rectangle at bottom left */}
              <div className="col-span-1 row-span-2 relative">
                <div className="h-[70%]">

                <Image
                  src={biker1}
                  alt="Motorcycle detail"
                  fill
                  className="object-cover rounded-lg h-[120px]"
                />
                </div>
              </div>
              {/* Small horizontal rectangle above bottom image */}
              <div className="col-span-5 relative">
                {/* <Image
                  src={keyexc}
                  alt="Small group shot"
                  fill
                  className="object-cover rounded-lg"
                /> */}
              </div>
              {/* Large horizontal rectangle at bottom */}
              <div className="col-span-5 relative">
                <Image
                  src={biker2}
                  alt="Group of motorcyclists"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-[180px_1fr_180px] gap-4 h-[600px]">
            {/* Top Row */}
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-2 relative">
                <Image
                  src={biker1}
                  alt="Night riders"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="col-span-3 relative">
                <Image
                  src={biker3}
                  alt="Riders with headlights"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Middle Row */}
            <div className="relative w-full">
              <Image
                src={biker2}
                alt="Sunset riders"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Bottom Row - Partially visible images */}
            <div className="grid grid-cols-5 gap-4 overflow-hidden">
              <div className="col-span-3 relative h-[300px] -mb-32">
                <Image
                  src={biker1}
                  alt="Engine detail large"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="col-span-2 relative h-[300px] -mb-32">
                <Image
                  src={keyexc}
                  alt="Engine detail small"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

