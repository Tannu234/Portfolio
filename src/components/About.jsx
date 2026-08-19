import './About.css';

function About() {
  const highlights = [
    { label: 'Education', value: 'B.Tech, AI & ML — RGPV Bhopal' },
    { label: 'Focus', value: 'Full-Stack Web Development' },
    { label: 'Experience', value: 'Intern @ Web Stack Academy' },
    { label: 'Interests', value: 'ML Systems, UI Engineering' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <p className="section-tag">About Me</p>
        <h2 className="section-title">Who I Am</h2>

        <div className="about-content">
          <div className="about-text">
       <p>
          I'm a third-year B.Tech student specializing in AI & Machine Learning
          at RGPV Bhopal, with a strong interest in full-stack development. I
          build web applications using React, Node.js, Express, and MongoDB,
          and I'm exploring how AI and ML can be integrated into practical,
          real-world products.
       </p>
       <p>
          My work spans a full MERN food delivery platform with AI-powered
          review summarization, an ML-based phishing detection system, and
          several frontend-focused UI projects — each built with attention
          to clean code and usable design.
       </p>
          </div>

          <div className="about-grid">
            {highlights.map((item) => (
              <div className="about-card" key={item.label}>
                <p className="about-label">{item.label}</p>
                <p className="about-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;