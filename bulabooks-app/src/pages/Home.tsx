import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Star, ArrowRight, Languages, Gamepad2, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Languages,
      title: "Multilingual Stories",
      description: "Stories in English, Zulu, Xhosa, and more South African languages"
    },
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      description: "Interactive games, badges, and challenges that make reading fun"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Real-time insights for parents and teachers on reading development"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Parent, Cape Town",
      content: "My daughter went from struggling reader to devouring books in just 3 months!",
      rating: 5
    },
    {
      name: "Thabo K.",
      role: "Grade 3 Teacher, Johannesburg", 
      content: "BulaBooks transformed my classroom. Kids are excited about reading for the first time.",
      rating: 5
    },
    {
      name: "Nomsa P.",
      role: "Parent, Durban",
      content: "Finally, stories that reflect our culture and language. My son loves it!",
      rating: 5
    }
  ];

  return (
    <main>
      <HeroSection />
      
      {/* Quick Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              Why Choose BulaBooks?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're addressing South Africa's literacy crisis with culturally relevant, 
              engaging digital solutions that work for every child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border hover:border-primary/20 transition-all hover:shadow-lg group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="animate-bounce-gentle">
              <Link to="/features">
                Explore All Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              Making Real Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of families already transforming their reading journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Stories Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              What Families Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
            Ready to Unlock Your Child's Reading Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of South African families already transforming literacy through play.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 animate-bounce-gentle" asChild>
              <Link to="/download">
                Download Free App
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10" asChild>
              <Link to="/how-it-works">
                Learn How It Works
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;