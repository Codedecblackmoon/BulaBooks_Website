import React, { useState } from 'react';
import logo1 from '../images/Im.png'
import emailjs from 'emailjs-com';
import './Contact.css'

interface FormData { 
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isPrivacyChecked) {
      alert('Please agree to the privacy policy');
      return;
    }

    const serviceID = 'service_beb3doo';       // e.g. service_4b0mwhe
    const templateID = 'template_x2ktdyd';     // e.g. template_oxc16mb
    const userID = 'OJGRJ-sHim13tM8d4';          // e.g. m_XcbcDfp4HlS5nKC

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phoneNumber,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert('Message sent successfully!');
        console.log('Email sent successfully:', response);
        setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
        setIsPrivacyChecked(false);
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        alert('Failed to send the message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 pb-24">
        <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Form Section */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Get in touch</h1>
              <p className="text-gray-600 mb-8">Our friendly team would love to hear from you.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 hover:border-[#f96d00] focus:ring-[#ff7e1b] focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 hover:border-[#f96d00] focus:ring-[#ff7e1b] focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone number
                  </label>
                  <div className="flex gap-2">
                    <select className="px-3 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 hover:border-[#f96d00] focus:ring-[#ff7e1b] focus:border-transparent outline-none">
                      <option value="ZA">ZA</option>
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+27 123 348 390"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:border-[#f96d00] focus:ring-2 focus:ring-[#ff7e1b] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 border border-gray-300 hover:border-[#f96d00] rounded-lg focus:ring-2 focus:ring-[#ff7e1b] focus:border-transparent outline-none transition-all resize-none"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={isPrivacyChecked}
                    onChange={(e) => setIsPrivacyChecked(e.target.checked)}
                    className="mt-1 h-4 w-4 text-[#f96d00] border-gray-300 rounded focus:ring-[#ff7e1b]"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-700">
                    You agree to our friendly{' '}
                    <span className="text-[#f96d00] underline cursor-pointer hover:text-[#ff7e1b]">
                      privacy policy
                    </span>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f96d00] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#ff7e1b] focus:ring-4 focus:ring-purple-200 transition-all duration-200 transform hover:translate-y-[-1px] active:translate-y-0"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4 p-20px">
                    <img src={logo1} alt="" className="w-120"/>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-[#f96d00] bg-opacity-20 rounded-full"></div>
              <div className="absolute bottom-20 right-10 w-16 h-16 bg-[#f96d00] bg-opacity-20 rounded-full"></div>
              <div className="absolute top-1/3 right-20 w-8 h-8 bg-[#f96d00] bg-opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Contact;
