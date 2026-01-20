import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lock, FileText, ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const features = [
    "Unified medical records",
    "Consent-based access",
    "End-to-end encryption",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Privacy-First Healthcare Platform</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Bridging Healthcare
              <span className="block text-primary">Through Secure Records</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              CareBridge unifies fragmented medical records across healthcare providers 
              while preserving patient privacy through consent-based access control.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li 
                  key={feature}
                  className="flex items-center gap-3 text-foreground"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/auth?mode=signup">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/features">Learn More</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4 text-success" />
                <span>256-bit Encryption</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-success" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative lg:pl-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-3xl shadow-elevated p-8 border border-border">
                <div className="space-y-6">
                  {/* Patient Record Preview */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center">
                      <FileText className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">Medical Record</h3>
                      <p className="text-sm text-muted-foreground">Unified patient history</p>
                    </div>
                  </div>

                  {/* Simulated Record Fields */}
                  <div className="space-y-4">
                    {[
                      { label: "Patient ID", value: "CB-2024-****" },
                      { label: "Last Visit", value: "January 15, 2024" },
                      { label: "Status", value: "Active", isStatus: true },
                    ].map((field) => (
                      <div key={field.label} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                        <span className="text-sm text-muted-foreground">{field.label}</span>
                        {field.isStatus ? (
                          <span className="px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
                            {field.value}
                          </span>
                        ) : (
                          <span className="text-sm font-medium text-foreground">{field.value}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center gap-2 py-4 bg-secondary rounded-xl">
                    <Lock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-secondary-foreground">
                      Encrypted & Consent Protected
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-card p-4 border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Access Granted</p>
                    <p className="text-sm font-medium text-foreground">Dr. Smith</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-card p-4 border border-border animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Data Protected</p>
                    <p className="text-sm font-medium text-foreground">100% Secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
