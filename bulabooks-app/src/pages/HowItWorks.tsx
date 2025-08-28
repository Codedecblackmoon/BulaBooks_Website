import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  BookOpen, 
  Trophy, 
  Users, 
  BarChart3, 
  MessageSquare,
  ArrowRight,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Download & Setup",
      description: "Download the free BulaBooks app and create your family profile. Choose your preferred language and set reading goals.",
      icon: Download,
      color: "bg-blue-500"
    },
    {
      step: "02", 
      title: "Explore Stories",
      description: "Browse our library of culturally relevant stories in multiple South African languages. Stories adapt to your child's reading level.",
      icon: BookOpen,
      color: "bg-green-500"
    },
    {
      step: "03",
      title: "Read & Play",
      description: "Children read interactive stories, play literacy games, and earn badges. AI provides pronunciation feedback in real-time.",
      icon: Play,
      color: "bg-purple-500"
    },
    {
      step: "04",
      title: "Track Progress",
      description: "Parents and teachers monitor reading progress through detailed dashboards. Get insights on comprehension and fluency growth.",
      icon: BarChart3,
      color: "bg-orange-500"
    }
  ];

  const userJourneys = [
    {
      title: "For Kids",
      subtitle: "Fun Learning Adventure",
      features: [
        "Choose from 500+ multilingual stories",
        "Play interactive reading games and puzzles", 
        "Earn badges and climb leaderboards",
        "Get AI feedback on pronunciation",
        "Track reading streaks and achievements"
      ],
      icon: Trophy,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "For Parents", 
      subtitle: "Monitor & Support Growth",
      features: [
        "View detailed progress reports",
        "Set reading goals and reminders",
        "Receive weekly SMS updates",
        "Manage multiple child profiles",
        "Access parent resources and tips"
      ],
      icon: Users,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "For Teachers",
      subtitle: "Classroom Management",
      features: [
        "Track entire class progress",
        "Assign group reading challenges",
        "Download curriculum-aligned content",
        "Generate progress reports",
        "Communicate with parents"
      ],
      icon: BarChart3,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4 font-poppins">
            How BulaBooks Works
          </h1>
          <p className="text-xl text-white/90">
            A simple 4-step process to transform your child's reading journey through 
            culturally relevant stories and gamified learning.
          </p>
        </div>
      </section>

      {/* Steps Process */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              Getting Started is Simple
            </h2>
            <p className="text-lg text-muted-foreground">
              From download to reading success in just a few easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4"></div>
                  )}
                  
                  <Card className="border-border hover:border-primary/20 transition-all hover:shadow-lg text-center">
                    <CardContent className="p-6">
                      <div className="relative">
                        <div className={`w-16 h-16 ${step.color} rounded-2xl mx-auto flex items-center justify-center mb-4`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/download">
                Start Your Journey Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* User Journeys */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              Tailored Experiences for Everyone
            </h2>
            <p className="text-lg text-muted-foreground">
              BulaBooks adapts to meet the unique needs of children, parents, and teachers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {userJourneys.map((journey, index) => {
              const Icon = journey.icon;
              return (
                <Card key={index} className="border-border hover:border-primary/20 transition-all hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${journey.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {journey.title}
                    </h3>
                    <p className="text-primary font-medium mb-6">
                      {journey.subtitle}
                    </p>
                    <ul className="space-y-3">
                      {journey.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
            See BulaBooks in Action
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Watch how children, parents, and teachers use BulaBooks to transform literacy
          </p>
          
          <div className="bg-gradient-hero rounded-2xl p-12 text-center">
            <Play className="w-20 h-20 text-white mx-auto mb-6 animate-bounce-gentle" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Interactive Demo Coming Soon
            </h3>
            <p className="text-white/90 mb-6">
              Experience BulaBooks firsthand with our interactive demo showcasing 
              all features for students, parents, and teachers.
            </p>
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <MessageSquare className="w-5 h-5 mr-2" />
              Request Demo Access
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;