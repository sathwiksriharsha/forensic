import BackButton from '../components/BackButton';
import { ShieldCheck, Database, FileDigit } from 'lucide-react';
import './Workspace.css';

export default function EvidenceIntegrity() {
  return (
    <div className="workspace-container">
      
      <div className="workspace-section">
        <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">VALIDATION MODULE</div>
        <h1 className="section-title">Evidence Integrity</h1>
      </div>

      <div className="divider" />

      <div className="workspace-section">
        <div className="section-subtitle font-mono text-secondary mb-32">CRYPTOGRAPHIC HASH VERIFICATION</div>
        
        <div className="flex flex-col gap-32 max-w-4xl">
          
          <div className="flex-align gap-24">
            <div className="w-64 font-mono text-secondary flex-align gap-8"><Database size={14}/> Original Evidence</div>
            <div className="font-mono text-sm">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
          </div>
          
          <div className="flex-align gap-24">
            <div className="w-64 font-mono text-secondary flex-align gap-8"><FileDigit size={14}/> Forensic Image (E01)</div>
            <div className="font-mono text-sm">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
          </div>
          
          <div className="flex-align gap-24">
            <div className="w-64 font-mono text-secondary flex-align gap-8"><FileDigit size={14}/> Current Workspace</div>
            <div className="font-mono text-sm text-primary font-semibold">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
          </div>
          
          <div className="divider" />
          
          <div className="flex-align gap-24 mt-8">
            <div className="w-64 font-mono font-semibold tracking-widest text-success">MATCH</div>
            <div className="font-mono text-success flex-align gap-8 font-semibold"><ShieldCheck size={16}/> VERIFIED</div>
          </div>

        </div>
      </div>

      <div className="divider" />

      <div className="workspace-section">
        <div className="section-subtitle font-mono text-secondary mb-24">VERIFICATION HISTORY</div>
        
        <table className="workspace-table max-w-4xl">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Trigger</th>
              <th>Algorithm</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-mono">2026-09-18 10:42:15</td>
              <td className="font-mono text-secondary">Manual Audit</td>
              <td className="font-mono text-secondary">SHA-256</td>
              <td className="font-mono text-success">MATCH</td>
            </tr>
            <tr>
              <td className="font-mono">2026-09-17 14:10:00</td>
              <td className="font-mono text-secondary">Post-Acquisition</td>
              <td className="font-mono text-secondary">SHA-256</td>
              <td className="font-mono text-success">MATCH</td>
            </tr>
            <tr>
              <td className="font-mono">2026-09-17 09:15:22</td>
              <td className="font-mono text-secondary">Acquisition Complete</td>
              <td className="font-mono text-secondary">MD5</td>
              <td className="font-mono text-success">MATCH</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
