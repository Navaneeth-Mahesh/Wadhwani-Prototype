import React from 'react';
import { Briefcase, CheckCircle2, Award, Wrench, FileText, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ProjectsTab({ targetRole, completedProjects, onToggleProject }) {
  const p = targetRole.project;
  const isDone = completedProjects.includes(p.title);

  const handleToggle = () => {
    const willBeDone = !isDone;
    onToggleProject(p.title);
    if (willBeDone) {
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2>Signature Capstone Project</h2>
        <p className="text-mut">
          Industry-vetted capstone projects crafted to validate end-to-end competency and eliminate recruiter skepticism.
        </p>
      </div>

      <div className="card elevated" style={{ borderColor: isDone ? 'var(--ok)' : 'var(--card-border)', transition: 'border-color 0.3s' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
              <span className="tag">{p.difficulty}</span>
              <span className="tag tag-ok">Flagship Deliverable</span>
              {isDone && <span className="tag tag-ok"><Check size={12} /> Verified Complete</span>}
            </div>
            <h3 style={{ fontSize: '1.45rem', margin: 0 }}>{p.title}</h3>
          </div>

          <button
            type="button"
            className={`btn btn-sm ${isDone ? 'btn-secondary' : ''}`}
            onClick={handleToggle}
          >
            {isDone ? (
              <>
                <CheckCircle2 size={16} color="var(--ok)" />
                <span>Completed ✓</span>
              </>
            ) : (
              <span>Mark Capstone Complete</span>
            )}
          </button>
        </div>

        {/* Project Specification Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
            <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--mut)', letterSpacing: '0.04em', marginBottom: '4px' }}>
              Strategic Rationale
            </h4>
            <p style={{ margin: 0, fontSize: '0.94rem' }}>{p.why}</p>
          </div>

          <div className="grid g-2">
            <div className="card" style={{ padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--ac)' }}>
                <Sparkles size={16} />
                <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Competencies Demonstrated</h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {p.skills.map((s, idx) => (
                  <span key={idx} className="tag tag-info" style={{ fontSize: '0.78rem' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--warn)' }}>
                <Wrench size={16} />
                <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Recommended Tool Stack</h4>
              </div>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--ink)' }}>{p.tools}</p>
            </div>
          </div>

          <div className="card" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--ok)' }}>
              <FileText size={16} />
              <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Tangible Deliverable Artifacts</h4>
            </div>
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--ink)' }}>{p.deliverable}</p>
          </div>

          <div style={{ background: 'rgba(217, 154, 38, 0.08)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(217, 154, 38, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', color: 'var(--acd)' }}>
              <Award size={16} />
              <h4 style={{ margin: 0, fontSize: '0.85rem', textTransform: 'uppercase' }}>Hiring Manager Portfolio Valuation</h4>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ink)' }}>{p.portfolioValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
