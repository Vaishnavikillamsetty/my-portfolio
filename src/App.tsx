import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  FileText,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Database,
  Layers,
  Award,
  GraduationCap,
  Briefcase,
  Mail,
  ChevronRight,
  X,
  Menu,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Shield,
  Server,
  Layout,
  Share2
} from "lucide-react";

// Fallback social icons using standard SVG components
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
// ==========================================
// TYPES & DATA DEFINITIONS
// ==========================================

interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  backend?: string;
  isHero?: boolean;
  isInternship?: boolean;
  problem: string;
  solution: string;
  features: string[];
  contribution: string;
  type: "featured" | "other";
}

const PROJECTS: Project[] = [
  {
    id: "payproof-ai",
    title: "PayProof AI",
    subtitle: "Evidence-First Dispute Defense",
    badge: "Razorpay AI Buildathon — AI Risk Manager",
    type: "featured",
    isHero: true,
    description:
      "An AI-assisted dispute defense prototype that combines evidence collection, deterministic policy rules, AI verification, completeness scoring, human-review routing, and audit logging.",
    tech: ["FastAPI", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "SQLAlchemy", "AI"],
    demo: "https://payproof-frontend.vercel.app/",
    github: "https://github.com/Vaishnavikillamsetty/payproof-ai",
    backend: "https://payproof-ai.onrender.com/",
    problem:
      "Merchant chargeback disputes are historically manual, fragmented, and vulnerable to evidence omissions, leading to unnecessary financial losses.",
    solution:
      "Engineered an automated dispute processing prototype that verifies evidence completeness using AI and deterministic validation pipelines before human sign-off.",
    features: [
      "Deterministic policy rule evaluation",
      "AI completeness scoring & automated verification",
      "Human-in-the-loop review routing system",
      "Immutable dispute audit logging & state management"
    ],
    contribution:
      "Architected the full-stack prototype including FastAPI endpoints, stateful PostgreSQL schema, and interactive React dashboard."
  },
  {
    id: "smartgriev",
    title: "SmartGriev",
    subtitle: "Smart Student Grievance & Accountability System",
    type: "featured",
    description:
      "A full-stack grievance management system designed around a hierarchical workflow from Student to HOD, Principal, and Domain Admin, with role-based access, status tracking, notifications, evidence uploads, and AI-powered insights.",
    tech: ["Node.js", "Express", "JavaScript", "SQLite", "JWT", "Google Generative AI", "Chart.js"],
    demo: "https://smart-student-grievance-redressal-s.vercel.app/",
    github: "https://github.com/Vaishnavikillamsetty/Smart-Student-Grievance-Redressal-System-SmartGriev-",
    problem:
      "Educational institutions lack transparent multi-tier grievance escalation protocols, causing administrative delays and lost feedback.",
    solution:
      "Built a hierarchical multi-role application enforcing rigid escalation permissions, evidence trails, and automated summary analytics.",
    features: [
      "Role-Based Access Control (Student, HOD, Principal, Admin)",
      "Automated escalation triggers & audit tracking",
      "AI-driven sentiment & priority insight summarization",
      "Analytics dashboards with Chart.js integration"
    ],
    contribution:
      "Designed backend database schema, middleware authorization layers, and frontend dashboard components."
  },
  {
    id: "ai-resume-builder",
    title: "AI-Driven Resume Builder",
    subtitle: "Dynamic CV Optimization Platform",
    type: "featured",
    description:
      "A full-stack resume builder with authentication, CRUD operations, database storage, real-time preview, PDF download, and Gemini-powered job description analysis and skill suggestions.",
    tech: ["Django", "HTML", "CSS", "JavaScript", "SQLite", "REST APIs", "Gemini API"],
    github: "https://github.com/Vaishnavikillamsetty/resume-builder",
    problem:
      "Job seekers struggle to format resumes cleanly and align technical keywords to specific job descriptions.",
    solution:
      "Developed a full-stack web tool utilizing Google Gemini API to analyze target job postings and offer dynamic keyword/skill recommendations.",
    features: [
      "Real-time reactive HTML/CSS preview & PDF export",
      "Gemini-powered job description gap analysis",
      "User authentication & cloud-persisted user profiles",
      "REST API backend architecture with Django"
    ],
    contribution:
      "Built the Django REST APIs, database models, client-side dynamic DOM updates, and Gemini API query pipeline."
  },
  {
    id: "ai-mock-interview",
    title: "AI-Powered Mock Interview Platform",
    subtitle: "Adaptive Technical Assessment Tool",
    type: "featured",
    description:
      "An AI-powered interview practice platform that dynamically generates technical interview questions and evaluates answers using Gemini AI.",
    tech: ["HTML", "JavaScript", "Tailwind CSS", "Google Apps Script", "Gemini API"],
    github: "https://github.com/Vaishnavikillamsetty/AI-Powered-Mock-Interview-Platform",
    problem:
      "Candidates lack dynamic, cost-free technical interview practice with tailored instant evaluation.",
    solution:
      "Built an adaptive interview app that generates domain-specific MCQs, grades response nuances, and guarantees question uniqueness.",
    features: [
      "Dynamic difficulty tiers (Easy, Medium, Hard)",
      "Duplicate question prevention logic",
      "Instant scoring and personalized technical feedback",
      "Lightweight serverless execution via Google Apps Script"
    ],
    contribution:
      "Programmed prompt engineering logic, non-repeating state management, and custom evaluation scoring routines."
  },
  {
    id: "scrc-communication-app",
    title: "SCRC Communication App",
    subtitle: "Internship Project",
    type: "featured",
    isInternship: true,
    description:
      "A React Native communication application developed during my Software Development Internship for real-time announcements and communication workflows.",
    tech: ["React Native", "Expo", "REST APIs", "Firebase", "Supabase", "ESP32 / ESP8266"],
    problem:
      "Smart City Research Center needed a cross-platform internal workflow for urgent broadcast notifications and hardware display integration.",
    solution:
      "Engineered a modular React Native application connected to real-time cloud datastores and physical IoT display nodes.",
    features: [
      "Real-time event broadcasting and status alerts",
      "Cross-platform support using Expo and React Native",
      "Embedded hardware sync with ESP32/ESP8266 LED boards",
      "Authentication and storage via Firebase and Supabase"
    ],
    contribution:
      "Developed native mobile UI modules, integrated REST APIs, and configured hardware communication layers."
  },
  {
    id: "railway-gate-control",
    title: "Automatic Railway Gate Control System",
    subtitle: "Embedded IoT Automation",
    type: "other",
    description:
      "An automated railway gate system using distance detection and servo motor control.",
    tech: ["Arduino Nano", "C++", "Ultrasonic Sensor", "Servo Motor"],
    github: "https://github.com/Vaishnavikillamsetty/Automatic-Railway-Gate-Control-System",
    problem:
      "Unmanned level crossings pose safety hazards due to delayed manual gate operation.",
    solution:
      "Programmed a micro-controller circuit that detects approaching trains automatically and actuates mechanical gates.",
    features: [
      "Real-time ultrasonic range sensing",
      "Precision servo motor gate positioning",
      "Low-latency response programmed in C++"
    ],
    contribution:
      "Designed circuit architecture, sensor calibration logic, and embedded C++ firmware."
  }
];

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "C", "C++", "JavaScript"]
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML5", "CSS3", "React.js", "React Native (Expo)", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Django", "Node.js", "FastAPI", "REST APIs", "Google Apps Script"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MySQL", "MongoDB", "SQLite", "Firebase", "Supabase"]
  },
  {
    title: "Tools & IoT",
    icon: Cpu,
    skills: ["Git", "GitHub", "Postman", "Android Studio", "Arduino IDE", "ESP32 / ESP8266"]
  },
  {
    title: "Concepts",
    icon: Layers,
    skills: ["DBMS", "OOP", "MVC", "Agile Software Development"]
  }
];

