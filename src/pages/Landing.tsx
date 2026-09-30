import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Database, ShieldCheck, FileText, Cpu, Target, Network, Layers, FileVideo } from 'lucide-react';
import './Landing.css';

// Intersection Observer Hook for Scroll Reveals
function useOnScreen(ref: React.RefObject<Element | null>, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIntersecting(true);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);
  return isIntersecting;
}

const Reveal = ({ children, className = '', delay = 0 }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, '-50px');
  return (
    <div 
      ref={ref} 
      className={`reveal-wrapper ${className} ${onScreen ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-story-container">
      
      {/* MINIMAL NAVIGATION */}
      <nav className="story-nav flex items-center justify-between">
        <div className="story-brand flex items-center gap-2">
          <Search size={18} className="text-primary" />
          <span className="font-mono text-xs sm:text-sm tracking-widest font-semibold uppercase hidden sm:inline-block">Forensic Platform</span>
        </div>
        <div className="story-nav-links hidden md:flex">
          <span onClick={() => document.querySelector('.opening-section')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>Investigation</span>
          <span onClick={() => document.querySelector('.pipeline-section')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>Workflow</span>
          <span onClick={() => document.querySelector('.deleted-moment-section')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>Recovery</span>
          <span onClick={() => document.querySelector('.cross-timeline-section')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>Analysis</span>
          <span onClick={() => document.querySelector('.trust-section')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>Integrity</span>
        </div>
        <button className="btn btn-primary text-[10px] sm:text-xs tracking-wider uppercase px-3 py-2 sm:px-6 sm:py-3" onClick={() => navigate('/dashboard')}>
          Enter Workspace
        </button>
      </nav>

      {/* SECTION 1: THE OPENING */}
      <section className="story-section opening-section">
        <Reveal>
          <div className="case-file-header font-mono">
            <div className="text-secondary mb-4">CASE FILE</div>
            <div className="font-semibold text-primary text-lg">DF-2026-0917</div>
            <div className="text-secondary mt-16">STATUS</div>
            <div className="text-primary tracking-widest">EVIDENCE INTAKE</div>
          </div>
        </Reveal>

        <Reveal delay={300} className="w-full max-w-4xl mx-auto mt-48">
          <div className="cctv-cinematic-frame">
            <div className="cctv-overlay-text top-left font-mono">21:31:42<span className="flicker">:05</span></div>
            <div className="cctv-overlay-text top-right font-mono">CAM-04</div>
            <div className="cctv-overlay-text bottom-left font-mono text-warning flex-align gap-8">
              <span className="status-dot warning blink"></span> MOTION DETECTED
            </div>
            <div className="cctv-crosshair"></div>
          </div>
        </Reveal>

        <Reveal delay={600} className="text-center mt-64">
          <h1 className="statement-title">
            One incident.<br/>
            Multiple cameras.<br/>
            Fragmented evidence.
          </h1>
          <p className="statement-subtitle mt-24">
            Surveillance evidence rarely arrives in one format, from one device, or with one timeline.
          </p>
          <div className="scroll-indicator font-mono mt-48">
            SCROLL TO INVESTIGATE <br/> ↓
          </div>
        </Reveal>
      </section>

      {/* SECTION 2: THE PROBLEM & WORKFLOW */}
      <section className="story-section problem-section" style={{ minHeight: '70vh', padding: '10vh 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        <Reveal className="text-center mb-64">
          <h2 className="statement-title text-secondary">Every recorder speaks a different language.</h2>
          <h2 className="statement-title mt-16">The investigator shouldn't have to.</h2>
        </Reveal>

        <div className="fragments-container mb-64" style={{ position: 'relative', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Reveal className="fragment-card" delay={100} style={{ transform: 'translate(-40px, -20px)' }}>
            <div className="text-xs font-mono text-secondary mb-4">DAHUA</div>
            <div className="font-semibold">PROPRIETARY STORAGE</div>
            <Database size={16} className="mt-12 text-tertiary" />
          </Reveal>
          <Reveal className="fragment-card" delay={300} style={{ transform: 'translate(40px, 30px)' }}>
            <div className="text-xs font-mono text-secondary mb-4">HIKVISION</div>
            <div className="font-semibold">PROPRIETARY INDEX</div>
            <Layers size={16} className="mt-12 text-tertiary" />
          </Reveal>
          <Reveal className="fragment-card" delay={500} style={{ transform: 'translate(-20px, 60px)' }}>
            <div className="text-xs font-mono text-secondary mb-4">CP PLUS</div>
            <div className="font-semibold">VENDOR EXPORT</div>
            <FileVideo size={16} className="mt-12 text-tertiary" />
          </Reveal>
          <Reveal className="fragment-card" delay={700} style={{ transform: 'translate(60px, -40px)' }}>
            <div className="text-xs font-mono text-secondary mb-4">RAW HDD</div>
            <div className="font-semibold">UNSTRUCTURED DATA</div>
            <Cpu size={16} className="mt-12 text-tertiary" />
          </Reveal>
        </div>

        <Reveal className="w-full flex-center flex-col mt-48">
          <h2 className="statement-title">
            One investigation.<br/>
            One forensic workflow.
          </h2>
        </Reveal>
      </section>

      {/* SECTION 4: THE FORENSIC PIPELINE */}
      <section className="story-section pipeline-section">
        <div className="pipeline-container">
          {['DEVICE', 'ACQUIRE', 'IMAGE', 'PARSE', 'RECOVER', 'ANALYZE', 'VALIDATE', 'REPORT'].map((stage, idx) => (
            <Reveal key={stage} delay={idx * 150} className="pipeline-stage-wrapper">
              <div className="pipeline-node">
                <div className="node-dot"></div>
                <div className="node-label font-mono">{stage}</div>
              </div>
              {idx < 7 && <div className="pipeline-connector"></div>}
            </Reveal>
          ))}
        </div>

        <div className="pipeline-details mt-64">
          <Reveal delay={200} className="detail-card">
            <div className="text-xs font-mono text-secondary mb-8">ACQUIRE</div>
            <div className="font-semibold text-sm mb-4">READ-ONLY FORENSIC ACQUISITION</div>
            <div className="font-mono text-xs">SECTOR 182,391,822</div>
            <div className="font-mono text-xs mt-4">SHA-256</div>
            <div className="font-mono text-xs text-primary truncate">94f78a213c9e...</div>
          </Reveal>
          <Reveal delay={500} className="detail-card">
            <div className="text-xs font-mono text-secondary mb-8">RECOVER</div>
            <div className="font-semibold text-sm mb-4 text-critical">31 DELETED RECORDINGS</div>
            <div className="font-mono text-xs text-success">13 FULLY RECOVERED</div>
            <div className="font-mono text-xs text-warning mt-4">9 FRAGMENTED</div>
          </Reveal>
          <Reveal delay={800} className="detail-card">
            <div className="text-xs font-mono text-secondary mb-8">VALIDATE</div>
            <div className="font-semibold text-sm mb-4 text-success flex-align gap-8">
              <ShieldCheck size={14}/> HASH VERIFIED
            </div>
            <div className="font-mono text-xs text-secondary mt-4">CHAIN OF CUSTODY INTACT</div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5: THE "DELETED" MOMENT */}
      <section className="story-section deleted-moment-section" style={{ minHeight: '70vh', padding: '2vh 0 5vh 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Reveal className="w-full max-w-7xl mx-auto flex flex-col items-center">
          
          <div className="font-mono text-secondary text-xl lg:text-3xl tracking-widest font-semibold mb-32 lg:mb-48 text-center uppercase">
            RECOVERING DELETED EVIDENCE
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-12 lg:gap-16 px-4 sm:px-12 md:px-16 max-w-7xl mx-auto">
            
            {/* LEFT: DAMAGED SOURCE */}
            <div className="w-full flex justify-center lg:justify-end">
              <div className="cctv-cinematic-frame small-frame w-full max-w-[280px] sm:max-w-xs lg:max-w-sm" style={{ position: 'relative', aspectRatio: '16/9' }}>
                <img src="/assets/cctv_recovery_v2_damaged.jpg" alt="Incomplete Recording" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="cctv-overlay-text top-left font-mono">21:31:42</div>
                <div className="cctv-overlay-text top-right font-mono">CAM-04</div>
                <div className="cctv-overlay-text bottom-left font-mono text-warning" style={{ fontWeight: 600 }}>INCOMPLETE RECORDING</div>
              </div>
            </div>

            {/* CENTER: RECOVERY ENGINE */}
            <div className="w-full flex flex-col justify-center px-4 lg:px-8 py-8 w-full max-w-[450px] mx-auto">
              <div className="statement-title text-primary mb-24 lg:mb-32 text-center uppercase">
                RECOVERY ENGINE
              </div>
              
              <div className="recovery-stats">
                <div className="stat-row mb-12 lg:mb-16 flex justify-between gap-12">
                  <span className="stat-label text-sm text-secondary tracking-widest">SOURCE OFFSET</span>
                  <span className="stat-value font-mono text-base font-semibold">0x00B41000</span>
                </div>
                <div className="stat-row mb-12 lg:mb-16 flex justify-between gap-12">
                  <span className="stat-label text-sm text-secondary tracking-widest">FRAGMENTS</span>
                  <span className="stat-value font-mono text-base font-semibold">17</span>
                </div>
                <div className="stat-row mb-12 lg:mb-16 flex justify-between gap-12">
                  <span className="stat-label text-sm text-secondary tracking-widest">RECOVERY COMPLETENESS</span>
                  <span className="stat-value font-mono text-base text-primary font-semibold">87%</span>
                </div>
                
                <div className="my-16 lg:my-24 border-t border-[var(--border-light)] border-dashed"></div>

                <div className="stat-row flex justify-between gap-12">
                  <span className="stat-label font-bold tracking-widest text-sm text-secondary">STATUS</span>
                  <span className="stat-value font-mono text-success text-base tracking-widest font-bold">PLAYABLE / RECOVERED</span>
                </div>
              </div>
            </div>

            {/* RIGHT: RECOVERED FRAME */}
            <div className="w-full flex justify-center lg:justify-start">
              <div className="cctv-cinematic-frame small-frame w-full max-w-[280px] sm:max-w-xs lg:max-w-sm" style={{ position: 'relative', aspectRatio: '16/9' }}>
                <img src="/assets/cctv_recovery_v2_clean.jpg" alt="Recovered Frame" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="cctv-overlay-text top-left font-mono">21:31:42</div>
                <div className="cctv-overlay-text top-right font-mono">CAM-04</div>
                <div className="cctv-overlay-text bottom-left font-mono text-success" style={{ fontWeight: 600 }}>RECOVERED FRAME</div>
              </div>
            </div>
          </div>
          
          <div className="text-secondary text-lg md:text-xl font-serif italic mt-48 text-center">
            "From deleted fragments to usable evidence."
          </div>

        </Reveal>
      </section>

      {/* SECTION 6: THE CORRELATION GRID */}
      <section className="story-section cross-timeline-section" style={{ minHeight: '100vh', padding: '10vh 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Reveal className="w-full max-w-4xl mx-auto">
          
          <div className="grid grid-cols-2 gap-24 mb-48">
            <div className="cctv-cinematic-frame small-frame">
              <img src="/assets/cctv_red_entrance.jpg" alt="CAM 01" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="cctv-overlay-text top-left font-mono">21:30:12</div>
              <div className="cctv-overlay-text top-right font-mono">CAM 01 - MAIN ENTRANCE</div>
              <div className="ai-bounding-box" style={{ left: '55%', top: '45%', width: '15%', height: '40%', borderColor: 'rgba(59, 130, 246, 0.5)' }}></div>
            </div>

            <div className="cctv-cinematic-frame small-frame">
              <img src="/assets/cctv_red_dock.jpg" alt="CAM 03" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="cctv-overlay-text top-left font-mono">21:31:05</div>
              <div className="cctv-overlay-text top-right font-mono">CAM 03 - LOADING DOCK</div>
              <div className="ai-bounding-box" style={{ left: '48%', top: '35%', width: '18%', height: '50%', borderColor: 'rgba(59, 130, 246, 0.5)' }}></div>
            </div>

            <div className="cctv-cinematic-frame small-frame">
              <img src="/assets/cctv_red_hallway.jpg" alt="CAM 04" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="cctv-overlay-text top-left font-mono">21:31:42</div>
              <div className="cctv-overlay-text top-right font-mono">CAM 04 - HALLWAY EAST</div>
              <div className="ai-bounding-box" style={{ left: '42%', top: '25%', width: '22%', height: '65%', borderColor: 'rgba(59, 130, 246, 0.8)' }}>
                <span className="ai-label font-mono" style={{ fontSize: '9px', padding: '1px 4px' }}>EVENT CORRELATED</span>
              </div>
            </div>

            <div className="cctv-cinematic-frame small-frame">
              <img src="/assets/cctv_red_perimeter.jpg" alt="CAM 06" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="cctv-overlay-text top-left font-mono">21:34:24</div>
              <div className="cctv-overlay-text top-right font-mono">CAM 06 - PERIMETER WEST</div>
              <div className="ai-bounding-box" style={{ left: '30%', top: '30%', width: '12%', height: '35%', borderColor: 'rgba(59, 130, 246, 0.5)' }}></div>
            </div>
          </div>
          
          <div className="text-center font-mono text-sm text-primary mb-16 tracking-widest uppercase">
            CAM 01 &rarr; CAM 03 &rarr; CAM 04 &rarr; CAM 06
          </div>
          
          <div className="event-highlight card p-12 flex-center flex-col mx-auto mb-64" style={{ width: '250px', backgroundColor: 'var(--bg-active)', border: '1px solid var(--border-light)' }}>
            <div className="font-mono text-primary">21:31:42</div>
            <div className="font-semibold text-sm">PERSON DETECTED</div>
          </div>
          
          <div className="text-center mt-32">
            <h2 className="statement-title">One timestamp becomes a sequence.</h2>
            <h2 className="statement-title mt-8">One sequence becomes an event.</h2>
          </div>
        </Reveal>
      </section>

      {/* SECTION 7: AI */}
      <section className="story-section ai-section">
        <Reveal className="w-full max-w-4xl mx-auto flex-align gap-64">
          <div className="cctv-cinematic-frame small-frame flex-1">
            <div className="ai-bounding-box" style={{ left: '30%', top: '20%', width: '120px', height: '260px' }}>
              <span className="ai-label font-mono">PERSON 0.94</span>
            </div>
            <div className="ai-bounding-box vehicle" style={{ left: '60%', top: '50%', width: '180px', height: '120px' }}>
              <span className="ai-label font-mono">VEHICLE 0.91</span>
            </div>
          </div>
          
          <div className="ai-narrative flex-1">
            <div className="ai-scores font-mono text-xs text-secondary mb-32 flex flex-col gap-8">
              <div className="flex-between"><span>PERSON</span><span className="text-primary">0.94</span></div>
              <div className="flex-between"><span>VEHICLE</span><span className="text-primary">0.91</span></div>
              <div className="flex-between"><span>MOTION</span><span className="text-primary">0.97</span></div>
              <div className="flex-between"><span>FACE</span><span className="text-primary">0.89</span></div>
            </div>
            <h2 className="statement-title text-left">
              Let machines find the moments.<br/>
              Let investigators examine the evidence.
            </h2>
          </div>
        </Reveal>
      </section>

      {/* SECTION 8: TRUST */}
      <section className="story-section trust-section">
        <Reveal className="text-center">
          <div className="font-mono text-xl tracking-widest text-secondary mb-32" style={{ wordBreak: 'break-all', maxWidth: '800px', margin: '0 auto' }}>
            8f9a7d2b4e6c1a3f9b2d5e8c7a6f3b1e9c2b4e6c1a3f9b2d5e8c7a6f3b1e8d9c
          </div>
          
          <div className="equation-block font-mono text-sm tracking-widest text-primary mb-64">
            ORIGINAL EVIDENCE<br/>
            =<br/>
            FORENSIC IMAGE<br/>
            =<br/>
            VERIFIED EVIDENCE
          </div>
          
          <div className="custody-timeline font-mono text-xs text-secondary mb-64 flex-center gap-16 flex-wrap">
            <span>ACQUIRED</span> &rarr;
            <span>IMAGED</span> &rarr;
            <span>ANALYZED</span> &rarr;
            <span>RECOVERED</span> &rarr;
            <span>REPORTED</span>
          </div>

          <h2 className="statement-title">
            Because evidence must be<br/>
            explainable, traceable, and verifiable.
          </h2>
        </Reveal>
      </section>

      {/* SECTION 9: THE RESULT */}
      <section className="story-section result-section">
        <Reveal className="case-summary-card">
          <div className="font-mono text-xs text-secondary mb-16">CASE SUMMARY</div>
          <div className="font-semibold text-xl text-primary mb-32">DF-2026-0917</div>
          
          <div className="summary-grid font-mono text-sm mb-32">
            <div className="flex-between"><span>CAMERAS</span><span>8</span></div>
            <div className="flex-between"><span>RECORDINGS</span><span>14,284</span></div>
            <div className="flex-between text-success"><span>RECOVERED</span><span>31</span></div>
            <div className="flex-between"><span>EVENTS</span><span>142</span></div>
            <div className="flex-between text-primary"><span>INTEGRITY</span><span>SHA-256 VERIFIED</span></div>
          </div>
          
          <div className="report-generated badge badge-success text-center block w-full py-8 mt-16 font-mono">
            FORENSIC REPORT GENERATED
          </div>
        </Reveal>
        
        <Reveal delay={300} className="text-center mt-64">
          <h2 className="statement-title">From proprietary recordings to one verified investigation.</h2>
        </Reveal>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="story-section final-cta-section">
        <Reveal className="text-center">
          <h1 className="cta-headline mb-48">
            THE EVIDENCE IS THERE.<br/>
            NOW MAKE IT INVESTIGABLE.
          </h1>
          
          <button className="btn btn-primary btn-lg font-mono tracking-widest uppercase" onClick={() => navigate('/dashboard')}>
            [ ENTER FORENSIC WORKSPACE ]
          </button>
          
          <div className="text-secondary text-sm mt-16 font-mono">Explore the investigation</div>
        </Reveal>
      </section>

    </div>
  );
}
