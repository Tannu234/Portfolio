import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Zaika Go',
      category: 'Full Stack Development',
      desc: 'Full-stack MERN food delivery app with restaurant listings, cart, order flow, and AI-powered review summarization using Groq Llama 3.1. Deployed live with MongoDB Atlas.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      liveLink: 'https://aifooddeliveryapp.netlify.app',
      codeLink: 'https://github.com/Tannu234/AI-Food-delivering',
    },
    {
      title: 'PhishNet',
      category: 'Frontend Development',
      desc: 'Phishing detection system frontend built in React, integrating a FastAPI ML backend. Supports URL scanning, manual feature input, batch CSV analysis, and model evaluation.',
      tags: ['React', 'FastAPI Integration', 'Machine Learning'],
      liveLink: 'https://brilliant-croissant-2b2b42.netlify.app',
      codeLink: 'https://github.com/Tannu234/Phishnet-Detection-system',
    },
    {
      title: 'Freshmart',
      category: 'Frontend Development',
      desc: 'Frontend UI project for a grocery/e-commerce style platform, focused on clean layout, product browsing, and responsive design.',
      tags: ['React', 'CSS', 'UI/UX'],
      liveLink: null,
      codeLink: 'https://github.com/Tannu234/Freshmart-UI-Project',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-tag">Projects</p>
        <h2 className="section-title">Things I've Built</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>

              <p className="project-desc">{project.desc}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn primary"
                  >
                    Live Demo
                  </a>
                ) : null}

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;