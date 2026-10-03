import React from 'react';
import { CAREER_ROLES } from '../data/careerData';
import { ProgressBar } from '../components/ProgressBar';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';

export function RecommendationsView({ onSelectRoleAndOpenDashboard }) {
  return (
    <div className="animate-fade-in section">
      <div className="container">
        {/* Title */}
        <div style={{ maxWidth: '640px', marginBottom: '36px' }}>
          <span className="tag tag-ok" style={{ marginBottom: '10px' }}>
            <Sparkles size={13} /> Assessment Synthesis Complete
          </span>
          <h2>Recommended Career Vectors</h2>
          <p className="text-mut">
            Calibrated against your profile, existing baseline skills, and target goals. Select a trajectory to inspect competency gaps and launch your personalized roadmap.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid g-3">
          {CAREER_ROLES.map((role) => {
            const majorGaps = role.skills.filter(s => (s.target - s.current) > 25);

            return (
              <div key={role.id} className="card card-interactive" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem' }}>{role.title}</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--mut)' }}>Demand: {role.demandLevel} • {role.salaryRange}</span>
                  </div>
                  <span className="tag tag-ok" style={{ fontWeight: 700 }}>
                    {role.readiness}% Match
                  </span>
                </div>

                <p className="text-mut" style={{ fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.5 }}>
                  {role.fitReason}
                </p>

                {/* Readiness meter */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '4px' }}>
                    <span className="text-mut">Baseline Industry Readiness</span>
                    <span style={{ fontWeight: 600 }}>{role.readiness}%</span>
                  </div>
                  <ProgressBar value={role.readiness} />
                </div>

                {/* Primary Skill Gaps */}
                <div style={{ background: 'var(--card-elevated)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: 'var(--warn)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                    <AlertCircle size={13} />
                    <span>High Priority Gaps to Bridge</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {majorGaps.length > 0 ? (
                      majorGaps.map((g, idx) => (
                        <span key={idx} className="tag tag-warn" style={{ fontSize: '0.74rem' }}>
                          {g.name} (-{g.target - g.current}%)
                        </span>
                      ))
                    ) : (
                      <span className="tag tag-ok" style={{ fontSize: '0.74rem' }}>
                        Minor adjustments only
                      </span>
                    )}
                  </div>
                </div>

                {/* Action button */}
                <div style={{ marginTop: 'auto' }}>
                  <button
                    type="button"
                    className="btn btn-sm"
                    style={{ width: '100%' }}
                    onClick={() => onSelectRoleAndOpenDashboard(role)}
                  >
                    <span>Select Vector &amp; View Gaps</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
