import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  Shield, 
  FileText, 
  Calendar, 
  Users,
  Settings,
  LogOut,
  Bell,
  Search,
  Clock,
  Plus,
  ChevronRight,
  Menu,
  Stethoscope,
  Activity,
  UserPlus
} from "lucide-react";

const DoctorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const recentPatients = [
    { id: 1, name: "John Doe", age: 45, lastVisit: "Today", condition: "Hypertension", status: "active" },
    { id: 2, name: "Jane Smith", age: 32, lastVisit: "Yesterday", condition: "Diabetes Type 2", status: "active" },
    { id: 3, name: "Robert Brown", age: 58, lastVisit: "Jan 12, 2024", condition: "Annual Checkup", status: "completed" },
  ];

  const pendingApprovals = [
    { id: 1, patient: "Sarah Wilson", type: "Medical History", requestDate: "2h ago" },
    { id: 2, patient: "Michael Lee", type: "Lab Results", requestDate: "5h ago" },
  ];

  const upcomingAppointments = [
    { id: 1, patient: "Emily Chen", time: "10:00 AM", type: "Follow-up" },
    { id: 2, patient: "David Park", time: "11:30 AM", type: "Consultation" },
    { id: 3, patient: "Lisa Anderson", time: "2:00 PM", type: "New Patient" },
  ];

  const stats = [
    { label: "Total Patients", value: "156", icon: Users, color: "primary" },
    { label: "Today's Appointments", value: "8", icon: Calendar, color: "success" },
    { label: "Pending Approvals", value: "2", icon: Clock, color: "warning" },
    { label: "Records Accessed", value: "42", icon: FileText, color: "accent" },
  ];

  const navItems = [
    { icon: Activity, label: "Overview", active: true },
    { icon: Users, label: "Patients" },
    { icon: Calendar, label: "Appointments" },
    { icon: FileText, label: "Records" },
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

          {/* Doctor Info */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">Dr. Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">General Medicine</p>
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
                  Doctor Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Manage your patients and medical records
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search patients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="medical" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 bg-warning rounded-full absolute -top-1 -right-1" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
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

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Patients */}
            <div className="lg:col-span-2 bg-card rounded-2xl border border-border shadow-soft">
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h2 className="font-display font-semibold text-foreground">Recent Patients</h2>
                <Button variant="hero" size="sm">
                  <UserPlus className="w-4 h-4 mr-1" />
                  Add Patient
                </Button>
              </div>
              <div className="divide-y divide-border">
                {recentPatients.map((patient) => (
                  <div key={patient.id} className="p-4 hover:bg-secondary/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-medium text-foreground">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-foreground">{patient.name}</p>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            patient.status === "active" 
                              ? "bg-success/10 text-success" 
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {patient.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {patient.age} years • {patient.condition}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Last visit: {patient.lastVisit}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-border">
                <Button variant="ghost" className="w-full">
                  View All Patients
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Pending Approvals */}
              <div className="bg-card rounded-2xl border border-border shadow-soft">
                <div className="flex items-center justify-between p-5 border-b border-border">
                  <h2 className="font-display font-semibold text-foreground">Pending Access</h2>
                  <span className="px-2 py-1 bg-warning/10 text-warning text-xs font-medium rounded-full">
                    {pendingApprovals.length}
                  </span>
                </div>
                <div className="divide-y divide-border">
                  {pendingApprovals.map((approval) => (
                    <div key={approval.id} className="p-4">
                      <p className="font-medium text-foreground text-sm">{approval.patient}</p>
                      <p className="text-xs text-muted-foreground mb-2">
                        {approval.type} • {approval.requestDate}
                      </p>
                      <Button size="sm" variant="success" className="w-full">
                        Request Access
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Appointments */}
              <div className="bg-card rounded-2xl border border-border shadow-soft">
                <div className="flex items-center justify-between p-5 border-b border-border">
                  <h2 className="font-display font-semibold text-foreground">Today's Schedule</h2>
                  <Button variant="ghost" size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="divide-y divide-border">
                  {upcomingAppointments.map((apt) => (
                    <div key={apt.id} className="p-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground text-sm">{apt.patient}</p>
                        <p className="text-xs text-muted-foreground">{apt.type}</p>
                      </div>
                      <span className="text-sm font-medium text-primary">{apt.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
            <h3 className="font-display font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: FileText, label: "Create Record", desc: "Add new medical record" },
                { icon: Calendar, label: "Schedule", desc: "Book appointment" },
                { icon: Search, label: "Search Records", desc: "Find patient data" },
                { icon: Shield, label: "Access Logs", desc: "View audit trail" },
              ].map((action) => (
                <button 
                  key={action.label}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-soft transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <action.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{action.label}</p>
                    <p className="text-xs text-muted-foreground">{action.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;
