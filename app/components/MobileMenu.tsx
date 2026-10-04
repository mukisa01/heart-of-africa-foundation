"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MENU BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50 text-green-800 md:hidden"
      >
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* BACKGROUND */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* MENU PANEL */}
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white shadow-2xl">
            {/* HEADER */}
            <div className="flex items-center justify-between border-b px-6 py-5">
              <div>
                <p className="font-extrabold text-green-800">
                  Heart of Africa
                </p>
                <p className="text-xs font-semibold text-orange-500">
                  Foundation
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </svg>
              </button>
            </div>

            {/* LINKS */}
            <nav className="flex flex-col px-6 py-5">
              <a
                href="#home"
                onClick={() => setOpen(false)}
                className="border-b py-4 text-lg font-semibold text-gray-800"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="border-b py-4 text-lg font-semibold text-gray-800"
              >
                About Us
              </a>

              <a
                href="#programs"
                onClick={() => setOpen(false)}
                className="border-b py-4 text-lg font-semibold text-gray-800"
              >
                Our Programs
              </a>

              <a
                href="#gallery"
                onClick={() => setOpen(false)}
                className="border-b py-4 text-lg font-semibold text-gray-800"
              >
                Gallery
              </a>

              <a
                href="#founder"
                onClick={() => setOpen(false)}
                className="border-b py-4 text-lg font-semibold text-gray-800"
              >
                Founder
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="border-b py-4 text-lg font-semibold text-gray-800"
              >
                Contact
              </a>

              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full bg-orange-500 px-6 py-4 text-center text-lg font-bold text-white"
              >
                Donate
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}