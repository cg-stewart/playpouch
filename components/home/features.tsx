"use client"

import { motion } from "motion/react"
import { Music, Filter, Search, Lock } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Advanced Sorting",
    description: "Sort your playlists by various criteria, including creation date and view count.",
  },
  {
    icon: Filter,
    title: "Enhanced Filtering",
    description: "Filter your playlist items by duration, upload date, and custom tags.",
  },
  {
    icon: Search,
    title: "Smart Recommendations",
    description: "Get suggestions for duplicate videos and inactive playlists.",
  },
  {
    icon: Lock,
    title: "Privacy Control",
    description: "Easily manage the privacy settings of your playlists.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black border border-red-600 p-6 rounded-lg"
            >
              <feature.icon className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

