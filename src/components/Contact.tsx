import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css'; // Import the CSS file

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>We're here to help you get started</p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" id="name" name="name" value={formData.name}
                  onChange={handleChange} required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" id="email" name="email" value={formData.email}
                  onChange={handleChange} required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" name="message" rows={5} value={formData.message}
                  onChange={handleChange} required 
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <div className="icon-box">
                <Phone size={20} />
              </div>
              <div>
                <div className="info-title">Phone</div>
                <div className="info-text">+27 123 456 890</div>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <Mail size={20} />
              </div>
              <div>
                <div className="info-title">Email</div>
                <div className="info-text">info@bulabooks.co.za</div>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <div className="info-title">Location</div>
                <div className="info-text">Cape Town, South Africa</div>
              </div>
            </div>

            {/* <div className="map-box">
              <h4>Find us on the map</h4>
              <div className="map-placeholder">
                <MapPin size={48} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
