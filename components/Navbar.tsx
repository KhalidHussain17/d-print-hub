"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="D Print Hub" className="h-8 w-auto" />
            <span className="text-xl font-extrabold text-gray-900">
              D<span className="text-red-600">Print</span> Hub
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-10">
            {["Home", "About", "Projects"].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="relative text-gray-800 font-medium hover:text-red-600 transition group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="hidden md:block px-5 py-2.5 bg-black text-white rounded-lg font-semibold shadow-md hover:bg-red-600 transition"
          >
            Contact
          </motion.a>

        </div>
      </div>
    </header>
  );
}
