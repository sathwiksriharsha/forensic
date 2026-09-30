import BackButton from '../components/BackButton';
import { Scan, AlertCircle } from 'lucide-react';
import './Workspace.css';

export default function AiAnalysis() {
  return (
    <div className="workspace-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh', paddingBottom: 0 }}>
      
      <div className="workspace-section shrink-0" style={{ paddingBottom: '16px' }}>
        <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">ANALYSIS MODULE</div>
        <h1 className="section-title">AI Scene Analysis</h1>
      </div>

      <div className="divider" />

      <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden min-h-0">
        
        {/* CENTER: Main Image (Order 1 on mobile, Order 2 on Desktop) */}
        <div className="flex-1 lg:order-2 p-4 lg:p-6 bg-[var(--bg-app)] min-w-0 flex flex-col items-center justify-center order-1 lg:overflow-y-auto">
          
          <div className="cctv-viewer shadow-lg w-full max-w-5xl" style={{ aspectRatio: '16/9', maxHeight: 'calc(100vh - 120px)' }}>
            <img src="/assets/cctv_red_hallway.jpg" alt="CAM-04 Hallway" className="w-full h-full object-contain bg-black" />
            
            <div className="cctv-overlay">
              <div className="cctv-meta top-left">21:31:42:15</div>
              <div className="cctv-meta top-right">CAM-04 - HALLWAY EAST</div>
              
              <div className="ai-bounding-box" style={{ top: '25%', left: '42%', width: '22%', height: '65%', borderColor: 'rgba(59, 130, 246, 0.8)' }}>
                <span className="ai-label font-mono">PERSON 0.94</span>
              </div>
              <div className="ai-bounding-box" style={{ top: '55%', left: '50%', width: '10%', height: '15%', borderColor: 'rgba(59, 130, 246, 0.5)' }}>
                <span className="ai-label font-mono" style={{ fontSize: '9px', padding: '1px 4px' }}>BAG 0.82</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* LEFT: Classifiers (Order 2 on mobile, Order 1 on Desktop) */}
        <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-[var(--border-light)] py-6 lg:pb-0 lg:pr-6 shrink-0 lg:overflow-y-auto order-2 lg:order-1">
          <div className="section-subtitle font-mono text-secondary mb-4 lg:mb-16">DETECTION CLASSIFIERS</div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:gap-3 font-mono text-xs overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-primary font-semibold p-2 lg:p-2 bg-[var(--bg-active)] rounded whitespace-nowrap">
              <Scan size={14} /> Person
            </div>
            <div className="flex items-center gap-2 text-primary font-semibold p-2 lg:p-2 bg-[var(--bg-active)] rounded whitespace-nowrap">
              <Scan size={14} /> Bag
            </div>
            <div className="flex items-center gap-2 text-secondary p-2 lg:p-2 hover:bg-[var(--bg-surface)] rounded cursor-pointer whitespace-nowrap">
              <Scan size={14} /> Face
            </div>
            <div className="flex items-center gap-2 text-warning font-semibold p-2 lg:p-2 bg-[var(--bg-active)] rounded cursor-pointer whitespace-nowrap">
              <AlertCircle size={14} /> Motion
            </div>
          </div>
        </div>

        {/* RIGHT: Registry (Order 3 on mobile and desktop) */}
        <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-[var(--border-light)] py-6 lg:pt-0 lg:pl-6 bg-[var(--bg-surface)] shrink-0 lg:overflow-y-auto order-3">
          <div className="section-subtitle font-mono text-secondary mb-4 lg:mb-16">DETECTION REGISTRY</div>
          
          <div className="overflow-x-auto">
            <table className="workspace-table w-full">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Conf</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '21:31:42', cls: 'PERSON', conf: '94%', active: true },
                  { time: '21:31:42', cls: 'BAG', conf: '82%', active: true },
                  { time: '21:32:05', cls: 'PERSON', conf: '88%', active: false },
                  { time: '21:33:10', cls: 'MOTION', conf: '97%', active: true, isWarning: true },
                ].map((row, i) => (
                  <tr key={i} className={row.active ? 'bg-[var(--bg-active)]' : 'hover:bg-[var(--bg-surface)] cursor-pointer'}>
                    <td className="font-mono text-secondary py-3">{row.time}</td>
                    <td className={`font-mono py-3 ${row.active ? (row.isWarning ? 'text-warning' : 'text-primary') + ' font-semibold' : 'text-secondary'}`}>
                      {row.cls}
                    </td>
                    <td className={`font-mono py-3 ${row.active ? (row.isWarning ? 'text-warning' : 'text-primary') : 'text-secondary'}`}>
                      {row.conf}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>

      </div>
    </div>
  );
}
