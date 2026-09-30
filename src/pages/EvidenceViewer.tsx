import BackButton from '../components/BackButton';
import { Play, Pause, SkipBack, SkipForward, Maximize, ShieldCheck, Download } from 'lucide-react';
import './Workspace.css';

export default function EvidenceViewer() {
  return (
    <div className="workspace-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh', paddingBottom: 0 }}>
      
      <div className="workspace-section shrink-0 flex-between" style={{ paddingBottom: '16px' }}>
        <div>
          <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">EVIDENCE VIEWER</div>
          <h1 className="section-title">DEV-DAHUA-XVR</h1>
          <div className="font-mono text-sm mt-8 text-secondary">CAS-2026-8924 | E01 Forensic Image</div>
        </div>
        <div>
          <button className="flex-align gap-8 font-mono text-xs px-16 py-8 border border-light hover-bg-active rounded">
            <Download size={14}/> EXPORT SEGMENT
          </button>
        </div>
      </div>

      <div className="divider" />

      <div className="flex flex-col flex-1 overflow-y-auto p-4 lg:p-8 bg-[var(--bg-app)]">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 lg:gap-12 pb-12">
          
          {/* PRIMARY VIEWER */}
          <div className="flex flex-col gap-4">
            <div className="cctv-viewer shadow-xl w-full bg-black rounded overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img src="/assets/cctv_entrance.jpg" alt="CAM-01 Entrance" className="w-full h-full object-contain" />
              <div className="cctv-overlay pointer-events-none">
                <div className="cctv-meta top-left">2026-09-17 14:32:05</div>
                <div className="cctv-meta top-right">CAM 01 - MAIN ENTRANCE</div>
              </div>
            </div>

            {/* CONTROLS & TIMELINE */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <button className="p-2 lg:p-3 hover:bg-[var(--bg-surface)] rounded text-primary transition-colors"><SkipBack size={18}/></button>
                <button className="p-2 lg:p-3 hover:bg-[var(--bg-surface)] rounded text-primary transition-colors"><Play size={20} className="fill-current"/></button>
                <button className="p-2 lg:p-3 hover:bg-[var(--bg-surface)] rounded text-primary transition-colors"><SkipForward size={18}/></button>
                <div className="font-mono text-xs text-secondary ml-2 lg:ml-4">14:32:05 / 15:45:00</div>
                <div className="flex-1 min-w-[20px]"></div>
                <button className="p-2 lg:p-3 hover:bg-[var(--bg-surface)] rounded text-secondary transition-colors"><Maximize size={18}/></button>
              </div>

              <div className="relative flex items-center h-8 w-full mt-2 lg:mt-0">
                <div className="absolute left-0 right-0 h-2 bg-[var(--bg-surface)] border border-[var(--border-light)] rounded" />
                <div className="absolute left-0 h-2 bg-[var(--accent-blue)] rounded-l" style={{ width: '34%' }} />
                <div className="absolute w-2 h-4 bg-[var(--primary)] rounded cursor-pointer" style={{ left: '34%', top: '8px' }} />
              </div>
            </div>
          </div>

          {/* FRAME STRIP */}
          <div className="flex flex-col gap-4 border-t border-[var(--border-light)] pt-6 lg:pt-8">
            <div className="section-subtitle font-mono text-secondary">RELATED FRAMES</div>
            <div className="flex overflow-x-auto gap-2 lg:gap-4 pb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`shrink-0 w-32 sm:w-40 lg:w-48 border rounded overflow-hidden cursor-pointer ${i === 5 ? 'border-[var(--primary)] shadow-[0_0_0_1px_var(--primary)]' : 'border-[var(--border-light)]'}`}>
                  <div className="w-full aspect-video bg-[var(--bg-surface)] relative">
                    <img src="/assets/cctv_entrance.jpg" alt="Keyframe" className="w-full h-full object-cover" />
                  </div>
                  <div className={`p-1.5 lg:p-2 font-mono text-[10px] lg:text-xs text-center border-t border-[var(--border-light)] ${i === 5 ? 'bg-[var(--primary)] text-[var(--bg-app)] font-bold' : 'bg-[var(--bg-active)] text-secondary'}`}>14:32:0{i}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 border-t border-[var(--border-light)] pt-6 lg:pt-8">
            {/* METADATA */}
            <div className="lg:col-span-1">
              <div className="section-subtitle font-mono text-secondary mb-4 lg:mb-6">EXTRACTION METADATA</div>
              <table className="workspace-table w-full">
                <tbody>
                  <tr><td className="text-secondary border-none py-2 pl-0">Source</td><td className="border-none font-mono py-2 break-all font-semibold">Dahua XVR5104H</td></tr>
                  <tr><td className="text-secondary border-none py-2 pl-0">Method</td><td className="border-none font-mono py-2 font-semibold">Physical Carving</td></tr>
                  <tr><td className="text-secondary border-none py-2 pl-0">Filesystem</td><td className="border-none font-mono py-2 font-semibold">DHFS v2</td></tr>
                  <tr><td className="text-secondary border-none py-2 pl-0">Codec</td><td className="border-none font-mono py-2 font-semibold">H.265 (HEVC)</td></tr>
                  <tr><td className="text-secondary border-none py-2 pl-0">Resolution</td><td className="border-none font-mono py-2 font-semibold">1920x1080</td></tr>
                </tbody>
              </table>
            </div>

            {/* INTEGRITY */}
            <div className="lg:col-span-1">
              <div className="section-subtitle font-mono text-secondary mb-4 lg:mb-6">INTEGRITY & CUSTODY</div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="text-secondary font-mono text-xs mb-1">MD5 HASH</div>
                  <div className="font-mono text-[11px] lg:text-xs break-all bg-[var(--bg-surface)] p-2 lg:p-3 rounded border border-[var(--border-light)]">e4d909c290d0fb1ca068ffaddf22cbd0</div>
                </div>
                <div>
                  <div className="text-secondary font-mono text-xs mb-1">SHA-256 HASH</div>
                  <div className="font-mono text-[11px] lg:text-xs text-primary break-all bg-[var(--bg-surface)] p-2 lg:p-3 rounded border border-[var(--border-light)]">8f9a7d2b4e6c1a3f9b2d5e8c7a6f3b1e8d9c8f9a7d2b4e6c1a3f9b2d5e8c7a6f3b1e</div>
                </div>
                <div className="mt-2 flex items-center gap-2 font-mono text-success font-semibold text-xs border border-[var(--success)] bg-[rgba(34,197,94,0.1)] p-2 lg:p-3 rounded w-fit">
                  <ShieldCheck size={14} /> INTEGRITY VERIFIED
                </div>
              </div>
            </div>

            {/* EVENTS */}
            <div className="lg:col-span-1">
              <div className="section-subtitle font-mono text-secondary mb-4 lg:mb-6">CORRELATED EVENTS</div>
              <div className="flex flex-col gap-3 font-mono text-xs">
                <div className="p-3 lg:p-4 border border-[var(--border-light)] rounded bg-[var(--bg-surface)]">
                  <div className="text-secondary mb-1">14:32:05</div>
                  <div className="font-semibold text-primary">Motion detected in sector 4</div>
                </div>
                <div className="p-3 lg:p-4 border border-[var(--warning)] text-warning bg-[var(--bg-active)] rounded">
                  <div className="mb-1 text-[var(--warning)] opacity-80">14:35:12</div>
                  <div className="font-semibold">Possible video dropout</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
