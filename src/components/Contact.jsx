import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-tag">Contact</p>
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-desc">
          Have a project or opportunity in mind? Let's talk.
        </p>

        <div className="contact-links">
          <a href="mailto:tamannabaghel322@gmail.com" className="contact-card">
            <span className="contact-label">Email</span>
            <span className="contact-value">tamannabaghel322@gmail.com</span>
          </a>
          <a
            href="https://github.com/Tannu234"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/Tannu234</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tamanna-baghel-ba7490292"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">Connect with me</span>
          </a>
        </div>

        
      </div>
    </section>
  );
}

export default Contact;