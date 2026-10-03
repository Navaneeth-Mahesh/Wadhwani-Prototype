import React from 'react';
import { ProgressBar } from '../../components/ProgressBar';
import { AlertTriangle, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

export function SkillGapsTab({ targetRole }) {
  const getSkillLevel = (current, target) => {
    const gap = target - current;
    if (gap <= 5) return { label: 'Strong', tagClass: 'tag-ok', variant: 'ok' };
    if (gap <= 25) return { label: 'Developing', tagClass: 'tag-warn', variant: 'warn' };
    return { label: 'Needs Work', tagClass: 'tag-bad', variant: 'bad' };
  };

  // Find biggest gap
  const sortedGaps = [...targetRole.skills].sort(
    (a, b) => (b.target - b.current) - (a.target - a.current)
  );
  const primaryGap = sortedGaps[0];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2>Skill-Gap Diagnostic Matrix</h2>
        <p className="text-mut">
          Side-by-side benchmark of your current self-reported proficiencies versus hiring rubrics for <b>{targetRole.title}</b>.
        </p>
      </div>

      {/* Recommended Focus Card */}
      {primaryGap && (
        <div className="card" style={{ background: 'linear-gradient(135deg, rgba(217, 154, 38, 0.1), transparent)', borderColor: 'var(--ac)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <Sparkles size={18} color="var(--ac)" />
            <h4 style={{ margin: 0, color: 'var(--acd)' }}>Highest Leverage Skill Priority</h4>
          </div>
          <p style={{ fontSize: '0.94rem', margin: 0 }}>
            Focus on mastering <b>{primaryGap.name}</b> (current: {primaryGap.current}%, target: {primaryGap.target}%). Bridging this -{primaryGap.target - primaryGap.current}% delta delivers the fastest boost to your overall employability score.
          </p>
        </div>
      )}

      {/* Skills Table Card */}
      <div className="card elevated">
        <div className="skills-table-wrap">
          <table className="skills-table">
            <thead>
              <tr>
                <th>Core Competency</th>
                <th style={{ minWidth: '180px' }}>Current Proficiency</th>
                <th>Target Threshold</th>
                <th>Competency Gap</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {targetRole.skills.map((skill, idx) => {
                const level = getSkillLevel(skill.current, skill.target);
                const gap = skill.target - skill.current;

                return (
                  <tr key={idx}>
                    <td style={{ fontWeight: 600 }}>{skill.name}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ minWidth: '34px', fontSize: '0.85rem' }}>{skill.current}%</span>
                        <div style={{ flex: 1 }}>
                          <ProgressBar value={skill.current} variant={level.variant} height={7} />
                        </div>
                      </div>
                    </td>
                    <td style={{ fontWeight: 600 }}>{skill.target}%</td>
                    <td>
                      <span style={{ fontSize: '0.86rem', color: gap > 20 ? 'var(--bad)' : gap > 5 ? 'var(--warn)' : 'var(--ok)', fontWeight: 600 }}>
                        {gap <= 0 ? '✓ Ready' : `-${gap}%`}
                      </span>
                    </td>
                    <td>
                      <span className={`tag ${level.tagClass}`}>
                        {level.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
