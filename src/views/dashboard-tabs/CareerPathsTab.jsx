import React from 'react';
import { CAREER_ROLES } from '../../data/careerData';
import { ProgressBar } from '../../components/ProgressBar';
import { Check, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

export function CareerPathsTab({ targetRole, onSelectRole }) {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2>Career Vectors &amp; Trajectories</h2>
        <p className="text-mut">
          Explore alternative roles matching your foundation. Switch your active vector to instantly recompute your skill gaps, roadmap sprints, and capstone projects.
        </p>
      </div>

      <div className="grid g-3">
        {CAREER_ROLES.map((role) => {
          const isSelected = role.id === targetRole.id;

          return (
            <div
              key={role.id}
              className={`card card-interactive ${isSelected ? 'elevated' : ''}`}
              style={{
                borderColor: isSelected ? 'var(--ac)' : 'var(--card-border)',
                borderWidth: isSelected ? '2px' : '1px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '2px' }}>{role.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--mut)' }}>
                    {role.salaryRange} • {role.demandLevel} Demand
                  </span>
                </div>
                {isSelected ? (
                  <span className="tag tag-ok">
                    <Check size={12} /> Active Vector
                  </span>
                ) : (
                  <span className="tag">{role.readiness}% Match</span>
                )}
              </div>

              <p className="text-mut" style={{ fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.5 }}>
                {role.overview}
              </p>

              {/* Career Progression Ladder */}
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', marginBottom: '16px', fontSize: '0.82rem' }}>
                <div style={{ color: 'var(--mut)', fontWeight: 600, marginBottom: '2px', textTransform: 'uppercase', fontSize: '0.72rem' }}>
                  Progression Ladder
                </div>
                <div style={{ color: 'var(--ink)' }}>{role.progression}</div>
              </div>

              {/* Readiness bar */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '4px' }}>
                  <span className="text-mut">Current Readiness</span>
                  <span style={{ fontWeight: 600 }}>{role.readiness}%</span>
                </div>
                <ProgressBar value={role.readiness} />
              </div>

              {/* Select Button */}
              <div style={{ marginTop: 'auto' }}>
                <button
                  type="button"
                  className={`btn btn-sm ${isSelected ? 'btn-secondary' : ''}`}
                  style={{ width: '100%' }}
                  onClick={() => onSelectRole(role)}
                >
                  {isSelected ? (
                    <>
                      <CheckCircle2 size={16} color="var(--ok)" />
                      <span>Current Target Vector</span>
                    </>
                  ) : (
                    <span>Set As Active Vector</span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
