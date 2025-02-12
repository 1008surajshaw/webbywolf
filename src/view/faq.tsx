"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  
  {
    question: "ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse.Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi.",
  },
  {
    question: "ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse.Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi.",
  },
  {
    question: "ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse.Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi.",
  },
  {
    question: "ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse.Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto   border-gray-200 bg-white  divide-y py-10 my-8">

      <h1 className="text-4xl font-bold pb-16">FREQUENTLY ASKED QUESTIONS (FAQs)</h1>  
      {faqs.map((faq, index) => (
        <div key={index} className="p-6 border-b last:border-b-0">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between w-full text-left items-center"
          >
            <h2 className="text-lg font-medium text-gray-900">{faq.question}</h2>

            {/* Animated Icon */}
            <motion.span
              initial={false}
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              className="size-5 text-gray-700"
            >
              {openIndex === index ? "−" : "+"}
            </motion.span>
          </button>

          {/* Answer Animation */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-700">{faq.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
