import React from 'react';
// import Image1 from '../images/logo2.png';
import './Impact.css';

const Impact: React.FC = () => {
  const stats = [
    {
      value: '70%',
      label: 'of Grade 4 learners read for comprehension',
      description: 'Significant improvement in reading comprehension scores'
    },
    {
      value: '5,000+',
      label: 'children already using BulaBooks',
      description: 'Growing community of young readers'
    },
    {
      value: '85%',
      label: 'improvement in reading confidence',
      description: 'Children show increased confidence in reading skills'
    }
  ];

  return (
    <section className="impact-section">
      <div className="impact-container">
        <div className="impact-header">
          <h2>Making a Real Impact</h2>
          <p>Transforming literacy in South African communities</p>
        </div>

        <div className="impact-stats">
          {stats.map((stat, index) => (
            <div key={index} className="impact-stat">
              <div className="impact-value">{stat.value}</div>
              <div className="impact-label">{stat.label}</div>
              {/* <div className="impact-description">{stat.description}</div> */}
            </div>
          ))}
        </div>

        <div className="impact-testimonials">
          <div className="testimonial-card orange">
            <div className="testimonial-inner">
              <div className="testimonial-header">
                <div className="avatar">
                  {/* <img src={Image1} alt="" /> */}
                </div>
                <div>
                  <div className="testimonial-name">Nomsa</div>
                  <div className="testimonial-role">Parent, KwaZulu-Natal</div>
                </div>
              </div>
              <p className="testimonial-text">
                "My son's reading has improved so much since we started using BulaBooks. 
                The stories are engaging and he loves the interactive features."
              </p>
            </div>
          </div>

          <div className="testimonial-card blue">
            <div className="testimonial-inner">
              <div className="testimonial-header">
                <div className="avatar"></div>
                <div>
                  <div className="testimonial-name">Thabo</div>
                  <div className="testimonial-role">Teacher, Limpopo</div>
                </div>
              </div>
              <p className="testimonial-text">
                "BulaBooks has become an essential tool in my classroom. 
                The progress tracking helps me support each child individually."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
