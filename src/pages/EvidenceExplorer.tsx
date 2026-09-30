import BackButton from '../components/BackButton';
import { Folder, Database, HardDrive, FileVideo } from 'lucide-react';
import './Workspace.css';

export default function EvidenceExplorer() {
  return (
    <div className="workspace-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh', paddingBottom: 0 }}>
      
      <div className="workspace-section shrink-0" style={{ paddingBottom: '16px' }}>
        <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">FORENSICS MODULE</div>
        <h1 className="section-title">Evidence Explorer</h1>
      </div>

      <div className="divider" />

      <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden min-h-0">
        
        {/* LEFT: Storage Tree */}
        <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-[var(--border-light)] pb-6 lg:pb-0 lg:pr-6 lg:py-6 shrink-0 lg:overflow-y-auto">
          <div className="section-subtitle font-mono text-secondary mb-4 lg:mb-16">PHYSICAL STORAGE</div>
          <div className="flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <HardDrive size={14} /> /dev/sdb (2TB)
            </div>
            <div className="flex items-center gap-2 ml-4 text-secondary hover:text-primary cursor-pointer">
              <Database size={14} /> Partition 0 (Sys)
            </div>
            <div className="flex items-center gap-2 ml-4 text-secondary hover:text-primary cursor-pointer">
              <Database size={14} /> Partition 1 (Index)
            </div>
            <div className="flex items-center gap-2 ml-4 text-primary font-semibold bg-[var(--bg-active)] p-1 rounded">
              <Database size={14} /> Partition 2 (Video)
            </div>
            
            <div className="flex items-center gap-2 ml-8 text-secondary hover:text-primary cursor-pointer mt-1">
              <Folder size={14} /> 2026-09-15
            </div>
            <div className="flex items-center gap-2 ml-8 text-primary font-semibold cursor-pointer mt-1">
              <Folder size={14} /> 2026-09-16
            </div>
            <div className="flex items-center gap-2 ml-12 text-secondary mt-1">
              <FileVideo size={14} /> CAM_01.dat
            </div>
            <div className="flex items-center gap-2 ml-12 text-secondary mt-1">
              <FileVideo size={14} /> CAM_03.dat
            </div>
            
            <div className="flex items-center gap-2 ml-8 text-secondary hover:text-primary cursor-pointer mt-1">
              <Folder size={14} /> 2026-09-17
            </div>
          </div>
        </div>

        {/* CENTER: Recording Table */}
        <div className="flex-1 py-6 lg:px-6 lg:overflow-y-auto min-w-0">
          <div className="section-subtitle font-mono text-secondary mb-4 lg:mb-16">RECORDING ENTRIES</div>
          
          <div className="overflow-x-auto">
            <table className="workspace-table w-full">
              <thead>
                <tr>
                  <th>Camera</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Duration</th>
                  <th>Size</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({length: 15}).map((_, i) => (
                  <tr key={i} className={i === 2 ? "bg-[var(--bg-active)]" : "hover:bg-[var(--bg-surface)] cursor-pointer"}>
                    <td className="font-mono font-semibold">CAM-01</td>
                    <td className="font-mono text-secondary">21:15:00</td>
                    <td className="font-mono text-secondary">21:30:00</td>
                    <td className="font-mono text-secondary">15:00</td>
                    <td className="font-mono text-secondary">245 MB</td>
                    <td className="font-mono text-success">INTACT</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT: Metadata */}
        <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-[var(--border-light)] pt-6 lg:pt-0 lg:pl-6 lg:py-6 bg-[var(--bg-surface)] shrink-0 lg:overflow-y-auto">
          <div className="section-subtitle font-mono text-secondary mb-4 lg:mb-6">EVIDENCE PREVIEW & METADATA</div>
          
          <div className="mb-6 lg:mb-8 w-full bg-[var(--bg-app)] border border-[var(--border-light)] rounded overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <img src="/assets/cctv_entrance.jpg" alt="File Preview" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
            <div>
              <div className="text-secondary font-mono text-xs mb-1">FILE ID</div>
              <div className="font-mono font-semibold text-sm break-all">CAM_01_211500.dat</div>
            </div>
            <div>
              <div className="text-secondary font-mono text-xs mb-1">CODEC</div>
              <div className="font-mono text-sm">H.265 (HEVC)</div>
            </div>
            <div>
              <div className="text-secondary font-mono text-xs mb-1">RESOLUTION</div>
              <div className="font-mono text-sm">1920x1080 @ 15fps</div>
            </div>
            <div>
              <div className="text-secondary font-mono text-xs mb-1">SOURCE OFFSET</div>
              <div className="font-mono text-sm">0x00A14000</div>
            </div>
            <div className="col-span-2 lg:col-span-1 border-t border-[var(--border-light)] my-2 lg:my-0 pt-4 lg:pt-0" />
            <div className="col-span-2 lg:col-span-1">
              <div className="text-secondary font-mono text-xs mb-1">SHA-256 HASH</div>
              <div className="font-mono text-xs text-primary break-all">
                9b2d5e8c7a6f3b1e8d9c8f9a7d2b4e6c1a3f9b2d5e8c7a6f3b1e
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
