import React from "react";
import { Users, GraduationCap, BookOpen } from "lucide-react";
import "./HowItWorks.css";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Users,
      title: "For Kids",
      description:
        "Engaging interactive stories and games that make learning fun. Children can read, listen, and interact with characters while building vocabulary and comprehension skills.",
      color: "circle-blue",
    },
    {
      icon: GraduationCap,
      title: "For Parents",
      description:
        "Track your child's progress with detailed insights and reports. Get personalized recommendations and tips to support their reading journey at home.",
      color: "circle-green",
    },
    {
      icon: BookOpen,
      title: "For Teachers",
      description:
        "Classroom management tools with lesson plans, progress tracking, and curriculum alignment. Perfect for supplementing traditional teaching methods.",
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
