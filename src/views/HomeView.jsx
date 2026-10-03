import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  Compass, 
  BookOpen, 
  Award, 
  Layers, 
  BrainCircuit, 
  BarChart3,
  Bot
} from 'lucide-react';
import { ProgressBar } from '../components/ProgressBar';

export function HomeView({ onNavigate, targetRole, onSelectRole }) {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="hero-badge">
              <i />
              <span>Next-Gen Autonomous Career Intelligence</span>
            </div>

            <h1>Meet Your AI Career Twin</h1>

            <p className="hero-lead">
              Discover the right career path, pinpoint high-impact skill gaps, build industry-validated projects, and know exactly what to do next to accelerate your career.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-lg"
                onClick={() => onNavigate('onboarding')}
              >
                <span>Build My Career Twin</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={() => {
                  const el = document.getElementById('how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Explore How It Works</span>
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '36px', fontSize: '0.86rem', color: 'var(--mut)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--ok)" />
                <span>Zero guesswork</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--ok)" />
                <span>Evolves with you</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--ok)" />
                <span>Real industry deliverables</span>
              </div>
            </div>
          </div>

          {/* Interactive Live Mock Twin Card */}
          <div>
            <div className="mock-preview-card">
              <div className="mock-preview-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--ok)' }} />
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Active Career Twin</span>
                </div>
                <span className="tag">Live Simulation</span>
              </div>

              <div className="mock-grid-inner">
                <div className="mock-cell">
                  <b><Target size={13} /> Target Vector</b>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', marginBottom: '2px' }}>
                    {targetRole.title}
                  </div>
                  <span className="tag tag-ok" style={{ marginTop: '4px' }}>
                    {targetRole.readiness}% Readiness
                  </span>
                </div>

                <div className="mock-cell">
                  <b><BrainCircuit size={13} /> Primary Gaps</b>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', marginBottom: '2px' }}>
                        <span>Analytics</span>
                        <span>56%</span>
                      </div>
                      <ProgressBar value={56} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', marginBottom: '2px' }}>
                        <span>User Research</span>
                        <span>53%</span>
                      </div>
                      <ProgressBar value={53} />
                    </div>
                  </div>
                </div>

                <div className="mock-cell">
                  <b><TrendingUp size={13} /> Active Sprint</b>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Sprint 4 of 12</div>
                  <div style={{ margin: '6px 0 4px' }}>
                    <ProgressBar value={33} />
                  </div>
                  <span style={{ fontSize: '0.74rem', color: 'var(--mut)' }}>Next: SQL Benchmark</span>
                </div>

                <div className="mock-cell">
                  <b><Award size={13} /> Recommended Capstone</b>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, lineHeight: 1.3 }}>
                    Churn Analysis Dashboard
                  </div>
                  <span className="tag" style={{ marginTop: '4px', fontSize: '0.7rem' }}>
                    Intermediate • Tier 1
                  </span>
                </div>
              </div>

              <div style={{ marginTop: '14px', padding: '12px', background: 'rgba(217, 154, 38, 0.08)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(217, 154, 38, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Bot size={15} color="var(--ac)" />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--acd)' }}>AI Mentor Recommendation</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--ink)' }}>
                  “Your biggest high-leverage gap is product analytics. Closing this unlocks your flagship capstone and increases readiness by +14%.”
                </p>
              </div>

              <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                  onClick={() => onNavigate('dashboard')}
                >
                  <span>Launch Live Twin Workspace</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
            <span className="tag tag-warn" style={{ marginBottom: '12px' }}>The Core Bottleneck</span>
            <h2>Your Degree Is Not a Career Plan.</h2>
            <p className="text-mut" style={{ fontSize: '1.1rem' }}>
              Most ambitious students don’t lack effort or talent. They lack clear directional clarity, feedback loops, and calibrated proof-of-work.
            </p>
          </div>

          <div className="grid g-3">
            {[
              {
                title: 'Academic Theory Without Trajectory',
                desc: 'Acquiring theoretical grades while remaining completely uncertain which real-world roles you are suited for.'
              },
              {
                title: 'Skills Without Contextual Fit',
                desc: 'Learning syntax or disconnected tutorials without understanding how they map to actual employer hiring rubrics.'
              },
              {
                title: 'Tutorial Projects That Employers Ignore',
                desc: 'Building generic to-do apps that fail to prove business acumen or end-to-end engineering rigor.'
              },
              {
                title: 'Invisible Competency Gaps',
                desc: 'Spending months studying the wrong skills because no diagnostic benchmark showed you where you fell short.'
              },
              {
                title: 'Conflicting & Stale Advice',
                desc: 'Overwhelmed by outdated generic career advice from sources that do not know your unique strengths.'
              },
              {
                title: 'Rapidly Evolving AI & Tech Demands',
                desc: 'Struggling to keep up with industry expectations changing at an unprecedented technological pace.'
              }
            ].map((item, idx) => (
              <div key={idx} className="card card-interactive">
                <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'rgba(244, 63, 94, 0.1)', color: 'var(--bad)', display: 'grid', placeItems: 'center', marginBottom: '14px', fontWeight: 700 }}>
                  0{idx + 1}
                </div>
                <h3>{item.title}</h3>
                <p className="text-mut" style={{ fontSize: '0.92rem', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
            <span className="tag" style={{ marginBottom: '12px' }}>Iterative Blueprint</span>
            <h2>How AI Career Twin Works</h2>
            <p className="text-mut">
              An intelligent, closed-loop growth engine that dynamically evolves as you acquire skills and build proof-of-work.
            </p>
          </div>

          <div className="grid g-3">
            {[
              {
                step: '01',
                title: 'Understand You',
                desc: 'Deep multi-factor profiling across education, existing skills, cognitive strengths, and ambition parameters.',
                icon: <BrainCircuit size={20} color="var(--ac)" />
              },
              {
                step: '02',
                title: 'Discover Career Paths',
                desc: 'Algorithmic matching across high-demand roles with transparency into role fit, market compensation, and progression.',
                icon: <Compass size={20} color="var(--ac)" />
              },
              {
                step: '03',
                title: 'Diagnose Skill Gaps',
                desc: 'Precise side-by-side benchmarking of your current competency levels against hiring threshold benchmarks.',
                icon: <BarChart3 size={20} color="var(--ac)" />
              },
              {
                step: '04',
                title: 'Synthesize Execution Roadmap',
                desc: 'Sequenced learning milestones broken into tangible sprints with exact study estimates and deliverables.',
                icon: <Layers size={20} color="var(--ac)" />
              },
              {
                step: '05',
                title: 'Ship Proof-of-Work & Adapt',
                desc: 'Build flagship portfolio capstones with continuous AI Mentor coaching as your readiness index updates in real time.',
                icon: <Award size={20} color="var(--ac)" />
              }
            ].map((s, i) => (
              <div key={i} className="card card-interactive">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '12px', background: 'var(--ac-soft)', display: 'grid', placeItems: 'center' }}>
                    {s.icon}
                  </div>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--mut)', opacity: 0.5 }}>{s.step}</span>
                </div>
                <h3>{s.title}</h3>
                <p className="text-mut" style={{ fontSize: '0.92rem', margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '36px', padding: '20px 24px', background: 'var(--card-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', textAlign: 'center' }}>
            <span style={{ fontWeight: 600, color: 'var(--acd)' }}>Continuous Evolution Loop: </span>
            <span className="text-mut">
              Diagnose → Target → Plan → Build Proof-of-Work → Measure Readiness → Iterate.
            </span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section section-alt" id="features-section">
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
            <span className="tag">Unified Operating System</span>
            <h2>Everything In One Evolving Career Twin</h2>
            <p className="text-mut">
              Replace fragmented bookmarks, random YouTube tutorials, and blind job applications with a single intelligent navigator.
            </p>
          </div>

          <div className="grid g-4">
            {[
              { title: 'AI Career Assessment', desc: 'Holistic diagnostic profiling calibrated to modern tech & business requirements.' },
              { title: 'Personalized Career Matching', desc: 'Transparent match percentage, progression trajectories, and rationale.' },
              { title: 'Live Skill-Gap Benchmarks', desc: 'Categorized by Strong, Developing, and Critical Gaps with readiness scores.' },
              { title: 'Dynamic Learning Roadmap', desc: 'Phased sprints with time estimates, milestones, and deliverable checklists.' },
              { title: 'Industry-Grade Capstones', desc: 'Complete project briefs with problem context, deliverables, and recruiter appeal.' },
              { title: 'Contextual AI Career Mentor', desc: 'Conversational mentor grounded in your unique gaps and immediate next milestones.' },
              { title: 'Readiness Index Tracking', desc: 'Mathematical composite gauge tracking your evolution toward job placement.' },
              { title: 'Sovereign Privacy Architecture', desc: 'Your career profile data remains strictly yours with exportable ownership.' }
            ].map((feat, idx) => (
              <div key={idx} className="card card-interactive">
                <h4 style={{ marginBottom: '8px' }}>{feat.title}</h4>
                <p className="text-mut" style={{ fontSize: '0.88rem', margin: 0 }}>{feat.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '36px', display: 'flex', gap: '14px', alignItems: 'center' }}>
            <button
              type="button"
              className="btn"
              onClick={() => onNavigate('dashboard')}
            >
              <span>Explore Interactive Twin Workspace</span>
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onNavigate('pricing')}
            >
              <span>View Pricing Plans</span>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="section" style={{ textAlign: 'center', background: 'radial-gradient(ellipse 700px 300px at 50% 50%, rgba(217, 154, 38, 0.22), transparent), var(--navy)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2>Stop Guessing. Start Building Your Trajectory.</h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: '1.14rem', margin: '16px auto 32px' }}>
            Synthesize your strengths, clarify your target path, and track your readiness with your personal AI Career Twin today.
          </p>
          <button
            type="button"
            className="btn btn-lg"
            onClick={() => onNavigate('onboarding')}
          >
            <span>Build My Career Twin For Free</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
