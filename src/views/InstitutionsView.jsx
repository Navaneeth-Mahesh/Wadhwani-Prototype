import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  BarChart, 
  Users, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { ProgressBar } from '../components/ProgressBar';

export function InstitutionsView({ onNavigate }) {
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    institution: '',
    contactName: '',
    email: '',
    studentCount: '1000-5000'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="hero-section" style={{ paddingBottom: '48px' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <div className="hero-badge" style={{ margin: '0 auto 20px' }}>
            <Building2 size={15} color="var(--ac)" />
            <span>University & Institutional Ecosystem</span>
          </div>

          <h1>Help Every Student Become Truly Industry-Ready</h1>

          <p className="hero-lead" style={{ margin: '20px auto 32px' }}>
            Empower your placement cells, faculties, and hundreds or thousands of students with personalized AI career navigation at scale—without overburdening your counseling faculty.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-lg"
              onClick={() => {
                const el = document.getElementById('demo-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Schedule Institutional Demo</span>
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() => onNavigate('dashboard')}
            >
              <span>View Student Experience</span>
            </button>
          </div>
        </div>
      </section>

      {/* Institutional Highlights Grid */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <h2>Enterprise-Grade Career Infrastructure</h2>
            <p className="text-mut">
              Real-time batch cohort insights, curriculum alignment, and privacy-first student consent mechanisms.
            </p>
          </div>

          <div className="grid g-3">
            {[
              {
                icon: <GraduationCap size={22} color="var(--ac)" />,
                title: 'Student Career Profiles',
                desc: 'Continuous real-time twin profiles reflecting current student skills, aspirations, and verifiable project evidence.'
              },
              {
                icon: <BarChart size={22} color="var(--ac)" />,
                title: 'Cohort Readiness Analytics',
                desc: 'Diagnose departmental and batch-level skill deficits months before campus placement season arrives.'
              },
              {
                icon: <FileCheck size={22} color="var(--ac)" />,
                title: 'Curriculum-to-Industry Alignment',
                desc: 'Identify which curriculum topics are missing crucial tools (like modern SQL, Docker, or Cloud architectures).'
              },
              {
                icon: <TrendingUp size={22} color="var(--ac)" />,
                title: 'Measurable Placement Acceleration',
                desc: 'Students with active AI Career Twins ship verified portfolio capstones, significantly improving placement conversions.'
              },
              {
                icon: <Users size={22} color="var(--ac)" />,
                title: 'Multi-Counselor Collaborative Portal',
                desc: 'Enable faculty advisors to quickly review high-risk students and provide tailored guidance in seconds.'
              },
              {
                icon: <ShieldCheck size={22} color="var(--ac)" />,
                title: 'Privacy-First Architecture',
                desc: 'Zero unconsented tracking. Individual student metrics are strictly aggregated unless student gives explicit sharing consent.'
              }
            ].map((card, i) => (
              <div key={i} className="card card-interactive">
                <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'var(--ac-soft)', display: 'grid', placeItems: 'center', marginBottom: '16px' }}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p className="text-mut" style={{ fontSize: '0.92rem', margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Aggregated Dashboard Mockup */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', alignItems: 'center' }}>
            <div>
              <span className="tag">Live Aggregated Analytics</span>
              <h2 style={{ margin: '12px 0 16px' }}>Departmental Overview (Class of 2026 Sample)</h2>
              <p className="text-mut">
                Track campus cohort health without invasive surveillance. See actionable readiness percentages and where targeted bootcamps are required.
              </p>

              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card" style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 600 }}>
                    <span>Cohort Average Career Readiness</span>
                    <span className="text-ok">68%</span>
                  </div>
                  <ProgressBar value={68} variant="ok" />
                </div>

                <div className="card" style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 600 }}>
                    <span>Students With Active Structured Roadmaps</span>
                    <span className="text-ac">84%</span>
                  </div>
                  <ProgressBar value={84} />
                </div>

                <div className="card" style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 600 }}>
                    <span>Industry Capstone Deliverables Shipped</span>
                    <span>52%</span>
                  </div>
                  <ProgressBar value={52} variant="warn" />
                </div>
              </div>
            </div>

            {/* Request a Demo Form */}
            <div id="demo-form" className="card elevated" style={{ padding: '32px' }}>
              {demoSubmitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--ok-soft)', color: 'var(--ok)', display: 'grid', placeItems: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3>Demo Request Received!</h3>
                  <p className="text-mut" style={{ margin: '8px 0 20px' }}>
                    Thank you, {formData.contactName || 'Colleague'}. Our University Partnerships team will reach out to <b>{formData.email || 'your email'}</b> within 24 business hours with custom cohort pilot credentials.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => setDemoSubmitted(false)}
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <Building2 size={20} color="var(--ac)" />
                    <h3 style={{ margin: 0 }}>Request Campus Partnership Demo</h3>
                  </div>
                  <p className="text-mut" style={{ fontSize: '0.88rem', marginBottom: '20px' }}>
                    Experience how leading engineering and business colleges run AI Career Twin cohorts.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                        Institution / University Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. National Institute of Technology"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                        Dean / TPO / Coordinator Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Verma"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                        Official Institutional Email
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="name@university.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                        Enrolled Student Size
                      </label>
                      <select
                        value={formData.studentCount}
                        onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                      >
                        <option value="Under 500">Under 500 Students</option>
                        <option value="500-2000">500 – 2,000 Students</option>
                        <option value="2000-10000">2,000 – 10,000 Students</option>
                        <option value="10000+">10,000+ Students (University System)</option>
                      </select>
                    </div>

                    <button type="submit" className="btn btn-lg" style={{ marginTop: '10px' }}>
                      <span>Schedule Personalized Walkthrough</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
