import BackButton from '../components/BackButton';
import { Play, Pause, SkipBack, SkipForward, Maximize, AlertCircle } from 'lucide-react';
import './Workspace.css';

export default function VideoAnalysis() {
  return (
    <div className="workspace-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh', paddingBottom: 0 }}>
      
      <div className="workspace-section shrink-0" style={{ paddingBottom: '16px' }}>
        <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">ANALYSIS MODULE</div>
        <h1 className="section-title">Video Analysis</h1>
      </div>

      <div className="divider" />

      <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden min-h-0">
        
        {/* LEFT: Compact Camera List */}
        <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-[var(--border-light)] bg-[var(--bg-surface)] p-4 lg:p-4 shrink-0 lg:overflow-y-auto order-1">
          <div className="section-subtitle font-mono text-secondary mb-4 lg:mb-16">CAMERAS</div>
          <div className="flex flex-row lg:flex-col gap-2 lg:gap-4 font-mono text-xs overflow-x-auto whitespace-nowrap pb-2 lg:pb-0">
            <div className="p-2 lg:p-4 hover:bg-[var(--bg-active)] cursor-pointer rounded">CAM-01 - ENTRANCE</div>
            <div className="p-2 lg:p-4 hover:bg-[var(--bg-active)] cursor-pointer rounded">CAM-03 - LOADING DOCK</div>
            <div className="p-2 lg:p-4 bg-[var(--bg-active)] text-primary font-semibold rounded border border-[var(--border-light)]">CAM-04 - HALLWAY</div>
            <div className="p-2 lg:p-4 hover:bg-[var(--bg-active)] cursor-pointer rounded">CAM-06 - PERIMETER</div>
          </div>
        </div>

        {/* CENTER: Main CCTV Viewer */}
        <div className="flex-1 flex flex-col p-4 lg:p-6 bg-[var(--bg-app)] min-w-0 order-2 lg:overflow-y-auto">
          
          <div className="cctv-viewer flex-1 shadow-lg w-full" style={{ aspectRatio: '16/9' }}>
            <img src="/assets/cctv_lobby.jpg" alt="CAM-04 Hallway" className="w-full h-full object-cover" />
            
            <div className="cctv-overlay">
              <div className="cctv-meta top-left">21:31:42:15</div>
              <div className="cctv-meta top-right">CAM-04</div>
              
              <div className="bbox" style={{ top: '35%', left: '42%', width: '12%', height: '40%' }}>
                <span className="bbox-label">PERSON 0.94</span>
              </div>
            </div>
          </div>
          
          {/* Controls & Timeline */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <button className="p-2 lg:p-4 hover:bg-[var(--bg-surface)] rounded text-primary"><SkipBack size={16}/></button>
              <button className="p-2 lg:p-4 hover:bg-[var(--bg-surface)] rounded text-primary"><Pause size={18} className="fill-current"/></button>
              <button className="p-2 lg:p-4 hover:bg-[var(--bg-surface)] rounded text-primary"><SkipForward size={16}/></button>
            </div>
            
            <div className="flex-1 relative flex items-center h-8 w-full">
              <div className="absolute left-0 right-0 h-2 bg-[var(--bg-surface)] border border-[var(--border-light)] rounded" />
              <div className="absolute left-0 h-2 bg-[var(--accent-blue)] rounded-l" style={{ width: '45%' }} />
              {/* Event Markers */}
              <div className="absolute w-4 h-4 rounded-full bg-[var(--warning)]" style={{ left: '45%', top: '8px' }} />
              <div className="absolute w-1 h-4 bg-[var(--critical)]" style={{ left: '20%', top: '8px' }} />
            </div>
            
            <div className="flex items-center justify-between w-full sm:w-auto">
              <div className="font-mono text-xs text-secondary">21:31:42 / 21:45:00</div>
              <button className="p-2 hover:bg-[var(--bg-surface)] rounded text-secondary sm:ml-4"><Maximize size={16}/></button>
            </div>
          </div>

          {/* Stream Meta - Desktop Only */}
          <div className="hidden lg:flex mt-6 pt-6 border-t border-[var(--border-light)] gap-8 font-mono text-xs text-secondary">
            <div><span className="font-semibold text-primary">OFFSET:</span> 0x00B41000</div>
            <div><span className="font-semibold text-primary">CODEC:</span> H265</div>
            <div><span className="font-semibold text-primary">RES:</span> 1920x1080</div>
            <div><span className="font-semibold text-primary">FPS:</span> 15.00</div>
            <div><span className="font-semibold text-primary">INTEGRITY:</span> MATCH</div>
          </div>
          
        </div>

        {/* RIGHT: Events List */}
        <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-[var(--border-light)] bg-[var(--bg-surface)] p-4 lg:p-4 shrink-0 lg:overflow-y-auto order-3">
          <div className="section-subtitle font-mono text-secondary mb-4 lg:mb-16">DETECTED EVENTS</div>
          
          <div className="flex flex-col gap-3 font-mono text-xs">
            <div className="p-3 border border-[var(--border-light)] rounded hover:bg-[var(--bg-active)] cursor-pointer">
              <div className="text-secondary mb-1">21:28:10</div>
              <div className="font-semibold">MOTION DETECTED</div>
            </div>
            <div className="p-3 border border-[var(--border-focus)] bg-[var(--bg-active)] rounded">
              <div className="flex justify-between items-center mb-1">
                <span className="text-primary font-semibold">21:31:42</span>
                <span className="text-primary">94%</span>
              </div>
              <div className="font-semibold text-primary flex items-center gap-2">
                <AlertCircle size={14}/> PERSON DETECTED
              </div>
            </div>
          </div>
        </div>

        {/* Stream Meta - Mobile Only */}
        <div className="w-full flex lg:hidden overflow-x-auto border-t border-[var(--border-light)] bg-[var(--bg-surface)] p-4 gap-6 font-mono text-[10px] text-secondary order-4 whitespace-nowrap">
          <div><span className="font-semibold text-primary">OFFSET:</span> 0x00B41000</div>
          <div><span className="font-semibold text-primary">CODEC:</span> H265</div>
          <div><span className="font-semibold text-primary">RES:</span> 1920x1080</div>
          <div><span className="font-semibold text-primary">FPS:</span> 15.00</div>
          <div><span className="font-semibold text-primary">INTEGRITY:</span> MATCH</div>
        </div>

      </div>
    </div>
  );
}
