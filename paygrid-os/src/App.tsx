import { Sidebar } from './components/Sidebar'
import { Dashboard } from './components/Dashboard'
import { Toaster } from 'sonner'
import { useState } from 'react'

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground flex overflow-hidden">
      <Toaster />
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
      <Dashboard isSidebarCollapsed={isSidebarCollapsed} />
    </div>
  )
}

export default App
