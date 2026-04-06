/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Award, 
  Linkedin, 
  Mail, 
  ChevronRight, 
  Globe, 
  Users, 
  TrendingUp, 
  Zap,
  CheckCircle2,
  ExternalLink,
  Menu,
  X,
  Phone,
  Download
} from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Expertise", href: "#expertise" },
    { name: "Experience", href: "#experience" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter text-white"
        >
          NIRAV SONI
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://www.linkedin.com/in/nirav2210/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-all"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/70"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://www.linkedin.com/in/nirav2210/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-3 rounded-xl text-center font-bold"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Leadership Roles
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-8">
            STAFFING <br />
            <span className="text-white/40 italic">STRATEGIST.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-10">
            Results-driven leader in the US staffing industry specializing in 
            delivering top-tier talent for high-growth Tech, PM, and Product roles, 
            as well as critical infrastructure sectors like Energy & Utilities.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#experience" 
              className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform flex items-center gap-2"
            >
              View Experience <ChevronRight size={20} />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Download CV <Download size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nirav2210/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              LinkedIn Profile <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative group">
            <img 
              src="https://picsum.photos/seed/professional/800/1000" 
              alt="Professional Profile" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="text-white font-bold text-lg">Nirav Soni</div>
                <div className="text-white/60 text-sm">US Staffing Industry Expert</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const skills = [
    {
      title: "Enterprise Apps",
      desc: "Specialized delivery for SAP S/4HANA, FICO, ABAP, and complex ERP ecosystems for global enterprises.",
      icon: <Globe className="text-blue-400" size={28} />
    },
    {
      title: "Infrastructure & Security",
      desc: "Sourcing for Cloud Engineering, DevOps, Cyber Security, and SOC Analyst roles to protect critical assets.",
      icon: <Zap className="text-yellow-400" size={28} />
    },
    {
      title: "Product & Leadership",
      desc: "Strategic talent for Product Management, Agile Delivery, and Program Management roles in high-growth tech.",
      icon: <Users className="text-purple-400" size={28} />
    },
    {
      title: "AI & Data Engineering",
      desc: "Leveraging AI-driven sourcing and data engineering principles to identify niche technical talent.",
      icon: <Award className="text-green-400" size={28} />
    }
  ];

  return (
    <section id="expertise" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Core Expertise</h2>
          <div className="w-20 h-1 bg-white/20" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover="hover"
              transition={{ delay: i * 0.1 }}
              variants={{
                hover: {
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }
              }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group cursor-default"
            >
              <motion.div 
                className="mb-6 p-4 rounded-2xl bg-white/5 w-fit"
                variants={{
                  hover: {
                    y: [0, -8, 0],
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }
                }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Rangam",
      role: "Leadership Role",
      period: "Present",
      desc: "Driving growth and operational excellence in the US staffing division, focusing on high-impact talent solutions for Fortune 500 clients.",
      highlights: [
        "Strategic account management for Tech & Utility clients",
        "Team leadership and mentoring",
        "Process optimization for recruitment delivery",
        "Market trend analysis and forecasting"
      ]
    },
    {
      company: "US Staffing Industry",
      role: "Recruitment Expert",
      period: "Career Focus",
      desc: "Extensive experience delivering strategic talent for high-growth technology firms and critical infrastructure sectors like Energy & Utilities.",
      highlights: [
        "Tech, PM & Product role specialization",
        "Energy & Utility sector staffing",
        "Strategic sourcing for niche skillsets",
        "Complex visa & compliance management"
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Experience</h2>
          <div className="w-20 h-1 bg-black/10" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[250px_1fr] gap-8 pb-12 border-b border-black/5 last:border-0"
            >
              <div>
                <div className="text-2xl font-bold mb-1">{exp.company}</div>
                <div className="text-black/60 font-medium mb-4">{exp.period}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-black/5 text-xs font-bold uppercase tracking-wider">
                  {exp.role}
                </div>
              </div>
              <div>
                <p className="text-xl text-black/80 mb-8 leading-relaxed">
                  {exp.desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {exp.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-black mt-1 shrink-0" />
                      <span className="text-black/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    "AI Tools Workshop",
    "Excel with LinkedIn Recruiter Assessment",
    "Certified Associate in Project Management (CAPM)®",
    "Change Management Foundations",
    "Leadership Foundations",
    "Talent Management",
    "Learning LinkedIn Recruiter"
  ];

  return (
    <section id="certifications" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Certifications</h2>
          <div className="w-20 h-1 bg-white/20" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <div className="p-3 rounded-xl bg-white/5 text-white/40">
                <Award size={24} />
              </div>
              <div className="text-white font-medium text-sm leading-snug">
                {cert}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="text-2xl font-bold tracking-tighter text-white mb-4">NIRAV SONI</div>
            <p className="text-white/40 text-sm max-w-xs">
              Empowering organizations through strategic talent acquisition in Tech, PM, Product, and Energy/Utility sectors.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <a 
              href="https://www.linkedin.com/in/nirav2210/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a 
              href="mailto:niravsoni2210@gmail.com" 
              className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail size={20} /> Email
            </a>
            <a 
              href="tel:+919427736086" 
              className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
            >
              <Phone size={20} /> Call
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs uppercase tracking-widest font-bold">
          <div>© 2026 Nirav Soni. All Rights Reserved.</div>
          <div>Vadodara, India | US Staffing Leader</div>
        </div>
      </div>
    </footer>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
              Strategic Leadership in <br />
              <span className="text-white/40">Global Talent Acquisition.</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              With a deep-rooted expertise in the US staffing industry, I have dedicated my career to bridging the gap between exceptional talent and world-class organizations. My approach combines data-driven strategies with a human-centric focus on people and culture.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Based in Vadodara and operating on a global scale, I specialize in navigating the complexities of IT recruitment, visa compliance, and high-volume delivery models. My expertise spans high-growth Technology firms and critical infrastructure sectors like Energy & Utilities, where I deliver top-tier talent for Tech, Product Management, and Leadership roles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Experience", value: "10+ Years" },
              { label: "Placements", value: "5000+" },
              { label: "Clients", value: "Fortune 500" },
              { label: "Focus", value: "Tech & Utilities" }
            ].map((stat) => (
              <motion.div 
                key={stat.label} 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors cursor-default"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/40 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-[200px] font-bold text-black/5 absolute -top-20 -left-10 select-none">"</div>
            <blockquote className="text-4xl md:text-5xl font-bold tracking-tight leading-tight relative z-10">
              The real competitive advantage isn’t a new framework. <br />
              <span className="text-black/40 italic text-3xl md:text-4xl">It’s people who can think and execute.</span>
            </blockquote>
            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-black" />
              <div className="text-sm font-bold uppercase tracking-widest">Nirav Soni</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl bg-black/5 border border-black/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <TrendingUp size={24} /> Staffing Finance
              </h3>
              <p className="text-black/60 leading-relaxed">
                I view sourcing budgets as a balance sheet decision, not just a P&L expense. Talent acquisition is a long-term financial investment in an organization's future value.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-black/5 border border-black/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Zap size={24} /> AI-Driven Delivery
              </h3>
              <p className="text-black/60 leading-relaxed">
                Integrating advanced AI tools and data engineering principles into the recruitment lifecycle to ensure precision, speed, and quality in every placement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Insights = () => {
  const truths = [
    {
      tag: "#StaffingTruths",
      title: "The Metrics Trap",
      desc: "Focusing on volume over value is the fastest way to dilute talent quality. True success is measured in retention and impact."
    },
    {
      tag: "#WorkplaceCulture",
      title: "GenZ & The Future",
      desc: "Understanding the evolving workplace expectations of the next generation is critical for long-term workforce stability."
    },
    {
      tag: "#DiversityInTech",
      title: "Beyond the Quota",
      desc: "Real diversity is about building inclusive ecosystems where varied perspectives drive genuine innovation."
    }
  ];

  return (
    <section id="insights" className="py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Staffing Truths</h2>
          <p className="text-white/40 text-lg">Perspectives on the evolving landscape of talent and work.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {truths.map((truth, i) => (
            <motion.div
              key={truth.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between h-full"
            >
              <div>
                <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">{truth.tag}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{truth.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {truth.desc}
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                <a href="https://www.linkedin.com/in/nirav2210/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                  Read More on LinkedIn <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-white text-black border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Let's Build the <br />
              <span className="text-black/40">Future of Talent.</span>
            </h2>
            <p className="text-lg text-black/60 leading-relaxed mb-12 max-w-md">
              Whether you're looking to scale your tech team or seeking strategic advice on workforce solutions, I'm here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-black/5">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black/40">Email Me</div>
                  <a href="mailto:niravsoni2210@gmail.com" className="text-lg font-medium hover:underline">niravsoni2210@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-black/5">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black/40">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/nirav2210/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">in/nirav2210</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-black/5">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black/40">Direct Line</div>
                  <a 
                    href="tel:+919427736086" 
                    className="inline-flex items-center gap-2 px-4 py-2 mt-1 rounded-xl bg-black text-white text-sm font-bold hover:scale-105 transition-transform"
                  >
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-black/40">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-black/5 border border-black/10 focus:border-black focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-black/40">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-black/5 border border-black/10 focus:border-black focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-black/40">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl bg-black/5 border border-black/10 focus:border-black focus:outline-none transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                  formState === 'success' ? 'bg-green-500 text-white' : 'bg-black text-white hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                {formState === 'idle' && <>Send Message <ChevronRight size={20} /></>}
                {formState === 'submitting' && <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                {formState === 'success' && <>Message Sent Successfully! <CheckCircle2 size={20} /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Expertise />
      <Experience />
      <Insights />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
