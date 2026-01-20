import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Shield,
  Users,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const About = () => {
  const teamMembers = [
    { name: "Kartikay Rattan", role: "Full-Stack Developer" },
    { name: "Diven Saini", role: "Full-Stack Developer" },
    { name: "Bhawana", role: "Full-Stack Developer" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "We believe patients should have complete control over their health data. Every feature we build prioritizes privacy and consent.",
    },
    {
      icon: Users,
      title: "Healthcare for All",
      description: "Our mission is to bridge the healthcare gap in rural areas by making medical records accessible and interoperable.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage modern technology to solve real healthcare challenges while maintaining simplicity and usability.",
    },
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
                <Heart className="w-4 h-4" />
                <span>About CareBridge</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Bridging Healthcare Through Secure Technology
              </h1>
              <p className="text-lg text-muted-foreground">
                CareBridge is a digital health records platform focused on solving 
                the problem of fragmented medical records in rural healthcare through 
                interoperability and privacy-preserving design.
              </p>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Problem */}
              <div className="bg-card rounded-3xl p-8 border border-border shadow-soft">
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-destructive" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  The Problem
                </h2>
                <p className="text-muted-foreground mb-6">
                  Healthcare professionals in rural areas often struggle to maintain 
                  unified medical records. Patient information is commonly stored across 
                  paper files or isolated digital systems that do not communicate with 
                  each other.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Incomplete medical histories",
                    "Delayed treatments due to missing data",
                    "Repeated and unnecessary medical tests",
                    "Increased risk of medical errors",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-card rounded-3xl p-8 border border-border shadow-soft">
                <div className="w-14 h-14 gradient-hero rounded-2xl flex items-center justify-center mb-6 shadow-soft">
                  <Lightbulb className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Our Solution
                </h2>
                <p className="text-muted-foreground mb-6">
                  CareBridge provides a secure and interoperable digital health record 
                  system that unifies patient data across healthcare providers while 
                  preserving privacy.
                </p>
                <ul className="space-y-3">
                  {[
                    "Unified medical records in one platform",
                    "Consent-based access control",
                    "Role-based dashboards for patients and doctors",
                    "End-to-end encryption for all data",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we build at CareBridge.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="text-center"
                >
                  <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                <span>Team TriForge</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground">
                A collaborative full-stack development team working together to 
                build meaningful healthcare solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {teamMembers.map((member) => (
                <div 
                  key={member.name}
                  className="bg-card rounded-2xl p-6 border border-border shadow-soft text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-display font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="font-display text-3xl font-bold mb-4">
                Join Us in Transforming Healthcare
              </h2>
              <p className="text-white/90 mb-8">
                Be part of the solution. Start using CareBridge today and 
                experience the future of secure health records.
              </p>
              <Button 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 shadow-elevated font-semibold"
                asChild
              >
                <Link to="/auth?mode=signup">
                  Get Started Free
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

export default About;
