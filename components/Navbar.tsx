"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-dark.svg"
            alt="Digital Bank Logo"
            width={130}
            height={130}
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative pb-1  transition-colors duration-200 ${
                pathname === link.path
                  ? "text-teal-600"
                  : "text-gray-700 hover:text-teal-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/*<nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-teal-700 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-teal-700 transition-colors duration-200 "
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-teal-700 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="blog"
            className="text-gray-700 hover:text-teal-700 transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            href="/careers"
            className="text-gray-700 hover:text-teal-700 transition-colors duration-200"
          >
            Careers
          </Link>
        </nav>*/}

        <div className="flex items-center gap-4">
          <button className="  hidden md:inline-block bg-linear-to-r from-teal-500 to-green-600 text-white px-5 py-2 rounded-3xl hover:from-teal-400 hover:to-teal-500 transition">
            Request Invite
          </button>
        </div>

        {/*responsiveness*/}
        <button
          type="button"
          className="md:hidden text-gray-700 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src={
              isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"
            }
            alt="menu toggle"
            width={25}
            height={25}
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white shadow-lg rounded-xl py-6 flex flex-col items-center space-y-5 z-50 transition-all duration-300">
          <Link
            href="/"
            className="text-gray-700 hover:text-teal-700 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-teal-700 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-teal-700 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-teal-700 transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-teal-700 transition-colors duration-200"
          >
            Careers
          </Link>
        </div>
      )}
    </header>
  );
}
