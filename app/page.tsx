"use client";

import Image from "next/image";
import { Fraunces, Inter } from "next/font/google";
import { Mail } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";

/* ------------------------------------------------------------------ */
/*  Fonts — an editorial display serif paired with a precise UI sans   */
/* ------------------------------------------------------------------ */

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

/* ------------------------------------------------------------------ */
/*  Content — copy sourced only from the approved site text            */
/* ------------------------------------------------------------------ */

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "LeadRight Africa", href: "#leadright-africa" },
  { label: "Work With Me", href: "#work-with-me" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { target: 300, suffix: "+", label: "Young people trained and engaged through LeadRight Africa" },
  { target: 7000, suffix: "+", label: "People mobilised for a major student gathering" },
  { target: 100, suffix: "+", label: "University students supported through school-fee initiatives" },
  { target: 300, suffix: "+", label: "Beneficiaries reached through welfare and community support initiatives" },
];

const services = [
  {
    title: "Leadership & Training",
    description:
      "Leadership development, capacity building, youth development, mentorship, and organisational training.",
  },
  {
    title: "Speaking & Mentorship",
    description:
      "Keynotes, conferences, workshops, panels, and mentorship around leadership, purpose, growth, faith, and career development.",
  },
  {
    title: "Creative Consulting & Events",
    description:
      "Creative strategy, event coordination, mobilisation, communications, publicity, and strategic execution.",
  },
  {
    title: "Civil Engineering",
    description:
      "Engineering, construction, infrastructure, project coordination, and site supervision opportunities.",
  },
];

const ventures = [
  {
    title: "Founder, LeadRight Africa",
    description: "Leadership development, capacity building, and youth empowerment.",
  },
  {
    title: "SpiritBreed Network",
    description: "Mentorship and faith development platform focused on building balanced individuals.",
  },
  {
    title: "Founder, Golden Media & Consulting",
    description: "Creative strategy, events, mobilisation, communications, and execution.",
  },
  {
    title: "CEO, Akpotech Engineering Systems",
    description: "Engineering, construction, infrastructure, and related professional services.",
  },
];

const leadRightPillars = [
  "Leadership Development & Training",
  "Youth Empowerment",
  "Mentorship & Community",
  "Schools & Campus Programmes",
  "Leadership Academy",
  "Institutional Leadership Development",
  "Conferences & Events",
];

const workWithMe = [
  {
    title: "Speaking",
    desc: "Keynotes, conferences, panels, workshops, and speaking engagements.",
    big: true,
  },
  {
    title: "Training",
    desc: "Leadership development, youth programmes, organisational training, and capacity-building sessions.",
  },
  {
    title: "Consulting",
    desc: "Creative strategy, leadership consulting, project support, event support, and strategic execution.",
  },
  {
    title: "Partnerships",
    desc: "Collaborations, institutional partnerships, sponsorships, and opportunities to build meaningful initiatives together.",
  },
  {
    title: "Events",
    desc: "Event strategy, coordination, mobilisation, publicity, and execution.",
  },
  {
    title: "Engineering Opportunities",
    desc: "Civil engineering, construction, infrastructure, project coordination, site supervision, and related professional opportunities.",
    big: true,
  },
];

const eventHighlights = [
  {
    src: "/images/events held/WhatsApp Image 2026-09-22 at 2.39.35 PM.jpeg",
    alt: "Event moment and audience engagement",
    title: "Book Launch",
    description: "A moment of purpose, inspiration, and reflection as the message behind the book was shared with a wider audience.",
  },
  {
    src: "/images/events held/WhatsApp Image 2026-09-22 at 2.39.36 PM.jpeg",
    alt: "Public event and leadership outreach",
    title: "One on One with Precious Akpoyibo",
    description: "A focused conversation on leadership, growth, purpose, discipline, and building a life of meaningful impact.",
  },
  {
    src: "/images/events held/WhatsApp Image 2026-09-22 at 2.39.36 PM (1).jpeg",
    alt: "Programme execution and event planning",
    title: "LeadLight Africa",
    description: "A leadership-driven initiative focused on vision, youth development, and practical empowerment for the next generation.",
  },
];

