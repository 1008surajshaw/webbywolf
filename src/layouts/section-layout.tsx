"use client"

import Image ,{StaticImageData} from "next/image"
import { cn } from "@/lib/utils"
import { useRef } from "react"
import { useInView } from "framer-motion"
import type React from "react" // Added import for React

interface SectionLayoutProps {
  title: string
  description: string
  image: StaticImageData
  imageAlt: string
  reverse?: boolean
  children?: React.ReactNode
}

export function SectionLayout({ title, description, image, imageAlt, reverse = false, children }: SectionLayoutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={cn("grid lg:grid-cols-2 gap-8 items-center", reverse ? "lg:flex-row-reverse" : "")}
          style={{
            transform: isInView ? "none" : `translateX(${reverse ? "-" : ""}100px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="space-y-6">
            <h2 className="text-[42px] font-bold leading-tight tracking-[-0.02em] text-[#222222] font-roboto">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground font-inter">{description}</p>
            {children}
          </div>

          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}

