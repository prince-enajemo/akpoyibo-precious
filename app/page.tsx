"use client";

// app/page.jsx
//
// Next.js (App Router) page — Tailwind CSS.
//
// Fonts: this design uses "Fraunces" (serif, display) + "Inter" (sans, body).
// Add this to app/layout.jsx:
//
//   import { Fraunces, Inter } from "next/font/google";
//   const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
//   const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
//
//   export default function RootLayout({ children }) {
//     return (
//       <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
//         <body className="font-sans bg-[#070d18]">{children}</body>
//       </html>
//     );
//   }
//
// Then in tailwind.config.js, extend the font families:
//   theme: {
//     extend: {
//       fontFamily: {
//         serif: ["var(--font-fraunces)", "Georgia", "serif"],
//         sans: ["var(--font-inter)", "sans-serif"],
//       },
//     },
//   }

const stats = [
  { label: "Engineering foundation", value: "Civil" },
  { label: "Leadership platforms", value: "3+" },
  { label: "Youth impact", value: "Ongoing" },
  { label: "Based in", value: "Bayelsa" },
];

const pillars = [
  {
    num: "01",
    title: "Engineering & Infrastructure",
    text: "A civil engineering graduate with hands-on structural and industrial exposure, building a career grounded in problem-solving and practical execution.",
  },
  {
    num: "02",
    title: "Youth Leadership Advocacy",
    text: "Through LeadRight Africa Academy and wider community engagement, he creates development pathways for young people to grow in discipline, purpose, and leadership.",
  },
  {
    num: "03",
    title: "Media Strategy & Branding",
    text: "Golden Media & Consulting supports purpose-driven individuals and businesses to increase visibility, credibility, and digital traction in competitive markets.",
  },
  {
    num: "04",
    title: "Public Ministry & Mentorship",
    text: "As a music and word minister, he shapes character and conviction, helping younger generations align faith, identity, and personal growth.",
  },
];

const initiatives = [
  {
    title: "LeadRight Africa Academy",
    meta: "Founded 2026",
    description:
      "A youth-focused leadership hub organizing conferences, campus workshops, and development programs designed to equip young Africans with personal growth, discipline, and career skills.",
  },
  {
    title: "Jamie Pajoel International",
    meta: "Bayelsa State Chapter President",
    description:
      "Officially appointed in August 2026 to lead a global human-capital and leadership development network rooted in capacity-building and servant leadership.",
  },
  {
    title: "SPIRITBREED Network",
    meta: "Founded 2024",
    description:
      "A faith-based mentorship and discipleship platform focused on character development, purpose discovery, and spiritual maturity among younger generations.",
  },
];

const timeline = [
  "Completed tertiary education in Civil Engineering at Niger Delta University (NDU), Class of 2026.",
  "Previously studied at Rivers State Polytechnic, Bori.",
  "Built engineering experience through internships with NDDC and Mutual Commitment Company.",
  "Founded SPIRITBREED Network to mentor and disciple younger generations in purpose and character.",
  "Launched LeadRight Africa Academy to shape youth leadership and personal development.",
  "Appointed Bayelsa State Chapter President of Jamie Pajoel International.",
];

