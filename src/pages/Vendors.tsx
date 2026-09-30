import BackButton from '../components/BackButton';
import { Server, Search, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import './Vendors.css';

export default function Vendors() {
  const vendorData = [
    { name: 'Dahua', fs: 'DHFS', support: ['id', 'fs', 'meta', 'recon', 'recov', 'time'] },
    { name: 'Hikvision', fs: 'HikFAT', support: ['id', 'fs', 'meta', 'recon', 'recov', 'time'] },
    { name: 'CP Plus', fs: 'CP-FS', support: ['id', 'fs', 'meta', 'recon', 'recov'] },
    { name: 'Uniview', fs: 'UFS', support: ['id', 'fs', 'meta', 'recon'] },
    { name: 'Matrix', fs: 'Proprietary', support: ['id', 'fs', 'meta', 'time'] },
    { name: 'Honeywell', fs: 'HW-FS', support: ['id', 'fs', 'recon'] },
    { name: 'TP-Link', fs: 'VIGI-FS', support: ['id', 'fs', 'meta'] },
    { name: 'Godrej', fs: 'G-FS', support: ['id', 'fs'] },
  ];

  const hasSupport = (vendor: any, cap: string) => vendor.support.includes(cap);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header shrink-0">
        <div>
          <h1 className="page-title">Vendor Support Matrix</h1>
          <div className="font-mono text-secondary text-sm mt-1">Platform Compatibility & Parsing Capabilities</div>
        </div>
        <div className="page-actions">
          <div className="search-bar" style={{ width: '250px', backgroundColor: 'var(--bg-surface)' }}>
            <Search size={14} className="search-icon" />
            <input type="text" placeholder="Search vendors or filesystems..." className="search-input font-mono" />
          </div>
        </div>
      </div>

      <div className="card full-height">
        <div className="card-header flex-between">
          <span>Supported DVR/NVR Manufacturers</span>
          <span className="badge badge-success">Engine Version 4.2.0</span>
        </div>
        <div className="card-body p-0">
          
          {/* DESKTOP MATRIX */}
          <div className="table-container hidden md:block">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Manufacturer</th>
                  <th>Target Filesystem</th>
                  <th className="text-center">Device ID</th>
                  <th className="text-center">FS Detection</th>
                  <th className="text-center">Metadata Parse</th>
                  <th className="text-center">Video Recon</th>
                  <th className="text-center">Deleted Carving</th>
                  <th className="text-center">Timestamp Norm</th>
                </tr>
              </thead>
              <tbody>
                {vendorData.map(vendor => (
                  <tr key={vendor.name}>
                    <td>
                      <div className="flex-align gap-8">
                        <Server size={14} className="text-secondary" />
                        <span className="font-semibold text-sm">{vendor.name}</span>
                      </div>
                    </td>
                    <td className="font-mono text-xs">{vendor.fs}</td>
                    
                    <td className="text-center">
                      {hasSupport(vendor, 'id') ? <CheckCircle2 size={14} className="text-success mx-auto" /> : <span className="text-tertiary">-</span>}
                    </td>
                    <td className="text-center">
                      {hasSupport(vendor, 'fs') ? <CheckCircle2 size={14} className="text-success mx-auto" /> : <span className="text-tertiary">-</span>}
                    </td>
                    <td className="text-center">
                      {hasSupport(vendor, 'meta') ? <CheckCircle2 size={14} className="text-success mx-auto" /> : <span className="text-tertiary">-</span>}
                    </td>
                    <td className="text-center">
                      {hasSupport(vendor, 'recon') ? <ShieldCheck size={14} className="text-primary mx-auto" /> : <span className="text-tertiary">-</span>}
                    </td>
                    <td className="text-center">
                      {hasSupport(vendor, 'recov') ? <Cpu size={14} className="text-warning mx-auto" /> : <span className="text-tertiary">-</span>}
                    </td>
                    <td className="text-center">
                      {hasSupport(vendor, 'time') ? <CheckCircle2 size={14} className="text-success mx-auto" /> : <span className="text-tertiary">-</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE LIST */}
          <div className="flex flex-col md:hidden p-4 gap-4">
            {vendorData.map(vendor => (
              <div key={vendor.name} className="border border-[var(--border-light)] rounded p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Server size={16} className="text-secondary" />
                    <span className="font-semibold">{vendor.name}</span>
                  </div>
                  <div className="font-mono text-xs text-secondary">{vendor.fs}</div>
                </div>
                <div className="grid grid-cols-2 gap-y-3 font-mono text-[10px]">
                  <div className="flex items-center gap-2">
                    {hasSupport(vendor, 'id') ? <CheckCircle2 size={12} className="text-success shrink-0" /> : <span className="text-tertiary w-3 text-center">-</span>}
                    <span>Device ID</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {hasSupport(vendor, 'fs') ? <CheckCircle2 size={12} className="text-success shrink-0" /> : <span className="text-tertiary w-3 text-center">-</span>}
                    <span>FS Detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {hasSupport(vendor, 'meta') ? <CheckCircle2 size={12} className="text-success shrink-0" /> : <span className="text-tertiary w-3 text-center">-</span>}
                    <span>Metadata Parse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {hasSupport(vendor, 'recon') ? <ShieldCheck size={12} className="text-primary shrink-0" /> : <span className="text-tertiary w-3 text-center">-</span>}
                    <span>Video Recon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {hasSupport(vendor, 'recov') ? <Cpu size={12} className="text-warning shrink-0" /> : <span className="text-tertiary w-3 text-center">-</span>}
                    <span>Deleted Carving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {hasSupport(vendor, 'time') ? <CheckCircle2 size={12} className="text-success shrink-0" /> : <span className="text-tertiary w-3 text-center">-</span>}
                    <span>Timestamp Norm</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
