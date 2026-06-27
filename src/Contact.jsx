import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'All fields are required.'
      });
      return;
    }

    // Simulate form submission
    setStatus({
      type: 'success',
      message: 'Message sent! Thank you for reaching out. 🚀'
    });

    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <main className="contact-page">
      <div className="contact-bg-orb"></div>
      
      <section className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Have questions, ideas, or just want to say hello? Reach out — let's collaborate and build something incredible together.
          </p>
        </div>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input form-textarea"
                placeholder="Your message here..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}

          <div className="contact-info">
            <div className="info-card">
              <h3>Collaborate</h3>
              <p>Interested in working together on a project? Let's talk about your ideas.</p>
            </div>
            <div className="info-card">
              <h3>Feedback</h3>
              <p>Have thoughts on Futuristic Blog? Your feedback helps make it better.</p>
            </div>
            <div className="info-card">
              <h3>Connect</h3>
              <p>Share your creations, experiments, and thoughts with the community.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;