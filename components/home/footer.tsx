
import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
          <Link href="/tos" className="text-white hover:text-white">
            Terms of Service
          </Link>
          <Link href="/support" className="text-white hover:text-white">
            Support
          </Link>
          <Link href="/about" className="text-white hover:text-white">
            About
          </Link>
          <Link href="https://newrgm.com/careers" className="text-white hover:text-white">
            Jobs
          </Link>
        </nav>
        <div className="mt-10 flex justify-center gap-x-10">
          <a href="https://github.com/newrgm/playpouch" className="text-white hover:text-white">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href="https://x.com/playpouch" className="text-white hover:text-white">
            <span className="sr-only">X (Twitter)</span>
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-10 text-center text-sm/6 text-white">
          &copy; {new Date().getFullYear()} PlayPouch, Inc. All rights reserved.
        </p>
        <p className="mt-2 text-center text-sm/6 text-white">
          A{" "}
          <Link href="https://newrgm.com" className="text-red-500 hover:underline">
            NEWRGM
          </Link>{" "}
          Product
        </p>
      </div>
    </footer>
  )
}
