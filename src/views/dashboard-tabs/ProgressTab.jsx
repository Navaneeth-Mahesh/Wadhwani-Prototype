import React from 'react';
import { CircularRing } from '../../components/CircularRing';
import { ProgressBar } from '../../components/ProgressBar';
import { ROADMAP_MILESTONES } from '../../data/careerData';
import { TrendingUp, Award, CheckCircle2, BarChart2 } from 'lucide-react';

export function ProgressTab({ targetRole, readinessScore, completedRoadmap, completedProjects }) {
  const roadmapPct = Math.round((completedRoadmap.length / ROADMAP_MILESTONES.length) * 100);
  const projectPct = completedProjects.length > 0 ? 100 : 0;

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2>Continuous Trajectory Progress</h2>
        <p className="text-mut">
          Track your measurable evolution across roadmap milestones, portfolio projects, and individual skill thresholds.
        </p>
      </div>

      <div className="grid g-3">
        {/* Overall Readiness Ring */}
        <div className="card elevated" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}>
          <h4 style={{ marginBottom: '16px' }}>Composite Career Readiness</h4>
          <CircularRing percentage={readinessScore} size={140} />
          <p className="text-mut" style={{ fontSize: '0.82rem', marginTop: '16px', margin: '16px 0 0' }}>
            Incorporates baseline diagnostics, finished sprints, and verified capstones.
          </p>
        </div>

        {/* Milestone & Project Progress */}
        <div className="card elevated" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>
              <span>Roadmap Sprint Execution</span>
              <span>{roadmapPct}%</span>
            </div>
            <ProgressBar value={roadmapPct} height={9} />
            <div style={{ fontSize: '0.78rem', color: 'var(--mut)', marginTop: '4px' }}>
              {completedRoadmap.length} of {ROADMAP_MILESTONES.length} phases accomplished
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>
              <span>Flagship Capstone Deliverable</span>
              <span>{projectPct}%</span>
            </div>
            <ProgressBar value={projectPct} variant="ok" height={9} />
            <div style={{ fontSize: '0.78rem', color: 'var(--mut)', marginTop: '4px' }}>
              {completedProjects.length > 0 ? '1 of 1 signature project completed ✓' : '0 of 1 projects finished'}
            </div>
          </div>
        </div>

        {/* Milestone Badge Summary */}
        <div className="card elevated" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ac)', marginBottom: '12px' }}>
            <Award size={20} />
            <h4 style={{ margin: 0 }}>Twin Milestones</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="var(--ok)" />
              <span>Assessment Completed & Calibrated</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color={completedRoadmap.length > 0 ? 'var(--ok)' : 'var(--mut)'} />
              <span>Foundation Phase Initiated</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color={completedProjects.length > 0 ? 'var(--ok)' : 'var(--mut)'} />
              <span>First Capstone Artifact Produced</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color={readinessScore >= 80 ? 'var(--ok)' : 'var(--mut)'} />
              <span>Interview Readiness &gt; 80%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Skill Meter Card */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <BarChart2 size={18} color="var(--ac)" />
          <h3 style={{ margin: 0 }}>Skill Benchmarks Toward Hiring Target</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {targetRole.skills.map((s, idx) => {
            const ratio = Math.min(100, Math.round((s.current / s.target) * 100));
            return (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600 }}>{s.name}</span>
                  <span className="text-mut">
                    Current: <b>{s.current}%</b> / Required: <b>{s.target}%</b> ({ratio}% benchmark reached)
                  </span>
                </div>
                <ProgressBar value={ratio} height={8} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
