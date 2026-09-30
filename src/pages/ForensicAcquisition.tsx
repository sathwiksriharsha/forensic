import BackButton from '../components/BackButton';
import { HardDrive, ShieldCheck } from 'lucide-react';
import './Workspace.css';

export default function ForensicAcquisition() {
  return (
    <div className="workspace-container">
      
      <div className="workspace-section">
        <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">ACQUISITION MODULE</div>
        <h1 className="section-title">Forensic Acquisition</h1>
        <div className="font-mono text-sm mt-8 text-secondary">Bit-stream Imaging & Verification</div>
      </div>

      <div className="divider" />

      <div className="workspace-section flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        <div className="flex-1 overflow-x-auto">
          <div className="section-subtitle font-mono text-secondary mb-4 lg:mb-24">ACQUISITION TARGET</div>
          
          <table className="workspace-table w-full">
            <tbody>
              <tr>
                <td className="w-24 lg:w-32 text-secondary">Source Device</td>
                <td className="font-mono">/dev/sdb <span className="text-secondary lg:ml-8 block lg:inline">Dahua XVR5104H</span></td>
              </tr>
              <tr>
                <td className="w-24 lg:w-32 text-secondary">Destination</td>
                <td className="font-mono break-all">/mnt/storage/CAS-2026-8924/E01/</td>
              </tr>
              <tr>
                <td className="w-24 lg:w-32 text-secondary">Method</td>
                <td className="font-mono">E01 Compressed (Ex01)</td>
              </tr>
              <tr>
                <td className="w-24 lg:w-32 text-secondary">Write Protection</td>
                <td className="font-mono text-success flex items-center gap-2">
                  <ShieldCheck size={14} className="shrink-0" /> Hardware Write-Blocker Active
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex-1 overflow-x-auto">
          <div className="section-subtitle font-mono text-secondary mb-4 lg:mb-24">VERIFICATION</div>
          
          <table className="workspace-table w-full">
            <tbody>
              <tr>
                <td className="w-24 lg:w-32 text-secondary">MD5 Hash</td>
                <td className="font-mono text-xs break-all">d41d8cd98f00b204e9800998ecf8427e</td>
              </tr>
              <tr>
                <td className="w-24 lg:w-32 text-secondary">SHA-256 Hash</td>
                <td className="font-mono text-xs text-primary break-all">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</td>
              </tr>
              <tr>
                <td className="w-24 lg:w-32 text-secondary">Status</td>
                <td className="font-mono text-warning">IMAGING IN PROGRESS</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <div className="divider" />

      <div className="workspace-section">
        <div className="section-subtitle font-mono text-secondary mb-24">ACQUISITION PROGRESS</div>
        
        <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-active)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: '68%', height: '100%', backgroundColor: 'var(--accent-blue)' }}></div>
        </div>

        <div className="grid grid-cols-2 lg:flex lg:gap-8 gap-4 font-mono text-[10px] sm:text-xs mt-8 lg:mt-24">
          <div className="flex flex-col"><span className="text-secondary text-[9px] mb-1">Sectors Processed</span> 182,391,822 / 268,435,456</div>
          <div className="flex flex-col"><span className="text-secondary text-[9px] mb-1">Throughput</span> 142 MB/s</div>
          <div className="flex flex-col"><span className="text-secondary text-[9px] mb-1">Elapsed</span> 01:14:22</div>
          <div className="flex flex-col"><span className="text-secondary text-[9px] mb-1">Est. Remaining</span> 00:32:10</div>
          <div className="flex flex-col"><span className="text-secondary text-[9px] mb-1">Read Errors</span> <span className="text-success">0</span></div>
        </div>
      </div>

    </div>
  );
}
