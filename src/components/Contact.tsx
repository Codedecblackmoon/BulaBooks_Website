import React, { useState } from 'react';
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

  const handleSubmit = () => {
    if (!isPrivacyChecked) {
      alert('Please agree to the privacy policy');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 pb-24">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Form Section */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Get in touch</h1>
            <p className="text-gray-600 mb-8">Our friendly team would love to hear from you.</p>
            
            <div className="space-y-6">
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
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>
                <div className="flex gap-2">
                  <select className="px-3 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 hover:border-[#f96d00] focus:ring-[#ff7e1b] focus:border-transparent outline-none">
                    <option value="US">US</option>
                    <option value="CA">CA</option>
                    <option value="UK">UK</option>
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
                onClick={handleSubmit}
                className="w-full bg-[#f96d00] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#ff7e1b] focus:ring-4 focus:ring-purple-200 transition-all duration-200 transform hover:translate-y-[-1px] active:translate-y-0"
              >
                Send message
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 bg-gradient-to-br from-amber-100 to-orange-200 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4 opacity-50">📷</div>
                <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-full w-32 h-32 mx-auto flex items-center justify-center">
                  <div className="text-4xl">👤</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-30 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
            <div className="absolute top-1/3 right-20 w-8 h-8 bg-white bg-opacity-40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;