"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Manage Your YouTube Playlists Like a Pro
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
          Sort, filter, and organize your music effortlessly with PlayPouch
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link href="/sign-up">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Get Started for Free
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-12 flex justify-center"
      >
        <img
          src="/placeholder.svg?height=400&width=600"
          alt="PlayPouch Dashboard"
          className="rounded-lg shadow-2xl max-w-full h-auto"
        />
      </motion.div>
    </section>
  )
}

