"use client"

import { motion } from "motion/react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Pro",
    price: "$12.99",
    period: "month",
    description: "Perfect for individual creators and small teams.",
    features: [
      "Unlimited playlists",
      "Up to 10,000 videos",
      "Advanced sorting and filtering",
      "Smart recommendations",
      "24-hour support response time",
    ],
  },
  {
    name: "Annual",
    price: "$129.99",
    period: "year",
    description: "Save with our annual plan.",
    features: [
      "Unlimited playlists",
      "Up to 10,000 videos",
      "Advanced sorting and filtering",
      "Smart recommendations",
      "24-hour support response time",
    ],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-red-500 to-red-700 opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-red-600">Pricing</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-white sm:text-xl/8">
        Choose an affordable plan that's packed with the best features for managing your YouTube playlists like a pro.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className={`rounded-3xl p-8 ring-1 ring-gray-200 bg-black/60 sm:mx-8 lg:mx-0`}
          >
            <h3 id={`tier-${plan.name.toLowerCase()}`} className="text-base font-semibold text-red-600">
              {plan.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">{plan.price}</span>
              <span className="text-base text-gray-400">/{plan.period}</span>
            </p>
            <p className="mt-6 text-base text-white">{plan.description}</p>
            <ul role="list" className="mt-8 space-y-3 text-sm text-white">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-red-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-8 block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold bg-red-600 text-white hover:bg-red-500">
              Get started
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

