"use client";

import { useState } from "react";

const gallery = [
  ["child1.jpg", "Supporting Vulnerable Children"],
  ["child2.jpg", "Providing Hope and Care"],
  ["child3.jpg", "Children Receiving Support"],
  ["child4.jpg", "Community Support"],
  ["child5.jpg", "Supporting Children"],
  ["child6.jpg", "Creating Better Futures"],
  ["child7.jpg", "Caring for Children"],
  ["child8.jpg", "Empowering Young Lives"],
  ["child9.jpg", "Making a Difference"],
  ["child10.jpg", "Bringing Hope"],
  ["child11.jpg", "Children and Community"],
  ["child12.jpg", "Building a Better Future"],
  ["child13.jpg", "Hope for Every Child"],
  ["child14.jpg", "Together We Can Make a Difference"],
];

const programs = [
  {
    icon: "❤️",
    title: "Orphan Support",
    text: "We support orphaned children with basic needs, care, education and opportunities for a better future.",
  },
  {
    icon: "🍲",
    title: "Food & Nutrition",
    text: "We help vulnerable children access nutritious meals and the support they need to grow healthy.",
  },
  {
    icon: "♿",
    title: "Children with Disabilities",
    text: "We support children living with disabilities and work to create an inclusive environment where every child matters.",
  },
  {
    icon: "📚",
    title: "Education Support",
    text: "We promote education by helping vulnerable children access learning opportunities and educational resources.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Heart of Africa Foundation",
            url: "https://heart-of-africa-foundation.vercel.app",
            description:
              "Heart of Africa Foundation supports orphans, vulnerable children and children with disabilities in Uganda and across Africa through care, support and community initiatives.",
            founder: {
              "@type": "Person",
              name: "MUKISA ABDULSALAM",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+256740638678",
                contactType: "customer service",
              },
              {
                "@type": "ContactPoint",
                telephone: "+256753409600",
                contactType: "customer service",
              },
            ],
          }),
        }}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-800 text-2xl">
              ❤️
            </div>

            <div>
              <h1 className="text-lg font-extrabold leading-tight text-green-900 sm:text-xl">
                HEART OF AFRICA
              </h1>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Foundation
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-6 lg:flex">
            <a
              href="#home"
              className="font-semibold text-gray-700 transition hover:text-green-700"
            >
              Home
            </a>

            <a
              href="#about"
              className="font-semibold text-gray-700 transition hover:text-green-700"
            >
              About Us
            </a>

            <a
              href="#programs"
              className="font-semibold text-gray-700 transition hover:text-green-700"
            >
              Our Programs
            </a>

            <a
              href="#gallery"
              className="font-semibold text-gray-700 transition hover:text-green-700"
            >
              Gallery
            </a>

            <a
              href="#leadership"
              className="font-semibold text-gray-700 transition hover:text-green-700"
            >
              Leadership
            </a>

            <a
              href="#contact"
              className="font-semibold text-gray-700 transition hover:text-green-700"
            >
              Contact
            </a>

            <a
              href="#donate"
              className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white shadow-md transition hover:bg-orange-600"
            >
              Donate
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-800 text-2xl text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div className="border-t border-green-100 bg-white px-5 pb-5 shadow-lg lg:hidden">
            <nav className="flex flex-col">
              <a
                href="#home"
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 font-semibold text-gray-700"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 font-semibold text-gray-700"
              >
                About Us
              </a>

              <a
                href="#programs"
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 font-semibold text-gray-700"
              >
                Our Programs
              </a>

              <a
                href="#gallery"
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 font-semibold text-gray-700"
              >
                Gallery
              </a>

              <a
                href="#leadership"
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 font-semibold text-gray-700"
              >
                Leadership
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 font-semibold text-gray-700"
              >
                Contact
              </a>

              <a
                href="#donate"
                onClick={closeMenu}
                className="mt-4 rounded-full bg-orange-500 px-6 py-3 text-center font-bold text-white"
              >
                Donate
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-green-950 text-white"
      >
        <div className="absolute inset-0">
          <img
            src="/images/child1.jpg"
            alt="Children supported by Heart of Africa Foundation"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-green-950/70" />
        </div>

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-5 inline-block rounded-full bg-orange-500 px-5 py-2 text-sm font-bold uppercase tracking-widest">
              Hope • Love • Opportunity
            </p>

            <h2 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Giving Hope to the
              <span className="block text-orange-400">
                Heart of Africa
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50 sm:text-xl">
              Heart of Africa Foundation supports orphans, vulnerable
              children and children with disabilities by providing care,
              food, education and opportunities for a brighter future.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#donate"
                className="rounded-full bg-orange-500 px-8 py-4 text-center font-extrabold text-white shadow-lg transition hover:bg-orange-600"
              >
                Support Our Mission
              </a>

              <a
                href="#about"
                className="rounded-full border-2 border-white px-8 py-4 text-center font-extrabold text-white transition hover:bg-white hover:text-green-900"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-[2rem] border-8 border-white/20 shadow-2xl">
              <img
                src="/images/child2.jpg"
                alt="Children receiving support"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="/images/child3.jpg"
                alt="Children supported by the foundation"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-orange-600">
                About Us
              </p>

              <h2 className="mt-3 text-4xl font-black text-green-950 sm:text-5xl">
                Every Child Deserves a Chance
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Heart of Africa Foundation is committed to improving the
                lives of children who face difficult circumstances. We
                believe that every child deserves love, protection,
                education and an opportunity to reach their full potential.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Our work focuses on supporting orphans, vulnerable children
                and children with disabilities across Africa, beginning with
                communities in Uganda.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-green-50 p-6">
                  <div className="text-3xl">❤️</div>
                  <h3 className="mt-3 text-xl font-extrabold text-green-900">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-gray-600">
                    To provide hope, care and opportunities to children in
                    need.
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-50 p-6">
                  <div className="text-3xl">🌍</div>
                  <h3 className="mt-3 text-xl font-extrabold text-green-900">
                    Our Vision
                  </h3>
                  <p className="mt-2 text-gray-600">
                    A future where every African child can live with dignity
                    and hope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-orange-600">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-black text-green-950 sm:text-5xl">
              Our Programs
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              We work with communities to create meaningful and lasting
              change in the lives of children.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-3xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                  {program.icon}
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-green-900">
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
      <section id="gallery" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-orange-600">
              Our Gallery
            </p>

            <h2 className="mt-3 text-4xl font-black text-green-950 sm:text-5xl">
              Moments of Hope
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              These moments remind us why our work matters and why we
              continue to support children and communities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

                <div className="p-4">
                  <h3 className="font-bold text-green-900">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="bg-green-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-orange-400">
              Our Leadership
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Meet Our Leaders
            </h2>

            <p className="mt-5 text-lg leading-8 text-green-100">
              Dedicated leadership committed to making a positive difference
              in the lives of children and communities.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* FOUNDER */}
            <div className="overflow-hidden rounded-[2rem] bg-white text-gray-800 shadow-2xl">
              <div className="flex h-[480px] w-full items-center justify-center bg-gray-100">
                <img
                  src="/owner.jpg"
                  alt="MUKISA ABDULSALAM"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
                  Founder
                </p>

                <h3 className="mt-2 text-3xl font-extrabold text-green-900">
                  MUKISA ABDULSALAM
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  The Founder of Heart of Africa Foundation, committed to
                  creating opportunities and providing support for children
                  who need care, protection and hope.
                </p>
              </div>
            </div>

            {/* EXECUTIVE MANAGER */}
            <div className="overflow-hidden rounded-[2rem] bg-white text-gray-800 shadow-2xl">
              <div className="flex h-[480px] w-full items-center justify-center bg-gray-100">
                <img
                  src="/images/manager.jpg"
                  alt="SHK. KIGENYI SUDAIS"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
                  Executive Manager
                </p>

                <h3 className="mt-2 text-3xl font-extrabold text-green-900">
                  SHK. KIGENYI SUDAIS
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  The Executive Manager of Heart of Africa Foundation,
                  helping to coordinate the foundation&apos;s programs and
                  activities in support of vulnerable children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="bg-orange-500 py-20">
        <div className="mx-auto max-w-5xl px-5 text-center text-white lg:px-8">
          <h2 className="text-4xl font-black sm:text-5xl">
            Help Us Give a Child Hope
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-50">
            Your support can help provide food, education, care and
            opportunities to children who need it most.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-white px-9 py-4 font-extrabold text-orange-600 shadow-lg transition hover:bg-green-950 hover:text-white"
          >
            Contact Us to Support
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-orange-600">
                Get In Touch
              </p>

              <h2 className="mt-3 text-4xl font-black text-green-950 sm:text-5xl">
                Contact Heart of Africa Foundation
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Would you like to support our work, partner with us or learn
                more about our programs? Get in touch with us.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href="tel:+256740638678"
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl">
                    📞
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase text-gray-500">
                      Phone
                    </p>
                    <p className="font-bold text-green-900">
                      +256 740 638 678
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+256753409600"
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl">
                    📱
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase text-gray-500">
                      Phone
                    </p>
                    <p className="font-bold text-green-900">
                      +256 753 409 600
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="/images/child14.jpg"
                alt="Children supported by Heart of Africa Foundation"
                className="h-full min-h-[400px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-black">
                HEART OF AFRICA FOUNDATION
              </h3>

              <p className="mt-4 leading-7 text-green-100">
                Giving hope, care and opportunities to vulnerable children
                across Africa.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-orange-400">
                Quick Links
              </h3>

              <div className="mt-4 flex flex-col gap-3">
                <a href="#about" className="text-green-100 hover:text-white">
                  About Us
                </a>

                <a
                  href="#programs"
                  className="text-green-100 hover:text-white"
                >
                  Our Programs
                </a>

                <a
                  href="#gallery"
                  className="text-green-100 hover:text-white"
                >
                  Gallery
                </a>

                <a
                  href="#leadership"
                  className="text-green-100 hover:text-white"
                >
                  Leadership
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-orange-400">
                Contact Us
              </h3>

              <div className="mt-4 space-y-3 text-green-100">
                <p>+256 740 638 678</p>
                <p>+256 753 409 600</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-green-800 pt-6 text-center text-sm text-green-200">
            © {new Date().getFullYear()} Heart of Africa Foundation. All
            rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}