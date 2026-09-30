import BackButton from '../components/BackButton';
import { useState } from 'react';
import { Server, ShieldCheck, ChevronRight, Play } from 'lucide-react';
import './Workspace.css';

export default function DeviceIdentification() {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  
  const runScan = () => {
    setScanState('scanning');
    setLogs(['Initiating physical block scan...']);
    
    const steps = [
      'Reading sector 0 (MBR/GPT)...',
      'No standard partition table found. Typical for embedded DVRs.',
      'Scanning for known proprietary file system signatures...',
      'Signature matched: DHFS (Dahua File System) at offset 0x00001000.',
      'Analyzing superblock structure...',
      'Superblock parsed successfully. 2 TB capacity detected.',
      'Locating video frame index table...',
      'Index table found. 8-channel recording format confirmed.',
      'Determining firmware version from metadata region...',
      'Firmware version: V4.001.0000000.1',
      'Matching parser module...',
      'Device identified. Ready for acquisition.'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setLogs(prev => [...prev, steps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setScanState('complete');
      }
    }, 400);
  };

  return (
    <div className="workspace-container">
      
      <div className="workspace-section flex-between">
        <div>
          <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">ACQUISITION MODULE</div>
          <h1 className="section-title">Device Identification</h1>
          <div className="font-mono text-sm mt-8 text-secondary">Signature & File System Detection</div>
        </div>
        <div>
          {scanState === 'idle' && (
            <button className="flex-align gap-8 font-mono text-xs px-16 border border-light hover-bg-active rounded text-primary" onClick={runScan} style={{ height: '36px' }}>
              <Play size={14} className="fill-current" /> RUN SIGNATURE ANALYSIS
            </button>
          )}
          {scanState === 'complete' && (
            <button className="flex-align gap-8 font-mono text-xs px-16 bg-primary text-white hover-bg-primary-dark rounded" style={{ height: '36px' }}>
              PROCEED TO ACQUISITION <ChevronRight size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="divider" />

      <div className="flex gap-64 mt-32">
        {/* LEFT: LOGS */}
        <div className="flex-1">
          <div className="section-subtitle font-mono text-secondary mb-16">DETECTION PROCESS LOG</div>
          <div className="bg-app border border-light p-16 font-mono text-xs overflow-y-auto" style={{ minHeight: '400px' }}>
            {scanState === 'idle' ? (
              <div className="text-secondary">Ready. Awaiting target block device...</div>
            ) : (
              <div className="flex flex-col gap-8">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-16">
                    <span className="text-secondary shrink-0">[{new Date().toISOString().split('T')[1].slice(0, 12)}]</span> 
                    <span className="text-primary">{log}</span>
                  </div>
                ))}
                {scanState === 'scanning' && <div>_</div>}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: RESULTS */}
        <div className="w-96">
          <div className="section-subtitle font-mono text-secondary mb-16 flex-between">
            <span>DETECTED DEVICE PROFILE</span>
            {scanState === 'complete' && <span className="text-success tracking-widest text-[10px]">HIGH CONFIDENCE (98%)</span>}
          </div>

          <div style={{ opacity: scanState === 'complete' ? 1 : 0.2, transition: 'opacity 0.3s' }}>
            <div className="p-24 border border-light bg-surface rounded mb-32">
               <div className="flex-align gap-16 mb-24">
                 <Server size={32} className="text-primary" />
                 <div>
                   <div className="font-semibold text-lg">Dahua XVR5104H-4KL-X</div>
                   <div className="text-secondary font-mono text-xs mt-4">8-Channel DVR</div>
                 </div>
               </div>

               <table className="workspace-table">
                  <tbody>
                    <tr><td className="text-secondary border-none py-4 px-0">Manufacturer</td><td className="border-none font-mono py-4">Dahua Technology</td></tr>
                    <tr><td className="text-secondary border-none py-4 px-0">Firmware</td><td className="border-none font-mono py-4">V4.001.0</td></tr>
                    <tr><td className="text-secondary border-none py-4 px-0">Storage</td><td className="border-none font-mono py-4">2.0 TB</td></tr>
                    <tr><td className="text-secondary border-none py-4 px-0">Filesystem</td><td className="border-none font-mono py-4">DHFS</td></tr>
                    <tr><td className="text-secondary border-none py-4 px-0">Metadata</td><td className="border-none font-mono py-4">Offset 0x00A0</td></tr>
                  </tbody>
               </table>
            </div>

            <div className="p-16 border border-success bg-active rounded flex gap-16">
               <ShieldCheck size={20} className="text-success shrink-0" />
               <div>
                 <div className="font-semibold text-sm mb-4">Parser Available</div>
                 <div className="font-mono text-xs text-secondary leading-relaxed">Full logical extraction, recovery, and frame carving supported.</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
