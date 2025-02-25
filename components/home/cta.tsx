"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

export default function Cta() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold mb-4">Ready to Revolutionize Your Playlist Management?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who have transformed their music organization with PlayPouch.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Get Started for Free
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

