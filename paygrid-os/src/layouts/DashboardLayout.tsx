import { useState, useEffect } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'
import { Dashboard } from '../components/Dashboard'
import { RevenueRecovery } from '../components/RevenueRecovery'
import { ActivePipeline } from '../components/ActivePipeline'
import { PartnerSettings } from '../components/PartnerSettings'
import { Profile } from '../components/Profile'

export function DashboardLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarCollapsed(true);
      } else {
        setIsSidebarCollapsed(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground flex overflow-hidden">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <div className={`flex-1 flex flex-col h-screen transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'ml-20' : 'ml-[280px]'}`}>
        <Header onNavigate={setActiveTab} />
        <div className="flex-1 overflow-auto relative">
          {activeTab === 'dashboard' && <Dashboard isSidebarCollapsed={isSidebarCollapsed} />}
          {activeTab === 'pipeline' && <ActivePipeline isSidebarCollapsed={isSidebarCollapsed} />}
          {activeTab === 'goals' && <RevenueRecovery isSidebarCollapsed={isSidebarCollapsed} />}
          {activeTab === 'settings' && <PartnerSettings isSidebarCollapsed={isSidebarCollapsed} />}
          {activeTab === 'profile' && <Profile />}
          
          {/* Placeholder for other tabs if they aren't implemented yet */}
          {activeTab !== 'dashboard' && activeTab !== 'goals' && activeTab !== 'pipeline' && activeTab !== 'settings' && activeTab !== 'profile' && (
            <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Work in progress...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
