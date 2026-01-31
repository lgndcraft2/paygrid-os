import { Plus, Wallet, TrendingUp, TrendingDown, CreditCard, ArrowUpRight, Ellipsis } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Header } from './Header';

const dataCashflow = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 9800 },
  { name: 'Apr', income: 2780, expenses: 3908 },
  { name: 'May', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
  { name: 'Jul', income: 3490, expenses: 4300 },
];
// Simplified data matching the visual curve roughly if needed, or just random data. 
// Visual: Smooth curve, income stays high then drops then up. Expenses dotted.
// I'll stick to a simple dataset or try to match the chart if I can see the data points? 
// No data points in text, just SVG paths. I'll use placeholder data.

const dataPie = [
  { name: 'Housing', value: 1850, color: 'hsl(38 95% 60%)' },
  { name: 'Food', value: 650, color: 'hsl(200 70% 50%)' },
  { name: 'Transport', value: 420, color: 'hsl(280 70% 60%)' },
  { name: 'Entertainment', value: 280, color: 'hsl(142 70% 45%)' },
];

interface DashboardProps {
  isSidebarCollapsed?: boolean;
}

export function Dashboard({ isSidebarCollapsed = false }: DashboardProps) {
  return (
      <div className="p-8 space-y-8">
        {/* Welcome Section */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-display mb-2">Good morning, <span className="gradient-text">John</span></h1>
            <p className="text-muted-foreground">Here's your financial overview for today.</p>
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:brightness-110 shadow-glow-sm hover:shadow-glow h-11 px-6 text-sm rounded-lg gap-2">
            <Plus className="w-4 h-4" />
            Add Transaction
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="brutal-card rounded-2xl p-6 group hover:border-primary/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Total Recovered Volume</span>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="text-3xl font-bold font-mono mb-2">$19,058.30</p>
            <div className="flex items-center gap-2 text-sm text-success">
              <TrendingUp className="w-4 h-4" />
              <span>+12.5% from last month</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="brutal-card rounded-2xl p-6 group hover:border-primary/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Recovered Revenue (MTD)</span>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="text-3xl font-bold font-mono mb-2">$7,200.00</p>
            <div className="flex items-center gap-2 text-sm text-success">
              <TrendingUp className="w-4 h-4" />
              <span>+8.3% from last month</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="brutal-card rounded-2xl p-6 group hover:border-primary/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Active Repair Pipeline</span>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <TrendingDown className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="text-3xl font-bold font-mono mb-2">$3,520.00</p>
            <div className="flex items-center gap-2 text-sm text-success">
              <TrendingUp className="w-4 h-4" />
              <span>-5.2% from last month</span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="brutal-card rounded-2xl p-6 group hover:border-primary/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Clear to Close</span>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="text-3xl font-bold font-mono mb-2">$180.00</p>
            <p className="text-sm text-muted-foreground">$70 remaining today</p>
            <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
        </div>

        {/* Middle Section: Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          {/* <div className="lg:col-span-2 brutal-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">Total Pipeline Volume</h3>
                <p className="text-sm text-muted-foreground">Recovered vs Standard</p>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary"></span>Recovered</span>
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-muted-foreground"></span>Standard</span>
              </div>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dataCashflow}>
                  <defs>
                    <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="hsl(220 8% 50%)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(220 8% 50%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Area type="monotone" dataKey="income" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#incomeGradient)" />
                  <Area type="monotone" dataKey="expenses" stroke="hsl(220 8% 50%)" strokeWidth={2} strokeDasharray="5 5" fill="transparent" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div> */}

          <div className="lg:col-span-2 brutal-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Total Pipeline Volume</h3>
              <p className="text-sm text-muted-foreground">Recovered vs Standard</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary"></span>Recovered</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-muted-foreground"></span>Standard</span>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataCashflow}>
                <XAxis dataKey="name" stroke="hsl(220 8% 50%)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(220 8% 50%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                  cursor={{fill: 'transparent'}}
                />
                <Bar dataKey="income" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" fill="hsl(220 8% 50%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>


          {/* Pie Chart */}
          <div className="brutal-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Lead Conversion Breakdown</h3>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 hover:bg-foreground/5 rounded-lg h-8 w-8">
                <Ellipsis className="w-4 h-4" />
              </button>
            </div>
            <div className="h-48 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataPie}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {dataPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {dataPie.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-muted-foreground">{item.name}</span>
                  </span>
                  <span className="font-mono font-medium">${item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Recent transactions & Accounts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 brutal-card rounded-2xl p-6">
             <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Status Logs: Active Files</h3>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 hover:bg-foreground/5 h-9 px-4 text-xs rounded-md text-primary">
                View All <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="space-y-2">
              <TransactionItem icon="🎬" name="Netflix Subscription" category="Entertainment" amount="-$15.99" date="Today, 2:34 PM" />
              <TransactionItem icon="💰" name="Salary Deposit" category="Income" amount="+$7,200.00" date="Today, 9:00 AM" positive />
              <TransactionItem icon="🛒" name="Whole Foods" category="Groceries" amount="-$86.42" date="Yesterday" />
              <TransactionItem icon="🚗" name="Uber" category="Transport" amount="-$24.50" date="Yesterday" />
              <TransactionItem icon="🍎" name="Apple Store" category="Shopping" amount="-$199.00" date="Jan 20" />
            </div>
          </div>
          
          <div className="space-y-6">
             {/* Accounts */}
            <div className="brutal-card rounded-2xl p-6">
               <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">LO Performance</h3>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 hover:bg-foreground/5 rounded-lg h-8 w-8">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium">Main Checking</p>
                    <p className="text-sm text-muted-foreground">Chase</p>
                  </div>
                  <p className="font-mono font-semibold ">$12,450.80</p>
                </div>
                 <div className="flex items-center justify-between p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium">Savings</p>
                    <p className="text-sm text-muted-foreground">Ally</p>
                  </div>
                  <p className="font-mono font-semibold ">$8,450.00</p>
                </div>
                 <div className="flex items-center justify-between p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium">Credit Card</p>
                    <p className="text-sm text-muted-foreground">Amex</p>
                  </div>
                  <p className="font-mono font-semibold text-destructive">-$1,842.50</p>
                </div>
              </div>
            </div>

            {/* Goals */}
            <div className="brutal-card rounded-2xl p-6">
               <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Revenue Pull-Through</h3>
                 </div>
                 <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 hover:bg-foreground/5 rounded-lg h-8 w-8">
                  <Plus className="w-4 h-4" />
                </button>
               </div>
               <div className="space-y-5">
                  <GoalItem label="Emergency Fund" percentage={85} current="$8,450" target="$10,000" color="rgb(250, 179, 56)" />
                  <GoalItem label="Vacation" percentage={42} current="$2,100" target="$5,000" color="rgb(38, 157, 217)" />
                  <GoalItem label="New Car" percentage={18} current="$4,500" target="$25,000" color="rgb(177, 82, 224)" />
               </div>
            </div>
          </div>
        </div>
      </div>
  );
}

function TransactionItem({ icon, name, category, amount, date, positive }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl hover:bg-muted/30 transition-colors group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
          {icon}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-mono font-semibold ${positive ? 'text-success' : ''}`}>{amount}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
    </div>
  )
}

function GoalItem({ label, percentage, current, target, color }: any) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="font-mono text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ backgroundColor: color, width: `${percentage}%` }}></div>
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{current}</span>
        <span>{target}</span>
      </div>
    </div>
  )
}
