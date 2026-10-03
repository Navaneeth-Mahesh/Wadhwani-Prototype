import React, { useState } from 'react';
import { Check, Sparkles, Building2, Zap, ArrowRight } from 'lucide-react';

export function PricingView({ onNavigate }) {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <div className="animate-fade-in section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
          <span className="tag" style={{ marginBottom: '12px' }}>Transparent Investment</span>
          <h2>Invest in Your Career Trajectory</h2>
          <p className="text-mut">
            Choose the plan that fits your ambition. Upgrade, downgrade, or pause anytime with zero lock-in.
          </p>

          {/* Billing Switcher */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'var(--card-elevated)', padding: '6px 12px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--line)', marginTop: '16px' }}>
            <button
              type="button"
              className={`chip ${!annualBilling ? 'active' : ''}`}
              style={{ margin: 0 }}
              onClick={() => setAnnualBilling(false)}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              className={`chip ${annualBilling ? 'active' : ''}`}
              style={{ margin: 0 }}
              onClick={() => setAnnualBilling(true)}
            >
              Annual Billing <span style={{ color: 'var(--ok)', fontWeight: 700, marginLeft: 4 }}>Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid g-3" style={{ alignItems: 'stretch' }}>
          {/* Free Tier */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3>Free Explorer</h3>
              <p className="text-mut" style={{ fontSize: '0.88rem' }}>For exploratory students testing the waters.</p>
            </div>

            <div style={{ fontSize: '2.5rem', fontWeight: 800, margin: '12px 0 6px', color: 'var(--ink)' }}>
              ₹0 <span style={{ fontSize: '0.9rem', color: 'var(--mut)', fontWeight: 400 }}>forever</span>
            </div>

            <p className="text-mut" style={{ fontSize: '0.85rem', marginBottom: '24px' }}>
              Self-guided baseline assessment and role overview.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, marginBottom: '24px' }}>
              {[
                'Standard 11-step diagnostic assessment',
                'Basic career path exploration',
                'Top 3 high-level skill gap overview',
                'Community FAQ access'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <Check size={16} color="var(--ok)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-secondary"
              style={{ width: '100%' }}
              onClick={() => onNavigate('onboarding')}
            >
              Start Free Assessment
            </button>
          </div>

          {/* Premium Tier */}
          <div className="card elevated" style={{ borderColor: 'var(--ac)', borderWidth: '2px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
              <span className="tag" style={{ background: 'linear-gradient(135deg, var(--ac), var(--ac2))', color: '#000', fontWeight: 700 }}>
                MOST POPULAR
              </span>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} color="var(--ac)" />
                <h3>Pro Career Twin</h3>
              </div>
              <p className="text-mut" style={{ fontSize: '0.88rem' }}>For serious individuals determined to land top roles.</p>
            </div>

            <div style={{ fontSize: '2.5rem', fontWeight: 800, margin: '12px 0 6px', color: 'var(--ink)' }}>
              {annualBilling ? '₹249' : '₹299'} 
              <span style={{ fontSize: '0.9rem', color: 'var(--mut)', fontWeight: 400 }}>
                {annualBilling ? '/month (billed ₹2,999/yr)' : '/month'}
              </span>
            </div>

            <p className="text-mut" style={{ fontSize: '0.85rem', marginBottom: '24px' }}>
              Full continuous AI Career Twin with real-time feedback loops.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, marginBottom: '24px' }}>
              {[
                'Autonomous, Evolving AI Career Twin profile',
                'Advanced career path match rankings & compensation benchmarks',
                'Granular skill-gap index with current vs target deltas',
                'Personalized 6-phase learning roadmap with hours & milestones',
                'Flagship capstone project briefs with verified deliverables',
                'Interactive AI Career Twin mentor with contextual responses',
                'Dynamic Career Readiness Score calculations',
                'Continuous progress tracking and portfolio architecture'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--ac-soft)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Check size={12} color="var(--ac)" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-lg"
              style={{ width: '100%' }}
              onClick={() => onNavigate('onboarding')}
            >
              <span>Build My Pro Twin Now</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Institutions Tier */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building2 size={18} color="var(--ac)" />
                <h3>University & Cohorts</h3>
              </div>
              <p className="text-mut" style={{ fontSize: '0.88rem' }}>For colleges, placement offices, and bootcamps.</p>
            </div>

            <div style={{ fontSize: '2.5rem', fontWeight: 800, margin: '12px 0 6px', color: 'var(--ink)' }}>
              Custom <span style={{ fontSize: '0.9rem', color: 'var(--mut)', fontWeight: 400 }}>annual license</span>
            </div>

            <p className="text-mut" style={{ fontSize: '0.85rem', marginBottom: '24px' }}>
              Scalable departmental deployment with aggregated analytics.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, marginBottom: '24px' }}>
              {[
                'Batch provisioning for 500 to 20,000+ students',
                'Department-level cohort readiness analytics dashboard',
                'Curriculum gap detection and recruiting pipeline trends',
                'Multi-counselor management and student flagging',
                'Privacy-preserving student consent controls',
                'Dedicated customer success engineer & workshop onboarding'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <Check size={16} color="var(--ok)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-secondary"
              style={{ width: '100%' }}
              onClick={() => onNavigate('institutions')}
            >
              Request Institutional Demo
            </button>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div style={{ marginTop: '48px', padding: '24px', background: 'var(--card-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', textAlign: 'center' }}>
          <h4>Sovereign Student Data Guarantee</h4>
          <p className="text-mut" style={{ maxWidth: '680px', margin: '8px auto 0', fontSize: '0.88rem' }}>
            Your assessment answers, career plans, and project progress belong exclusively to you. You can export or delete your twin profile at any moment from your Settings tab.
          </p>
        </div>
      </div>
    </div>
  );
}
