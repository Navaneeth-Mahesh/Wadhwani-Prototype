import React from 'react';
import { ROADMAP_MILESTONES } from '../../data/careerData';
import { Check, Clock, FileCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProgressBar } from '../../components/ProgressBar';
import confetti from 'canvas-confetti';

export function RoadmapTab({ completedMilestones, onToggleMilestone }) {
  const total = ROADMAP_MILESTONES.length;
  const completedCount = completedMilestones.length;
  const progressPercent = Math.round((completedCount / total) * 100);

  const handleMilestoneClick = (id) => {
    const willBeCompleted = !completedMilestones.includes(id);
    onToggleMilestone(id);
    if (willBeCompleted) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // ignore
      }
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2>Personalized Execution Roadmap</h2>
        <p className="text-mut">
          Sequenced sprint phases designed to bridge your highest-priority gaps. Tap any milestone to mark it completed and dynamically evolve your Twin readiness.
        </p>
      </div>

      {/* Progress Card */}
      <div className="card elevated">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div>
            <h4 style={{ margin: 0 }}>Roadmap Trajectory Completion</h4>
            <span style={{ fontSize: '0.84rem', color: 'var(--mut)' }}>
              {completedCount} of {total} milestones accomplished
            </span>
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--acd)' }}>
            {progressPercent}%
          </span>
        </div>
        <ProgressBar value={progressPercent} height={10} />
      </div>

      {/* Timeline Card */}
      <div className="card">
        <div className="roadmap-timeline">
          {ROADMAP_MILESTONES.map((milestone) => {
            const isDone = completedMilestones.includes(milestone.id);

            return (
              <div
                key={milestone.id}
                className={`roadmap-item ${isDone ? 'completed' : ''}`}
                onClick={() => handleMilestoneClick(milestone.id)}
              >
                <div className="roadmap-dot">
                  {isDone ? <Check size={16} strokeWidth={3} /> : milestone.id + 1}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                    <span className="tag" style={{ fontSize: '0.7rem' }}>
                      {milestone.badge}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--mut)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {milestone.estHours}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.08rem', margin: '4px 0 6px' }}>
                    {milestone.title}
                  </h4>

                  <p className="text-mut" style={{ fontSize: '0.88rem', margin: '0 0 10px' }}>
                    {milestone.description}
                  </p>

                  {/* Concrete Deliverables */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {milestone.deliverables.map((del, dIdx) => (
                      <span
                        key={dIdx}
                        style={{
                          fontSize: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--line)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          color: isDone ? 'var(--ok)' : 'var(--ink-secondary)'
                        }}
                      >
                        <FileCheck size={12} /> {del}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
