import React from 'react';
import { CircularRing } from '../../components/CircularRing';
import { ArrowRight, Bot, Target, AlertTriangle, Sparkles, CheckCircle2 } from 'lucide-react';

export function OverviewTab({
  userName,
  targetRole,
  readinessScore,
  onNavigateTab,
  completedRoadmap,
  completedProjects
}) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  // Sort skills by biggest gap (target - current)
  const sortedGaps = [...targetRole.skills].sort(
    (a, b) => (b.target - b.current) - (a.target - a.current)
  );

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Welcome Banner */}
      <div>
        <h2>
          {getGreeting()}{userName ? `, ${userName}` : ''} 👋
        </h2>
        <p className="text-mut">
          Here is your autonomous career twin briefing for today. Your trajectory is currently active.
        </p>
      </div>

      {/* Top 3 Metric Cards */}
      <div className="grid g-3">
        {/* Current Vector */}
        <div className="card elevated">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--mut)', fontSize: '0.84rem', marginBottom: '8px' }}>
            <Target size={16} color="var(--ac)" />
            <span>Target Trajectory</span>
          </div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{targetRole.title}</h3>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span className="tag">Phase 2: Core Acceleration</span>
            <span className="text-mut" style={{ fontSize: '0.8rem' }}>Week 4 of 12</span>
          </div>
        </div>

        {/* Readiness Ring */}
        <div className="card elevated" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '18px' }}>
          <CircularRing percentage={readinessScore} size={124} />
        </div>

        {/* Top Skill Gaps */}
        <div className="card elevated">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warn)', fontSize: '0.84rem', fontWeight: 600, marginBottom: '8px' }}>
            <AlertTriangle size={15} />
            <span>Top Priority Competency Gaps</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
            {sortedGaps.slice(0, 3).map((skill, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem' }}>
                <span style={{ fontWeight: 500 }}>• {skill.name}</span>
                <span className="tag tag-warn" style={{ fontSize: '0.72rem' }}>
                  -{skill.target - skill.current}% gap
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Next Action */}
      <div className="card" style={{ background: 'linear-gradient(135deg, rgba(217, 154, 38, 0.08), transparent)', borderColor: 'rgba(217, 154, 38, 0.35)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="tag" style={{ marginBottom: '8px' }}>High-Impact Action Item</span>
            <h3 style={{ marginBottom: '4px' }}>
              Execute Signature Capstone: {targetRole.project.title}
            </h3>
            <p className="text-mut" style={{ fontSize: '0.9rem', margin: 0, maxWidth: '640px' }}>
              {targetRole.project.why}
            </p>
          </div>
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => onNavigateTab('projects')}
          >
            <span>Inspect Project Spec</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* Quick AI Mentor Launch Card */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'var(--ac-soft)', display: 'grid', placeItems: 'center' }}>
            <Bot size={18} color="var(--ac)" />
          </div>
          <div>
            <h4 style={{ margin: 0 }}>Consult Your AI Career Twin</h4>
            <span style={{ fontSize: '0.8rem', color: 'var(--mut)' }}>Trained on your current readiness gaps and career trajectory</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            placeholder="Ask your twin: 'What should I study next to raise my readiness?'..."
            onFocus={() => onNavigateTab('mentor')}
          />
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => onNavigateTab('mentor')}
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}
