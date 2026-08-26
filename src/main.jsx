import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Server,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./styles.css";

const profile = {
  name: "Muhammad Imran",
  role: "MERN Stack Developer",
  secondaryRole: "Full-Stack Web Developer",
  location: "Lahore, Pakistan",
  email: "m.imran.khan.tech@gmail.com",
  phone: "+92 3114403058",
  github: "https://github.com/MimranKhanDev",
  linkedin: "https://www.linkedin.com/in/muhammad-imran-khan-tech/",
};

const skills = [
  { name: "React.js", group: "Frontend", icon: Code2 },
  { name: "JavaScript ES6+", group: "Frontend", icon: Code2 },
  { name: "Redux Toolkit", group: "Frontend", icon: Sparkles },
  { name: "Tailwind CSS", group: "Frontend", icon: Code2 },

  { name: "Node.js", group: "Backend", icon: Server },
  { name: "Express.js", group: "Backend", icon: Server },
  { name: "REST APIs", group: "Backend", icon: Server },
  { name: "JWT Authentication", group: "Backend", icon: ShieldCheck },

  { name: "MongoDB", group: "Database", icon: Database },
  { name: "Mongoose", group: "Database", icon: Database },

  { name: "Stripe", group: "Tools", icon: ShoppingBag },
  { name: "Git & GitHub", group: "Tools", icon: Code2 },
  { name: "Postman", group: "Tools", icon: Code2 },
  { name: "Vite & npm", group: "Tools", icon: Code2 },
];

const projects = [
  {
    title: "LahoreOnlineBazaar",
    type: "Full-Stack E-Commerce Platform",
    description:
      "A feature-rich MERN eCommerce platform with authentication, product discovery, cart and orders, reviews, Stripe checkout, and an admin dashboard.",
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux Toolkit",
      "Stripe",
    ],
    github: "https://github.com/MimranKhanDev/LahoreOnlineBazaar",
    live: null,
    status: "Live demo coming soon",
    visual: "store",
  },

  {
    title: "HzaLuna",
    type: "Product Ordering System",
    description:
      "A focused MERN eCommerce application for product browsing, ordering and delivery information, with an admin dashboard for product and order management.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/MimranKhanDev/hzaluna-Basic-eCommerce-Site",
    live: "https://hzaluna.vercel.app/",
    status: "Deployed",
    visual: "catalog",
  },
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {text && <p>{text}</p>}
    </div>
  );
}

