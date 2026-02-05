import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface RevenueRecoveryProps {
  isSidebarCollapsed?: boolean;
}

export function RevenueRecovery({ }: RevenueRecoveryProps) {
  return (
      <div className="p-4 md:p-8 space-y-6 md:space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
           <div>
              <h1 className="text-2xl md:text-3xl font-display mb-2">Commission Vault</h1>
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
  );
}
