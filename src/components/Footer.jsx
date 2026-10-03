import React from 'react';
import { Sparkles, Shield, Heart } from 'lucide-react';

export function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', marginBottom: '36px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ink)', fontWeight: 800, marginBottom: '12px' }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg, var(--ac), var(--ac2))', display: 'grid', placeItems: 'center', color: '#000' }}>
                <Sparkles size={13} />
              </div>
              <span>AI Career Twin</span>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--mut)', maxWidth: '280px' }}>
              Empowering next-generation learners and professionals with autonomous, real-time career intelligence and personalized execution roadmaps.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink)', marginBottom: '14px' }}>
              Platform
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
              <a href="#how" onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }), 50); }}>How it Works</a>
              <a href="#features" onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' }), 50); }}>Evolving Twin Engine</a>
              <a href="#pricing" onClick={(e) => { e.preventDefault(); onNavigate('pricing'); }}>Subscription Plans</a>
              <a href="#institutions" onClick={(e) => { e.preventDefault(); onNavigate('institutions'); }}>University Partnerships</a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink)', marginBottom: '14px' }}>
              Ethics & Privacy
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--mut)' }}>
              Your data belongs strictly to you. Student data is never sold or shared without explicit permission. AI recommendations are developmental guidance and not guarantees of employment or compensation.
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.84rem' }}>
          <div>
            © {new Date().getFullYear()} AI Career Twin Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Privacy-First Architecture</span>
            <span>•</span>
            <span>Non-Deterministic Career Intelligence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
