import { useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Dashboard } from '../components/Dashboard'
import { RevenueRecovery } from '../components/RevenueRecovery'
import { ActivePipeline } from '../components/ActivePipeline'

export function DashboardLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground flex overflow-hidden">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === 'dashboard' && <Dashboard isSidebarCollapsed={isSidebarCollapsed} />}
      {activeTab === 'pipeline' && <ActivePipeline isSidebarCollapsed={isSidebarCollapsed} />}
      {activeTab === 'goals' && <RevenueRecovery isSidebarCollapsed={isSidebarCollapsed} />}
      {/* Placeholder for other tabs if they aren't implemented yet, defaulting to Dashboard or empty */}
      {activeTab !== 'dashboard' && activeTab !== 'goals' && activeTab !== 'pipeline' && (
        <div className={`flex-1 flex items-center justify-center transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'ml-20' : 'ml-[280px]'}`}>
            <p className="text-muted-foreground">Work in progress...</p>
        </div>
      )}
    </div>
  )
}
