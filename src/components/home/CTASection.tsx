import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm">
            <Heart className="w-4 h-4" />
            <span>Join Healthcare Providers Nationwide</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Records?
          </h2>

          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of healthcare professionals who trust CareBridge 
            for secure, interoperable patient data management.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
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
            <Button 
              size="xl" 
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white/10"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { value: "100%", label: "HIPAA Compliant" },
              { value: "256-bit", label: "Encryption" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-2xl text-white">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
