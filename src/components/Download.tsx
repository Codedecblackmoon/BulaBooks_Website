import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import app from '../images/App Store.png'
import Iphone from '../images/Play Store.png'
import url from '../images/URL 1.png'
import './Download.css';

const Download: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'Is BulaBooks free?',
      answer: 'Yes, BulaBooks offers a free version with basic features. Premium features are available with a subscription.'
    },
    {
      question: 'What age group is BulaBooks for?',
      answer: 'BulaBooks is designed for children aged 5-12, with content adapted for different reading levels.'
    },
    {
      question: 'Does it work offline?',
      answer: 'Yes, you can download stories and activities to use offline when internet access is limited.'
    },
    {
      question: 'What languages are supported?',
      answer: 'BulaBooks supports English and several South African languages including isiZulu, Afrikaans, and Sesotho.'
    }
  ];

  return (
    <section className="download-section">
      <div className="container">
        <div className="text-center section-header">
          <h2>Download BulaBooks Today</h2>
          <p>Available on all devices, works offline</p>
        </div>

        <div className="grid">
          <div>
            <div className="download-buttons">
              <button className="store-button">
                <div className="icon"><img src={app} alt="" /></div>
                <div className="text">
                  <div className="small">Download on the</div>
                  <div className="bold">App Store</div>
                </div>
              </button>
              <button className="store-button">
                <div className="icon"><img src={Iphone} alt="" /></div>
                <div className="text">
                  <div className="small">Get it on</div>
                  <div className="bold">Google Play</div>
                </div>
              </button>
            </div>

            <div className="qr-card">
              <div className="qr-box">
                <div className="qr-icon"><img src={url} alt="" /></div>
              </div>
              <p>Scan with your phone to download</p>
            </div>
          </div>

          <div>
            <h3 className="faq-title">Frequently Asked Questions</h3>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span>{faq.question}</span>
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {openFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
