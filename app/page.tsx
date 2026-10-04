"use client";

import { useState } from "react";

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

const programs = [
  {
    title: "Food & Nutrition",
    text: "Providing nutritious food and basic support to vulnerable children and families.",
    icon: "🍲",
  },
  {
    title: "Education Support",
    text: "Helping children access education, learning materials and opportunities to develop their potential.",
    icon: "📚",
  },
  {
    title: "Child Care",
    text: "Creating a safe, caring and supportive environment where children can grow with dignity.",
    icon: "❤️",
  },
  {
    title: "Disability Support",
    text: "Supporting children with disabilities and promoting inclusion, dignity and equal opportunities.",
    icon: "♿",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-[100] border-b bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
              H
            </div>

            <div>
              <div className="text-lg font-extrabold leading-tight text-green-800">
                HEART OF AFRICA
              </div>
              <div className="text-xs font-semibold tracking-[0.2em] text-orange-600">
                FOUNDATION
              </div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#home" className="font-semibold hover:text-green-700">
              Home
            </a>
            <a href="#about" className="font-semibold hover:text-green-700">
              About Us
            </a>
            <a href="#programs" className="font-semibold hover:text-green-700">
              Our Programs
            </a>
            <a href="#gallery" className="font-semibold hover:text-green-700">
              Gallery
            </a>
            <a href="#leadership" className="font-semibold hover:text-green-700">
              Leadership
            </a>
            <a href="#contact" className="font-semibold hover:text-green-700">
              Contact
            </a>
            <a
              href="#donate"
              className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
            >
              Donate
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[120] flex h-12 w-12 touch-manipulation flex-col items-center justify-center gap-1.5 rounded-lg bg-green-700 md:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-full border-t bg-white shadow-xl md:hidden">
            <nav className="flex flex-col px-5 py-4">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Our Programs", "#programs"],
                ["Gallery", "#gallery"],
                ["Leadership", "#leadership"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (
                <a
                  key={link}
                  href={link}
                  onClick={closeMenu}
                  className="border-b py-4 text-lg font-semibold"
                >
                  {name}
                </a>
              ))}

              <a
                href="#donate"
                onClick={closeMenu}
                className="mt-4 rounded-full bg-orange-500 px-6 py-4 text-center font-bold text-white"
              >
                Donate
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <img
          src="/images/child1.jpg"
          alt="Children receiving support"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl text-white">
            <div className="mb-5 inline-block rounded-full bg-orange-500 px-5 py-2 text-sm font-bold uppercase tracking-wider">
              Serving Children Across Africa
            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
              Every Child Deserves
              <span className="block text-orange-400">
                Hope & Opportunity
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
              Heart of Africa Foundation works to support orphans, vulnerable
              children and children with disabilities by providing care,
              education, food and hope for a better future.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#donate"
                className="rounded-full bg-orange-500 px-8 py-4 text-center font-bold text-white hover:bg-orange-600"
              >
                Support Our Work
              </a>

              <a
                href="#about"
                className="rounded-full border-2 border-white px-8 py-4 text-center font-bold text-white hover:bg-white hover:text-green-800"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-orange-600">
                About Us
              </p>

              <h2 className="mt-3 text-4xl font-extrabold text-green-900">
                Putting Children at the Heart of Everything We Do
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Heart of Africa Foundation is committed to improving the lives
                of vulnerable children in Africa. We believe every child
                deserves love, protection, education, nutritious food and the
                opportunity to reach their full potential.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Starting in Uganda, our goal is to work with communities,
                families, volunteers and partners to create lasting positive
                change in the lives of children.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/child2.jpg"
                alt="Children receiving food support"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-green-900 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white/10 p-8">
            <div className="text-5xl">🎯</div>
            <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
            <p className="mt-4 leading-8 text-green-50">
              To improve the wellbeing of vulnerable children by providing
              practical support, education, care, protection and opportunities
              that help them build better futures.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8">
            <div className="text-5xl">👁️</div>
            <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>
            <p className="mt-4 leading-8 text-green-50">
              A future where every child in Africa is valued, protected,
              educated and given the opportunity to live a healthy and
              meaningful life.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="bg-gray-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-orange-600">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-green-900">
              Our Programs
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We focus on practical programs that respond to the needs of
              vulnerable children and their communities.
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-3xl bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-5xl">{program.icon}</div>

                <h3 className="mt-6 text-xl font-bold text-green-900">
                  {program.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
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
            <p className="font-bold uppercase tracking-widest text-orange-600">
              Our Gallery
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-green-900">
              Stories of Hope
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
              Every picture represents a child, a community and a reason to
              keep building a better future.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {gallery.map(([image, title]) => (
              <div
                key={image}
                className="group overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <div className="overflow-hidden">
                  <img
                    src={`/images/${image}`}
                    alt={title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-green-900">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="bg-orange-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-orange-600">
              Our Leadership
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-green-900">
              Meet Our Leaders
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our leadership is committed to serving children and building
              meaningful partnerships that create lasting change.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {/* FOUNDER */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <img
                src="/owner.jpg"
                alt="Mukisa Abdulsalam"
                className="h-[480px] w-full object-cover"
              />

              <div className="p-8 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
                  Founder
                </p>

                <h3 className="mt-2 text-3xl font-extrabold text-green-900">
                  Mukisa Abdulsalam
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Heart of Africa Foundation was founded with a simple belief:
                  every child deserves a chance to grow, learn and dream,
                  regardless of their circumstances.
                </p>
              </div>
            </div>

            {/* EXECUTIVE MANAGER */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <img
                src="/images/manager.jpg"
                alt="SHK. KIGENYI SUDAIS"
                className="h-[480px] w-full object-cover"
              />

              <div className="p-8 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
                  Executive Manager
                </p>

                <h3 className="mt-2 text-3xl font-extrabold text-green-900">
                  SHK. KIGENYI SUDAIS
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  The Executive Manager supports the foundation&apos;s
                  activities, community programs and efforts to improve the
                  lives of vulnerable children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="bg-green-800 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-widest text-orange-400">
            Make a Difference
          </p>

          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Your Support Can Change a Child&apos;s Life
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-50">
            Whether through financial support, food, education materials,
            volunteering or partnership, your contribution can help us reach
            more children and communities.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-orange-500 px-9 py-4 font-bold text-white hover:bg-orange-600"
          >
            Contact Us to Support
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-orange-600">
              Get Involved
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-green-900">
              Contact Heart of Africa Foundation
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
              Want to support our work, volunteer, partner with us or learn
              more? Get in touch with our team.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {/* PHONE 1 */}
            <a
              href="tel:+256740638678"
              className="rounded-3xl border bg-gray-50 p-7 text-center shadow-sm hover:shadow-lg"
            >
              <div className="text-4xl">☎</div>

              <h3 className="mt-5 text-xl font-bold text-green-900">
                Phone
              </h3>

              <p className="mt-2 text-lg font-semibold text-gray-700">
                +256 740 638 678
              </p>
            </a>

            {/* PHONE 2 — CORRECT NUMBER */}
            <a
              href="tel:+256753409600"
              className="rounded-3xl border bg-gray-50 p-7 text-center shadow-sm hover:shadow-lg"
            >
              <div className="text-4xl">☎</div>

              <h3 className="mt-5 text-xl font-bold text-green-900">
                Phone
              </h3>

              <p className="mt-2 text-lg font-semibold text-gray-700">
                +256 753 409 600
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 px-5 py-10 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-xl font-extrabold">
                HEART OF AFRICA FOUNDATION
              </div>

              <p className="mt-4 max-w-md leading-7 text-gray-400">
                Supporting vulnerable children, orphans and children with
                disabilities with care, education, food and hope.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-orange-400">Quick Links</h3>

              <div className="mt-4 flex flex-col gap-3 text-gray-400">
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
                <a href="#programs" className="hover:text-white">
                  Our Programs
                </a>
                <a href="#gallery" className="hover:text-white">
                  Gallery
                </a>
                <a href="#leadership" className="hover:text-white">
                  Leadership
                </a>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-orange-400">Contact</h3>

              <div className="mt-4 space-y-3 text-gray-400">
                <p>+256 740 638 678</p>
                <p>+256 753 409 600</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Heart of Africa Foundation. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}