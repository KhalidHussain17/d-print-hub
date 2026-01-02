"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* ===== BRAND ===== */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-4">
              D<span className="text-red-600">Print</span> Hub
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Complete printing and branding solutions including flex printing,
              ACP boards, signage, digital prints and professional design work.
            </p>
          </div>

          {/* ===== QUICK LINKS ===== */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-red-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-red-500 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== SERVICES ===== */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Flex Printing</li>
              <li>ACP Boards & Signage</li>
              <li>Visiting Cards</li>
              <li>Digital Printing</li>
              <li>Brand Design</li>
            </ul>
          </div>

          {/* ===== CONTACT (AUTOMATED) ===== */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">

              {/* Phone */}
                          <li>
                              📞 Sales:{" "}
                              <a href="tel:+916200429767">+91 62004 29767</a>
                          </li>
                          <li>
                              📞 Support:{" "}
                              <a href="tel:+917004590295">+91 7004590295</a>
                          </li>


              {/* Email */}
              <li>
                📧{" "}
                <a
                  href="mailto:dprinthub2025@gmail.com"
                  className="hover:text-red-500 hover:underline underline-offset-4 transition"
                >
                  dprinthub2025@gmail.com
                </a>
              </li>

              {/* Location */}
              <li>
                📍 NayaTola, Patna, India
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} D Print Hub. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
