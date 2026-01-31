import { useState, useRef } from 'react';
import { Upload, BellRing, Smartphone, Mail, FileText, Video, Image as ImageIcon, Download, Check } from 'lucide-react';
import { Header } from './Header';

interface PartnerSettingsProps {
  isSidebarCollapsed?: boolean;
}

export function PartnerSettings({ isSidebarCollapsed = false }: PartnerSettingsProps) {
  const [notifications, setNotifications] = useState({
    scoreHit620: true,
    auditComplete: true,
    loanGraduated: true,
    weeklyReport: false,
  });

  const [headshot, setHeadshot] = useState<string | null>(null);
  const [logo, setLogo] = useState<string | null>(null);

  const headshotInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const handleHeadshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setHeadshot(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(URL.createObjectURL(e.target.files[0]));
    }
  };

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const marketingResources = [
     { title: "TikTok Script: 'Why Renting is Costing You'", type: 'script', format: 'PDF', icon: Video, color: 'text-pink-500 bg-pink-500/10' },
     { title: "Credit Repair Checklist Flyer", type: 'flyer', format: 'JPG', icon: ImageIcon, color: 'text-purple-500 bg-purple-500/10' },
     { title: "5 Tips to Boost Score (Email Template)", type: 'email', format: 'TXT', icon: Mail, color: 'text-blue-500 bg-blue-500/10' },
     { title: "How to Fix Your Credit Guide", type: 'guide', format: 'PDF', icon: FileText, color: 'text-orange-500 bg-orange-500/10' },
  ];

  return (
      <div className="p-8 max-w-6xl mx-auto space-y-8">
        <div>
           <h1 className="text-3xl font-display mb-2">Partner Settings</h1>
           <p className="text-muted-foreground">Customize your branding and notification preferences.</p>
        </div>

        {/* Co-Branding Hub */}
        <section className="brutal-card rounded-2xl p-8">
           <div className="flex items-start justify-between mb-8">
              <div>
                 <h2 className="text-xl font-semibold mb-2">Co-Branding Hub</h2>
                 <p className="text-sm text-muted-foreground">Upload your assets to co-brand client communications as "Asoro x [Your Name]".</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                 Preview Mode
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                 {/* Headshot Upload */}
                 <div className="space-y-3">
                    <label className="text-sm font-medium">Partner Headshot</label>
                    <input 
                      type="file" 
                      ref={headshotInputRef} 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleHeadshotUpload}
                    />
                    <div 
                      onClick={() => headshotInputRef.current?.click()}
                      className="border-2 border-dashed border-border hover:border-primary/50 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-muted/5 relative overflow-hidden group"
                    >
                       {headshot ? (
                          <>
                             <img src={headshot} alt="Headshot" className="w-24 h-24 rounded-full object-cover mb-3 z-10" />
                             <p className="text-sm font-medium z-10">Click to change</p>
                          </>
                       ) : (
                          <>
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                                <Upload className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <p className="text-sm font-medium">Click to upload or drag and drop</p>
                            <p className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                          </>
                       )}
                    </div>
                 </div>

                 {/* Logo Upload */}
                 <div className="space-y-3">
                    <label className="text-sm font-medium">Company Logo</label>
                    <input 
                      type="file" 
                      ref={logoInputRef} 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleLogoUpload}
                    />
                    <div 
                      onClick={() => logoInputRef.current?.click()}
                      className="border-2 border-dashed border-border hover:border-primary/50 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-muted/5"
                    >
                       {logo ? (
                          <>
                             <img src={logo} alt="Logo" className="h-16 object-contain mb-3" />
                             <p className="text-sm font-medium">Click to change</p>
                          </>
                       ) : (
                          <>
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                                <Upload className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <p className="text-sm font-medium">Click to upload or drag and drop</p>
                            <p className="text-xs text-muted-foreground mt-1">Transparent PNG preferred</p>
                          </>
                       )}
                    </div>
                 </div>
              </div>

               {/* Preview Area */}
               <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 text-center">Client Portal Preview</p>
                  <div className="bg-card rounded-lg shadow-sm border border-border p-6 max-w-sm mx-auto">
                     <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                        <div className="flex items-center gap-2">
                           <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center overflow-hidden">
                              {logo ? <img src={logo} className="w-full h-full object-contain" /> : <span className="text-[10px]">Asoro</span>}
                           </div>
                           <span className="font-semibold text-sm">Asoro</span>
                        </div>
                        <span className="text-muted-foreground text-xs">x</span>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center overflow-hidden border border-border">
                               {headshot ? <img src={headshot} className="w-full h-full object-cover" /> : <UserIcon className="w-4 h-4 text-muted-foreground" />}
                            </div>
                           <span className="font-semibold text-sm">John Doe</span>
                        </div>
                     </div>
                     <div className="space-y-3">
                        <div className="h-4 w-3/4 bg-muted/50 rounded animate-pulse"></div>
                        <div className="h-3 w-1/2 bg-muted/30 rounded animate-pulse"></div>
                        <div className="h-24 w-full bg-muted/10 rounded mt-4 border border-border/50 flex items-center justify-center text-xs text-muted-foreground">
                           Co-branded content appears here
                        </div>
                     </div>
                  </div>
               </div>
           </div>
        </section>

        {/* Notification Triggers */}
        <section className="brutal-card rounded-2xl p-8">
           <h2 className="text-xl font-semibold mb-6">Notification Triggers</h2>
           <div className="space-y-4">
              <NotificationItem 
                 icon={Smartphone}
                 title="Score Alert: 620+"
                 description="Get a text when a lead's credit score crosses the purchasing threshold."
                 enabled={notifications.scoreHit620}
                 onToggle={() => toggleNotification('scoreHit620')}
              />
              <NotificationItem 
                 icon={Check}
                 title="Audit Complete"
                 description="Notify me when the initial credit audit analysis is ready for review."
                 enabled={notifications.auditComplete}
                 onToggle={() => toggleNotification('auditComplete')}
              />
               <NotificationItem 
                 icon={BellRing}
                 title="Loan Graduation"
                 description="Instant alert when a lead is fully graduated and ready for application."
                 enabled={notifications.loanGraduated}
                 onToggle={() => toggleNotification('loanGraduated')}
              />
           </div>
        </section>

        {/* Marketing Vault */}
        <section className="brutal-card rounded-2xl p-8">
           <div className="flex items-center justify-between mb-8">
              <div>
                 <h2 className="text-xl font-semibold mb-2">Marketing Vault</h2>
                 <p className="text-sm text-muted-foreground">Download co-branded materials to engage your leads.</p>
              </div>
              <button className="text-sm font-medium text-primary hover:underline">View All Resources</button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {marketingResources.map((resource, idx) => (
                 <div key={idx} className="group relative bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all hover:shadow-md cursor-pointer">
                    <div className={`w-10 h-10 rounded-lg ${resource.color} flex items-center justify-center mb-4`}>
                       <resource.icon className="w-5 h-5" />
                    </div>
                    <p className="font-medium text-sm mb-1 line-clamp-2">{resource.title}</p>
                    <div className="flex items-center justify-between mt-4">
                       <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded text-[10px] uppercase font-bold">{resource.format}</span>
                       <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                          <Download className="w-4 h-4" />
                       </button>
                    </div>
                 </div>
              ))}
           </div>
        </section>
      </div>
  );
}

function NotificationItem({ icon: Icon, title, description, enabled, onToggle }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-border/50 hover:bg-muted/10 transition-colors">
       <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${enabled ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
             <Icon className="w-5 h-5" />
          </div>
          <div>
             <p className="font-medium text-sm">{title}</p>
             <p className="text-sm text-muted-foreground">{description}</p>
          </div>
       </div>
       <button 
          onClick={onToggle}
          className={`relative w-11 h-6 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${enabled ? 'bg-primary' : 'bg-muted'}`}
       >
          <span 
             className={`absolute top-0.5 left-0.5 w-5 h-5 bg-background rounded-full shadow transform transition-transform duration-200 ease-in-out ${enabled ? 'translate-x-5' : 'translate-x-0'}`}
          />
       </button>
    </div>
  )
}

function UserIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
