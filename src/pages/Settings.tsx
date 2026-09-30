import BackButton from '../components/BackButton';
import { Save, HardDrive, Shield, Globe, Clock, BrainCircuit, User } from 'lucide-react';
import './Settings.css';

export default function Settings() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header shrink-0">
        <div>
          <h1 className="page-title">System Settings</h1>
          <div className="font-mono text-secondary text-sm mt-1">Platform Configuration & Preferences</div>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary">
            <Save size={14} /> Save Configuration
          </button>
        </div>
      </div>

      <div className="settings-grid">
        
        {/* Storage */}
        <div className="card">
          <div className="card-header flex-align gap-8">
            <HardDrive size={16} className="text-secondary" /> Evidence Storage
          </div>
          <div className="card-body">
            <div className="settings-form">
              <div className="form-group">
                <label className="form-label">Primary Image Repository</label>
                <input type="text" className="form-input font-mono text-sm" defaultValue="/mnt/storage/evidence/images" />
              </div>
              <div className="form-group">
                <label className="form-label">Export / Reports Directory</label>
                <input type="text" className="form-input font-mono text-sm" defaultValue="/mnt/storage/evidence/exports" />
              </div>
              <div className="form-group">
                <label className="form-label">Low Disk Space Warning</label>
                <select className="form-input text-sm">
                  <option>100 GB</option>
                  <option selected>500 GB</option>
                  <option>1 TB</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Cryptography */}
        <div className="card">
          <div className="card-header flex-align gap-8">
            <Shield size={16} className="text-secondary" /> Hash Algorithms & Audit
          </div>
          <div className="card-body">
            <div className="settings-form">
              <div className="form-group">
                <label className="form-label">Primary Hash Algorithm</label>
                <select className="form-input font-mono text-sm">
                  <option>MD5</option>
                  <option>SHA-1</option>
                  <option selected>SHA-256</option>
                  <option>SHA-512</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Automatic Verification</label>
                <select className="form-input text-sm">
                  <option>On Mount Only</option>
                  <option selected>Daily Scheduled Check</option>
                  <option>Post-Processing Only</option>
                </select>
              </div>
              <div className="form-group flex-align gap-8 mt-16">
                <input type="checkbox" id="audit-log" defaultChecked />
                <label htmlFor="audit-log" className="form-label mb-0">Enable Strict Cryptographic Audit Logging</label>
              </div>
            </div>
          </div>
        </div>

        {/* Localization */}
        <div className="card">
          <div className="card-header flex-align gap-8">
            <Globe size={16} className="text-secondary" /> Timezone & Localization
          </div>
          <div className="card-body">
            <div className="settings-form">
              <div className="form-group">
                <label className="form-label">Display Timezone</label>
                <select className="form-input text-sm">
                  <option selected>UTC (Coordinated Universal Time)</option>
                  <option>Local System Time</option>
                  <option>Evidence Device Time (Offset)</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Timestamp Format</label>
                <select className="form-input font-mono text-sm">
                  <option selected>YYYY-MM-DD HH:MM:SS</option>
                  <option>DD/MM/YYYY HH:MM:SS</option>
                  <option>Unix Epoch (Seconds)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* AI & Analytics */}
        <div className="card">
          <div className="card-header flex-align gap-8">
            <BrainCircuit size={16} className="text-secondary" /> AI Models
          </div>
          <div className="card-body">
            <div className="settings-form">
              <div className="form-group">
                <label className="form-label">Object Detection Model</label>
                <select className="form-input text-sm">
                  <option selected>YOLOv8-Forensic (High Accuracy)</option>
                  <option>YOLOv8-Fast (High Speed)</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Hardware Acceleration</label>
                <select className="form-input text-sm">
                  <option selected>CUDA (NVIDIA GPU)</option>
                  <option>CPU Only</option>
                  <option>TensorRT</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* User Prefs */}
        <div className="card">
          <div className="card-header flex-align gap-8">
            <User size={16} className="text-secondary" /> User Preferences
          </div>
          <div className="card-body">
            <div className="settings-form">
              <div className="form-group">
                <label className="form-label">Default Landing Page</label>
                <select className="form-input text-sm">
                  <option selected>Investigation Dashboard</option>
                  <option>Evidence Register</option>
                  <option>Forensic Acquisition</option>
                </select>
              </div>
              <div className="form-group flex-align gap-8 mt-16">
                <input type="checkbox" id="dark-mode" />
                <label htmlFor="dark-mode" className="form-label mb-0">Force Dark Theme (Requires Restart)</label>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
