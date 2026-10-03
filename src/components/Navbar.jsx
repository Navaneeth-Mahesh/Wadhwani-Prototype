import React from 'react';
import { Sparkles, Sun, Moon, ArrowRight, ShieldCheck } from 'lucide-react';

export function Navbar({ currentView, onNavigate, theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo-brand" onClick={() => onNavigate('home')}>
          <div className="logo-icon-box">
            <Sparkles size={18} strokeWidth={2.4} />
          </div>
          <span>AI Career Twin</span>
        </div>

        <nav className="nav-links">
          <button
            type="button"
            className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            Overview
          </button>
          <button
            type="button"
            className={`nav-link ${currentView === 'institutions' ? 'active' : ''}`}
            onClick={() => onNavigate('institutions')}
          >
            Institutions
          </button>
          <button
            type="button"
            className={`nav-link ${currentView === 'pricing' ? 'active' : ''}`}
            onClick={() => onNavigate('pricing')}
          >
            Pricing
          </button>
          <button
            type="button"
            className={`nav-link ${currentView === 'dashboard' ? 'active' : ''}`}
            onClick={() => onNavigate('dashboard')}
          >
            Twin Workspace
          </button>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={onToggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            style={{ padding: '8px 10px', borderRadius: '50%' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="btn btn-sm"
            onClick={() => onNavigate('onboarding')}
          >
            <span>Build My Career Twin</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </header>
  );
}
