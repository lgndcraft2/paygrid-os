import { useState } from 'react';
import { Search, Bell, User, Settings, LogOut, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
    onNavigate?: (tab: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 h-20 bg-background/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-8 z-40">
      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="h-11 pl-11 pr-4 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 w-80 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-muted-foreground">
            <span className="text-lg">⌘</span>
            <span>K</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
        <div className="relative">
          <button 
             onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
             onBlur={() => setTimeout(() => setIsNotificationsOpen(false), 200)}
             className="relative p-2 rounded-xl hover:bg-muted transition-colors"
            >
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-background"></span>
          </button>
          
          {isNotificationsOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 rounded-xl bg-card border border-border shadow-xl p-2 animate-in fade-in zoom-in duration-200 z-50">
               <div className="px-3 py-2 text-sm font-semibold border-b border-border mb-1">Notifications</div>
               <div className="space-y-1">
                  <div className="flex items-start gap-3 p-2 hover:bg-muted/50 rounded-lg cursor-pointer">
                     <div className="mt-1 w-2 h-2 bg-blue-500 rounded-full shrink-0"></div>
                     <div>
                        <p className="text-sm font-medium">New Lead Graduated</p>
                        <p className="text-xs text-muted-foreground">Alice Johnson is ready for application.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 hover:bg-muted/50 rounded-lg cursor-pointer">
                     <div className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
                     <div>
                        <p className="text-sm font-medium">Commission Paid</p>
                        <p className="text-xs text-muted-foreground">You received $1,200 payout.</p>
                     </div>
                  </div>
               </div>
               <button className="w-full text-center text-xs text-primary py-2 hover:underline">Mark all as read</button>
            </div>
          )}
        </div>
        
        <div 
           className="relative"
           onMouseEnter={() => setIsProfileOpen(true)}
           onMouseLeave={() => setIsProfileOpen(false)}
        >
            <button 
                className="flex items-center gap-4 pl-6 border-l border-border hover:opacity-80 transition-opacity"
            >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                    <span className="text-sm font-semibold text-primary">JD</span>
                </div>
                <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Premium Plan</p>
                </div>
            </button>

            {isProfileOpen && (
                <div className="absolute right-0 top-full pt-2 w-56 z-50">
                    <div className="rounded-xl bg-card border border-border shadow-xl p-2 animate-in fade-in zoom-in duration-200">
                        <button 
                            onClick={() => {
                                onNavigate?.('profile');
                                setIsProfileOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors text-left"
                        >
                            <User className="w-4 h-4 text-muted-foreground" />
                            Profile
                        </button>
                        <button 
                            onClick={() => {
                                onNavigate?.('settings');
                                setIsProfileOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors text-left"
                        >
                            <Settings className="w-4 h-4 text-muted-foreground" />
                            Settings
                        </button>
                        <div className="h-px bg-border my-1"></div>
                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-destructive/10 text-destructive transition-colors text-left">
                            <LogOut className="w-4 h-4" />
                            Log out
                        </button>
                    </div>
                </div>
            )}
        </div>
      </div>
    </header>
  );
}
