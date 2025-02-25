"use client"

import { motion } from "motion/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is PlayPouch?",
    answer:
      "PlayPouch is a SaaS application that helps you manage and organize your YouTube playlists more efficiently than YouTube itself allows.",
  },
  {
    question: "How does PlayPouch work with my existing YouTube playlists?",
    answer:
      "PlayPouch syncs with your YouTube account and imports your existing playlists. You can then sort, filter, and organize these playlists within our interface.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We don't offer a free trial, but we do have a 30-day money-back guarantee if you're not satisfied with our service.",
  },
  {
    question: "Can I add new videos to my playlists through PlayPouch?",
    answer:
      "Yes, our premium feature allows you to search YouTube and add videos directly to your playlists through the PlayPouch interface.",
  },
]

export default function FaqSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

