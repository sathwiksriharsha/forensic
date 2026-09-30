import BackButton from '../components/BackButton';
import { Network } from 'lucide-react';
import './Workspace.css';

export default function CorrelationEngine() {
  return (
    <div className="workspace-container">
      
      <div className="workspace-section pb-2 lg:pb-4">
        <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">ANALYSIS MODULE</div>
        <h1 className="section-title">Cross-Camera Correlation</h1>
      </div>

      <div className="divider" />

      <div className="workspace-section pt-6 lg:pt-8 flex flex-col gap-6 lg:gap-8">
        
        <div>
          <div className="font-mono text-secondary text-sm lg:text-base tracking-widest font-semibold mb-4 lg:mb-6 uppercase">
            ONE SUBJECT. FOUR CAMERAS. ONE EVENT.
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 font-mono text-xs border border-[var(--border-light)] p-4 lg:p-6 bg-[var(--bg-surface)] rounded w-full md:w-fit min-w-[320px]">
            <div className="flex flex-col"><span className="text-secondary text-[10px] tracking-widest mb-1 lg:mb-2">TRACKING ID</span> <span className="font-semibold text-primary">SUB-842</span></div>
            <div className="flex flex-col"><span className="text-secondary text-[10px] tracking-widest mb-1 lg:mb-2">CLASSIFICATION</span> <span className="font-semibold">PERSON</span></div>
            <div className="flex flex-col"><span className="text-secondary text-[10px] tracking-widest mb-1 lg:mb-2">DURATION</span> <span className="font-semibold">00:06:40</span></div>
            <div className="flex flex-col"><span className="text-secondary text-[10px] tracking-widest mb-1 lg:mb-2">CONFIDENCE</span> <span className="text-primary font-semibold text-sm">94%</span></div>
          </div>
        </div>

        {/* SEQUENCE */}
        <div className="flex flex-row items-center gap-2 lg:gap-4 w-full lg:max-w-4xl font-mono overflow-x-auto pb-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="font-semibold text-primary">CAM-01</div>
            <div className="text-[10px] text-secondary">21:30:12</div>
          </div>
          
          <div className="flex flex-1 items-center min-w-[30px] px-1 md:px-2 mb-4 shrink-0">
            <div className="w-full border-t border-solid border-[var(--primary)] opacity-40"></div>
            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-[var(--primary)] border-b-[4px] border-b-transparent opacity-40 -ml-[1px]"></div>
          </div>

          <div className="flex flex-col items-center shrink-0">
            <div className="font-semibold text-primary">CAM-03</div>
            <div className="text-[10px] text-secondary">21:32:41</div>
          </div>

          <div className="flex flex-1 items-center min-w-[30px] px-1 md:px-2 mb-4 shrink-0">
            <div className="w-full border-t border-solid border-[var(--primary)] opacity-40"></div>
            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-[var(--primary)] border-b-[4px] border-b-transparent opacity-40 -ml-[1px]"></div>
          </div>

          <div className="flex flex-col items-center shrink-0">
            <div className="font-semibold text-primary">CAM-04</div>
            <div className="text-[10px] text-secondary">21:34:17</div>
          </div>

          <div className="flex flex-1 items-center min-w-[30px] px-1 md:px-2 mb-4 shrink-0">
            <div className="w-full border-t border-solid border-[var(--primary)] opacity-40"></div>
            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-[var(--primary)] border-b-[4px] border-b-transparent opacity-40 -ml-[1px]"></div>
          </div>

          <div className="flex flex-col items-center shrink-0">
            <div className="font-semibold text-primary">CAM-06</div>
            <div className="text-[10px] text-secondary">21:37:02</div>
          </div>
        </div>

        {/* 2x2 CCTV GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-2">
          
          <div className="cctv-cinematic-frame small-frame shadow-sm" style={{ aspectRatio: '16/9' }}>
            <img src="/assets/cctv_red_entrance.jpg" alt="Entrance" className="w-full h-full object-cover" />
            <div className="cctv-overlay-text top-left font-mono">21:30:12</div>
            <div className="cctv-overlay-text top-right font-mono">CAM-01</div>
            <div className="cctv-overlay-text bottom-left font-mono text-[9px] bg-primary text-white px-2 py-1 rounded">EVENT CORRELATED</div>
            <div className="ai-bounding-box" style={{ left: '55%', top: '45%', width: '15%', height: '40%', borderColor: 'rgba(59, 130, 246, 0.6)' }} />
          </div>

          <div className="cctv-cinematic-frame small-frame shadow-sm" style={{ aspectRatio: '16/9' }}>
            <img src="/assets/cctv_red_dock.jpg" alt="Loading Dock" className="w-full h-full object-cover" />
            <div className="cctv-overlay-text top-left font-mono">21:32:41</div>
            <div className="cctv-overlay-text top-right font-mono">CAM-03</div>
            <div className="cctv-overlay-text bottom-left font-mono text-[9px] bg-primary text-white px-2 py-1 rounded">EVENT CORRELATED</div>
            <div className="ai-bounding-box" style={{ left: '48%', top: '35%', width: '18%', height: '50%', borderColor: 'rgba(59, 130, 246, 0.6)' }} />
          </div>

          <div className="cctv-cinematic-frame small-frame shadow-sm" style={{ aspectRatio: '16/9' }}>
            <img src="/assets/cctv_red_hallway.jpg" alt="Hallway" className="w-full h-full object-cover" />
            <div className="cctv-overlay-text top-left font-mono">21:34:17</div>
            <div className="cctv-overlay-text top-right font-mono">CAM-04</div>
            <div className="cctv-overlay-text bottom-left font-mono text-[9px] bg-primary text-white px-2 py-1 rounded">EVENT CORRELATED</div>
            <div className="ai-bounding-box" style={{ left: '42%', top: '25%', width: '22%', height: '65%', borderColor: 'rgba(59, 130, 246, 0.8)' }} />
          </div>

          <div className="cctv-cinematic-frame small-frame shadow-sm" style={{ aspectRatio: '16/9' }}>
            <img src="/assets/cctv_red_perimeter.jpg" alt="Perimeter" className="w-full h-full object-cover" />
            <div className="cctv-overlay-text top-left font-mono">21:37:02</div>
            <div className="cctv-overlay-text top-right font-mono">CAM-06</div>
            <div className="cctv-overlay-text bottom-left font-mono text-[9px] bg-primary text-white px-2 py-1 rounded">EVENT CORRELATED</div>
            <div className="ai-bounding-box" style={{ left: '30%', top: '30%', width: '12%', height: '35%', borderColor: 'rgba(59, 130, 246, 0.6)' }} />
          </div>

        </div>
      </div>
    </div>
  );
}
