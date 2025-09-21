import React, {useState} from 'react';
// import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css'; // Import the CSS file
import emailjs from 'emailjs-com';


const Contact: React.FC = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceID = 'service_4b0mwhe'; 
    const templateID = 'template_oxc16mb';  
    const userID = 'm_XcbcDfp4HlS5nKC';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'Gideon.L'
    };

    

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert('Message sent successfully!');
        console.log('Email sent successfully:', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        alert('Failed to send the message. Please try again later.');
      });
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (

    <div className="content-page">
      <section id="hire">
        <h1>Contact Me</h1>
        <form onSubmit={handleFormSubmit} className="contact-form">
          <div className="field name-box">
            <input
              type="text"
              id="name"
              placeholder="Who Are You?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Name</label>
          </div>

      
          <div className="field email-box">
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="field msg-box">
            <textarea
              id="message"
              rows={4}
              placeholder="Your message goes here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <label htmlFor="message">Message</label>
          </div>

          <button className="button" type="submit">
            Send
          </button>
        </form>
      </section>
    </div>

    // <section id="contact" className="contact-section">
    //   <div className="container">
    //     <div className="section-header">
    //       <h2>Get in Touch</h2>
    //       <p>We're here to help you get started</p>
    //     </div>

    //     <div className="contact-grid">
    //       {/* Contact Form */}
    //       <div className="contact-form">
    //         <h3>Send us a message</h3>
    //         <form onSubmit={handleSubmit}>
    //           <div className="form-group">
    //             <label htmlFor="name">Name</label>
    //             <input 
    //               type="text" id="name" name="name" value={formData.name}
    //               onChange={handleChange} required 
    //             />
    //           </div>

    //           <div className="form-group">
    //             <label htmlFor="email">Email</label>
    //             <input 
    //               type="email" id="email" name="email" value={formData.email}
    //               onChange={handleChange} required 
    //             />
    //           </div>

    //           <div className="form-group">
    //             <label htmlFor="message">Message</label>
    //             <textarea 
    //               id="message" name="message" rows={5} value={formData.message}
    //               onChange={handleChange} required 
    //             ></textarea>
    //           </div>

    //           <button type="submit" className="submit-btn">
    //             Send Message
    //           </button>
    //         </form>
    //       </div>

          /* Contact Info */
          /* <div className="contact-info"> */
            /* <div className="info-item">
              <div className="icon-box">
                <Phone size={20} />
              </div>
              <div>
                <div className="info-title">Phone</div>
                <div className="info-text">+27 123 456 890</div>
              </div>
            </div> */

            /* <div className="info-item">
              <div className="icon-box">
                <Mail size={20} />
              </div>
              <div>
                <div className="info-title">Email</div>
                <div className="info-text">info@bulabooks.co.za</div>
              </div>
            </div> */

            /* <div className="info-item">
              <div className="icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <div className="info-title">Location</div>
                <div className="info-text">Johannesburg, South Africa</div>
              </div>
            </div> */

            /* <div className="map-box">
              <h4>Find us on the map</h4>
              <div className="map-placeholder">
                <MapPin size={48} />
              </div>
            </div> */
          /* </div> */
    //     </div>
    //   </div>
    // </section>
  );
};

export default Contact;
