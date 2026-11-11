"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// =========================================
// 1. DICTIONNAIRE DE TRADUCTION
// =========================================
const translations = {
  FR: {
    nav: { home: "Accueil", about: "À propos", education: "Formation", experience: "Expérience", expertise: "Expertise", projects: "Projets", contact: "Me contacter" },
    hero: {
      badge: "Développeur Full-Stack",
      title1: "I build digital",
      title2: "experiences",
      title3: "that matter.",
      desc: "Je conçois et développe des expériences digitales modernes, en combinant design, technologie et performance. Du frontend au backend, je transforme les idées en solutions concrètes.",
      btnProjects: "Découvrir mes projets",
      btnAbout: "En savoir plus",
      qualif: "Qualification",
      qualifVal: "Programmer Engineer",
      approach: "Approche",
      approachVal: "Design & Performance"
    },
    about: {
      label: "01. À propos",
      title: "La technologie ne se résume pas au code. C'est une façon de résoudre des problèmes.",
      p1: "Je suis MEDARD BIEMBE, Programmer Engineer et développeur Full-Stack. Diplômé de la Belarusian National Technical University en Information Systems and Technologies, j'ai acquis une base solide en programmation, systèmes informatiques et gestion des données.",
      p2: "Mon parcours combine une formation technique en électronique industrielle, des études universitaires en informatique et des expériences professionnelles dans les domaines de l'informatique et de la gestion commerciale.",
      link: "Travaillons ensemble"
    },
    education: {
      label: "02. Formation",
      title: "Parcours académique.",
      desc: "Mon parcours académique m'a donné une base technique solide en électronique, informatique et systèmes d'information."
    },
    experience: {
      label: "03. Carrière",
      title: "Expérience & Parcours.",
      desc: "Mon parcours professionnel combine expérience technique, résolution de problèmes et opérations commerciales. Chaque rôle m'a aidé à développer une meilleure compréhension de la technologie et de ses applications pratiques."
    },
    expertise: {
      label: "04. Expertise",
      title: "Ce que j'apporte.",
      items: [
        { title: "Frontend", desc: "Des interfaces modernes, rapides, accessibles et responsives.", tools: "React · Next.js · TypeScript" },
        { title: "Backend", desc: "Des architectures fiables, sécurisées et évolutives.", tools: "Node.js · Python · C# · Django" },
        { title: "Database & API", desc: "Gestion des données, intégrations et conception d'API.", tools: "PostgreSQL · REST · SQLite" }
      ]
    },
    skills: { label: "05. Technologies", title: "Les outils que j'utilise." },
    projects: {
      label: "06. Portfolio",
      title: "Travaux sélectionnés.",
      desc: "Une sélection de projets démontrant mes compétences en développement frontend et backend.",
      codeBtn: "Code",
      demoBtn: "Voir le site"
    },
    contact: {
      label: "07. Contact",
      title1: "Un projet en tête ?",
      title2: "Construisons-le.",
      desc: "Je suis ouvert aux opportunités professionnelles, aux collaborations et aux projets intéressants. N'hésitez pas à me contacter.",
      emailLabel: "Email principal",
      emailBtn: "Envoyer un message",
      finalBtn: "Travaillons ensemble"
    },
    footer: { rights: "Tous droits réservés." }
  },
  EN: {
    nav: { home: "Home", about: "About", education: "Education", experience: "Experience", expertise: "Expertise", projects: "Projects", contact: "Contact me" },
    hero: {
      badge: "Full-Stack Developer",
      title1: "I build digital",
      title2: "experiences",
      title3: "that matter.",
      desc: "I design and develop modern digital experiences, combining design, technology, and performance. From frontend to backend, I turn ideas into concrete solutions.",
      btnProjects: "View my projects",
      btnAbout: "Learn more",
      qualif: "Qualification",
      qualifVal: "Programmer Engineer",
      approach: "Approach",
      approachVal: "Design & Performance"
    },
    about: {
      label: "01. About me",
      title: "Technology is not just about code. It's about solving problems.",
      p1: "I am MEDARD BIEMBE, a Programmer Engineer and Full-Stack developer. A graduate of the Belarusian National Technical University in Information Systems and Technologies, I have acquired a solid foundation in programming, computer systems, and data management.",
      p2: "My journey combines technical training in industrial electronics, university studies in computer science, and professional experiences in IT and business management.",
      link: "Let's work together"
    },
    education: {
      label: "02. Education",
      title: "Academic background.",
      desc: "My academic journey has given me a strong technical foundation in electronics, computer science, and information systems."
    },
    experience: {
      label: "03. Career",
      title: "Experience & Journey.",
      desc: "My professional journey combines technical experience, problem-solving, and business operations. Each role has helped me develop a broader understanding of technology and its practical applications."
    },
    expertise: {
      label: "04. Expertise",
      title: "What I bring to the table.",
      items: [
        { title: "Frontend", desc: "Modern, fast, accessible, and responsive interfaces.", tools: "React · Next.js · TypeScript" },
        { title: "Backend", desc: "Reliable, secure, and scalable architectures.", tools: "Node.js · Python · C# · Django" },
        { title: "Database & API", desc: "Data management, integrations, and API design.", tools: "PostgreSQL · REST · SQLite" }
      ]
    },
    skills: { label: "05. Technologies", title: "Tools I work with." },
    projects: {
      label: "06. Portfolio",
      title: "Selected work.",
      desc: "A selection of projects demonstrating my frontend and backend development skills.",
      codeBtn: "Code",
      demoBtn: "View website"
    },
    contact: {
      label: "07. Contact",
      title1: "Have a project in mind?",
      title2: "Let's build it.",
      desc: "I'm open to professional opportunities, collaborations, and interesting projects. Feel free to get in touch.",
      emailLabel: "Primary email",
      emailBtn: "Send a message",
      finalBtn: "Let's work together"
    },
    footer: { rights: "All rights reserved." }
  }
};

