
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            PlayPouch
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-8">
              <Link href="/#features" className="hover:text-red-500">
                Features
              </Link>
              <Link href="/#pricing" className="hover:text-red-500">
                Pricing
              </Link>
            </div>
            <div className="space-x-4">
              <Link href="/sign-in">
                <Button variant="ghost" className="text-white hover:text-red-500">
                  Log In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Sign Up</Button>
              </Link>
            </div>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#features" className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500">
              Features
            </Link>
            <Link href="/#pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500">
              Pricing
            </Link>
            <Link href="/sign-in" className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500">
              Log In
            </Link>
            <Link href="/sign-up" className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