const galleryImages = [
  { src: "/images/program/7,000 Students Mobilized, Largest student gathering in Bayelsa state.jpeg", alt: "Speaking engagements", size: "tall" },
  { src: "/images/leadright africa images/WhatsApp Image 2026-09-22 at 2.37.50 PM (1).jpeg", alt: "Leadership programmes", size: "normal" },
  { src: "/images/Speaking at Conferences and seminars/WhatsApp Image 2026-09-22 at 2.39.12 PM.jpeg", alt: "LeadRight Africa activities", size: "wide" },
  { src: "/images/events held/WhatsApp Image 2026-09-22 at 2.39.35 PM.jpeg", alt: "Conferences and events", size: "normal" },
  { src: "/images/person headshot images/IMG_0047.PNG", alt: "Professional appearances", size: "normal" },
  { src: "/images/leadright africa images/WhatsApp Image 2026-09-22 at 2.37.50 PM.jpeg", alt: "Engineering and project experiences", size: "tall" },
  { src: "/images/events held/WhatsApp Image 2026-09-22 at 2.39.36 PM (1).jpeg", alt: "Community initiatives", size: "wide" },
  { src: "/images/Speaking at Conferences and seminars/WhatsApp Image 2026-09-22 at 2.38.49 PM (1).jpeg", alt: "Collaborations", size: "normal" },
];

/* ------------------------------------------------------------------ */
/*  Small hooks / helpers                                              */
/* ------------------------------------------------------------------ */

function usePrefersReducedMotion() {
  const ref = useRef(false);
  useEffect(() => {
    ref.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);
  return ref;
}

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? Math.min(1, doc.scrollTop / scrollable) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return progress;
}

