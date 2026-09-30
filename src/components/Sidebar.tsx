import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import {
  LayoutDashboard,
  FolderSearch,
  HardDriveDownload,
  Scan,
  Files,
  Activity,
  Video,
  Clock,
  Network,
  BrainCircuit,
  ShieldCheck,
  Link2,
  FileText,
  Server,
  Settings
} from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ isOpen, setIsOpen, isCollapsed = false, toggleCollapse }: { isOpen?: boolean, setIsOpen?: (v: boolean) => void, isCollapsed?: boolean, toggleCollapse?: () => void }) {
  const navigate = useNavigate();
  const [showProfilePopover, setShowProfilePopover] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navGroups = [
    {
      title: 'CASE',
      items: [
        { name: 'Dashboard', path: '/', icon: LayoutDashboard },
        { name: 'Evidence', path: '/evidence', icon: FolderSearch },
      ]
    },
    {
      title: 'ACQUISITION',
      items: [
        { name: 'Device Identification', path: '/identification', icon: Scan },
        { name: 'Forensic Acquisition', path: '/acquisition', icon: HardDriveDownload },
      ]
    },
    {
      title: 'FORENSICS',
      items: [
        { name: 'Evidence Explorer', path: '/explorer', icon: Files },
        { name: 'Recovery', path: '/recovery', icon: Activity },
      ]
    },
    {
      title: 'ANALYSIS',
      items: [
        { name: 'Video Analysis', path: '/analysis/video', icon: Video },
        { name: 'Timeline', path: '/analysis/timeline', icon: Clock },
        { name: 'Correlation', path: '/analysis/correlation', icon: Network },
        { name: 'AI Analysis', path: '/analysis/ai', icon: BrainCircuit },
      ]
    },
    {
      title: 'VALIDATION',
      items: [
        { name: 'Integrity', path: '/validation/integrity', icon: ShieldCheck },
        { name: 'Chain of Custody', path: '/validation/custody', icon: Link2 },
      ]
    },
    {
      title: 'OUTPUT',
      items: [
        { name: 'Reports', path: '/reports', icon: FileText },
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { name: 'Vendors', path: '/system/vendors', icon: Server },
        { name: 'Settings', path: '/system/settings', icon: Settings },
      ]
    }
  ];

  return (
    <aside className={`sidebar fixed inset-y-0 left-0 z-50 md:relative transform transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header flex items-center justify-between">
        <div className="brand-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <Scan className="brand-icon shrink-0" size={20} />
          <span className="sidebar-label">DVR Forensics Platform</span>
        </div>

        {toggleCollapse && (
          <button
            onClick={toggleCollapse}
            className="hidden md:flex p-1 text-secondary hover:text-primary hover:bg-[var(--bg-surface-hover)] rounded transition-colors"
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            <div className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </div>
          </button>
        )}
      </div>

      <nav className="sidebar-nav">
        {navGroups.map((group, idx) => (
          <div key={idx} className="nav-group">
            <div className="nav-group-title sidebar-label">{group.title}</div>
            {group.items.map((item, itemIdx) => (
              <NavLink
                key={itemIdx}
                to={item.path}
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                title={isCollapsed ? item.name : undefined}
                onClick={() => setIsOpen && setIsOpen(false)}
              >
                <item.icon size={16} className="nav-icon" />
                <span className="sidebar-label">{item.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Popover open={showProfilePopover} onOpenChange={setShowProfilePopover}>
          <PopoverTrigger asChild>
            <div className="user-info w-full hover:bg-[rgba(0,0,0,0.02)] transition-colors rounded-md" style={{ cursor: 'pointer' }}>
              <div className="user-avatar">Inv</div>
              <div className="user-details">
                <div className="user-name">Investigator 01</div>
                <div className="user-role font-mono">ID: LA-8429</div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent side="top" align="start" className="w-[280px] p-0 mb-4 bg-white border border-[var(--border-light)] shadow-sm rounded-[6px] text-primary">

            <div className="p-4 md:p-5">
              <div className="font-semibold text-sm mb-1 tracking-tight">INVESTIGATOR 01</div>
              <div className="text-xs text-secondary mb-6">Forensic Investigator</div>

              <div className="flex flex-col gap-3 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-secondary tracking-widest text-[10px]">ID</span>
                  <span>LA-8429</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary tracking-widest text-[10px]">ACTIVE CASE</span>
                  <span>CAS-2026-8924</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary tracking-widest text-[10px]">SESSION</span>
                  <span className="text-success flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-success"></span>
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-[var(--border-light)] py-2">
              <button className="w-full text-left px-4 py-2.5 text-xs hover:bg-[var(--bg-app)] transition-colors flex items-center gap-3" onClick={() => { setShowProfilePopover(false); navigate('/system/settings'); }}>
                Account Settings
              </button>
              <button className="w-full text-left px-4 py-2.5 text-xs text-warning hover:bg-[#fff5f5] transition-colors flex items-center gap-3" onClick={() => { setShowProfilePopover(false); setShowLogoutModal(true); }}>
                Sign Out
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <Dialog open={showLogoutModal} onOpenChange={setShowLogoutModal}>
        <DialogContent className="bg-[var(--bg-app)] border-[var(--border-light)] text-primary sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign Out</DialogTitle>
            <DialogDescription className="text-secondary">
              Are you sure you want to end the current forensic session?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <button className="px-4 py-2 text-xs border border-[var(--border-light)] rounded hover:bg-[var(--bg-surface)]" onClick={() => setShowLogoutModal(false)}>Cancel</button>
            <button className="px-4 py-2 text-xs bg-warning text-white rounded hover:opacity-90 ml-2" onClick={() => { setShowLogoutModal(false); navigate('/'); }}>Sign Out</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </aside>
  );
}
