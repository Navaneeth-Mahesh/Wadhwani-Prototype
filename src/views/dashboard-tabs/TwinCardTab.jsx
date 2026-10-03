import React from 'react';
import { Sparkles, Fingerprint, Activity, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { CircularRing } from '../../components/CircularRing';

export function TwinCardTab({ userAnswers, targetRole, readinessScore, completedRoadmap, completedProjects }) {
  const rawName = String(userAnswers[0] || '').trim();
  const displayName = rawName ? rawName.split(/\s+/)[0] : 'Innovator';
  const education = Array.isArray(userAnswers[1]) ? userAnswers[1].join(', ') : (userAnswers[1] || 'B.Tech / B.E.');
  const careerStage = Array.isArray(userAnswers[2]) ? userAnswers[2].join(', ') : (userAnswers[2] || 'Final Year Student');
  const ambitionGoal = userAnswers[8] || `Become a ${targetRole.title} within 18 months`;

  // Collect all tagged attributes
  const allTags = Object.values(userAnswers)
    .flat()
    .filter(val => typeof val === 'string' && val.trim().length > 0 && !val.includes('e.g.'));

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2>Autonomous Career Twin Matrix</h2>
        <p className="text-mut">
          Your Career Twin is an adaptive digital model of your capabilities, target trajectories, and execution evidence.
        </p>
      </div>

      {/* Main Twin Identity Card */}
      <div className="card elevated" style={{ borderColor: 'var(--ac)', borderWidth: '1px', background: 'radial-gradient(ellipse at 90% 10%, rgba(217, 154, 38, 0.15), transparent 50%), var(--card-elevated)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid var(--line)', paddingBottom: '20px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: 56, height: 56, borderRadius: '16px', background: 'linear-gradient(135deg, var(--ac), var(--ac2))', color: '#000', display: 'grid', placeItems: 'center', boxShadow: '0 0 20px var(--ac-glow)' }}>
              <Fingerprint size={32} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{displayName}’s Career Twin</h3>
                <span className="tag tag-ok" style={{ fontSize: '0.72rem' }}>Live &amp; Synchronized</span>
              </div>
              <p className="text-mut" style={{ fontSize: '0.85rem', margin: '4px 0 0' }}>
                Target Vector: <b style={{ color: 'var(--ink)' }}>{targetRole.title}</b> • {education} ({careerStage})
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CircularRing percentage={readinessScore} size={90} strokeWidth={9} />
          </div>
        </div>

        {/* Synthesized Parameters */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--mut)', marginBottom: '10px' }}>
            Calibrated Profile Dimensions
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {allTags.length > 0 ? (
              allTags.slice(0, 16).map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-mut" style={{ fontSize: '0.88rem' }}>
                Complete the onboarding assessment to calibrate full dimensions.
              </span>
            )}
          </div>
        </div>

        {/* Primary Stated Ambition */}
        <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--mut)', fontWeight: 600, marginBottom: '4px' }}>
            Target Horizon
          </div>
          <div style={{ fontWeight: 600, fontSize: '0.96rem', color: 'var(--acd)' }}>
            "{ambitionGoal}"
          </div>
        </div>
      </div>

      {/* Dynamic Evolution Telemetry */}
      <div className="grid g-3">
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ac)', marginBottom: '8px' }}>
            <Activity size={18} />
            <h4>Twin Evolution Loop</h4>
          </div>
          <p className="text-mut" style={{ fontSize: '0.86rem' }}>
            Every time you complete a roadmap sprint or deploy a capstone, your twin recalibrates readiness and updates hiring matching probabilities.
          </p>
          <div style={{ marginTop: '12px', fontSize: '0.84rem' }}>
            <div>• Roadmap Sprints Done: <b>{completedRoadmap.length} of 6</b></div>
            <div style={{ marginTop: '4px' }}>• Shipped Capstones: <b>{completedProjects.length} completed</b></div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ok)', marginBottom: '8px' }}>
            <Zap size={18} />
            <h4>Continuous Calibration</h4>
          </div>
          <p className="text-mut" style={{ fontSize: '0.86rem' }}>
            Your twin does not remain static. Switch trajectories anytime to compare your competency deltas across alternative roles.
          </p>
          <span className="tag tag-ok" style={{ marginTop: '8px' }}>
            Adaptive Engine Active
          </span>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--info)', marginBottom: '8px' }}>
            <ShieldCheck size={18} />
            <h4>Data Sovereignty</h4>
          </div>
          <p className="text-mut" style={{ fontSize: '0.86rem' }}>
            You hold exclusive cryptographic possession of your twin profile. You can export your full telemetry or delete it at will.
          </p>
          <span className="tag tag-info" style={{ marginTop: '8px' }}>
            Zero Third-Party Tracking
          </span>
        </div>
      </div>
    </div>
  );
}
