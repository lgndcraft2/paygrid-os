import { Search, Bell } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface RevenueRecoveryProps {
  isSidebarCollapsed?: boolean;
}

export function RevenueRecovery({ isSidebarCollapsed = false }: RevenueRecoveryProps) {
  return (
    <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'ml-20' : 'ml-[280px]'}`}>
      {/* Header */}
      <header className="sticky top-0 h-20 bg-background/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-8 z-40">
        <div className="flex items-center gap-3">
          <div className="relative">
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
        <div className="flex items-center gap-6">
          <button className="relative p-2 rounded-xl hover:bg-muted transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-background"></span>
          </button>
          <div className="flex items-center gap-4 pl-6 border-l border-border">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center ring-2 ring-primary/20">
              <span className="text-sm font-semibold text-primary">JD</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Premium Plan</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-8 space-y-8">
        <div className="flex items-center justify-between">
           <div>
              <h1 className="text-3xl font-display mb-2">Revenue Recovery</h1>
              <p className="text-muted-foreground">Track your recovered loans and commission ROI.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {/* Commission Forecast */}
           <div className="brutal-card rounded-2xl p-6 bg-primary/5 border-primary/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10">
             </div>
             <div className="relative z-10">
                <p className="text-sm text-muted-foreground mb-2">Commission Forecast (30 Days)</p>
                <p className="text-4xl font-mono font-bold text-primary mb-2">$45,000.00</p>
                <p className="text-sm text-muted-foreground">Est. graduating from litigation</p>
             </div>
           </div>

           {/* Lost vs Found Calculator */}
           <div className="brutal-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-6">Lost vs. Found Calculator</h3>
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-4 rounded-xl bg-muted/20">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Lead Spend</p>
                    <p className="text-2xl font-mono font-semibold text-muted-foreground">$8,250</p>
                 </div>
                 <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                    <p className="text-xs uppercase tracking-wider text-success mb-2">Commissions Recovered</p>
                    <p className="text-2xl font-mono font-bold text-success">+$15,400</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="brutal-card rounded-2xl p-6">
             <h3 className="text-lg font-semibold mb-6">Revenue Pull-Through</h3>
             <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    layout="vertical" 
                    data={[
                      { name: 'Dead Lead Volume', value: 8500 },
                      { name: 'Recovered Loan Volume', value: 15400 }
                    ]}
                    margin={{ top: 0, left: 0, right: 30, bottom: 0 }}
                    barGap={20}
                  >
                     <XAxis type="number" hide />
                     <YAxis dataKey="name" type="category" width={180} tick={{fontSize: 14, fill: 'hsl(var(--muted-foreground))'}} tickLine={false} axisLine={false} />
                     <Tooltip 
                        cursor={{fill: 'transparent'}} 
                        contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                        formatter={(value: any) => [`$${value.toLocaleString()}`, '']}
                     />
                     <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40} background={{ fill: 'hsl(var(--muted)/0.1)' }}>
                        <Cell fill="hsl(var(--muted-foreground))" /> 
                        <Cell fill="hsl(var(--success))" />
                     </Bar>
                  </BarChart>
                </ResponsiveContainer>
             </div>
        </div>
      </div>
    </div>
  );
}
