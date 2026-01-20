import { 
  Shield, 
  Users, 
  FileText, 
  Lock, 
  Share2, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Unified Medical Records",
      description: "Access complete patient history from multiple healthcare providers in one secure platform.",
      color: "primary",
    },
    {
      icon: Lock,
      title: "Consent-Based Access",
      description: "Patients control who can view their records with granular permission management.",
      color: "success",
    },
    {
      icon: Share2,
      title: "Interoperable Sharing",
      description: "Seamlessly share records between authorized doctors and clinics.",
      color: "accent",
    },
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All data is encrypted at rest and in transit with industry-standard protocols.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Doctors and patients have tailored dashboards with appropriate access levels.",
      color: "success",
    },
    {
      icon: CheckCircle2,
      title: "Audit Logging",
      description: "Complete transparency with detailed logs of all record access and changes.",
      color: "accent",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground";
      case "success":
        return "bg-success/10 text-success group-hover:bg-success group-hover:text-success-foreground";
      case "accent":
        return "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Platform Features</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Healthcare Professionals
          </h2>
          <p className="text-muted-foreground text-lg">
            CareBridge provides the tools healthcare providers need to deliver 
            better patient care through unified, secure health records.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${getColorClasses(feature.color)}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/features">
              Explore All Features
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
