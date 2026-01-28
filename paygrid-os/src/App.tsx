import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { DashboardLayout } from './layouts/DashboardLayout'
import { Toaster } from 'sonner'

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
