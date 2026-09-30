import BackButton from '../components/BackButton';
import { useState } from 'react';
import { Cpu, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import './Workspace.css';

export default function DataRecovery() {
  const [selectedRow, setSelectedRow] = useState(2);

  return (
    <div className="workspace-container">
      
      <div className="workspace-section">
        <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">RECOVERY ENGINE</div>
        <h1 className="section-title">Deleted Footage Recovery</h1>
        
        <div className="grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-8 font-mono text-[10px] md:text-sm mt-8 md:mt-24">
          <div className="flex flex-col md:block"><span className="text-primary font-semibold text-lg md:text-sm">47</span> <span className="text-secondary mt-1 md:mt-0">deleted entries</span></div>
          <div className="flex flex-col md:block"><span className="text-success font-semibold text-lg md:text-sm">31</span> <span className="text-secondary mt-1 md:mt-0">recoverable</span></div>
          <div className="flex flex-col md:block"><span className="text-warning font-semibold text-lg md:text-sm">9</span> <span className="text-secondary mt-1 md:mt-0">fragmented</span></div>
          <div className="flex flex-col md:block"><span className="text-critical font-semibold text-lg md:text-sm">7</span> <span className="text-secondary mt-1 md:mt-0">corrupted</span></div>
        </div>
      </div>

      <div className="divider" />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-6 lg:mt-12">
        
        {/* LEFT: Table */}
        <div className="flex-1 overflow-x-auto min-w-0">
          <table className="workspace-table w-full">
            <thead>
              <tr>
                <th>Camera</th>
                <th>Timestamp</th>
                <th>Duration</th>
                <th>State</th>
                <th>Recovery</th>
                <th>Integrity</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cam: 'CAM-01', time: '21:10:15', dur: '05:00', state: 'Recoverable', rec: '100%', int: 'Verified', color: 'success' },
                { cam: 'CAM-01', time: '21:15:15', dur: '05:00', state: 'Recoverable', rec: '100%', int: 'Verified', color: 'success' },
                { cam: 'CAM-04', time: '21:31:42', dur: '01:15', state: 'Fragmented', rec: '87%', int: 'Partial', color: 'warning' },
                { cam: 'CAM-06', time: '22:00:00', dur: '--:--', state: 'Corrupted', rec: '0%', int: 'Failed', color: 'critical' },
              ].map((row, i) => (
                <tr key={i} 
                  className={`cursor-pointer ${selectedRow === i ? 'bg-[var(--bg-active)]' : 'hover:bg-[var(--bg-surface)]'}`}
                  onClick={() => setSelectedRow(i)}
                >
                  <td className="font-mono font-semibold">{row.cam}</td>
                  <td className="font-mono text-secondary">{row.time}</td>
                  <td className="font-mono text-secondary">{row.dur}</td>
                  <td className={`font-mono text-${row.color}`}>{row.state}</td>
                  <td className={`font-mono text-${row.color}`}>{row.rec}</td>
                  <td className="font-mono text-secondary">{row.int}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT: Preview using Real Image */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="section-subtitle font-mono text-secondary mb-16">EVIDENCE PREVIEW</div>
          
          <div className="cctv-viewer" style={{ aspectRatio: '16/9' }}>
            {selectedRow === 2 ? (
              <img src="/assets/cctv_lobby.jpg" alt="CAM-04 Lobby" />
            ) : (
              <img src="/assets/cctv_entrance.jpg" alt="CAM-01 Entrance" />
            )}
            <div className="cctv-overlay">
              <div className="cctv-meta top-left">
                {selectedRow === 2 ? '21:31:42' : '21:15:15'}
              </div>
              <div className="cctv-meta top-right">
                {selectedRow === 2 ? 'CAM-04' : 'CAM-01'}
              </div>
            </div>
          </div>

          <div className="mt-24 p-24 bg-surface border border-light rounded">
            <div className="font-mono text-success text-sm font-semibold tracking-widest mb-16 flex-align gap-8">
              <CheckCircle2 size={16} /> RECOVERED
            </div>
            
            <div className="flex-between font-mono text-xs mb-8">
              <span className="text-secondary">Recovery</span>
              <span className="text-success font-semibold">{selectedRow === 2 ? '87%' : '100%'}</span>
            </div>
            
            <div className="flex-between font-mono text-xs mb-8">
              <span className="text-secondary">Fragments</span>
              <span>{selectedRow === 2 ? '17' : '1'}</span>
            </div>
            
            <div className="flex-between font-mono text-xs mt-16 pt-16 border-t">
              <span className="text-secondary">Source Offset</span>
              <span className="text-primary">0x00B41000</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