const CERTIFICATIONS = [
  "Generative AI",
  "Python",
  "Web Development",
  "Advanced UI Development",
  "NPTEL DBMS",
  "Joy of Computing Using Python",
  "Django",
  "AWS Academy Generative AI Foundations"
];

// ==========================================
// MAIN PORTFOLIO COMPONENT
// ==========================================

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mouse Glow Position
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    // Simulated loading transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Section Observer for Active Navbar State
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#08080a] text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 font-sans relative overflow-x-hidden">
      {/* Background Grid & Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-blue-600/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full" />
      </div>

      {/* Interactive Cursor Glow */}
      <div
        className="hidden md:block fixed pointer-events-none z-50 rounded-full w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-radial from-cyan-500/8 via-cyan-500/2 to-transparent transition-transform duration-75 ease-out"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      {/* Top Scroll Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Preloader Animation */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 bg-[#08080a] flex flex-col items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col items-center"
            >
              <div className="text-4xl md:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-400 mb-8">
                VAISHNAVI
              </div>
              <div className="w-48 h-[2px] bg-slate-800 relative overflow-hidden rounded-full">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent absolute"
                />
              </div>
              <p className="mt-4 text-xs font-mono text-slate-500 tracking-wider uppercase">
                Software Developer Portfolio
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STICKY NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#08080a]/80 border-b border-slate-800/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" onClick={(e) => {e.preventDefault(); scrollToSection("hero");}} className="flex items-center gap-2 transition-transform hover:scale-105">
          <img src="public/logo.jpg" alt="Vaishnavi Logo" className="h-8 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-400">
            {[
              { name: "About", id: "about" },
              { name: "Experience", id: "experience" },
              { name: "Projects", id: "projects" },
              { name: "Skills", id: "skills" },
              { name: "Achievements", id: "achievements" },
              { name: "Education", id: "education" },
              { name: "Contact", id: "contact" }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors relative py-1 hover:text-slate-100 ${
                  activeSection === link.id ? "text-cyan-400 font-semibold" : ""
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <FileText className="w-3.5 h-3.5" />
              RESUME
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 bg-[#0c0d12] border-b border-slate-800 z-30 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            {[
              { name: "About", id: "about" },
              { name: "Experience", id: "experience" },
              { name: "Projects", id: "projects" },
              { name: "Skills", id: "skills" },
              { name: "Achievements", id: "achievements" },
              { name: "Education", id: "education" },
              { name: "Contact", id: "contact" }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg font-medium text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-800/40"
              >
                {link.name}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 text-sm font-mono font-semibold text-cyan-400 border border-cyan-500/30 rounded-lg bg-cyan-500/10"
            >
              <FileText className="w-4 h-4" />
              DOWNLOAD RESUME
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-20">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center relative py-20">
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Top Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                SOFTWARE DEVELOPER
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1] mb-4">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-200 to-cyan-400">
                  Killamsetty Vaishnavi.
                </span>
              </h1>

              {/* Secondary Title */}
              <h2 className="text-xl sm:text-2xl font-medium text-slate-400 mb-6 font-mono">
                Full-Stack Developer
              </h2>

              {/* Concise Description */}
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                I build practical software, AI-powered applications, and real-world digital solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                >
                  View Projects
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-slate-700 hover:border-cyan-500/50 bg-slate-900/50 text-slate-200 font-semibold text-sm transition-all hover:bg-slate-800/50"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-10 flex items-center gap-6 pt-6 border-t border-slate-800/80 w-full">
                <a
                  href="https://github.com/Vaishnavikillamsetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm font-mono"
                >
                  <Github className="w-5 h-5" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vaishnavi-killamsetty-bb0517314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm font-mono"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </motion.div>

            {/* Right Interactive Tech Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="w-full max-w-md bg-slate-900/70 border border-slate-800 rounded-xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400" />
                
                {/* Code Panel Visual */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4 font-mono text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span>developer.ts</span>
                </div>

                <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-300">
                  <p><span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-emerald-300">'Killamsetty Vaishnavi'</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">roles</span>: [<span className="text-emerald-300">'Software Developer'</span>, <span className="text-emerald-300">'Full-Stack'</span>],</p>
                  <p className="pl-4"><span className="text-cyan-400">education</span>: <span className="text-emerald-300">'B.Tech IT (AITAM)'</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">internship</span>: <span className="text-emerald-300">'Smart City Research Center, IIIT-H'</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">focusAreas</span>: [<span className="text-emerald-300">'Web/Mobile'</span>, <span className="text-emerald-300">'AI APIs'</span>, <span className="text-emerald-300">'Databases'</span>],</p>
                  <p className="pl-4"><span className="text-cyan-400">status</span>: <span className="text-cyan-300">'Open to Software Roles'</span></p>
                  <p>&#125;;</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Active & Available
                  </span>
                  <span>B.Tech IT 2023–2027</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 border-t border-slate-800/40 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">01 / Profile</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-100 mb-8">About Me</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-6 text-slate-300 text-base leading-relaxed">
                <p>
                  I am a B.Tech Information Technology student at Aditya Institute of Technology and Management (AITAM) with practical software development experience through my internship and personal projects.
                </p>
                <p>
                  My hands-on experience spans full-stack web applications, AI-integrated workflow tools, cross-platform mobile app development, database optimization, and microcontroller embedded systems.
                </p>
              </div>

              {/* 4 Animated Highlight Cards */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Software Development Internship",
                    desc: "SCRC, IIIT Hyderabad — Mobile apps & REST APIs",
                    icon: Briefcase
                  },
                  {
                    title: "Full-Stack Projects",
                    desc: "End-to-end web architectures with React, Node, FastAPI & Django",
                    icon: Code2
                  },
                  {
                    title: "AI-Powered Applications",
                    desc: "Generative AI APIs, intelligent scoring, & dynamic synthesis",
                    icon: Sparkles
                  },
                  {
                    title: "Mobile + Embedded",
                    desc: "React Native mobile tools paired with hardware sensors",
                    icon: Cpu
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all"
                  >
                    <item.icon className="w-6 h-6 text-cyan-400 mb-3" />
                    <h3 className="font-semibold text-slate-200 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 border-t border-slate-800/40 bg-slate-950/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">02 / Industry Experience</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-100 mb-12">Experience</h2>

            {/* Timeline */}
            <div className="relative border-l border-slate-800 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-12">
              <div className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                <div className="p-6 sm:p-8 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-all backdrop-blur-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">Software Development Intern</h3>
                      <p className="text-sm font-mono text-cyan-400">
                        Smart City Research Center (SCRC), IIIT Hyderabad — Hyderabad
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        May 2026 – July 2026
                      </span>
                      <span className="px-3 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Completed Internship
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-300 mb-6 list-disc list-inside leading-relaxed">
                    <li>
                      Developed React Native / Expo application features connected via REST APIs to Firebase and Supabase backends.
                    </li>
                    <li>
                      Implemented Running Detection and Fall Detection modules as part of the Smart Living Monitoring (SLM) project.
                    </li>
                    <li>
                      Debugged the Crowd Monitoring Application by adding features, improving functionality, and testing application workflows.
                    </li>
                    <li>
                      Integrated real-time hardware displays using ESP32 / ESP8266 microcontrollers.
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                    {["React Native", "Expo", "REST APIs", "Firebase", "Supabase", "ESP32 / ESP8266", "IoT Sync"].map((tech, i) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/60 text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="py-24 border-t border-slate-800/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">03 / Engineering Portfolio</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-100">Selected Work</h2>
              </div>
            </div>

            {/* HERO PROJECT 1: PAYPROOF AI */}
            {(() => {
              const payProof = PROJECTS[0];
              return (
                <motion.div
                  key={payProof.id}
                  whileHover={{ y: -2 }}
                  className="mb-16 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 border border-cyan-500/30 p-6 sm:p-10 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)] group"
                >
                  <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-l from-cyan-500/20 to-transparent text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider rounded-bl-xl border-b border-l border-cyan-500/20">
                    {payProof.badge}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
                    <div className="lg:col-span-6 space-y-6">
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                        <Shield className="w-4 h-4" /> HERO PROJECT
                      </div>
                      <div>
                        <h3 className="text-3xl font-extrabold text-slate-100 tracking-tight">{payProof.title}</h3>
                        <p className="text-lg font-medium text-slate-400">{payProof.subtitle}</p>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {payProof.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {payProof.tech.map((t, idx) => (
                          <span key={idx} className="px-3 py-1 text-xs font-mono rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 pt-4">
                        {payProof.demo && (
                          <a
                            href={payProof.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
                          >
                            Live Demo <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {payProof.github && (
                          <a
                            href={payProof.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs hover:bg-slate-700 transition-colors"
                          >
                            GitHub <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <button
                          onClick={() => setSelectedProject(payProof)}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 hover:border-cyan-500/50 text-slate-300 font-bold text-xs transition-colors"
                        >
                          Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Placeholder Dashboard Visual for PayProof AI */}
                    <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-xl p-5 shadow-inner relative overflow-hidden font-mono text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-slate-400">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          PayProof AI Dispute Defense Dashboard
                        </span>
                        <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded">FastAPI Backend API</span>
                      </div>

                      <div className="space-y-3">
                        <div className="p-3 bg-slate-900/80 rounded border border-slate-800 flex items-center justify-between">
                          <div>
                            <p className="text-slate-200 font-semibold">Dispute ID: #DSP-89214</p>
                            <p className="text-[11px] text-slate-500">Merchant: E-Commerce Store</p>
                          </div>
                          <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                            Completeness: 94%
                          </span>
                        </div>

                        <div className="p-3 bg-slate-900/80 rounded border border-slate-800 space-y-2">
                          <div className="flex justify-between text-slate-400 text-[11px]">
                            <span>Deterministic Policy Check</span>
                            <span className="text-emerald-400">PASSED</span>
                          </div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full w-[94%]" />
                          </div>
                        </div>

                        <div className="p-3 bg-slate-900/80 rounded border border-slate-800 text-slate-400 text-[11px]">
                          <p className="text-cyan-400 font-semibold mb-1">&gt; AI Audit Trail Summary:</p>
                          <p>"Proof of delivery and customer IP telemetry verified against policy rules."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* OTHER FEATURED PROJECTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {PROJECTS.filter((p) => p.type === "featured" && !p.isHero).map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -4 }}
                  className="rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all group backdrop-blur-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-cyan-400">
                        {project.isInternship ? "Internship Project" : "Full-Stack Project"}
                      </span>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mb-4">{project.subtitle}</p>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-slate-800/80 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                      >
                        Details <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1"
                        >
                          Demo <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SMALLER OTHER PROJECTS SECTION */}
            <div className="pt-8 border-t border-slate-800/60">
              <h3 className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" /> Embedded & IoT Experiments
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.filter((p) => p.type === "other").map((project) => (
                  <div
                    key={project.id}
                    className="p-5 rounded-lg bg-slate-900/30 border border-slate-800/60 flex items-start justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-slate-200 text-sm mb-1">{project.title}</h4>
                      <p className="text-xs text-slate-400 leading-normal mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-400 p-1"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 border-t border-slate-800/40 bg-slate-950/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">04 / Technical Capabilities</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-100 mb-12">Technical Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <cat.icon className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-bold text-slate-200">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & CERTIFICATIONS */}
        <section id="achievements" className="py-24 border-t border-slate-800/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">05 / Honors & Learning</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-100 mb-12">Achievements</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Hackathon Achievement Card */}
              <div className="lg:col-span-6 p-8 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-slate-900/80 to-slate-950 border border-cyan-500/30 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    🏆 First Prize
                  </span>
                  <h3 className="text-2xl font-bold text-slate-100 mt-4 mb-2">
                    AITAM 7-Hour Build-A-Thon Hackathon
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-4">July 2025</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Awarded First Place for rapidly designing and prototyping an end-to-end full-stack software application within strict time constraints.
                  </p>
                </div>
              </div>

              {/* Certifications Grid */}
              <div className="lg:col-span-6 p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Certifications
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {CERTIFICATIONS.map((cert, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-800/40 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-24 border-t border-slate-800/40 bg-slate-950/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">06 / Background</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-100 mb-12">Education</h2>

            <div className="space-y-6 max-w-4xl">
              {/* B.Tech */}
              <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-bold text-slate-100">B.Tech – Information Technology</h3>
                  </div>
                  <p className="text-sm text-slate-400">Aditya Institute of Technology and Management (AITAM)</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    2023 – 2027
                  </span>
                  <p className="text-xs font-mono text-cyan-400 mt-2 font-semibold">CGPA: 7.28</p>
                </div>
              </div>

              {/* Intermediate */}
              <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/60 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-200">Intermediate – MPC</h3>
                  <p className="text-xs text-slate-400">Narayana Junior College</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-slate-400">83.2%</p>
                </div>
              </div>

              {/* SSC */}
              <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/60 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-200">SSC</h3>
                  <p className="text-xs text-slate-400">Narayana High School</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-slate-400">95.83%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 border-t border-slate-800/40 relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to Software Development Roles
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
              Let's build something useful.
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg mb-10">
              I'm open to software development, full-stack, and AI-oriented opportunities.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:contact@vaishnavikillamsetty.dev"
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-colors shadow-[0_0_25px_rgba(6,182,212,0.2)]"
              >
                <Mail className="w-4 h-4" /> Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/vaishnavi-killamsetty-bb0517314"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn
              </a>
              <a
                href="https://github.com/Vaishnavikillamsetty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm hover:bg-slate-800 transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/60 py-8 text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <div>© 2026 Killamsetty Vaishnavi. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Vaishnavikillamsetty"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vaishnavi-killamsetty-bb0517314"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a href="/resume.pdf" download className="hover:text-cyan-400 transition-colors">
              Resume
            </a>
          </div>
        </div>
      </footer>

      {/* DETAILED PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden my-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-100 p-1"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Project Breakdown</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">{selectedProject.title}</h3>
                <p className="text-sm font-mono text-slate-400">{selectedProject.subtitle}</p>
              </div>

              <div className="space-y-6 text-sm text-slate-300">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase mb-1">Problem</h4>
                  <p className="leading-relaxed bg-slate-950/50 p-3 rounded-lg border border-slate-800/60">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase mb-1">Solution</h4>
                  <p className="leading-relaxed bg-slate-950/50 p-3 rounded-lg border border-slate-800/60">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase mb-2">Key Features</h4>
                  <ul className="space-y-1.5 list-disc list-inside">
                    {selectedProject.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase mb-1">My Contribution</h4>
                  <p className="leading-relaxed">{selectedProject.contribution}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 text-cyan-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400"
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs hover:bg-slate-700"
                  >
                    GitHub Repository <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}