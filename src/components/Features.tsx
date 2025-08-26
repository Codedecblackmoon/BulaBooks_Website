import React from "react";
import { Globe, Mic, WifiOff, MessageSquare, Gamepad2, TrendingUp } from "lucide-react";
import "./Features.css";

const Features: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: "Multilingual Stories",
      description:
        "AI-powered books in English and home languages.",
    },
    {
      icon: Mic,
      title: "Speech Feedback",
      description:
        "Real-time pronunciation help while reading aloud.",
    },
    {
      icon: WifiOff,
      title: "Offline Access",
      description:
        "Works on low-cost devices, no internet needed.",
    },
    {
      icon: MessageSquare,
      title: "SMS Updates",
      description:
        "Parents get progress updates via SMS."
    },
    {
      icon: Gamepad2,
      title: "Cooperative Games",
      description:
        "Family games that make learning fun together.",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Simple dashboards for teachers and parents.",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Powerful Features</h2>
          <p>Everything you need for effective reading learning</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon size={28} className="icon" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
