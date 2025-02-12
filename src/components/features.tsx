"use client"

import { motion } from "framer-motion"

export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl font-bold">Features</h2>
          <p className="text-lg text-muted-foreground">Discover the key features that make our motorcycles stand out</p>
          {/* Add feature cards or other content here */}
        </motion.div>
      </div>
    </section>
  )
}

