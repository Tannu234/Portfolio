import './Skills.css';

function Skills() {
  const skillGroups = [
    {
      category: 'Programming & DSA',
      items: ['C++', 'DSA & Problem Solving', 'Python', 'JavaScript (ES6+)'],
    },
    {
      category: 'Frontend',
      items: ['React', 'HTML5 & CSS3', 'Redux', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
    },
    {
      category: 'Database',
      items: ['MongoDB', 'Mongoose', 'MongoDB Atlas'],
    },
    {
      category: 'AI / ML',
      items: ['Machine Learning Basics', 'Model Integration', 'LLM APIs (Groq/Llama)'],
    },
    {
      category: 'Tools & Deployment',
      items: ['Git & GitHub', 'Netlify', 'Render', 'VS Code', 'Postman'],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-tag">Skills</p>
        <h2 className="section-title">What I Work With</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.category}>
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;