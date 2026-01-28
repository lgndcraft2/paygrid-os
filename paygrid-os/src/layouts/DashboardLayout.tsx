import { useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Dashboard } from '../components/Dashboard'

export function DashboardLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground flex overflow-hidden">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
      <Dashboard isSidebarCollapsed={isSidebarCollapsed} />
    </div>
  )
}
