import { useState } from 'react';
import { Bell, Search, CheckCircle2, Menu } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import './Topbar.css';

export default function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSystemStatus, setShowSystemStatus] = useState(false);
  return (
    <header className="topbar">
      <div className="topbar-left flex items-center gap-4">
        <button className="md:hidden text-secondary hover:text-primary transition-colors" onClick={onMenuClick}>
          <Menu size={20} />
        </button>
        <div className="case-info">
          <span className="case-label">ACTIVE CASE:</span>
          <span className="case-number font-mono">CAS-2026-8924</span>
          <span className="badge badge-success">
            <CheckCircle2 size={12} style={{ marginRight: 4 }} /> Open
          </span>
        </div>
      </div>

      <div className="topbar-center">
        <div className="search-bar">
          <Search size={14} className="search-icon" />
          <input type="text" placeholder="Search hash, device ID, or metadata..." className="search-input font-mono" />
        </div>
      </div>

      <div className="topbar-right">
        <Popover open={showSystemStatus} onOpenChange={setShowSystemStatus}>
          <PopoverTrigger asChild>
            <div className="system-status" style={{ cursor: 'pointer' }}>
              <span className="status-indicator"></span>
              <span className="status-text font-mono">System Nominal</span>
            </div>
          </PopoverTrigger>
          <PopoverContent align="end" sideOffset={12} className="w-60 p-4 bg-[var(--bg-surface)] border border-[var(--border-light)] text-primary">
            <div className="font-semibold text-xs mb-4 uppercase tracking-widest text-secondary">System Status</div>
            <div className="flex flex-col gap-3 text-xs font-mono">
              <div className="flex justify-between"><span>Evidence Storage</span><span className="text-success">✓ Operational</span></div>
              <div className="flex justify-between"><span>Parser Services</span><span className="text-success">✓ Operational</span></div>
              <div className="flex justify-between"><span>Recovery Engine</span><span className="text-success">✓ Operational</span></div>
              <div className="flex justify-between"><span>AI Analysis Engine</span><span className="text-success">✓ Operational</span></div>
              <div className="flex justify-between"><span>Audit Logging</span><span className="text-success">✓ Operational</span></div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover open={showNotifications} onOpenChange={setShowNotifications}>
          <PopoverTrigger asChild>
            <div className="action-icons">
              <button className="icon-btn" aria-label="Alerts">
                <Bell size={18} />
                <span className="alert-badge">3</span>
              </button>
            </div>
          </PopoverTrigger>
          <PopoverContent align="end" sideOffset={12} className="w-80 p-4 bg-[var(--bg-surface)] border border-[var(--border-light)] text-primary">
            <div className="font-semibold text-xs mb-4 uppercase tracking-widest text-secondary">Notifications</div>
            <div className="flex flex-col gap-4">
              <div className="border-b border-[var(--border-light)] pb-3">
                <div className="text-xs font-semibold mb-1 text-primary">Cross-Camera Match Found</div>
                <div className="text-xs text-secondary">AI correlation engine identified a 94% match on Subject-842 in CAM-06.</div>
                <div className="text-[10px] text-tertiary mt-1 font-mono">2 mins ago</div>
              </div>
              <div className="border-b border-[var(--border-light)] pb-3">
                <div className="text-xs font-semibold mb-1 text-success">Recovery Complete</div>
                <div className="text-xs text-secondary">31 deleted streams successfully carved from unallocated space.</div>
                <div className="text-[10px] text-tertiary mt-1 font-mono">45 mins ago</div>
              </div>
              <div>
                <div className="text-xs font-semibold mb-1">Forensic Image Verified</div>
                <div className="text-xs text-secondary">SHA-256 integrity match confirmed against primary evidence source.</div>
                <div className="text-[10px] text-tertiary mt-1 font-mono">1 hr ago</div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