function ProjectVisual({ type }) {
  const items =
    type === "store"
      ? ["Featured", "Categories", "Products", "Checkout"]
      : ["Products", "Details", "Delivery", "Orders"];

  return (
    <div className="project-visual" aria-hidden="true">
      <div className="browser-bar">
        <i />
        <i />
        <i />

        <span>
          {type === "store" ? "lahoreonlinebazaar" : "hzaluna"}
          .app
        </span>
      </div>

      <div className="preview-body">
        <div className="preview-nav">
          <b>{type === "store" ? "LahoreOnlineBazaar" : "HzaLuna"}</b>

          <span>Shop</span>
          <span>Orders</span>
        </div>

        <div className="preview-hero">
          <small>ECOMMERCE PLATFORM</small>

          <strong>
            {type === "store"
              ? "Everything you need to build a store."
              : "Simple product ordering."}
          </strong>
        </div>

        <div className="preview-grid">
          {items.map((item, i) => (
            <div className="preview-card" key={item}>
              <span>{i + 1}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const go = (id) => {
    setActive(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">
          <button
            className="brand"
            onClick={() => go("home")}
            aria-label="Go to home"
          >
            <span className="brand-mark">MI</span>

            <span>{profile.name}</span>
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {[
              "home",
              "about",
              "skills",
              "projects",
              "training",
              "education",
              "contact",
            ].map((item) => (
              <button
                className={active === item ? "active" : ""}
                onClick={() => go(item)}
                key={item}
              >
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          <a className="nav-cv" href="/Muhammad-Imran-CV.docx" download>
            <Download size={16} />
            Download CV
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="hello">Hello, I'm</span>

              <h1>
                Muhammad <span>Imran</span>
              </h1>

              <h2>
                {profile.role}
                <br />
                {profile.secondaryRole}
              </h2>

              <p>
                B.S. Computer Science student building practical, full-stack web
                applications with the MERN stack. Focused on clean backend APIs,
                reliable user flows, and useful products.
              </p>

              <div className="hero-actions">
                <button
                  className="button primary"
                  onClick={() => go("projects")}
                >
                  View My Work
                  <ArrowUpRight size={18} />
                </button>

                <a
                  className="button secondary"
                  href={`mailto:${profile.email}`}
                >
                  Contact Me
                  <Mail size={17} />
                </a>
              </div>

              <div className="socials">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <Mail />
                </a>
              </div>
            </div>

            <div className="hero-side">
              <div className="code-orb">
                <div className="orb-lines">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="monogram">MI</div>

                <div className="floating-code one">&lt;MERN /&gt;</div>

                <div className="floating-code two">API → DB</div>

                <div className="floating-code three">{"{ clean: true }"}</div>
              </div>

              <div className="availability-card">
                <MapPin size={19} />

                <div>
                  <strong>{profile.location}</strong>

                  <small>Available for internships</small>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-strip">
            <div className="strip-label">TECHNOLOGIES & TOOLS</div>

            <div className="tech-items">
              {[
                "React.js",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "Redux Toolkit",
                "Tailwind CSS",
                "Git",
                "GitHub",
                "Stripe",
                "Postman",
              ].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <SectionHeading
            eyebrow="01 — ABOUT"
            title="Building useful things, one system at a time."
            text="I’m focused on becoming a stronger full-stack engineer by turning concepts into working applications instead of stopping at tutorials."
          />

          <div className="about-grid">
            <div className="about-card accent-card">
              <span className="big-number">MERN</span>

              <p>MongoDB · Express · React · Node.js</p>
            </div>

            <div className="about-card">
              <h3>What I bring</h3>

              <ul className="check-list">
                <li>
                  <CheckCircle2 />
                  Full-stack application development
                </li>

                <li>
                  <CheckCircle2 />
                  REST API and database integration
                </li>

                <li>
                  <CheckCircle2 />
                  Authentication and role-based access
                </li>

                <li>
                  <CheckCircle2 />
                  eCommerce and payment workflows
                </li>
              </ul>
            </div>

            <div className="about-card">
              <h3>Current direction</h3>

              <p>
                Strengthening backend engineering, DSA and software fundamentals
                while building toward future AI and agentic-AI work.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <SectionHeading
            eyebrow="02 — SKILLS"
            title="My technical toolkit"
            text="The technologies I currently use to build and ship full-stack applications."
          />

          <div className="skills-grid">
            {["Frontend", "Backend", "Database", "Tools"].map((group) => (
              <div className="skill-group" key={group}>
                <h3>{group}</h3>

                {skills
                  .filter((s) => s.group === group)
                  .map(({ name, icon: Icon }) => (
                    <div className="skill" key={name}>
                      <Icon size={17} />
                      <span>{name}</span>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <SectionHeading
            eyebrow="03 — FEATURED PROJECTS"
            title="Work that demonstrates the stack."
            text="Two real projects, with the larger application showing the breadth of my current MERN capabilities."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <ProjectVisual type={project.visual} />

                <div className="project-content">
                  <div className="project-title-row">
                    <div>
                      <span className="project-type">{project.type}</span>

                      <h3>{project.title}</h3>
                    </div>

                    <span className={project.live ? "status live" : "status"}>
                      {project.status}
                    </span>
                  </div>

                  <p>{project.description}</p>

                  <div className="tags">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub size={17} />
                      GitHub
                    </a>

                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live Demo
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="disabled-link">
                        Live Demo
                        <ArrowUpRight size={16} />
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TRAINING + EDUCATION */}
        <section className="section split-section" id="training">
          <div>
            <SectionHeading
              eyebrow="04 — TRAINING"
              title="Focused practical training"
            />

            <div className="timeline-card">
              <div className="timeline-icon">
                <BriefcaseBusiness />
              </div>

              <div>
                <span className="muted-label">MERN STACK WEB DEVELOPMENT</span>

                <h3>Honhaar Jawan Program</h3>

                <p>
                  Hands-on training centered on building a full-featured MERN
                  eCommerce application with MongoDB, Express.js, React.js and
                  Node.js.
                </p>

                <span className="pending">
                  Certificate & student card pending
                </span>
              </div>
            </div>
          </div>

          <div id="education">
            <SectionHeading
              eyebrow="05 — EDUCATION"
              title="Computer Science foundation"
            />

            <div className="timeline-card">
              <div className="timeline-icon">
                <GraduationCap />
              </div>

              <div>
                <span className="muted-label">BACHELOR OF SCIENCE</span>

                <h3>Computer Science — UAF</h3>

                <p>
                  University of Agriculture Faisalabad · Expected graduation
                  2028 · Completed 4/8 semesters.
                </p>

                <div className="education-meta">
                  <span>CGPA: 3.05 / 4.00</span>

                  <span>DSA</span>
                  <span>OOP</span>
                  <span>Databases</span>
                  <span>Web Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <span className="eyebrow">06 — CONTACT</span>

              <h2>Have a project or internship opportunity?</h2>

              <p>
                I’m open to MERN Stack / Full-Stack Developer internship
                opportunities in Lahore or Faisalabad.
              </p>
            </div>

            <a className="button primary" href={`mailto:${profile.email}`}>
              Let's Talk
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-grid">
            <a href={`mailto:${profile.email}`}>
              <Mail />

              <span>
                <small>Email</small>
                {profile.email}
              </span>
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn />

              <span>
                <small>LinkedIn</small>
                Connect with me
              </span>
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub />

              <span>
                <small>GitHub</small>
                View my repositories
              </span>
            </a>

            <div>
              <MapPin />

              <span>
                <small>Location</small>
                {profile.location}
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Muhammad Imran</span>

        <span>Built with React · Designed for the web</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
