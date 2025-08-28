import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Languages, 
  Gamepad2, 
  BarChart3, 
  Smartphone, 
  MessageSquare, 
  Globe, 
  Trophy, 
  Users, 
  Brain,
  Download
} from "lucide-react";

const Features = () => {
  const features = [
    {
      category: "Learning Experience",
      items: [
        {
          icon: Languages,
          title: "Multilingual Stories",
          description: "Rich collection of stories in English, isiZulu, isiXhosa, Afrikaans, Sepedi, and more South African languages",
          benefits: ["Cultural relevance", "Mother-tongue literacy", "Language preservation"]
        },
        {
          icon: Gamepad2,
          title: "Gamified Reading",
          description: "Turn reading into an adventure with badges, leaderboards, reading streaks, and interactive challenges",
          benefits: ["Increased motivation", "Progress tracking", "Competitive learning"]
        },
        {
          icon: Brain,
          title: "AI Speech Feedback",
          description: "Advanced speech recognition technology provides real-time pronunciation feedback and fluency assessment",
          benefits: ["Pronunciation improvement", "Confidence building", "Personalized learning"]
        }
      ]
    },
    {
      category: "For Parents",
      items: [
        {
          icon: BarChart3,
          title: "Progress Dashboards",
          description: "Comprehensive insights into your child's reading development, time spent, books completed, and skill growth",
          benefits: ["Real-time updates", "Detailed reports", "Goal setting"]
        },
        {
          icon: MessageSquare,
          title: "SMS Updates",
          description: "Weekly progress summaries sent via SMS for parents with limited data access",
          benefits: ["Low-data friendly", "Regular updates", "No internet required"]
        },
        {
          icon: Users,
          title: "Multiple Child Profiles",
          description: "Manage reading journeys for multiple children from one parent account",
          benefits: ["Family management", "Individual tracking", "Shared progress"]
        }
      ]
    },
    {
      category: "For Teachers",
      items: [
        {
          icon: Trophy,
          title: "Classroom Management",
          description: "Tools for teachers to track class progress, assign group challenges, and manage student activities",
          benefits: ["Class overview", "Group activities", "Progress monitoring"]
        },
        {
          icon: Globe,
          title: "Curriculum Alignment",
          description: "Stories and activities aligned with South African CAPS curriculum requirements",
          benefits: ["Educational standards", "Lesson integration", "Assessment tools"]
        },
        {
          icon: Download,
          title: "Offline Access",
          description: "Download stories and activities for offline use in areas with limited internet connectivity",
          benefits: ["No internet needed", "Rural accessibility", "Data conservation"]
        }
      ]
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4 font-poppins">
            Features That Transform Learning
          </h1>
          <p className="text-xl text-white/90">
            Discover how BulaBooks combines technology, culture, and pedagogy to create 
            the most effective reading platform for South African children.
          </p>
        </div>
      </section>

      {/* Features by Category */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className={categoryIndex > 0 ? "mt-20" : ""}>
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                  {category.category}
                </Badge>
                <h2 className="text-3xl font-bold text-foreground font-poppins">
                  Built for {category.category.split(' ')[category.category.split(' ').length - 1]}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="border-border hover:border-primary/20 transition-all hover:shadow-lg group h-full">
                      <CardHeader>
                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-muted-foreground mb-6">
                          {feature.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-foreground">Key Benefits:</h4>
                          <ul className="space-y-1">
                            {feature.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              Technical Specifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Built with cutting-edge technology for optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-border">
              <CardContent className="p-6">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Cross-Platform</h3>
                <p className="text-sm text-muted-foreground">
                  iOS, Android, and Web support
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="p-6">
                <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Offline Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Works without internet connection
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">6 Languages</h3>
                <p className="text-sm text-muted-foreground">
                  South African official languages
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="p-6">
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">AI Powered</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced speech recognition
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Features;