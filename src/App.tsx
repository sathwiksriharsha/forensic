import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import EvidenceList from './pages/EvidenceList';
import EvidenceViewer from './pages/EvidenceViewer';
import DeviceIdentification from './pages/DeviceIdentification';
import ForensicAcquisition from './pages/ForensicAcquisition';
import EvidenceExplorer from './pages/EvidenceExplorer';
import DataRecovery from './pages/DataRecovery';
import VideoAnalysis from './pages/VideoAnalysis';
import TimelineAnalysis from './pages/TimelineAnalysis';
import CorrelationEngine from './pages/CorrelationEngine';
import AiAnalysis from './pages/AiAnalysis';
import EvidenceIntegrity from './pages/EvidenceIntegrity';
import ChainOfCustody from './pages/ChainOfCustody';
import Reports from './pages/Reports';
import Vendors from './pages/Vendors';
import Settings from './pages/Settings';
import { useState } from 'react';

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Desktop sidebar collapse state
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(() => {
    return localStorage.getItem('agy_sidebar_collapsed') === 'true';
  });

  const toggleDesktopCollapsed = () => {
    const newVal = !isDesktopCollapsed;
    setIsDesktopCollapsed(newVal);
    localStorage.setItem('agy_sidebar_collapsed', String(newVal));
  };

  return (
    <div className={`app-container ${sidebarOpen ? 'sidebar-open' : ''} ${isDesktopCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        isCollapsed={isDesktopCollapsed}
        toggleCollapse={toggleDesktopCollapsed}
      />
      <div className="main-wrapper">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="main-content relative">
          <Outlet />
        </main>
      </div>
      
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/evidence" element={<EvidenceList />} />
          <Route path="/evidence/:id" element={<EvidenceViewer />} />
          <Route path="/identification" element={<DeviceIdentification />} />
          <Route path="/acquisition" element={<ForensicAcquisition />} />
          <Route path="/explorer" element={<EvidenceExplorer />} />
          <Route path="/recovery" element={<DataRecovery />} />
          <Route path="/analysis/video" element={<VideoAnalysis />} />
          <Route path="/analysis/timeline" element={<TimelineAnalysis />} />
          <Route path="/analysis/correlation" element={<CorrelationEngine />} />
          <Route path="/analysis/ai" element={<AiAnalysis />} />
          <Route path="/validation/integrity" element={<EvidenceIntegrity />} />
          <Route path="/validation/custody" element={<ChainOfCustody />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/system/vendors" element={<Vendors />} />
          <Route path="/system/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
