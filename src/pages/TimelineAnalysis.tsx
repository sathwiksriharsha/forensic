import BackButton from '../components/BackButton';
import { Clock } from 'lucide-react';
import './Workspace.css';

export default function TimelineAnalysis() {
  const cameras = ['CAM-01', 'CAM-02', 'CAM-03', 'CAM-04', 'CAM-06'];

  return (
    <div className="workspace-container">
      
      <div className="workspace-section">
        <BackButton className="mb-4 lg:mb-6" />
        <div className="section-supertitle font-mono text-secondary">ANALYSIS MODULE</div>
        <h1 className="section-title">Timeline Synchronization</h1>
      </div>

      <div className="divider" />

      <div className="workspace-section">
        <div className="section-subtitle font-mono text-secondary mb-32">SYNCHRONIZED EVIDENCE TIMELINE</div>
        
        <div className="w-full relative overflow-x-auto pb-4">
          <div className="min-w-[600px] lg:min-w-0">
            
            {/* Time scale */}
            <div className="flex font-mono text-[10px] lg:text-xs text-secondary mb-4 lg:mb-16 pl-[70px] lg:pl-32">
              <div className="flex-1">21:00</div>
              <div className="flex-1">21:15</div>
              <div className="flex-1">21:30</div>
              <div className="flex-1">21:45</div>
              <div className="flex-1">22:00</div>
            </div>

            {/* Timeline Grid Background */}
            <div className="absolute top-8 lg:top-20 bottom-0 left-[70px] lg:left-32 right-0 flex pointer-events-none border-l border-r border-[var(--border-light)] z-0">
              <div className="flex-1 border-l border-[var(--border-light)] opacity-30" />
              <div className="flex-1 border-l border-[var(--border-light)] opacity-30" />
              <div className="flex-1 border-l border-[var(--border-light)] opacity-30" />
              <div className="flex-1 border-l border-[var(--border-light)] opacity-30" />
            </div>
            
            {/* Timeline Tracks */}
            <div className="flex flex-col gap-4 lg:gap-8 relative z-10">
              {cameras.map((cam, idx) => (
                <div key={cam} className="flex items-center h-8 lg:h-12">
                  <div className="w-[60px] lg:w-24 font-mono text-[10px] lg:text-sm font-semibold sticky left-0 bg-[var(--bg-app)] z-30 flex items-center pr-2">{cam}</div>
                  <div className="flex-1 relative h-4 lg:h-8 bg-[var(--bg-surface)] rounded ml-2">
                    {/* Mock intact recording blocks */}
                    <div className="absolute top-0 bottom-0 bg-[var(--accent-blue)] opacity-20" style={{ left: '0%', width: '90%' }} />
                    
                    {/* Event Markers based on story */}
                    {idx === 0 && <div className="absolute top-0 bottom-0 w-2 lg:w-4 bg-[var(--warning)] z-10" style={{ left: '50%' }} />}
                    {idx === 2 && <div className="absolute top-0 bottom-0 w-2 lg:w-4 bg-[var(--warning)] z-10" style={{ left: '52%' }} />}
                    {idx === 3 && <div className="absolute top-0 bottom-0 w-2 lg:w-4 bg-[var(--warning)] z-10" style={{ left: '53%' }} />}
                    {idx === 4 && <div className="absolute top-0 bottom-0 w-2 lg:w-4 bg-[var(--warning)] z-10" style={{ left: '55%' }} />}
                    
                    {/* Missing/Recovered block */}
                    {idx === 3 && (
                      <>
                        <div className="absolute top-0 bottom-0 border border-[var(--critical)]" style={{ left: '90%', width: '10%' }} />
                        <div className="absolute top-0 bottom-0 bg-[var(--success)] opacity-40" style={{ left: '90%', width: '8.7%' }} />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Global Playhead */}
            <div className="absolute top-0 bottom-0 border-l-2 border-[var(--primary)] z-20 pointer-events-none" style={{ left: 'calc(70px + 53%)' }}>
              <div className="absolute top-0 -left-10 lg:-left-16 bg-[var(--primary)] text-white font-mono text-[9px] lg:text-xs px-2 lg:px-4 py-1 lg:py-2 rounded">
                21:31:42
              </div>
            </div>
          </div>
        </div>

        {/* Selected Event details for mobile */}
        <div className="mt-8 lg:mt-16 border-t border-[var(--border-light)] pt-8">
          <div className="font-mono text-sm lg:text-base font-semibold mb-6 flex items-center gap-4">
            <span className="text-primary">21:31:42</span> 
            <span className="text-warning">PERSON DETECTED</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 overflow-x-auto pb-4">
            <div className="flex-1 min-w-[200px] border border-[var(--border-light)] bg-[var(--bg-surface)] p-2 rounded">
              <div className="font-mono text-[10px] text-secondary mb-2">CAM-01</div>
              <div className="w-full bg-[var(--bg-active)]" style={{ aspectRatio: '16/9' }}>
                <img src="/assets/cctv_entrance.jpg" alt="CAM-01" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1 min-w-[200px] border border-[var(--border-light)] bg-[var(--bg-surface)] p-2 rounded">
              <div className="font-mono text-[10px] text-secondary mb-2">CAM-03</div>
              <div className="w-full bg-[var(--bg-active)]" style={{ aspectRatio: '16/9' }}>
                <img src="/assets/cctv_alley.jpg" alt="CAM-03" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1 min-w-[200px] border border-[var(--border-primary)] bg-[var(--bg-surface)] p-2 rounded shadow-sm">
              <div className="font-mono text-[10px] text-primary font-semibold mb-2">CAM-04 (PRIMARY)</div>
              <div className="w-full bg-[var(--bg-active)]" style={{ aspectRatio: '16/9' }}>
                <img src="/assets/cctv_lobby.jpg" alt="CAM-04" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
