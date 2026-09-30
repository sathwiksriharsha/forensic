import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';
import { Search, FolderSearch } from 'lucide-react';
import './Workspace.css';

export default function EvidenceList() {
  const navigate = useNavigate();

  return (
    <div className="workspace-container">
      
      <div className="workspace-section flex-between">
        <div>
          <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">CASE HEADER</div>
          <h1 className="section-title">Evidence Register</h1>
          <div className="font-mono text-sm mt-8">Operation Midnight | CAS-2026-8924</div>
        </div>
        <div>
          <div className="border border-light rounded px-16 py-8 flex-align gap-8 bg-surface">
            <Search size={14} className="text-secondary" />
            <input type="text" placeholder="Search evidence..." className="bg-surface outline-none font-mono text-sm" />
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="workspace-section">
        <div className="section-subtitle font-mono text-secondary mb-24">REGISTERED DEVICES & IMAGES</div>
        
        <table className="workspace-table">
          <thead>
            <tr>
              <th>Evidence ID</th>
              <th>Type</th>
              <th>Source Device</th>
              <th>Storage</th>
              <th>Date Acquired</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'DEV-DAHUA-XVR', type: 'Physical DVR', dev: 'Dahua XVR5104H', cap: '2.0 TB', date: '2026-09-17', status: 'ACQUIRED' },
              { id: 'IMG-2026-8924-E01', type: 'Forensic Image', dev: 'EnCase Image File', cap: '1.8 TB', date: '2026-09-17', status: 'VERIFIED' },
              { id: 'EXP-CP-PLUS-USB', type: 'USB Export', dev: 'CP Plus NVR Backup', cap: '64 GB', date: '2026-09-18', status: 'PENDING' },
            ].map((item, i) => (
              <tr key={i} className="hover-bg-surface cursor-pointer" onClick={() => navigate(`/evidence/${item.id}`)}>
                <td className="font-mono font-semibold text-primary flex-align gap-8">
                  <FolderSearch size={14} /> {item.id}
                </td>
                <td className="text-sm">{item.type}</td>
                <td className="font-mono text-secondary">{item.dev}</td>
                <td className="font-mono text-secondary">{item.cap}</td>
                <td className="font-mono text-secondary">{item.date}</td>
                <td className={`font-mono text-${item.status === 'VERIFIED' ? 'success' : item.status === 'PENDING' ? 'warning' : 'primary'}`}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
