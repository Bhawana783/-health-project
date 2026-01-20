import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Share2,
  FileText,
  Users,
  CheckCircle2,
  Activity,
  Database,
  Eye,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: FileText,
      title: "Unified Medical Records",
      description: "Consolidate patient information from multiple healthcare providers into a single, comprehensive digital record.",
      benefits: [
        "Complete medical history at a glance",
        "No more lost or duplicated records",
        "Faster, more accurate diagnoses",
      ],
    },
    {
      icon: Lock,
      title: "Consent-Based Access Control",
      description: "Patients maintain full control over their health data with granular permission settings.",
      benefits: [
        "Grant or revoke access anytime",
        "Set time-limited permissions",
        "Choose what information to share",
      ],
    },
    {
      icon: Share2,
      title: "Secure Interoperability",
      description: "Share records seamlessly between authorized healthcare providers while maintaining security.",
      benefits: [
        "Real-time data synchronization",
        "Cross-platform compatibility",
        "Standardized data formats",
      ],
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Your data is protected with the highest standards of encryption and security protocols.",
      benefits: [
        "256-bit AES encryption",
        "HIPAA compliance",
        "Regular security audits",
      ],
    },
  ];

  const additionalFeatures = [
    { icon: Users, title: "Role-Based Dashboards", description: "Tailored interfaces for patients and healthcare providers" },
    { icon: Eye, title: "Audit Logging", description: "Complete transparency with detailed access logs" },
    { icon: Activity, title: "Real-Time Updates", description: "Instant synchronization across all devices" },
    { icon: Database, title: "Secure Storage", description: "Encrypted cloud storage with redundant backups" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Platform Features</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Everything You Need for Secure Health Records
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                CareBridge provides a comprehensive suite of features designed to unify 
                healthcare data while maintaining the highest standards of privacy and security.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/auth?mode=signup">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {mainFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mb-6 shadow-card">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-card rounded-3xl p-8 shadow-elevated border border-border ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}>
                    <div className="aspect-video bg-secondary/50 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-primary/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                And Much More
              </h2>
              <p className="text-muted-foreground">
                Additional features that make CareBridge the complete solution for healthcare data management.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature) => (
                <div 
                  key={feature.title}
                  className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="font-display text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 mb-8">
                Join healthcare providers who trust CareBridge for secure, 
                interoperable patient data management.
              </p>
              <Button 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 shadow-elevated font-semibold"
                asChild
              >
                <Link to="/auth?mode=signup">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
