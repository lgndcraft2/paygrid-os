import { LayoutDashboard, Wallet, ArrowLeftRight, ChartPie, Target, FileText, Settings, ChevronLeft } from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ isCollapsed, toggleSidebar, activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", id: 'dashboard' },
    // { icon: Wallet, label: "Accounts", id: 'accounts' },
    { icon: ArrowLeftRight, label: "Active Pipeline", id: 'pipeline' },
    { icon: ChartPie, label: "Budgets", id: 'budgets' },
    { icon: Target, label: "Revenue Recovery", id: 'goals' },
    { icon: FileText, label: "Reports", id: 'reports' },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col z-50 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-[280px]'}`}>
      <div className={`h-20 flex items-center px-6 border-b border-sidebar-border overflow-hidden whitespace-nowrap`}>
        <a className="flex items-center gap-3 group min-w-max" href="/">
          <div className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
            <span className="font-bold text-background">P</span>
          </div>
          <span className={`font-semibold text-lg text-sidebar-foreground whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'}`}>PayGrid</span>
        </a>
      </div>
      
      <nav className="flex-1 py-6 px-3">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button 
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-start px-4 gap-3 py-3 rounded-xl text-sm transition-all duration-200 overflow-hidden whitespace-nowrap ${
                  activeTab === item.id
                    ? "bg-primary/10 text-primary border border-primary/20" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
                title={isCollapsed ? item.label : ''}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span className={`font-medium whitespace-nowrap transition-all duration-200 ${isCollapsed ? 'opacity-0 w-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-3 border-t border-sidebar-border space-y-1">
        <button 
          onClick={() => setActiveTab('settings')}
          className={`w-full flex items-center justify-start px-4 gap-3 py-3 rounded-xl text-sm overflow-hidden whitespace-nowrap transition-colors ${
            activeTab === 'settings'
              ? "bg-primary/10 text-primary border border-primary/20" 
              : "text-sidebar-foreground hover:bg-sidebar-accent"
          }`}
        >
          <Settings className="w-5 h-5 shrink-0" />
          <span className={`transition-all duration-200 ${isCollapsed ? 'opacity-0 w-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>Partner Branding</span>
        </button>
        <button 
          onClick={toggleSidebar}
          className={`w-full flex items-center justify-start px-4 gap-3 py-3 rounded-xl text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors overflow-hidden whitespace-nowrap`}
        >
          <ChevronLeft className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`} />
          <span className={`transition-all duration-200 ${isCollapsed ? 'opacity-0 w-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>Collapse</span>
        </button>
      </div>
    </aside>
  );
}
