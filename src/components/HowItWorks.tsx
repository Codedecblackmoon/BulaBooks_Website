import React from "react";
import { Users, GraduationCap, BookOpen } from "lucide-react";
import "./HowItWorks.css";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Users,
      title: "For Kids",
      description:
        "Interactive stories with speech feedback help children read aloud and improve pronunciation in multiple languages.",
      color: "circle-blue",
    },
    {
      icon: GraduationCap,
      title: "For Parents",
      description:
        "Receive SMS updates on progress, play cooperative games, and support your child's learning journey",
      color: "circle-green",
    },
    {
      icon: BookOpen,
      title: "For Teachers",
      description:
        "Simple dashboards track student progress and work offline, perfect for classrooms without Wi-Fi.",
      color: "circle-orange",
    },
  ];

  return (
    <section className="howitworks">
      <div className="howitworks-container">
        <div className="howitworks-header">
          <h2>How BulaBooks Works</h2>
          <p>Simple, effective, and designed for everyone</p>
        </div>

        <div className="howitworks-grid">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className={`step-icon ${step.color}`}>
                <step.icon size={32} className="icon" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
