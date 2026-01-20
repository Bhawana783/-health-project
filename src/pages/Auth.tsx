import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Shield, Mail, Lock, User, ArrowLeft, Eye, EyeOff, Stethoscope } from "lucide-react";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [isSignUp, setIsSignUp] = useState(searchParams.get("mode") === "signup");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"patient" | "doctor">("patient");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setIsSignUp(searchParams.get("mode") === "signup");
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication with Lovable Cloud
    console.log("Form submitted:", { ...formData, role, isSignUp });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-12">
        <div className="max-w-md mx-auto w-full">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="relative">
              <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center shadow-soft">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <Shield className="w-4 h-4 text-primary absolute -bottom-1 -right-1 bg-background rounded-full p-0.5" />
            </div>
            <span className="font-display font-bold text-xl">
              Care<span className="text-primary">Bridge</span>
            </span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              {isSignUp ? "Create your account" : "Welcome back"}
            </h1>
            <p className="text-muted-foreground">
              {isSignUp 
                ? "Start managing your health records securely" 
                : "Sign in to access your health records"}
            </p>
          </div>

          {/* Role Selection (Sign Up only) */}
          {isSignUp && (
            <div className="mb-6">
              <Label className="text-sm font-medium mb-3 block">I am a...</Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("patient")}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                    role === "patient"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <User className={`w-5 h-5 ${role === "patient" ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`font-medium ${role === "patient" ? "text-primary" : "text-foreground"}`}>
                    Patient
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("doctor")}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                    role === "doctor"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Stethoscope className={`w-5 h-5 ${role === "doctor" ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`font-medium ${role === "doctor" ? "text-primary" : "text-foreground"}`}>
                    Doctor
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Dr. John Smith"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 h-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>
            )}

            {!isSignUp && (
              <div className="flex justify-end">
                <Link to="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
            )}

            <Button type="submit" variant="hero" size="lg" className="w-full">
              {isSignUp ? "Create Account" : "Sign In"}
            </Button>
          </form>

          {/* Toggle Auth Mode */}
          <p className="text-center text-muted-foreground mt-6">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary font-medium hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-success" />
            <span>Your data is protected with 256-bit encryption</span>
          </div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex flex-1 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        
        <div className="flex flex-col items-center justify-center w-full p-12 relative">
          <div className="max-w-md text-center text-white">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="font-display text-3xl font-bold mb-4">
              Secure Health Records
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of healthcare professionals and patients 
              who trust CareBridge for secure, interoperable medical records.
            </p>

            {/* Feature List */}
            <div className="space-y-4 text-left">
              {[
                "Unified medical records across providers",
                "Consent-based access control",
                "HIPAA compliant security",
                "Real-time data synchronization",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