const ventures = [
  {
    tag: "Media",
    glow: "bg-[#F5C418]",
    title: "Golden Media & Consulting",
    text: "Creative consulting and brand strategy for purpose-driven individuals and businesses seeking stronger visibility and trust.",
  },
  {
    tag: "Speaking",
    glow: "bg-[#4f8fa6]",
    title: "Public Voice",
    text: "He speaks across university panels and faith gatherings on intentional living, personal branding, mindset transformation, and purpose.",
  },
  {
    tag: "Ministry",
    glow: "bg-[#c98a6b]",
    title: "Music & Word",
    text: "Serving actively in music and word ministry, helping people discover direction, identity, and spiritual clarity.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070d18] text-[#a9b7cc] selection:bg-[#F5C418] selection:text-[#0e1c30]">
      {/* background texture */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(680px_520px_at_14%_8%,rgba(245,196,24,0.14),transparent_60%),radial-gradient(720px_620px_at_88%_28%,rgba(79,143,166,0.16),transparent_62%),linear-gradient(180deg,#070d18_0%,#0b1524_45%,#070d18_100%)]" />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070d18]/60 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-white">Precious Y.A.</span>
            <span className="mt-1 text-[0.65rem] tracking-[0.16em] text-[#F5C418]">AKPOYIBO</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#a9b7cc] md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#leadership" className="transition hover:text-white">Leadership</a>
            <a href="#ventures" className="transition hover:text-white">Ventures</a>
            <a href="#impact" className="transition hover:text-white">Background</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[#F5C418]/50 bg-[#F5C418]/10 px-5 py-2.5 text-sm font-medium text-[#F5C418] transition hover:bg-[#F5C418] hover:text-[#0e1c30]"
          >
            Connect
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.18fr_0.82fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F5C418]/35 bg-[#F5C418]/[0.07] px-4 py-2 text-xs font-medium text-[#F5C418]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5C418] shadow-[0_0_10px_2px_rgba(245,196,24,0.6)]" />
                Engineer · Youth Leader · Media Strategist · Minister
              </span>

              <h1 className="mt-6 max-w-[15ch] font-serif text-4xl font-normal leading-[1.02] tracking-tight text-[#fdfbf6] sm:text-5xl lg:text-7xl">
                Precious Yerindideke{" "}
                <em className="font-normal not-italic text-[#F5C418] italic">Akpoyibo</em>
              </h1>

              <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-[#a9b7cc]">
                A versatile young Nigerian professional whose work spans civil engineering,
                youth leadership advocacy, media strategy, and public ministry — building
                structures and shaping people in equal measure.
              </p>

              <div className="mt-9 flex flex-wrap gap-3.5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#F5C418] to-[#F5C418] px-6 py-3.5 text-sm font-semibold text-[#14243c] shadow-[0_10px_30px_-8px_rgba(245,196,24,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-6px_rgba(245,196,24,0.6)]"
                >
                  Book a session
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-[#eef1f6] transition hover:border-[#F5C418]/50 hover:text-[#F5C418]"
                >
                  Explore profile
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/[0.11] bg-white/[0.055] p-4 backdrop-blur-md"
                  >
                    <p className="font-serif text-xl font-semibold text-[#F5C418]">{stat.value}</p>
                    <p className="mt-1.5 text-[0.7rem] leading-snug text-[#7688a3]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* glass profile card */}
            <div className="relative">
              <div className="absolute -left-8 top-8 h-56 w-56 rounded-full bg-[#F5C418]/20 blur-3xl" />
              <div className="absolute -right-6 bottom-10 h-60 w-60 rounded-full bg-[#4f8fa6]/20 blur-3xl" />

              <div className="relative rounded-[28px] border border-white/[0.14] bg-gradient-to-br from-white/[0.09] to-white/[0.025] p-7 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.6)] backdrop-blur-2xl backdrop-saturate-150">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5C418] to-[#F5C418] font-serif text-2xl font-semibold text-[#14243c]">
                      P
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.1em] text-[#7688a3]">PROFILE</p>
                      <p className="mt-0.5 font-serif text-lg text-[#fdfbf6]">Precious A.</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-[#F5C418]/35 bg-[#F5C418]/[0.08] px-3 py-1.5 text-xs text-[#F5C418]">
                    Builder
                  </span>
                </div>

                <div className="mt-6 rounded-[20px] border border-white/[0.08] bg-[#070d18]/55 p-5">
                  <p className="text-[0.65rem] tracking-[0.1em] text-[#7688a3]">MISSION</p>
                  <h3 className="mt-2.5 font-serif text-xl font-medium leading-snug text-[#fdfbf6]">
                    Constructing structures and shaping destinies.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#a9b7cc]">
                    Driven by a philosophy of building both physical and human
                    infrastructure — creating systems, opportunities, and mentorship
                    pathways that last.
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-gradient-to-br from-[#F5C418] to-[#F5C418] p-4 text-[#14243c]">
                    <p className="text-[0.62rem] tracking-[0.09em] opacity-75">FOCUS</p>
                    <p className="mt-1.5 font-serif text-lg">Purpose</p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.12] bg-white/[0.04] p-4 text-[#eef1f6]">
                    <p className="text-[0.62rem] tracking-[0.09em] text-[#7688a3]">STAGE</p>
                    <p className="mt-1.5 font-serif text-lg">Leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-[#f4f0e6] text-[#0e1c30]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-[#F5C418]">About</p>
              <h2 className="mt-3.5 max-w-[20ch] font-serif text-3xl font-normal leading-[1.12] tracking-tight sm:text-5xl">
                A builder across engineering, leadership, media, and ministry.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {pillars.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-[#0e1c30]/[0.08] bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(14,28,48,0.25)]"
                >
                  <div className="font-serif text-sm font-semibold text-[#4f8fa6]">{item.num}</div>
                  <h3 className="mt-3.5 font-serif text-xl font-medium text-[#0e1c30]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#0e1c30]/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" className="bg-[#070d18]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold text-[#F5C418]">Leadership profile</p>
                <h2 className="mt-3.5 font-serif text-3xl font-normal leading-[1.12] tracking-tight sm:text-5xl">
                  Turning influence into impact.
                </h2>
              </div>
              <p className="text-base leading-relaxed text-[#a9b7cc]">
                His leadership work is rooted in mentorship, character formation, and
                capacity building — empowering young people to become disciplined,
                purpose-driven contributors to society.
              </p>
            </div>

            <div className="mt-13 grid gap-5 lg:grid-cols-3">
              {initiatives.map((initiative) => (
                <article
                  key={initiative.title}
                  className="rounded-[24px] border border-white/[0.11] bg-white/[0.055] p-7 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#F5C418]/40"
                >
                  <p className="text-[0.7rem] font-semibold tracking-[0.06em] text-[#F5C418]">
                    {initiative.meta}
                  </p>
                  <h3 className="mt-3.5 font-serif text-xl font-medium text-[#fdfbf6]">
                    {initiative.title}
                  </h3>
                  <p className="mt-3.5 text-[0.92rem] leading-relaxed text-[#a9b7cc]">
                    {initiative.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT / TIMELINE */}
        <section id="impact" className="bg-[#f4f0e6] text-[#0e1c30]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-11 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold text-[#F5C418]">Background</p>
                <h2 className="mt-3.5 font-serif text-3xl font-normal leading-[1.12] tracking-tight sm:text-5xl">
                  Education, experience, and growth.
                </h2>

                <div className="mt-7 rounded-[22px] border border-[#0e1c30]/[0.08] bg-white p-7">
                  <p className="text-[0.7rem] font-semibold tracking-[0.08em] text-[#4f8fa6]">
                    ACADEMIC PATH
                  </p>
                  <ul className="mt-4 space-y-3.5">
                    {[
                      "Civil Engineering graduate at Niger Delta University (NDU), Class of 2026.",
                      "Earlier academic training at Rivers State Polytechnic, Bori.",
                      "Practical experience gained through structural and industrial internships.",
                    ].map((line) => (
                      <li key={line} className="relative pl-4 text-[0.96rem] leading-relaxed text-[#0e1c30]/78">
                        <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-[#F5C418]" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative pl-11">
                <span className="absolute left-[17px] top-1.5 bottom-1.5 w-[1.5px] bg-gradient-to-b from-[#F5C418] to-[#F5C418]/15" />
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={item} className="relative">
                      <div className="absolute -left-[46px] top-0.5 flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-[#F5C418] bg-white font-serif text-sm font-semibold text-[#0e1c30]">
                        {index + 1}
                      </div>
                      <div className="rounded-[18px] border border-[#0e1c30]/[0.08] bg-white p-5">
                        <p className="text-[0.95rem] leading-relaxed text-[#0e1c30]/80">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VENTURES */}
        <section id="ventures" className="bg-[#070d18]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <p className="text-sm font-semibold text-[#F5C418]">Ventures & influence</p>
              <h2 className="mt-3.5 font-serif text-3xl font-normal leading-[1.12] tracking-tight sm:text-5xl">
                Media, growth, and voice for purpose-driven impact.
              </h2>
            </div>

            <div className="mt-13 grid gap-5 md:grid-cols-3">
              {ventures.map((v) => (
                <div
                  key={v.title}
                  className="relative overflow-hidden rounded-[24px] border border-white/[0.11] bg-white/[0.055] p-7 backdrop-blur-md"
                >
                  <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-50 blur-2xl ${v.glow}`} />
                  <p className="text-[0.7rem] font-semibold tracking-[0.08em] text-[#F5C418]">
                    {v.tag.toUpperCase()}
                  </p>
                  <h3 className="mt-3 font-serif text-xl font-medium text-[#fdfbf6]">{v.title}</h3>
                  <p className="mt-3.5 text-[0.92rem] leading-relaxed text-[#a9b7cc]">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative overflow-hidden bg-gradient-to-br from-[#101f36] to-[#070d18]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_420px_at_20%_20%,rgba(231,185,76,0.16),transparent_60%),radial-gradient(600px_420px_at_85%_80%,rgba(79,143,166,0.18),transparent_60%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-[#F5C418]">Connect</p>
              <h2 className="mt-3.5 font-serif text-3xl font-normal leading-[1.12] tracking-tight text-[#fdfbf6] sm:text-5xl">
                 connect and build something meaningful.
              </h2>
              <p className="mt-4.5 max-w-[50ch] text-base leading-relaxed text-[#a9b7cc]">
                Reach out through any of the channels below and begin a conversation about
                partnership, mentorship, leadership, or purpose-driven collaboration.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => window.open("https://wa.me/2348103469166", "_blank", "noopener,noreferrer")}
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#F5C418]/35 bg-[#F5C418]/10 px-4 py-2.5 text-sm font-medium text-[#F5C418] transition hover:bg-[#F5C418] hover:text-[#0e1c30]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0e1c30]/50">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="M20.25 12a8.25 8.25 0 1 1-15.9-3.06L3 21l6.24-1.32A8.25 8.25 0 0 1 20.25 12Z" />
                    <path d="M8.5 9.75c.2 2.3 3.45 5.55 5.75 5.75.9.08 1.75-.4 1.75-1.15 0-.4-.9-1.05-1.25-1.2-.3-.13-.6.15-.85.35-.25.2-.5.15-.85-.05a5.6 5.6 0 0 1-1.75-1.75c-.2-.35-.25-.6-.05-.85.2-.25.48-.55.35-.85-.15-.35-.8-1.25-1.2-1.25-.75 0-1.23.85-1.15 1.75Z" />
                  </svg>
                </span>
                WhatsApp
              </button>

              <button
                type="button"
                onClick={() => (window.location.href = "mailto:preciousakpoyibo@gmail.com")}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-[#eef1f6] transition hover:border-[#F5C418]/40 hover:text-[#F5C418]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0e1c30]/50">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0a2.25 2.25 0 0 0-2.25-2.25H4.5A2.25 2.25 0 0 0 2.25 6.75m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </span>
                Email
              </button>

              <button
                type="button"
                onClick={() => (window.location.href = "tel:+2348103469166")}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-[#eef1f6] transition hover:border-[#F5C418]/40 hover:text-[#F5C418]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0e1c30]/50">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.5 1.5 0 0 0-1.077-1.437l-3.85-1.1a1.5 1.5 0 0 0-1.514.399l-.955.955a11.25 11.25 0 0 1-6.019-6.02l.956-.955a1.5 1.5 0 0 0 .399-1.513l-1.1-3.85a1.5 1.5 0 0 0-1.437-1.078H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                  </svg>
                </span>
                Call
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#070d18] py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 lg:px-8">
          <span className="font-serif text-sm text-[#eef1f6]">Precious Yerindideke Akpoyibo</span>
          <span className="text-xs text-[#7688a3]">© 2026 · Engineer, leader, builder.</span>
        </div>
      </footer>
    </div>
  );
}