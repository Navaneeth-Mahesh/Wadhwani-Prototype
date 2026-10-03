import React, { useState } from 'react';
import { User, Shield, Download, RefreshCw, Sun, Moon, Check } from 'lucide-react';

export function SettingsTab({
  userName,
  userAnswers,
  targetRole,
  onResetData,
  theme,
  onToggleTheme
}) {
  const [copied, setCopied] = useState(false);

  const handleExportData = () => {
    const dataToExport = {
      user: userName || 'Innovator',
      targetRole: targetRole.title,
      answers: userAnswers,
      exportedAt: new Date().toISOString()
    };
    const jsonStr = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `career-twin-${(userName || 'profile').toLowerCase().replace(/\s+/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2>Profile &amp; Career Twin Controls</h2>
        <p className="text-mut">
          Manage your personal telemetry, export sovereign records, or reset your prototype calibration.
        </p>
      </div>

      {/* Profile Overview Card */}
      <div className="card elevated">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, var(--ac), var(--ac2))', color: '#000', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '1.2rem' }}>
            {(userName || 'A').charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 style={{ margin: 0 }}>{userName || 'Innovator Profile'}</h3>
            <span className="text-mut" style={{ fontSize: '0.85rem' }}>Active Target Vector: <b>{targetRole.title}</b></span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--mut)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px' }}>
              Identified Name
            </label>
            <input type="text" readOnly value={userName || 'Alex'} style={{ background: 'rgba(255,255,255,0.02)' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--mut)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px' }}>
              Active Target Role
            </label>
            <input type="text" readOnly value={targetRole.title} style={{ background: 'rgba(255,255,255,0.02)' }} />
          </div>
        </div>
      </div>

      {/* Theme & Experience Card */}
      <div className="card">
        <h4 style={{ marginBottom: '14px' }}>Interface Appearance</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.94rem' }}>Color Theme</div>
            <p className="text-mut" style={{ fontSize: '0.84rem', margin: 0 }}>
              Currently set to <b>{theme === 'dark' ? 'Dark Obsidian & Gold' : 'Clean Warm Paper'}</b> mode.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>

      {/* Data Sovereignty & Export */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ac)', marginBottom: '8px' }}>
          <Shield size={18} />
          <h4 style={{ margin: 0 }}>Data Sovereignty &amp; Portability</h4>
        </div>
        <p className="text-mut" style={{ fontSize: '0.88rem', marginBottom: '16px' }}>
          Your assessment responses and milestone progress belong exclusively to you. You can export a JSON telemetry snapshot anytime.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handleExportData}
          >
            {copied ? <Check size={15} color="var(--ok)" /> : <Download size={15} />}
            <span>{copied ? 'Snapshot Downloaded!' : 'Export Twin Telemetry (.json)'}</span>
          </button>

          <button
            type="button"
            className="btn btn-ghost btn-sm"
            style={{ color: 'var(--bad)' }}
            onClick={() => {
              if (window.confirm('Are you sure you want to reset your Twin? This will clear your customized answers and reset to sample baseline.')) {
                onResetData();
              }
            }}
          >
            <RefreshCw size={15} />
            <span>Reset Prototype Data</span>
          </button>
        </div>
      </div>
    </div>
  );
}
