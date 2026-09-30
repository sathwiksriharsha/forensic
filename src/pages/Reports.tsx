import BackButton from '../components/BackButton';
import { FileText, Printer, Download } from 'lucide-react';
import './Workspace.css';

export default function Reports() {
  return (
    <div className="workspace-container bg-surface">
      
      <div className="flex-between mb-48">
        <div>
          <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">OUTPUT MODULE</div>
          <h1 className="section-title">Forensic Report</h1>
        </div>
        <div className="flex gap-16">
          <button onClick={() => window.print()} className="flex-align justify-center gap-8 font-mono text-xs border border-light hover-bg-active rounded" style={{ height: '36px', padding: '0 24px' }}>
            <Printer size={14}/> PRINT
          </button>
          <button onClick={() => window.print()} className="flex-align justify-center gap-8 font-mono text-xs bg-primary text-white hover-bg-primary-dark rounded" style={{ height: '36px', padding: '0 24px' }}>
            <Download size={14}/> EXPORT PDF
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto border border-light p-64 bg-app shadow-sm" style={{ minHeight: '1000px' }}>
        
        <div className="text-center mb-64 border-b border-light pb-48">
          <h1 className="text-2xl font-semibold tracking-wider uppercase mb-16">Digital Forensics Investigation Report</h1>
          <div className="font-mono text-sm text-secondary">CASE: DF-2026-0917 / OPERATION MIDNIGHT</div>
          <div className="font-mono text-sm text-secondary mt-8">DATE: 2026-09-18</div>
        </div>

        <div className="mb-48">
          <h3 className="font-semibold uppercase tracking-widest text-sm mb-16 border-b border-light pb-8">1. Case Information</h3>
          <table className="w-full font-mono text-sm">
            <tbody>
              <tr><td className="w-64 py-4 text-secondary">Case Reference</td><td>DF-2026-0917</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Investigator ID</td><td>LA-8429</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Agency</td><td>Cyber Forensics Lab, Unit 3</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mb-48">
          <h3 className="font-semibold uppercase tracking-widest text-sm mb-16 border-b border-light pb-8">2. Device & Evidence Information</h3>
          <table className="w-full font-mono text-sm">
            <tbody>
              <tr><td className="w-64 py-4 text-secondary">Evidence ID</td><td>DEV-DAHUA-XVR</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Manufacturer</td><td>Dahua Technology</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Model</td><td>XVR5104H-4KL-X</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Storage Capacity</td><td>2.0 TB (1,863 GiB)</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Filesystem</td><td>DHFS (Proprietary)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mb-48">
          <h3 className="font-semibold uppercase tracking-widest text-sm mb-16 border-b border-light pb-8">3. Acquisition & Integrity</h3>
          <table className="w-full font-mono text-sm">
            <tbody>
              <tr><td className="w-64 py-4 text-secondary">Acquisition Method</td><td>Hardware Write-Blocked (Physical)</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Image Format</td><td>E01 (EnCase Image Format)</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Source MD5</td><td>d41d8cd98f00b204e9800998ecf8427e</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Source SHA-256</td><td>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Validation Status</td><td className="text-success font-semibold">MATCH VERIFIED</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mb-48">
          <h3 className="font-semibold uppercase tracking-widest text-sm mb-16 border-b border-light pb-8">4. Recovery & Reconstruction</h3>
          <table className="w-full font-mono text-sm">
            <tbody>
              <tr><td className="w-64 py-4 text-secondary">Total Recordings</td><td>12,402</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Deleted Entries Discovered</td><td>47</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Fully Recovered</td><td>31</td></tr>
              <tr><td className="w-64 py-4 text-secondary">Corrupted Sectors</td><td>142</td></tr>
            </tbody>
          </table>
          <p className="font-mono text-xs text-secondary mt-16 leading-relaxed">
            Forensic carving engine reconstructed 31 deleted video streams by analyzing raw frame headers (0x000001BA) and rebuilding index pointers.
          </p>
        </div>

        <div className="mb-48">
          <h3 className="font-semibold uppercase tracking-widest text-sm mb-16 border-b border-light pb-8">5. Analysis Findings</h3>
          <p className="font-mono text-xs text-secondary leading-relaxed">
            Cross-camera correlation confirmed subject (SUB-842, PERSON) entered via Main Entrance (CAM-01) at 21:30:12, proceeded through Loading Dock (CAM-03) at 21:31:05, and traversed Hallway East (CAM-04) at 21:31:42. Subject exited via Perimeter West (CAM-06) at 21:34:24. AI scene analysis confirms 94% confidence match for Person classification across all 4 cameras. Timeline is synchronized to UTC.
          </p>
        </div>
        
        <div className="mt-64 pt-64 border-t border-light text-center">
          <div className="w-64 mx-auto border-b border-medium mb-8"></div>
          <div className="font-mono text-xs text-secondary">INVESTIGATOR SIGNATURE</div>
        </div>

      </div>

    </div>
  );
}