// =========================================
// 2. DONNÉES STATIQUES
// =========================================
const skills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Node.js", "Python", "Django", "PHP", "C#",
  "PostgreSQL", "SQLite", "MongoDB", "Tailwind CSS",
  "Git", "REST API"
];

const projects = [
  {
    number: "01",
    name: "Voyageur X",
    type: "FULL-STACK & AI",
    descriptionFR: "Application ferroviaire complète avec achat de billets, authentification JWT, génération de PDF et un chatbot intelligent basé sur TinyLlama.",
    descriptionEN: "Complete railway application with ticket purchasing, JWT authentication, PDF generation, and an intelligent chatbot based on TinyLlama.",
    stack: ["Django", "DRF", "React", "SQLite", "JWT", "TinyLlama"],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/medardbiembe",
    demo: "#",
  },
  {
    number: "02",
    name: "Task Management App",
    type: "FRONTEND DEVELOPMENT",
    descriptionFR: "Application de gestion de tâches en temps réel avec drag & drop, collaboration et notifications.",
    descriptionEN: "Real-time task management application with drag & drop, collaboration, and notifications.",
    stack: ["React", "TypeScript", "Tailwind", "Firebase"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/medardbiembe",
    demo: "#",
  },
  {
    number: "03",
    name: "API Analytics Dashboard",
    type: "BACKEND DEVELOPMENT",
    descriptionFR: "Dashboard d'analyse de données connecté à une API REST custom avec visualisation D3.js.",
    descriptionEN: "Data analytics dashboard connected to a custom REST API with D3.js visualization.",
    stack: ["Node.js", "Express", "MongoDB", "React"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/medardbiembe",
    demo: "#",
  },
];

const educationData = [
  {
    period: "2022 — 2026",
    degree: "Programmer Engineer",
    school: "Belarusian National Technical University",
    fieldFR: "Information Systems and Technologies",
    fieldEN: "Information Systems and Technologies",
    resultFR: "Note finale : 9/10",
    resultEN: "Final grade: 9/10",
  },
  {
    period: "2020",
    degree: "High School Diploma",
    school: "Institut Technique et Professionnel Passio 2",
    fieldFR: "Électronique Industrielle",
    fieldEN: "Industrial Electronics",
    resultFR: "Baccalauréat",
    resultEN: "Baccalaureate",
  },
];

const experiencesData = [
  {
    period: "MAR 2021 — JAN 2022",
    roleFR: "Spécialiste IT",
    roleEN: "IT Specialist",
    company: "EPST",
    locationFR: "Kinshasa, République Démocratique du Congo",
    locationEN: "Kinshasa, Democratic Republic of the Congo",
    descFR: [
      "Aide à la maintenance des bases de données internes via SQL pour garantir l'intégrité et la sécurité des données.",
      "Développement et optimisation de scripts d'automatisation Python pour améliorer les flux de travail administratifs.",
      "Surveillance des performances du système et réalisation de mises à jour régulières du matériel et des logiciels.",
    ],
    descEN: [
      "Assisted in maintaining internal databases using SQL to ensure data integrity and security.",
      "Developed and optimized Python automation scripts to improve administrative workflows.",
      "Monitored system performance and performed regular hardware and software updates.",
    ],
    technologies: ["SQL", "Python", "Database Management", "IT Support"],
  },
  {
    period: "MAY 2024 — FEB 2026",
    roleFR: "Responsable des Ventes",
    roleEN: "Sales Manager",
    company: "Smart Connexion",
    locationFR: "Minsk, Biélorussie",
    locationEN: "Minsk, Belarus",
    descFR: [
      "Gestion des relations clients et des opérations de vente locales.",
      "Utilisation d'outils CRM pour suivre les données et optimiser les flux de travail.",
      "Soutien aux communications commerciales et aux opérations quotidiennes.",
    ],
    descEN: [
      "Managed customer relationships and local sales operations.",
      "Used CRM tools to track data and optimize workflows.",
      "Supported daily business communications and operations.",
    ],
    technologies: ["CRM", "Customer Relations", "Sales Operations"],
  },
];


export default function Home() {
  const [currentYear, setCurrentYear] = useState(2026);
  
  // 👇 L'ASTUCE : On lit l'URL IMMÉDIATEMENT, pas dans un useEffect
  const [lang, setLang] = useState<"FR" | "EN">(() => {
    if (typeof window === "undefined") return "FR";
    
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    
    if (urlLang === "EN") return "EN";
    if (urlLang === "FR") return "FR";
    
    const savedLang = localStorage.getItem("portfolio-lang");
    if (savedLang === "EN") return "EN";
    
    return "FR";
  });

  const t = translations[lang];

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    localStorage.setItem("portfolio-lang", lang);
  }, [lang]);

  const handleLanguageClick = (newLang: "FR" | "EN") => {
    window.location.href = `?lang=${newLang}`;
  };

  const navigation = [
    [t.nav.home, "#home"],
    [t.nav.about, "#about"],
    [t.nav.education, "#education"],
    [t.nav.experience, "#experience"],
    [t.nav.expertise, "#expertise"],
    [t.nav.projects, "#projects"],
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#171717] selection:bg-blue-200">

      {/* NAVIGATION */}
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#fafafa]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-12 lg:py-5">
          <a href="#home" className="text-xl lg:text-2xl font-black tracking-tighter z-50">
            MEDARD BIEMBE<span className="text-blue-600">.</span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 lg:flex">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-blue-600">
                {label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              onClick={() => setLang("FR")}
              className={`text-sm font-bold transition hover:text-blue-600 border border-gray-200 rounded-full px-3 py-1 ${
                lang === "FR" ? "text-blue-600" : "text-gray-500"
              }`}
            >
              FR
            </button>

            <button
              type="button"
              onClick={() => setLang("EN")}
              className={`text-sm font-bold transition hover:text-blue-600 border border-gray-200 rounded-full px-3 py-1 ${
                lang === "EN" ? "text-blue-600" : "text-gray-500"
              }`}
            >
              EN
            </button>
            <a
              href="#contact"
              className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* MOBILE MENU - LIENS QUI RECHARGENT LA PAGE */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="?lang=FR"
              className={`text-xs font-bold border border-gray-200 rounded-full px-2 py-1 ${
                lang === "FR" ? "text-blue-600 bg-white" : "text-gray-500 bg-transparent"
              }`}
            >
              FR
            </a>

            <a
              href="?lang=EN"
              className={`text-xs font-bold border border-gray-200 rounded-full px-2 py-1 ${
                lang === "EN" ? "text-blue-600 bg-white" : "text-gray-500 bg-transparent"
              }`}
            >
              EN
            </a>

            {/* LE BURGER */}
            <details className="relative group" id="mobile-menu">
              <summary className="list-none text-2xl cursor-pointer p-2 text-gray-800 marker:hidden">
                <span className="group-open:hidden">☰</span>
                <span className="hidden group-open:inline">✕</span>
              </summary>
              
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 flex flex-col z-[9999]">
                {navigation.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="py-3 px-4 text-gray-800 font-medium hover:bg-gray-50 rounded-lg"
                  >
                    {label}
                  </a>
                ))}
                
                <a
                  href="#contact"
                  className="mt-2 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700"
                >
                  {t.nav.contact}
                </a>
              </div>
            </details>
          </div>

        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="hero-sky mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-28 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:pt-36"
      >
        <div className="animate-fade-up">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            {t.hero.title1}
            <br />
            {t.hero.title2}
            <br />
            <span className="text-blue-600">{t.hero.title3}</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
            {t.hero.desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              {t.hero.btnProjects}
            </a>
            <a
              href="#about"
              className="rounded-full border border-gray-300 bg-white/50 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold transition hover:border-blue-600 hover:text-blue-600"
            >
              {t.hero.btnAbout}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-gray-900/10 pt-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{t.hero.qualif}</p>
              <p className="mt-1 font-semibold">{t.hero.qualifVal}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{t.hero.approach}</p>
              <p className="mt-1 font-semibold">{t.hero.approachVal}</p>
            </div>
          </div>
        </div>

        {/* VISUAL CARD */}
        <div className="relative mx-auto w-full max-w-md animate-fade-up mt-10 lg:mt-0" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />
          <div className="hero-code-card relative overflow-hidden rounded-2xl border border-gray-200 bg-[#eeeeee] p-4 shadow-xl shadow-gray-200/60 sm:p-5">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest text-gray-500 sm:text-xs">
                MEDARD BIEMBE / PORTFOLIO
              </span>
              <span className="text-[10px] font-mono text-blue-600 font-bold sm:text-xs">2026</span>
            </div>

            <div className="rounded-xl bg-[#171717] p-4 text-white font-mono sm:p-6">
              <div className="mb-6 flex gap-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
              </div>

              <p className="text-[10px] text-gray-500 sm:text-xs">developer.ts</p>

              <div className="mt-4 space-y-2 text-xs sm:text-sm">
                <p>
                  <span className="text-[#c084fc]">const</span> developer = {"{"}
                </p>
                <p className="pl-4 sm:pl-5">
                  name: <span className="text-[#34d399]">"MEDARD BIEMBE"</span>,
                </p>
                <p className="pl-4 sm:pl-5">
                  role: <span className="text-[#34d399]">"Full-Stack"</span>,
                </p>
                <p className="pl-4 sm:pl-5">
                  qualification: <span className="text-[#34d399]">"Programmer Engineer"</span>,
                </p>
                <p className="pl-4 sm:pl-5">
                  focus: <span className="text-[#34d399]">"Technology"</span>
                </p>
                <p>{"}"}</p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4">
                <p className="text-[10px] text-gray-500 sm:text-xs">CURRENT STATUS</p>
                <p className="mt-1 flex items-center gap-2 text-xs sm:text-sm">
                  <span className="h-2 w-2 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.5)]" />
                  Building something meaningful.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-gray-500 sm:text-xs">
                CREATIVE DEVELOPMENT
              </span>
              <span className="text-[10px] font-mono font-bold text-blue-600 sm:text-xs">01 / 04</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-gray-200 bg-white px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            {t.about.label}
          </p>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {t.about.title}
            </h2>
            <div className="max-w-xl">
              <p className="leading-7 text-gray-500 sm:leading-8">{t.about.p1}</p>
              <p className="mt-4 leading-7 text-gray-500 sm:leading-8">{t.about.p2}</p>
              <a href="#contact" className="mt-6 inline-block border-b border-blue-600 pb-1 text-sm font-semibold text-blue-600 transition hover:text-blue-800">
                {t.about.link}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">{t.education.label}</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t.education.title}</h2>
          <p className="mt-4 max-w-xl leading-7 text-gray-500 sm:leading-8">{t.education.desc}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {educationData.map((item) => (
              <article key={item.school} className="border border-gray-200 bg-white p-6 sm:p-8 transition hover:border-blue-300 rounded-2xl sm:rounded-none">
                <span className="text-xs font-bold tracking-widest text-blue-600">{item.period}</span>
                <h3 className="mt-4 text-xl sm:text-2xl font-semibold">{item.degree}</h3>
                <p className="mt-2 font-medium text-gray-700">{item.school}</p>
                <p className="mt-2 text-sm leading-7 text-gray-500">{lang === "FR" ? item.fieldFR : item.fieldEN}</p>
                <p className="mt-5 border-t border-gray-100 pt-4 text-sm font-semibold text-blue-600">
                  {lang === "FR" ? item.resultFR : item.resultEN}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-y border-gray-200 bg-white px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">{t.experience.label}</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t.experience.title}</h2>
              <p className="mt-5 max-w-md leading-7 text-gray-500 sm:leading-8">{t.experience.desc}</p>
            </div>
            <div>
              {experiencesData.map((item) => (
                <article key={item.company} className="border-t border-gray-200 py-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold tracking-widest text-blue-600">PROFESSIONAL EXPERIENCE</span>
                    <span className="text-xs text-gray-400">{item.period}</span>
                  </div>
                  <h3 className="mt-4 text-xl sm:text-2xl font-semibold">{lang === "FR" ? item.roleFR : item.roleEN}</h3>
                  <p className="mt-1 font-medium text-gray-700">{item.company}</p>
                  <p className="mt-1 text-sm text-gray-400">{lang === "FR" ? item.locationFR : item.locationEN}</p>
                  <ul className="mt-5 space-y-2">
                    {(lang === "FR" ? item.descFR : item.descEN).map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm leading-6 text-gray-500">
                        <span className="text-blue-600 shrink-0">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">{t.expertise.label}</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t.expertise.title}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.expertise.items.map((item, index) => (
              <article key={index} className="border border-gray-200 bg-white p-6 sm:p-8 transition hover:-translate-y-1 hover:border-blue-300 rounded-2xl">
                <span className="text-sm font-semibold text-blue-600">0{index + 1} / 03</span>
                <h3 className="mt-8 text-xl sm:text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 min-h-[60px] leading-7 text-gray-500">{item.desc}</p>
                <p className="mt-6 border-t border-gray-100 pt-4 text-xs font-bold text-gray-700">{item.tools}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-[#171717] px-5 py-20 text-white lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">{t.skills.label}</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t.skills.title}</h2>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/15 px-4 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm text-gray-300 transition hover:border-blue-400 hover:text-blue-400">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">{t.projects.label}</p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t.projects.title}</h2>
            <p className="max-w-sm text-sm leading-6 text-gray-500">{t.projects.desc}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className="project-card group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200/50">
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="project-image object-cover transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-600">{project.type}</p>
                  <h3 className="mt-2 text-xl sm:text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
                    {lang === "FR" ? project.descriptionFR : project.descriptionEN}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-md bg-gray-50 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-gray-600 border border-gray-100">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-600 transition hover:text-black flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      {t.projects.codeBtn}
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 transition hover:text-blue-800">
                      {t.projects.demoBtn}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#eaf1ff] px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">{t.contact.label}</p>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            {t.contact.title1}
            <span className="text-blue-600"> {t.contact.title2}</span>
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-gray-600 sm:leading-8">{t.contact.desc}</p>

          <div className="mt-10 max-w-md">
            <a href="mailto:medardbiembe1@gmail.com" className="block rounded-2xl border border-blue-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{t.contact.emailLabel}</p>
              <h3 className="mt-3 break-all text-base font-semibold sm:text-lg">medardbiembe1@gmail.com</h3>
              <p className="mt-2 text-sm text-gray-500">{t.contact.emailBtn}</p>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="https://wa.me/375255274897" target="_blank" rel="noopener noreferrer" className="group flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-white text-gray-500 transition hover:-translate-y-1 hover:border-green-500 hover:bg-green-50 hover:text-green-600 hover:shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" /><path d="M14 14a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1Z" /><path d="M9.5 9.5c.5 3 2.5 5 5.5 5.5" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/medard-biembe-809aa923a/" target="_blank" rel="noopener noreferrer" className="group flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-white text-gray-500 transition hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="https://github.com/medardbiembe" target="_blank" rel="noopener noreferrer" className="group flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-white text-gray-500 transition hover:-translate-y-1 hover:border-gray-900 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
          </div>

          <a href="mailto:medardbiembe1@gmail.com" className="mt-10 inline-flex rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg">
            {t.contact.finalBtn}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#171717] px-5 py-8 text-white lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <a href="#home" className="text-xl sm:text-2xl font-black tracking-tighter">
            MEDARD BIEMBE<span className="text-blue-500">.</span>
          </a>
          <p className="text-xs sm:text-sm text-gray-500">
            © {currentYear} MEDARD BIEMBE. {t.footer.rights}
          </p>
          <a href="#home" className="text-xs sm:text-sm text-gray-400 transition hover:text-blue-400">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}