"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import design from "../../public/design.png";

import blog1 from "../../public/blogimg/blog1.png";
import blog2 from "../../public/blogimg/blog2.png";
import blog3 from "../../public/blogimg/blog3.png";
import blog4 from "../../public/blogimg/blog4.png";
import { BlogCard } from "@/components/blogcard";

const blogs = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie.",
    image: blog1,
  },
  {
    id: 2,
    title: "Morbi elementum ultrices morbi dui pellentesque.",
    description:
      "Morbi elementum ultrices morbi dui pellentesque condimentum nulla egestas. Placerat sit.",
    image: blog2,
  },
  {
    id: 3,
    title: "Vitae vitae sapien vestibulum euismod cursus.",
    description:
      "Vitae vitae sapien vestibulum euismod cursus amet odio. Non nisl iaculis at felis aliquet.",
    image: blog3,
  },
  {
    id: 4,
    title: "Quis adipiscing purus egestas aliquam.",
    description:
      "Quis adipiscing purus egestas aliquam viverra mi. Hendrerit tellus at purus luctus.",
    image: blog4,
  },
];

export function BlogView() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={design}
          alt="Hero background"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] text-left bg-white/90 p-6 rounded-lg "
        >
          <h1 className="text-lg md:text-lg lg:text-xl font-bold text-blue-600 mb-6">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR.
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-black pb-6">
            LOREM IPSUM dolor sit
          </p>
          <p className="lg:text-lg md:text-sm text-black">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
