"use client"

import { motion } from "motion/react"

const testimonials = [
  {
    quote: "PlayPouch has revolutionized how I manage my music playlists. It's a game-changer!",
    author: "Jane Doe",
    title: "Music Producer",
  },
  {
    quote: "I can finally organize my beats efficiently. PlayPouch is a must-have for any musician.",
    author: "John Smith",
    title: "DJ",
  },
  {
    quote: "The smart recommendations feature has helped me discover forgotten gems in my playlists.",
    author: "Alice Johnson",
    title: "Playlist Curator",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-gray-400">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

