import { Link } from "react-router-dom";
import { Heart, Shield, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <Shield className="w-4 h-4 text-primary absolute -bottom-1 -right-1 bg-background rounded-full p-0.5" />
              </div>
              <span className="font-display font-bold text-xl">
                Care<span className="text-primary">Bridge</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Secure and interoperable digital health records platform. 
              Unifying patient data across healthcare providers while 
              preserving privacy through consent-based access control.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="mailto:contact@carebridge.health" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                contact@carebridge.health
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Features", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "HIPAA Compliance", "Security"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 CareBridge. All rights reserved. Built by Team TriForge.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-success" />
            <span>HIPAA Compliant</span>
            <span className="mx-2">•</span>
            <span>256-bit Encryption</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
