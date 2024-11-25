"use client";
import { useState } from "react";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">DPNews</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link
              href="/"
              className="text-white/80 hover:text-white duration-200 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="text-white/80 hover:text-white duration-200 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/News"
              className="text-white/80 hover:text-white duration-200 transition"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="text-white/80 hover:text-white duration-200 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex items-center cursor-pointer "
          onClick={toggleMenu}
        >
          {isOpen ? <IoClose /> : <RiMenu3Line />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black text-white shadow-md px-8 py-4 space-y-2">
          <li>
            <Link
              href="/"
              className="text-white/80 hover:text-white duration-200 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="text-white/80 hover:text-white duration-200 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/News"
              className="text-white/80 hover:text-white duration-200 transition"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="text-white/80 hover:text-white duration-200 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
