import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Mail, Lock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>("");

  const roles = [
    { 
      value: "student", 
      label: "Student", 
      description: "I'm a learner ready to read amazing stories",
      color: "bg-pink-500"
    },
    { 
      value: "parent", 
      label: "Parent", 
      description: "I want to track my child's reading progress",
      color: "bg-blue-500" 
    },
    { 
      value: "teacher", 
      label: "Teacher", 
      description: "I need tools to manage my classroom reading",
      color: "bg-green-500"
    }
  ];

  const handleAuthAction = () => {
    // This would integrate with Supabase authentication
    console.log("Authentication action:", { isSignUp, selectedRole });
  };

  return (
    <main className="min-h-screen bg-gradient-hero flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <span className="font-poppins font-bold text-2xl text-white">
              BulaBooks
            </span>
          </Link>
        </div>

        <Card className="border-white/20 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              {isSignUp ? "Join BulaBooks" : "Welcome Back"}
            </CardTitle>
            <p className="text-muted-foreground">
              {isSignUp 
                ? "Create your account to start your reading journey" 
                : "Sign in to continue your reading adventure"
              }
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Role Selection (only for signup) */}
            {isSignUp && (
              <div className="space-y-3">
                <Label className="text-sm font-semibold">I am a:</Label>
                <div className="grid grid-cols-1 gap-2">
                  {roles.map((role) => (
                    <button
                      key={role.value}
                      onClick={() => setSelectedRole(role.value)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        selectedRole === role.value
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 ${role.color} rounded-full`}></div>
                        <div>
                          <div className="font-semibold text-sm text-foreground">
                            {role.label}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {role.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Form Fields */}
            <div className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="name" 
                      placeholder="Enter your full name" 
                      className="pl-10"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password" 
                    className="pl-10"
                  />
                </div>
              </div>

              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="confirmPassword" 
                      type="password" 
                      placeholder="Confirm your password" 
                      className="pl-10"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Action Button */}
            <Button 
              onClick={handleAuthAction} 
              className="w-full"
              disabled={isSignUp && !selectedRole}
            >
              {isSignUp ? "Create Account" : "Sign In"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {/* Toggle Mode */}
            <div className="text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary hover:underline text-sm"
              >
                {isSignUp 
                  ? "Already have an account? Sign in" 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>

            {/* Note about backend */}
            <div className="bg-muted/50 border border-border rounded-lg p-3 text-center">
              <p className="text-xs text-muted-foreground">
                <strong>Note:</strong> Authentication requires Supabase integration. 
                This is a demo interface.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link 
            to="/" 
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;