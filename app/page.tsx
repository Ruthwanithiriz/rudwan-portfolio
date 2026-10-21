

import {
  
  SiFacebook,
  SiInstagram,
  SiThreads,
  SiSnapchat,
  SiTiktok,
  SiGithub,
  SiWhatsapp,
  SiGmail,
} from "react-icons/si";


const projects = [
  {
    number: "01",
    title: "Focus Academy",
    category: "Education Technology",
    description:
      "A school management system concept designed to organize lessons, homework and academic workflows.",
    image: "/projects/focus-academy.jpeg",
    status: "PROJECT CONCEPT",
  },
  {
    number: "02",
    title: "SANCO Delivery",
    category: "Digital Business",
    description:
      "A local delivery network concept connecting customers, businesses and drivers.",
    image: "/projects/sanco-delivery.jpeg",
    status: "PROJECT CONCEPT",
  },
  {
    number: "03",
    title: "StepCode",
    category: "Technology & Digital Services",
    description:
      "A technology learning community and digital services initiative.",
    image: "/projects/stepcode.jpeg",
    status: "PROJECT CONCEPT",
  },
];



const skills = [
  { name: "HTML & CSS", level: 100, category: "Web Development" },
  { name: "JavaScript", level: 75, category: "Programming" },
  { name: "TypeScript", level: 75, category: "Programming" },
  { name: "React & Next.js", level: 100, category: "Frontend Development" },
  { name: "Python", level: 75, category: "Programming" },
  { name: "Java", level: 75, category: "Programming" },
  { name: "Git & GitHub", level: 100, category: "Developer Tools" },
  { name: "Google Apps Script", level: 100, category: "Automation" },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">
          R<span>.</span>IM
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">
            Contact ↗
          </a>
          <a
  href="/Rudwan-Idiris-Mahamed-CV.pdf"
  download="Rudwan-Idiris-Mahamed-CV.pdf"
  className="cv-download-btn"
>
  Download My CV
</a>

        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-background">
          <div className="hero-slide slide-one" />
          <div className="hero-slide slide-two" />
          <div className="hero-slide slide-three" />
        </div>

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="profile-frame">
  <img
    src="/rudwan-profile.png"
    alt="Rudwan Idiris Mahamed"
    className="profile-image"
  />
</div>
          <div className="availability">
            <span /> PERSONAL PORTFOLIO · 2026
          </div>

          <p className="eyebrow">HELLO, WORLD. I'M</p>

          <h1>
            Rudwan
            <br />
            <span>Idiris Mahamed.</span>
          </h1>

          <p className="hero-description">
            IT Graduate · Technology Enthusiast · Digital Solutions
          </p>

          <p className="hero-subtext">
            Exploring technology, building digital experiences
            and turning ideas into practical solutions.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore My Work ↗
            </a>
            <a className="button-secondary" href="#about">
              Discover My Story
            </a>
          </div>


          <div className="hero-footer">
            <span>TECHNOLOGY</span>
            <span>CREATIVITY</span>
            <span>CONTINUOUS LEARNING</span>
          </div>
        </div>

        <div className="hero-index">
          <span>01</span> / 03
        </div>
      </section>

      <section className="section about-section" id="about">
        <p className="section-label">01 — ABOUT ME</p>

        <h2>
          Curious mind.
          <br />
          <span>Technology-driven future.</span>
        </h2>

        <p className="section-description">
          I am Rudwan Idiris Mahamed, an IT graduate interested
          in software development, web technologies, digital
          solutions and using technology to solve practical
          problems. I also have an interest in logistics and
          supply chain management.
        </p>

        <div className="about-facts">
          <div>
            <span>BACKGROUND</span>
            <strong>Information Technology</strong>
          </div>
          <div>
            <span>INTERESTS</span>
            <strong>Web & Digital Solutions</strong>
          </div>
          <div>
            <span>MINDSET</span>
            <strong>Learn. Build. Improve.</strong>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <p className="section-label">02 — TECHNICAL TOOLKIT</p>

        <h2>
          Skills backed by
          <br />
          <span>continuous learning.</span>
        </h2>

        <p className="section-description">
          My current self-assessed proficiency across web development,
          programming, developer tools and automation.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-top">
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="skill-percentage">
                  {skill.level}%
                </span>
              </div>

              <h3>{skill.name}</h3>
              <p className="skill-category">{skill.category}</p>

              <div
                className="skill-progress"
                role="progressbar"
                aria-label={`${skill.name} self-assessed proficiency`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.level}
              >
                <span
                  className="skill-progress-fill"
                  style={{
                    "--skill-level": `${skill.level}%`,
                  } as React.CSSProperties}
                />
              </div>

              <p className="skill-caption">
                Self-assessed proficiency
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <p className="section-label">03 — SELECTED PROJECTS</p>

        <h2>
          Ideas into
          <br />
          <span>digital experiences.</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image-wrap">
  <img
    src={project.image}
    alt={`${project.title} project preview`}
    className="project-image"
  />
</div>
              <div className="project-top">
                <span>{project.number}</span>
                <span>↗</span>
              </div>

              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <span className="project-status">{project.status}</span>
              <a href="#contact" className="project-link">
  Discuss This Project
  <span aria-hidden="true">↗</span>
</a>
            </article>
          ))}
        </div>
      </section>

      
<section className="contact-section" id="contact">
  <p className="section-label">04 — LET'S CONNECT</p>

  <h2>
    Have an idea?
    <br />
    <span>Let’s make it happen.</span>
  </h2>

  <p className="contact-description">
    Interested in technology, collaboration, or digital
    solutions? Let’s connect and explore what we can build together.
  </p>

  <div className="contact-actions">
    <a
      className="button-primary"
      href="mailto:hargeysaawi653@gmail.com"
    >
      <span>✉</span> Email Me
    </a>

    <a
      className="button-secondary"
      href="https://wa.me/252636531112"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>☏</span> WhatsApp Me ↗
    </a>
  </div>

  

<div className="social-links">
  <a className="facebook" href="https://www.facebook.com/share/19X9oqakzE/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <SiFacebook />
  </a>

  <a className="instagram" href="https://www.instagram.com/rudwan___idiriz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <SiInstagram />
  </a>

  <a className="threads" href="https://www.threads.com/@rudwan___idiriz" target="_blank" rel="noopener noreferrer" aria-label="Threads">
    <SiThreads />
  </a>

  <a className="snapchat" href="https://www.snapchat.com/add/lucky_poi5774" target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
    <SiSnapchat />
  </a>

  <a className="tiktok" href="https://www.tiktok.com/@ruthwan_ithiriz" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
    <SiTiktok />
  </a>

 
  

  <a className="github" href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
    <SiGithub />
  </a>

  <a className="whatsapp" href="https://wa.me/252636531112" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
    <SiWhatsapp />
  </a>

  <a className="gmail" href="mailto:hargeysaawi653@gmail.com" aria-label="Gmail">
    <SiGmail />
  </a>
</div>


</section>


      <footer className="footer">
        <a href="#home" className="logo">
          R<span>.</span>IM
        </a>

        <p>© 2026 Rudwan Idiris Mahamed</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
