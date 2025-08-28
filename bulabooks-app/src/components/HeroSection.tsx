import { ArrowRight, Play, Star, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white/90 font-medium">Trusted by 10,000+ families</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
              Unlock Every Child's{" "}
              <span className="text-yellow-300 relative">
                Reading Journey
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-300/30 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
              Transforming literacy in South Africa through multilingual stories, 
              gamified learning, and cultural relevance that speaks to every child.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-white/90">
                <Users className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">10,000+</span>
                <span>Active Learners</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <BookOpen className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">500+</span>
                <span>Stories Available</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 font-semibold animate-bounce-gentle"
                asChild
              >
                <Link to="/download">
                  Download Free App
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white border-white/30 hover:bg-white/10"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Phone Mockup */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">
                    Today's Reading Challenge
                  </h3>
                  <div className="bg-muted rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">3 / 5 stories</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-primary/10 rounded-lg p-2 text-center">
                      <div className="font-bold text-primary">⭐ 12</div>
                      <div className="text-muted-foreground">Stars</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-2 text-center">
                      <div className="font-bold text-primary">🔥 7</div>
                      <div className="text-muted-foreground">Streak</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-2 text-center">
                      <div className="font-bold text-primary">📚 23</div>
                      <div className="text-muted-foreground">Books</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-300/20 rounded-full animate-bounce-gentle"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full animate-bounce-gentle" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;