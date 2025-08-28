import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award, 
  Globe, 
  Heart, 
  Star,
  ArrowRight,
  Target,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";

const Impact = () => {
  const stats = [
    {
      number: "81%",
      label: "Grade 4 learners can't read for meaning",
      source: "PIRLS 2021 Study",
      color: "text-red-500",
      isNegative: true
    },
    {
      number: "10,000+",
      label: "Children already using BulaBooks",
      source: "Active monthly users",
      color: "text-primary",
      isNegative: false
    },
    {
      number: "500+",
      label: "Multilingual stories published",
      source: "Growing content library",
      color: "text-primary", 
      isNegative: false
    },
    {
      number: "6",
      label: "South African languages supported",
      source: "Cultural representation",
      color: "text-primary",
      isNegative: false
    },
    {
      number: "95%",
      label: "Parent satisfaction rate",
      source: "User feedback surveys",
      color: "text-primary",
      isNegative: false
    },
    {
      number: "3.2x",
      label: "Improvement in reading engagement",
      source: "Before vs after BulaBooks",
      color: "text-primary",
      isNegative: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      title: "Literacy Researcher, University of Cape Town",
      content: "BulaBooks represents a breakthrough in culturally responsive literacy technology. The multilingual approach and gamification elements address key barriers to reading engagement in South African contexts.",
      avatar: "SJ"
    },
    {
      name: "Thabo Mthembu", 
      title: "Primary School Principal, Soweto",
      content: "Since introducing BulaBooks in our school, we've seen remarkable improvements in reading motivation. Children who previously struggled with English are now confident readers in their mother tongue.",
      avatar: "TM"
    },
    {
      name: "Dr. Nomsa Dlamini",
      title: "Education Policy Expert",
      content: "This platform addresses the critical need for mother-tongue literacy resources in South Africa. The cultural relevance of stories makes learning more meaningful for our children.",
      avatar: "ND"
    }
  ];

  const outcomes = [
    {
      icon: Target,
      title: "Improved Reading Comprehension",
      description: "Children show 65% better comprehension when reading in their mother tongue first",
      metrics: ["65% improvement", "3-month timeline", "Measured via assessments"]
    },
    {
      icon: Heart,
      title: "Increased Reading Motivation", 
      description: "Gamified elements and cultural stories boost engagement and daily reading time",
      metrics: ["3.2x more engagement", "Daily usage up 240%", "Voluntary reading increased"]
    },
    {
      icon: Globe,
      title: "Cultural Pride & Identity",
      description: "Stories reflecting local cultures strengthen identity and learning connection",
      metrics: ["94% cultural relevance", "6 languages supported", "Local story creators"]
    },
    {
      icon: Lightbulb,
      title: "Teacher Effectiveness",
      description: "Teachers report better classroom management and literacy instruction outcomes",
      metrics: ["89% teacher satisfaction", "Classroom tools included", "Progress tracking"]
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 bg-white/20 text-white border-white/30">
            Real Impact, Real Results
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4 font-poppins">
            Transforming South African Literacy
          </h1>
          <p className="text-xl text-white/90">
            Discover how BulaBooks is addressing the literacy crisis through culturally 
            relevant technology and proven educational approaches.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              The Literacy Crisis in South Africa
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              South Africa faces one of the world's worst literacy crises. Our mission is to 
              change this narrative through innovative, culturally responsive technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className={`border-border ${stat.isNegative ? 'bg-red-50 dark:bg-red-900/10' : 'bg-primary/5'}`}>
                <CardContent className="p-6 text-center">
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.source}
                  </p>
                  {stat.isNegative && (
                    <Badge variant="destructive" className="mt-2 text-xs">
                      Critical Issue
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              Measurable Outcomes
            </h2>
            <p className="text-lg text-muted-foreground">
              Evidence-based results from children, families, and schools using BulaBooks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <Card key={index} className="border-border hover:border-primary/20 transition-all hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {outcome.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {outcome.description}
                        </p>
                        <div className="space-y-1">
                          {outcome.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expert Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              What Experts Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognition from education researchers, teachers, and literacy specialists
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <TrendingUp className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
            Be Part of the Solution
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Help us transform South African literacy, one child at a time. 
            Join our mission to unlock every child's reading journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/download">
                Download BulaBooks
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10" asChild>
              <Link to="/about">
                Learn About Our Mission
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Impact;