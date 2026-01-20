import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  FileText, 
  Calendar, 
  User,
  Settings,
  LogOut,
  Bell,
  Activity,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

const PatientDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data
  const recentRecords = [
    { id: 1, type: "Lab Results", date: "Jan 15, 2024", provider: "City Medical Lab", status: "completed" },
    { id: 2, type: "Prescription", date: "Jan 10, 2024", provider: "Dr. Sarah Johnson", status: "active" },
    { id: 3, type: "Consultation Notes", date: "Jan 5, 2024", provider: "Rural Health Clinic", status: "completed" },
  ];

  const accessRequests = [
    { id: 1, doctor: "Dr. Michael Chen", hospital: "Community Hospital", date: "Today", status: "pending" },
    { id: 2, doctor: "Dr. Emily Davis", hospital: "Wellness Center", date: "Yesterday", status: "pending" },
  ];

  const healthStats = [
    { label: "Total Records", value: "24", icon: FileText, color: "primary" },
    { label: "Active Providers", value: "5", icon: User, color: "success" },
    { label: "Pending Requests", value: "2", icon: Bell, color: "warning" },
    { label: "Last Updated", value: "2h ago", icon: Clock, color: "accent" },
  ];

  const navItems = [
    { icon: Activity, label: "Overview", active: true },
    { icon: FileText, label: "Medical Records" },
    { icon: Calendar, label: "Appointments" },
    { icon: Shield, label: "Consent Management" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <Shield className="w-4 h-4 text-primary absolute -bottom-1 -right-1 bg-background rounded-full p-0.5" />
              </div>
              <span className="font-display font-bold text-lg">
                Care<span className="text-primary">Bridge</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">John Doe</p>
                <p className="text-xs text-muted-foreground">Patient</p>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden text-foreground"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="font-display text-xl font-bold text-foreground">
                  Welcome back, John
                </h1>
                <p className="text-sm text-muted-foreground">
                  Here's an overview of your health records
                </p>
              </div>
            </div>
            <Button variant="medical" size="sm">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Notifications</span>
              <span className="w-2 h-2 bg-warning rounded-full absolute -top-1 -right-1" />
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {healthStats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-2xl p-5 border border-border shadow-soft">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  stat.color === "primary" ? "bg-primary/10 text-primary" :
                  stat.color === "success" ? "bg-success/10 text-success" :
                  stat.color === "warning" ? "bg-warning/10 text-warning" :
                  "bg-accent/10 text-accent"
                }`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Records */}
            <div className="bg-card rounded-2xl border border-border shadow-soft">
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h2 className="font-display font-semibold text-foreground">Recent Records</h2>
                <Button variant="ghost" size="sm">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="divide-y divide-border">
                {recentRecords.map((record) => (
                  <div key={record.id} className="p-4 hover:bg-secondary/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">{record.type}</p>
                        <p className="text-sm text-muted-foreground">{record.provider}</p>
                        <p className="text-xs text-muted-foreground mt-1">{record.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        record.status === "completed" 
                          ? "bg-success/10 text-success" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        {record.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Access Requests */}
            <div className="bg-card rounded-2xl border border-border shadow-soft">
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h2 className="font-display font-semibold text-foreground">Access Requests</h2>
                <span className="px-2 py-1 bg-warning/10 text-warning text-xs font-medium rounded-full">
                  {accessRequests.length} pending
                </span>
              </div>
              <div className="divide-y divide-border">
                {accessRequests.map((request) => (
                  <div key={request.id} className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">{request.doctor}</p>
                        <p className="text-sm text-muted-foreground">{request.hospital}</p>
                        <p className="text-xs text-muted-foreground mt-1">{request.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4 ml-14">
                      <Button size="sm" variant="success" className="flex-1">
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <XCircle className="w-4 h-4 mr-1" />
                        Deny
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Your data is protected</h3>
                <p className="text-sm text-muted-foreground">
                  All your medical records are encrypted and only accessible to providers you've authorized. 
                  You have full control over who can view your health information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