function CountUpValue({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const duration = 1500;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span className="tabular-nums">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

/**
 * A tactile primary control: nudges toward the cursor within a small
 * radius, and settles back on leave. No-ops under reduced motion.
 */
function MagneticButton({
  className = "",
  children,
  ...props
}: ComponentProps<"a">) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <a
      ref={ref}
      {...props}
      onMouseMove={(e) => {
        if (reducedMotion.current || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setOffset({
          x: (e.clientX - rect.left - rect.width / 2) * 0.22,
          y: (e.clientY - rect.top - rect.height / 2) * 0.32,
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      className={`${className} inline-flex items-center justify-center transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out will-change-transform`}
    >
      {children}
    </a>
  );
}

function StatBlock({
  target,
  suffix,
  label,
  first,
}: {
  target: number;
  suffix: string;
  label: string;
  first?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  return (
    <div
      ref={ref}
      className={`border-white/10 pt-8 sm:pl-8 sm:pt-0 ${first ? "sm:border-l-0 sm:pl-0" : "sm:border-l"}`}
    >
      <div className="relative h-px w-12 overflow-hidden bg-white/15">
        <span
          className={`absolute inset-y-0 left-0 bg-[#C9A24A] transition-[width] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            inView ? "w-full" : "w-0"
          }`}
        />
      </div>
      <div className="font-display mt-6 text-5xl font-light text-white sm:text-6xl">
        <CountUpValue target={target} suffix={suffix} inView={inView} />
      </div>
      <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-[#8FA3B8]">{label}</p>
    </div>
  );
}

function Underline({ children }: { children: ReactNode }) {
  return <span className="underline-offset-4 decoration-1 group-hover:underline">{children}</span>;
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [heroMounted, setHeroMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  const navRailRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const measure = () => {
      const el = navRefs.current.get(activeSection);
      const rail = navRailRef.current;
      if (el && rail) {
        const elRect = el.getBoundingClientRect();
        const railRect = rail.getBoundingClientRect();
        setIndicator({ left: elRect.left - railRect.left, width: elRect.width, ready: true });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeSection]);

  return (
    <div
      className={`${fraunces.variable} ${inter.variable} min-h-screen bg-[#0A0D12] text-[#E7ECF3] selection:bg-[#C9A24A] selection:text-[#0A0D12]`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <style jsx global>{`
        .font-display {
          font-family: var(--font-display), Georgia, "Times New Roman", serif;
        }
        @keyframes riseIn {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes softScale {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .rise-in {
          animation: riseIn 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .scale-in {
          animation: softScale 1.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        a:focus-visible,
        button:focus-visible {
          outline: 2px solid #c9a24a;
          outline-offset: 3px;
          border-radius: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          .rise-in,
          .scale-in {
            animation: none !important;
          }
        }
      `}</style>

      {/* ---------------------------------------------------------------- Scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full bg-[#C9A24A]"
          style={{ width: `${progress * 100}%`, transition: "width 120ms linear" }}
        />
      </div>

      {/* ---------------------------------------------------------------- Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-white/10 bg-[#0A0D12]/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-5 lg:px-10">
          <a href="#home" className="flex flex-col leading-none">
            <span className="font-display text-[1.15rem] tracking-tight text-white">Precious Akpoyibo</span>
          </a>

          <div ref={navRailRef} className="relative hidden items-center gap-9 text-[0.85rem] text-[#B9C4D4] md:flex">
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-1 h-px bg-[#C9A24A] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.ready ? 1 : 0,
              }}
            />
            {navItems.map((item) => (
              <a
                key={item.label}
                ref={(node) => {
                  if (node) navRefs.current.set(item.href, node);
                }}
                href={item.href}
                className={`relative py-1 transition-colors duration-300 hover:text-white ${
                  activeSection === item.href ? "text-white" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-[#11161C] md:hidden"
          >
            <span className={`h-px w-5 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-5 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0A0D12] px-6 py-6 shadow-[0_18px_35px_rgba(0,0,0,0.45)] md:hidden">
            <nav className="flex flex-col gap-4 text-base text-[#B9C4D4]">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ---------------------------------------------------------------- 1. Home / Hero */}
      <section id="home" className="relative overflow-hidden px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        {/* Mobile-only full-bleed portrait behind the hero text */}
        <div aria-hidden className="absolute inset-0 lg:hidden">
          <Image
            src="/images/person headshot images/IMG_0047.PNG"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D12]/25 via-[#0A0D12]/70 to-[#0A0D12]" />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#C9A24A]/10 blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-[#2F5D57]/25 blur-[130px]"
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h1 className="font-display text-5xl font-light leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-[4.6rem]">
              <span className="block overflow-hidden pb-1">
                <span
                  className={`inline-block ${heroMounted ? "rise-in" : "opacity-0"}`}
                  style={{ animationDelay: "0.05s" }}
                >
                  Precious
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span
                  className={`inline-block italic ${heroMounted ? "rise-in" : "opacity-0"}`}
                  style={{ animationDelay: "0.18s" }}
                >
                  Akpoyibo
                </span>
              </span>
            </h1>

            <p
              className={`mt-6 max-w-[46ch] text-lg text-[#C9A24A] ${heroMounted ? "rise-in" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              Leadership Advocate · Civil Engineer · Global Speaker · Creative Consultant
            </p>

            <p
              className={`mt-8 max-w-[50ch] text-xl leading-relaxed text-white/90 ${heroMounted ? "rise-in" : "opacity-0"}`}
              style={{ animationDelay: "0.52s" }}
            >
              I help people, organisations, and young leaders grow, lead, and execute better.
            </p>

            <p
              className={`mt-5 max-w-[54ch] text-base leading-relaxed text-[#B9C4D4] ${heroMounted ? "rise-in" : "opacity-0"}`}
              style={{ animationDelay: "0.62s" }}
            >
              Whether you need leadership training, speaking, strategic support, creative execution, or
              professional engineering services, I help turn ideas and potential into meaningful results.
            </p>

            <div
              className={`mt-10 flex flex-wrap gap-4 ${heroMounted ? "rise-in" : "opacity-0"}`}
              style={{ animationDelay: "0.76s" }}
            >
              <MagneticButton
                href="#work-with-me"
                className="rounded-full bg-[#C9A24A] px-7 py-3.5 text-sm font-medium text-[#0A0D12] hover:bg-[#D9B461]"
              >
                Work With Me
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm text-white hover:border-[#C9A24A]/60 hover:text-[#C9A24A]"
              >
                Book Me to Speak
              </MagneticButton>
            </div>
          </div>

          <div className={`relative hidden lg:block ${heroMounted ? "scale-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <div className="overflow-hidden rounded-[2px] border border-white/10 bg-[#10151A] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
              <div className="aspect-[4/5] w-full">
                <Image
                  src="/images/person headshot images/IMG_2457.JPG.jpeg"
                  alt="Precious Akpoyibo portrait"
                  width={900}
                  height={1100}
                  priority
                  className="h-full w-full object-contain object-center grayscale-[10%] transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-3 -right-3 h-full w-full rounded-[2px] border border-[#C9A24A]/25"
            />
          </div>
        </div>
      </section>

      <div className={`mt-4 block px-6 lg:hidden ${heroMounted ? "scale-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
        <div className="relative mx-auto max-w-[22rem] p-3">
          <div className="absolute inset-0 rounded-[2px] border border-[#C9A24A]/30" />
          <div className="absolute inset-3 rounded-[2px] border border-white/15" />
          <div className="relative overflow-hidden border border-white/10 bg-[#10151A] shadow-[0_30px_50px_-30px_rgba(0,0,0,0.8)]">
            <div className="aspect-[4/5] w-full">
              <Image
                src="/images/person headshot images/IMG_2457.JPG.jpeg"
                alt="Precious Akpoyibo portrait"
                width={900}
                height={1100}
                priority
                className="h-full w-full object-cover object-center grayscale-[10%] transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- 2. About */}
      <section id="about" className="bg-[#EEF2F1] px-6 py-28 text-[#10151A] lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="max-w-[15ch] font-display text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl">
              Building People. Building Ideas. Building Impact.
            </h2>
            <div className="mt-8 overflow-hidden rounded-[2px] bg-[#E8ECE9]">
              <div className="aspect-[5/6] w-full">
                <Image
                  src="/images/leadright africa images/WhatsApp Image 2026-09-22 at 2.37.49 PM.jpeg"
                  alt="Precious in leadership and speaking context"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </div>
          </div>

          <div className="space-y-7 pt-2 lg:pt-3">
            <p className="max-w-[62ch] text-xl leading-relaxed text-[#10151A]/85">
              Precious Yerindideke Akpoyibo, popularly called Precious Akpoyibo, is a Leadership Advocate,
              Civil Engineer, Global Speaker, and Creative Consultant passionate about helping people and
              organisations grow, lead, and execute better.
            </p>
            <p className="max-w-[60ch] text-base leading-relaxed text-[#10151A]/70">
              His journey is shaped by a deep faith in God and a conviction that every person has been given
              purpose, responsibility, and the capacity to make a difference.
            </p>
            <p className="max-w-[60ch] text-base leading-relaxed text-[#10151A]/70">
              He believes leadership is not simply about position or influence, but about service, character,
              responsibility, and impact.
            </p>
            <p className="max-w-[60ch] text-base leading-relaxed text-[#10151A]/70">
              With a background in Civil Engineering and experience across leadership development, public
              speaking, youth empowerment, creative strategy, and event execution, Precious brings together
              technical thinking, leadership, creativity, and faith to solve problems and build meaningful
              platforms.
            </p>
            <p className="max-w-[60ch] text-base leading-relaxed text-[#10151A]/70">
              Through initiatives such as LeadRight Africa and his wider work, he is building people,
              developing leaders, creating opportunities, and helping young people move from potential to
              purposeful action.
            </p>
            <p className="max-w-[52ch] font-display text-2xl italic leading-snug text-[#10151A]">
              Grow better. Lead better. Build better.
            </p>
            <a
              href="#builder"
              className="group inline-flex items-center gap-2 border-b border-[#10151A]/30 pb-1 text-sm font-medium text-[#10151A] transition-colors hover:border-[#2F5D57] hover:text-[#2F5D57]"
            >
              <Underline>Learn More About Precious</Underline>
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- 3. What I Do */}
      <section id="what-i-do" className="bg-[#0A0D12] px-6 py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <h2 className="max-w-[11ch] font-display text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl">
                What I do
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-t border-white/10">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group grid gap-3 py-8 transition-colors duration-300 sm:grid-cols-[1fr_1.4fr] sm:items-baseline sm:gap-8"
                >
                  <h3 className="flex items-baseline gap-4 font-display text-2xl text-white transition-transform duration-300 group-hover:translate-x-1.5 sm:text-[1.7rem]">
                    <span
                      aria-hidden
                      className="h-px w-0 bg-[#C9A24A] transition-all duration-300 group-hover:w-4"
                    />
                    {service.title}
                  </h3>
                  <p className="max-w-[52ch] text-base leading-relaxed text-[#B9C4D4]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-10">
            <MagneticButton
              href="#work-with-me"
              className="rounded-full bg-[#C9A24A] px-7 py-3.5 text-sm font-medium text-[#0A0D12] hover:bg-[#D9B461]"
            >
              Work With Me
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- 4. Selected Impact */}
      <section id="impact" className="bg-[#12161F] px-6 py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-[16ch] font-display text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl">
            What I&rsquo;ve Helped Build
          </h2>

          <div className="mt-12 grid gap-x-8 gap-y-14 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, i) => (
              <StatBlock key={item.label} {...item} first={i === 0} />
            ))}
          </div>

          <div className="mt-14">
            <a
              href="#gallery"
              className="inline-flex rounded-full border border-white/15 px-7 py-3.5 text-sm text-white transition-colors duration-300 hover:border-[#C9A24A]/60 hover:text-[#C9A24A]"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- 5. Builder & Founder */}
      <section id="builder" className="bg-[#0A0D12] px-6 py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <h2 className="max-w-[16ch] font-display text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl">
                Building Platforms Beyond Myself
              </h2>
              <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-[#8FA3B8]">
                Precious is also the founder behind initiatives and businesses working across leadership
                development, creative consulting, media, events, engineering, and professional services.
              </p>
              <a
                href="#leadright-africa"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm text-white transition-colors duration-300 hover:border-[#C9A24A]/60 hover:text-[#C9A24A]"
              >
                Explore My Ventures
              </a>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[2px] bg-white/10 sm:grid-cols-3">
              {ventures.map((venture) => (
                <article
                  key={venture.title}
                  className="group relative bg-[#12161F] p-7 transition-colors duration-300 hover:bg-[#161B25]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px scale-x-0 bg-[#C9A24A] transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                  <h3 className="font-display text-xl leading-snug text-white">{venture.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#8FA3B8]">{venture.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- 6. LeadRight Africa */}
      <section id="leadright-africa" className="bg-[#EEF2F1] px-6 py-28 text-[#10151A] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm text-[#3E6E64]">Founder, LeadRight Africa</p>
              <h2 className="mt-4 max-w-[14ch] font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                Raising Leaders. Inspiring Change.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#10151A]/80">
                LeadRight Africa is a leadership development and youth empowerment platform committed to
                raising responsible, competent, and influential leaders.
              </p>
              <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-[#10151A]/68">
                Through leadership education, training, mentorship, capacity building, and practical
                opportunities, LeadRight helps young people and emerging leaders develop the character,
                skills, confidence, and capacity required to lead and create meaningful impact.
              </p>

              <h3 className="mt-10 font-display text-xl text-[#10151A]">What We Do</h3>
              <ul className="mt-5 grid gap-x-6 gap-y-3 text-sm text-[#10151A]/75 sm:grid-cols-2">
                {leadRightPillars.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-t border-[#10151A]/10 pt-3">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#3E6E64]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-[2px] bg-[#E8ECE9]">
              <div className="aspect-[4/3] w-full">
                <Image
                  src="/images/leadright africa images/WhatsApp Image 2026-09-22 at 2.37.51 PM.jpeg"
                  alt="LeadRight Africa programme"
                  width={1200}
                  height={850}
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2px] border border-[#10151A]/10 bg-white p-8">
              <p className="text-sm text-[#3E6E64]">Our Impact</p>
              <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-[#10151A]/78">
                Through LeadRight Africa, we have trained and engaged 300+ young people, creating spaces for
                leadership development, learning, mentorship, and purposeful action.
              </p>
            </div>

            <div className="rounded-[2px] bg-[#10151A] p-8 text-white">
              <p className="text-sm text-[#C9A24A]">LeadRight Africa Academy</p>
              <p className="mt-4 text-sm leading-relaxed text-[#B9C4D4]">
                A practical leadership development platform designed to equip emerging leaders with the
                knowledge, character, and skills required to lead effectively.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#C9A24A] underline-offset-4 hover:underline"
              >
                Explore LeadRight Africa →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- 6b. Jamie Pajoel International */}
      <section className="bg-[#0A0D12] px-6 py-28 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2px] bg-[#111A1F]">
            <div className="aspect-[4/5] w-full">
              <Image
                src="/images/PRESIDENT JAMIE PAJOEL INTERNATIONAL , BAYELSA CHAPTER.jpeg"
                alt="Precious Akpoyibo as President of Jamie Pajoel International, Bayelsa Chapter"
                width={1200}
                height={1000}
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-[#C9A24A]">Leadership</p>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl">
              President, Jamie Pajoel International
              <br />
              Bayelsa Chapter
            </h2>
            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-[#B9C4D4]">
              Precious Akpoyibo serves as President of Jamie Pajoel International, Bayelsa Chapter, where he
              leads a vision rooted in leadership development, capacity building, servant leadership, and
              meaningful impact across communities and young people.
            </p>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-[#B9C4D4]">
              Through this role, he is helping create a stronger culture of responsibility, mentorship, and
              purposeful leadership in Bayelsa State and beyond — building networks that develop people while
              creating practical opportunities for growth and service.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- 7. Book */}
      <section id="book" className="bg-[#EEF2F1] px-6 py-28 text-[#10151A] lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="overflow-hidden rounded-[2px] bg-[#E8ECE9] shadow-[0_30px_60px_-30px_rgba(16,21,26,0.35)]">
            <div className="aspect-[3/4] w-full">
              <Image
                src="/images/i-can-age-is-just-a-numbe-selar.com-6a08bf3951948.jpeg"
                alt="I CAN: Age is Just a Number book cover"
                width={900}
                height={1200}
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-[#3E6E64]">Book</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              I CAN: Age is Just a Number; Character and Discipline Are Everything
            </h2>
            <p className="mt-6 text-lg text-[#10151A]/80">
              by <span className="font-semibold text-[#10151A]">Akpoyibo Precious Yerindideke</span>
            </p>

            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-[#10151A]/72">
              Are you young or old with a passion for right leadership but feels limited by your age,
              background, or current situation? This book is your mirror and your launchpad.
            </p>

            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-[#10151A]/72">
              In <span className="italic">I CAN</span>, Precious Akpoyibo — Civil Engineer, Leadership Coach,
              Public Speaker, Author, and Founder of LeadRight Africa Academy — shares powerful, practical
              wisdom from his own journey of leading while still a student, balancing academics, ministry, and
              purpose.
            </p>

            <div className="mt-6 space-y-3 text-base leading-relaxed text-[#10151A]/72">
              <p>
                <span className="font-semibold text-[#10151A]">What You Will Learn:</span>
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Why leadership has no age limit</li>
                <li>How to put Purpose before Desire</li>
                <li>Building the "I CAN" mindset</li>
                <li>The power of Sincerity as real leadership strength</li>
                <li>Growing in Quiet Time, Discipline, and Character</li>
                <li>Leading while still learning, handling failure, and building legacy</li>
              </ul>
            </div>

            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-[#10151A]/72">
              Filled with real-life stories, biblical principles, historical examples, and reflective questions,
              this book will challenge and equip you to stop waiting and start leading right where you are.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton
                href="https://selar.com/sp4q952v97"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#10151A] px-7 py-3.5 text-sm font-medium text-white hover:bg-[#1B222B]"
              >
                Get the Book
              </MagneticButton>
              <a
                href="#contact"
                className="rounded-full border border-[#10151A]/20 px-7 py-3.5 text-sm font-medium text-[#10151A] transition-colors duration-300 hover:border-[#3E6E64] hover:text-[#3E6E64]"
              >
                Book Me to Speak
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- 8. Work With Me */}
      <section id="work-with-me" className="bg-[#0A0D12] px-6 py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 className="max-w-[13ch] font-display text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl">
                Let&rsquo;s Work Together
              </h2>
              <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-[#B9C4D4]">
                Have an opportunity, project, or idea you&rsquo;d like to discuss?
              </p>
              <p className="mt-4 max-w-[44ch] text-base leading-relaxed text-[#B9C4D4]">
                I&rsquo;m open to working with individuals, organisations, brands, institutions, and teams
                across leadership, creative, engineering, and development-focused opportunities.
              </p>
              <p className="mt-8 text-sm text-[#8FA3B8]">You Can Contact Me For</p>
              <MagneticButton
                href="#contact"
                className="mt-4 rounded-full bg-[#C9A24A] px-7 py-3.5 text-sm font-medium text-[#0A0D12] hover:bg-[#D9B461]"
              >
                Start a Conversation
              </MagneticButton>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {workWithMe.map((item) => (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-[2px] border border-white/10 bg-[#12161F] p-6 transition-colors duration-300 hover:bg-[#161B25] ${
                    item.big ? "sm:col-span-2" : ""
                  }`}
                >
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-px scale-y-0 bg-[#C9A24A] transition-transform duration-300 ease-out group-hover:scale-y-100"
                    style={{ transformOrigin: "top" }}
                  />
                  <h3 className="font-display text-xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#8FA3B8]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- 8. Events */}
      <section id="events" className="bg-[#11161C] px-6 py-28 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#C9A24A]">Events</p>
              {/* <h2 className="mt-3 max-w-[12ch] font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                Events that move people.
              </h2> */}
            </div>
            <p className="max-w-[42ch] text-base leading-relaxed text-[#B9C4D4]">
              From community engagements to leadership gatherings and large-scale public programmes, each event is built to connect people, create momentum, and produce real outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {eventHighlights.map((event) => (
              <article key={event.title} className="overflow-hidden rounded-[2px] border border-white/10 bg-[#121A21]">
                <div className="aspect-[4/5] overflow-hidden bg-[#1B232A]">
                  <Image
                    src={event.src}
                    alt={event.alt}
                    width={900}
                    height={1100}
                    className="h-full w-full object-contain object-center transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-white">{event.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#B9C4D4]">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- 9. Gallery */}
      <section id="gallery" className="bg-[#EEF2F1] px-6 py-28 text-[#10151A] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-[14ch] font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Moments &amp; Milestones
          </h2>

          <div className="mt-12 grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={`${image.alt}-${index}`}
                className={`group relative overflow-hidden rounded-[2px] bg-[#DDE5E3] ${
                  image.size === "tall" ? "row-span-2" : image.size === "wide" ? "col-span-2" : ""
                }`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="h-full w-full object-contain object-center p-2 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-xs leading-snug text-white">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- 10. Contact */}
      <section id="contact" className="bg-[#12161F] px-6 py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 border-t border-white/10 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="max-w-[15ch] font-display text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl">
                Let&rsquo;s Build Something Meaningful
              </h2>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-[#B9C4D4]">
                For speaking, training, consulting, partnerships, events, engineering opportunities, or other
                professional enquiries, get in touch.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <MagneticButton
                  href="mailto:Preciousyerindideke@gmail.com"
                  className="rounded-full bg-[#C9A24A] px-6 py-3 text-sm font-medium text-[#0A0D12] hover:bg-[#D9B461]"
                >
                  Work With Me
                </MagneticButton>
                <MagneticButton
                  href="https://wa.me/2349051953818"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm text-white hover:border-[#C9A24A]/60 hover:text-[#C9A24A]"
                >
                  WhatsApp
                </MagneticButton>
              </div>
            </div>

            {/* Connect With Me — icon-only row. No text/handles shown; each icon links out on click. */}
            <div className="flex flex-col items-start gap-6 border-t border-white/10 pt-8 lg:items-end lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
              <p className="text-sm text-[#8FA3B8] lg:text-right">Connect With Me</p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:Preciousyerindideke@gmail.com"
                  aria-label="Email Precious Akpoyibo"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#B9C4D4] transition-colors duration-300 hover:border-[#C9A24A]/60 hover:text-[#C9A24A]"
                >
                  <Mail className="h-5 w-5" strokeWidth={1.75} />
                </a>
                <a
                  href="https://wa.me/2349051953818"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Message on WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#B9C4D4] transition-colors duration-300 hover:border-[#C9A24A]/60 hover:text-[#C9A24A]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.485 1.34 5.003L2 22l5.116-1.341a9.96 9.96 0 0 0 4.888 1.245h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.671-1.04-5.182-2.929-7.07a9.933 9.933 0 0 0-7.072-2.834zm5.842 15.84a8.29 8.29 0 0 1-5.842 2.417h-.003a8.276 8.276 0 0 1-4.222-1.156l-.303-.18-3.037.797.81-2.96-.198-.304a8.267 8.267 0 0 1-1.267-4.417c0-4.573 3.722-8.294 8.298-8.294a8.24 8.24 0 0 1 5.868 2.432 8.234 8.234 0 0 1 2.428 5.866 8.284 8.284 0 0 1-2.532 5.799z" />
                  </svg>
                </a>
                <a
                  href="https://ng.linkedin.com/in/precious-akpoyibo-481697341"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#B9C4D4] transition-colors duration-300 hover:border-[#C9A24A]/60 hover:text-[#C9A24A]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/precious_akpoyibo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram profile"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#B9C4D4] transition-colors duration-300 hover:border-[#C9A24A]/60 hover:text-[#C9A24A]"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@PreciousAkpoyibo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube channel"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#B9C4D4] transition-colors duration-300 hover:border-[#C9A24A]/60 hover:text-[#C9A24A]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0A0D12] py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 lg:px-10">
          <span className="font-display text-lg text-white">Precious Akpoyibo</span>
          <span className="text-xs text-[#8FA3B8]">
            Leadership Advocate · Civil Engineer · Global Speaker · Creative Consultant
          </span>
        </div>
      </footer>
    </div>
  );
}