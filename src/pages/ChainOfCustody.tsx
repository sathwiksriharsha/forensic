import BackButton from '../components/BackButton';
import { Link2 } from 'lucide-react';
import './Workspace.css';

export default function ChainOfCustody() {
  const events = [
    { time: '2026-09-18 11:30:00', actor: 'SYSTEM', action: 'REPORT GENERATED', evId: 'CAS-2026-8924-E01' },
    { time: '2026-09-18 10:42:15', actor: 'SYSTEM', action: 'VALIDATION', evId: 'CAS-2026-8924-E01' },
    { time: '2026-09-17 16:20:00', actor: 'LA-8429', action: 'RECOVERY', evId: 'CAS-2026-8924-E01' },
    { time: '2026-09-17 14:15:00', actor: 'LA-8429', action: 'ANALYSIS', evId: 'CAS-2026-8924-E01' },
    { time: '2026-09-17 09:15:22', actor: 'SYSTEM', action: 'FORENSIC IMAGE CREATED', evId: 'CAS-2026-8924-E01' },
    { time: '2026-09-17 08:00:00', actor: 'LA-8429', action: 'ACQUIRED', evId: 'DEV-DAHUA-XVR' },
  ];

  return (
    <div className="workspace-container">
      
      <div className="workspace-section">
        <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">VALIDATION MODULE</div>
        <h1 className="section-title">Chain of Custody</h1>
      </div>

      <div className="divider" />

      <div className="workspace-section">
        <div className="section-subtitle font-mono text-secondary mb-32">CRYPTOGRAPHIC AUDIT TRAIL</div>
        
        <div className="flex flex-col max-w-4xl relative">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 border-l border-light" style={{ left: '160px' }} />
          
          {events.map((ev, idx) => (
            <div key={idx} className="flex-align gap-32 relative py-16">
              
              <div className="w-32 text-right font-mono text-xs text-secondary shrink-0">
                {ev.time.split(' ')[0]}<br/>
                {ev.time.split(' ')[1]}
              </div>
              
              {/* Timeline Node */}
              <div className="absolute w-8 h-8 rounded-full bg-surface border-2 border-primary z-10" style={{ left: '156px' }} />
              
              <div className="flex-1 ml-16">
                <div className="font-mono font-semibold">{ev.action}</div>
                <div className="font-mono text-xs text-secondary mt-4">
                  Actor: {ev.actor} | Evidence ID: {ev.evId}
                </div>
              </div>
              
            </div>
          ))}
          
        </div>
      </div>

    </div>
  );
}
