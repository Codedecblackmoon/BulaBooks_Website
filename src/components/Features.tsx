import React from "react";
import { Globe, Mic, WifiOff, MessageSquare, Gamepad2, TrendingUp } from "lucide-react";
import "./Features.css";

const Features: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: "Multilingual Stories",
      description:
        "Stories available in multiple languages to support diverse learning needs and cultural backgrounds.",
    },
    {
      icon: Mic,
      title: "Speech Feedback",
      description:
        "AI-powered speech recognition provides instant feedback on pronunciation and reading fluency.",
    },
    {
      icon: WifiOff,
      title: "Offline Access",
      description:
        "Download content for learning anywhere, anytime - no internet connection required.",
    },
    {
      icon: MessageSquare,
      title: "SMS Updates",
      description:
        "Parents receive progress updates and reading reminders via SMS to stay connected.",
    },
    {
      icon: Gamepad2,
      title: "Cooperative Games",
      description:
        "Interactive games that encourage collaboration and make learning social and fun.",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Detailed analytics and insights to monitor learning progress and identify areas for improvement.",
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
