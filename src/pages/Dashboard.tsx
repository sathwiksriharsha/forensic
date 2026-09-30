import { Activity, HardDrive, CheckCircle, Clock } from 'lucide-react';
import './Workspace.css';

export default function Dashboard() {
  return (
    <div className="workspace-container">

      <div className="workspace-section">
        <div className="section-supertitle font-mono text-secondary">CASE HEADER</div>
        <h1 className="section-title">Operation Midnight</h1>
        <div className="font-mono text-sm mt-8">CAS-2026-8924 | Investigator: LA-8429</div>
      </div>

      <div className="divider" />

      <div className="workspace-section">
        <div className="section-subtitle font-mono text-secondary mb-16">INVESTIGATION WORKFLOW</div>
        <div className="workflow-line font-mono text-xs text-secondary flex flex-col md:flex-row md:items-center gap-2 md:gap-4 overflow-x-auto pb-2">
          <div className="whitespace-nowrap"><span className="text-primary font-semibold">Acquisition</span> <span className="hidden md:inline">&rarr;</span></div>
          <div className="whitespace-nowrap"><span className="md:hidden">↓</span> Device Analysis <span className="hidden md:inline">&rarr;</span></div>
          <div className="whitespace-nowrap"><span className="md:hidden">↓</span> Parsing <span className="hidden md:inline">&rarr;</span></div>
          <div className="whitespace-nowrap"><span className="md:hidden">↓</span> Recovery <span className="hidden md:inline">&rarr;</span></div>
          <div className="whitespace-nowrap"><span className="md:hidden">↓</span> Video Analysis <span className="hidden md:inline">&rarr;</span></div>
          <div className="whitespace-nowrap"><span className="md:hidden">↓</span> Validation <span className="hidden md:inline">&rarr;</span></div>
          <div className="whitespace-nowrap"><span className="md:hidden">↓</span> Report</div>
        </div>
      </div>

      <div className="divider" />

      <div className="workspace-section">
        <div className="section-subtitle font-mono text-secondary mb-24">EVIDENCE SUMMARY</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 font-mono text-sm mt-4">
          <div className="flex flex-col"><span className="text-primary font-semibold text-lg">24</span> <span className="text-xs text-secondary tracking-widest mt-1">CAMERAS</span></div>
          <div className="flex flex-col"><span className="text-primary font-semibold text-lg">12,402</span> <span className="text-xs text-secondary tracking-widest mt-1">RECORDINGS</span></div>
          <div className="flex flex-col"><span className="text-warning font-semibold text-lg">3,892</span> <span className="text-xs text-secondary tracking-widest mt-1">RECOVERED / DELETED</span></div>
          <div className="flex flex-col"><span className="text-critical font-semibold text-lg">142</span> <span className="text-xs text-secondary tracking-widest mt-1">CORRUPTED SECTORS</span></div>
          <div className="flex flex-col"><span className="text-primary font-semibold text-lg">4.2 TB</span> <span className="text-xs text-secondary tracking-widest mt-1">EVIDENCE</span></div>
        </div>
      </div>

      <div className="divider" />

      <div className="workspace-section">
        <div className="section-subtitle font-mono text-secondary mb-24">SYSTEM STATUS</div>
        <table className="workspace-table max-w-lg">
          <tbody>
            <tr>
              <td>Acquisition Integrity</td>
              <td className="text-right text-success font-mono">VERIFIED</td>
            </tr>
            <tr>
              <td>Filesystem Parsing</td>
              <td className="text-right text-success font-mono">COMPLETE</td>
            </tr>
            <tr>
              <td>Data Recovery</td>
              <td className="text-right text-warning font-mono">68%</td>
            </tr>
            <tr>
              <td>Video Validation</td>
              <td className="text-right text-secondary font-mono">PENDING</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="divider" />

      <div className="workspace-section">
        <div className="section-subtitle font-mono text-secondary mb-24">RECENT FORENSIC ACTIVITY</div>
        <div className="activity-timeline font-mono text-xs flex flex-col gap-6">
          <div className="activity-item flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
            <span className="activity-time text-secondary md:w-24">10:42:15</span>
            <span className="activity-action flex-1">Parsing completed for DAHUA filesystem (1.8TB)</span>
          </div>
          <div className="activity-item flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
            <span className="activity-time text-secondary md:w-24">10:38:00</span>
            <span className="activity-action text-warning flex-1">Carving engine started on corrupted sectors (0x0B4...)</span>
          </div>
          <div className="activity-item flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
            <span className="activity-time text-secondary md:w-24">09:15:22</span>
            <span className="activity-action text-success flex-1">Acquisition hash validated [MD5: MATCH]</span>
          </div>
        </div>
      </div>

    </div>
  );
}
