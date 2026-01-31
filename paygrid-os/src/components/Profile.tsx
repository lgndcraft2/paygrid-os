import { User, Mail, Phone, MapPin, Building, Award, Calendar } from 'lucide-react';

export function Profile() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
       <div>
          <h1 className="text-3xl font-display mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your account settings and personal information.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-1 space-y-6">
             <div className="brutal-card rounded-2xl p-6 text-center space-y-4">
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center ring-4 ring-background shadow-xl">
                   <span className="text-2xl font-semibold text-primary">JD</span>
                </div>
                <div>
                   <h2 className="text-xl font-bold">John Doe</h2>
                   <p className="text-muted-foreground">Senior Mortgage Broker</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                   <Award className="w-3 h-3" />
                   Premium Member
                </div>
             </div>

             <div className="brutal-card rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Contact Info</h3>
                <div className="space-y-3 text-sm">
                   <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>john.doe@example.com</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>(555) 123-4567</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>New York, NY</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Building className="w-4 h-4 text-primary" />
                      <span>Liberty Mortgages LLC</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Details */}
          <div className="md:col-span-2 space-y-6">
             <div className="brutal-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Account Details</h3>
                <form className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                         <label className="text-sm font-medium">First Name</label>
                         <input type="text" defaultValue="John" className="w-full h-10 px-3 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium">Last Name</label>
                         <input type="text" defaultValue="Doe" className="w-full h-10 px-3 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <input type="email" defaultValue="john.doe@example.com" className="w-full h-10 px-3 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium">Company Name</label>
                      <input type="text" defaultValue="Liberty Mortgages LLC" className="w-full h-10 px-3 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20" />
                   </div>
                
                   <div className="pt-4 flex justify-end gap-3">
                      <button type="button" className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors">Cancel</button>
                      <button type="button" className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:brightness-110 transition-colors">Save Changes</button>
                   </div>
                </form>
             </div>

             <div className="brutal-card rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="text-xl font-semibold">Subscription Plan</h3>
                   <span className="text-sm text-muted-foreground">Renews on Feb 1, 2026</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border mb-6">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                         <Award className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="font-semibold">Professional Plan</p>
                         <p className="text-sm text-muted-foreground">$49/month</p>
                      </div>
                   </div>
                   <button className="text-sm text-primary font-medium hover:underline">Upgrade</button>
                </div>

                <div className="space-y-3">
                   <p className="text-sm font-medium">Plan Features:</p>
                   <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Unlimited Leads</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Custom Branding</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Priority Support</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Advanced Analytics</li>
                   </ul>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
