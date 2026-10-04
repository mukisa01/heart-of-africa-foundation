"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const programs = [
    {
      title: "Food & Nutrition",
      text: "Providing nutritious food and basic necessities to vulnerable children and families.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 3v7" />
          <path d="M4 3v7a3 3 0 0 0 6 0V3" />
          <path d="M7 13v8" />
          <path d="M17 3v18" />
          <path d="M17 3c-2.2 1.7-3 4-3 6 0 2.2 1.3 4 3 4" />
        </svg>
      ),
    },
    {
      title: "Education Support",
      text: "Helping children access education, learning materials and opportunities for a brighter future.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z" />
          <path d="M6 11.5V16c3 2.5 9 2.5 12 0v-4.5" />
          <path d="M21 10v5" />
        </svg>
      ),
    },
    {
      title: "Child Care",
      text: "Creating safe and caring environments where vulnerable children can grow with dignity.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 12.5c0 5-3.5 8-8 9.5-4.5-1.5-8-4.5-8-9.5V6l8-3 8 3v6.5Z" />
          <path d="M8 12c1.2-1.5 2.6-1.5 4 0 1.4-1.5 2.8-1.5 4 0" />
        </svg>
      ),
    },
    {
      title: "Disability Support",
      text: "Supporting children with disabilities with care, inclusion and opportunities to participate fully.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="9" cy="5" r="2" />
          <path d="M9 8v5l-3 4" />
          <path d="m9 11 4 2 3-3" />
          <path d="M9 13l4 5" />
          <circle cx="17" cy="17" r="4" />
          <path d="M17 14v6M14 17h6" />
        </svg>
      ),
    },
  ];

  const gallery = [
    ["child1.jpg", "Supporting Vulnerable Children"],
    ["child2.jpg", "Food Support"],
    ["child3.jpg", "Children Together"],
    ["child4.jpg", "Disability Support"],
    ["child5.jpg", "Education"],
    ["child6.jpg", "Community Outreach"],
    ["child7.jpg", "Care & Compassion"],
    ["child8.jpg", "Building Hope"],
    ["child9.jpg", "Making a Difference"],
    ["child10.jpg", "Hope for Tomorrow"],
    ["child11.jpg", "A Brighter Future"],
    ["child12.jpg", "Together We Care"],
    ["child13.jpg", "Spreading Hope"],
    ["child14.jpg", "Every Child Matters"],
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[9999] md:hidden"
          style={{ touchAction: "auto" }}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeMenu}
          />

          {/* Menu panel */}
          <div className="absolute right-0 top-0 h-full w-[82%] max-w-[360px] overflow-y-auto bg-white shadow-2xl">
            
            <div className="flex items-center justify-between border-b px-5 py-5">
              <div>
                <p className="text-lg font-extrabold text-green-800">
                  Heart of Africa
                </p>
                <p className="text-xs font-medium text-orange-600">
                  Foundation
                </p>
              </div>

              <button
                type="button"
                onClick={closeMenu}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-3xl text-gray-800"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <nav className="px-5 py-6">
              <a
                href="#home"
                onClick={closeMenu}
                className="block border-b py-4 text-lg font-semibold text-gray-800"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="block border-b py-4 text-lg font-semibold text-gray-800"
              >
                About Us
              </a>

              <a
                href="#programs"
                onClick={closeMenu}
                className="block border-b py-4 text-lg font-semibold text-gray-800"
              >
                Our Programs
              </a>

              <a
                href="#gallery"
                onClick={closeMenu}
                className="block border-b py-4 text-lg font-semibold text-gray-800"
              >
                Gallery
              </a>

              <a
                href="#founder"
                onClick={closeMenu}
                className="block border-b py-4 text-lg font-semibold text-gray-800"
              >
                Founder
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="block border-b py-4 text-lg font-semibold text-gray-800"
              >
                Contact
              </a>

              <a
                href="#donate"
                onClick={closeMenu}
                className="mt-6 block rounded-lg bg-orange-500 px-6 py-4 text-center text-lg font-bold text-white"
              >
                Donate
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 text-xl font-black text-white">
              H
            </div>

            <div>
              <div className="text-lg font-extrabold leading-none text-green-800">
                Heart of Africa
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-widest text-orange-600">
                Foundation
              </div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#home" className="font-semibold text-gray-700 hover:text-green-700">
              Home
            </a>

            <a href="#about" className="font-semibold text-gray-700 hover:text-green-700">
              About Us
            </a>

            <a href="#programs" className="font-semibold text-gray-700 hover:text-green-700">
              Our Programs
            </a>

            <a href="#gallery" className="font-semibold text-gray-700 hover:text-green-700">
              Gallery
            </a>

            <a href="#founder" className="font-semibold text-gray-700 hover:text-green-700">
              Founder
            </a>

            <a href="#contact" className="font-semibold text-gray-700 hover:text-green-700">
              Contact
            </a>

            <a
              href="#donate"
              className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white shadow-md hover:bg-orange-600"
            >
              Donate
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="relative z-[10000] flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg border-2 border-green-700 bg-white text-green-800 shadow-sm md:hidden"
            style={{
              WebkitTapHighlightColor: "transparent",
              touchAction: "manipulation",
            }}
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[3px] w-7 rounded-full bg-green-800" />
              <span className="block h-[3px] w-7 rounded-full bg-green-800" />
              <span className="block h-[3px] w-7 rounded-full bg-green-800" />
            </span>
          </button>

        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-green-900">
        <div className="absolute inset-0">
          <img
            src="/images/child1.jpg"
            alt="Children supported by Heart of Africa Foundation"
            className="h-full w-full object-cover opacity-40"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
              HEART OF AFRICA FOUNDATION
            </p>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              Giving Children
              <span className="block text-orange-400">
                Hope for Tomorrow
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              We support orphans, vulnerable children and children with
              disabilities by providing care, food, education and opportunities
              for a better future.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#donate"
                className="rounded-full bg-orange-500 px-8 py-4 text-center font-bold text-white shadow-lg hover:bg-orange-600"
              >
                Support Our Work
              </a>

              <a
                href="#programs"
                className="rounded-full border-2 border-white px-8 py-4 text-center font-bold text-white hover:bg-white hover:text-green-800"
              >
                Explore Our Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              About Us
            </p>

            <h2 className="mt-3 text-3xl font-black text-green-900 sm:text-4xl">
              Building a Better Future for African Children
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Heart of Africa Foundation is committed to supporting children
              who face difficult circumstances. We believe every child deserves
              love, dignity, education, food and the opportunity to reach their
              full potential.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-green-50 p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21S4 16 4 9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 7-8 12-8 12Z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-green-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                To improve the lives of vulnerable children through practical
                support, compassion, education and community-based programs.
              </p>
            </div>

            <div className="rounded-3xl bg-orange-50 p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m12 7 1.7 3.5L17 12l-3.3 1.5L12 17l-1.7-3.5L7 12l3.3-1.5L12 7Z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-green-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                A future where every child in Africa can grow safely, receive
                an education and live with dignity and hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="bg-gray-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-black text-green-900 sm:text-4xl">
              Our Programs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Our programs focus on the basic needs and long-term development
              of vulnerable children.
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-green-700">{program.icon}</div>

                <h3 className="mt-6 text-xl font-bold text-green-900">
                  {program.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {program.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              Our Gallery
            </p>

            <h2 className="mt-3 text-3xl font-black text-green-900 sm:text-4xl">
              Moments of Hope
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-600">
              Every child deserves care, opportunity and hope.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map(([image, title]) => (
              <div
                key={image}
                className="group overflow-hidden rounded-2xl bg-gray-100 shadow-sm"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`/images/${image}`}
                    alt={title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-green-900">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="bg-green-900 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 md:grid-cols-2">

            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
              <img
                src="/owner.jpg"
                alt="Mukisa Abdulsalam - Founder of Heart of Africa Foundation"
                className="h-auto w-full object-contain"
              />
            </div>

            <div>
              <p className="font-bold uppercase tracking-widest text-orange-400">
                Founder
              </p>

              <h2 className="mt-3 text-4xl font-black text-white">
                Mukisa Abdulsalam
              </h2>

              <p className="mt-2 text-lg font-semibold text-orange-300">
                Founder, Heart of Africa Foundation
              </p>

              <p className="mt-7 leading-8 text-white/85">
                Heart of Africa Foundation was created from a desire to see
                vulnerable children receive the support, care and opportunities
                they deserve.
              </p>

              <p className="mt-5 leading-8 text-white/85">
                Through teamwork and community support, we aim to make a
                meaningful difference in the lives of children across Africa,
                starting with Uganda.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="bg-orange-500 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-white sm:text-5xl">
            Help Us Give a Child Hope
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/95">
            Your support can help provide food, education, care and essential
            assistance to vulnerable children.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-green-900 px-9 py-4 font-bold text-white shadow-lg hover:bg-green-950"
          >
            Contact Us to Support
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              Contact Us
            </p>

            <h2 className="mt-3 text-3xl font-black text-green-900 sm:text-4xl">
              Get in Touch
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              If you would like to support our work, partner with us or learn
              more about the foundation, please contact us.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <a
              href="tel:+256740638678"
              className="rounded-2xl border border-green-100 bg-green-50 p-7 transition hover:shadow-lg"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-700 text-white">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 4h3l2 5-2 2c1.5 3 3 4.5 6 6l2-2 5 2v3c0 1-1 2-2 1.5C10 20 4 14 2.5 6 2.2 4.8 3.5 4 5 4Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    Phone / WhatsApp
                  </p>

                  <p className="mt-1 text-xl font-bold text-green-900">
                    +256 740 638 678
                  </p>
                </div>
              </div>
            </a>

            <a
              href="tel:+256753409600"
              className="rounded-2xl border border-orange-100 bg-orange-50 p-7 transition hover:shadow-lg"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 4h3l2 5-2 2c1.5 3 3 4.5 6 6l2-2 5 2v3c0 1-1 1.5-2 1.5C10 20 4 14 2.5 6 2.2 4.8 3.5 4 5 4Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 text-xl font-bold text-green-900">
                    +256 753 096 00
                  </p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">

          <div>
            <p className="text-xl font-extrabold">
              Heart of Africa Foundation
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Giving vulnerable children hope for tomorrow.
            </p>
          </div>

          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Heart of Africa Foundation. All rights reserved.
          </div>

        </div>
      </footer>

    </main>
  );
}