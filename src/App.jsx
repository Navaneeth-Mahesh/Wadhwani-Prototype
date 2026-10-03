import React, { useState, useEffect } from 'react';
import { CAREER_ROLES } from './data/careerData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { InstitutionsView } from './views/InstitutionsView';
import { PricingView } from './views/PricingView';
import { OnboardingView } from './views/OnboardingView';
import { RecommendationsView } from './views/RecommendationsView';
import { DashboardView } from './views/DashboardView';

export function App() {
  const [currentView, setCurrentView] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('career_twin_theme') || 'dark';
  });

  const [targetRole, setTargetRole] = useState(CAREER_ROLES[0]);
  const [userAnswers, setUserAnswers] = useState({
    0: 'Alex',
    1: ['B.Tech / B.E.'],
    2: ['Final Year Student'],
    3: ['Communication', 'Analytics', 'SQL & Databases'],
    4: ['Technology & AI', 'Business Strategy', 'Product Building'],
    5: ['Summer Internship'],
    6: ['Classroom / Academic'],
    7: ['Product Management'],
    8: 'Become a Product Manager at a fast-growing tech company within 18 months',
    9: ['Fintech & Payments', 'B2B SaaS'],
    10: ['Interactive Hands-on Projects']
  });

  const [completedRoadmap, setCompletedRoadmap] = useState([0]);
  const [completedProjects, setCompletedProjects] = useState([]);

  // Theme synchronization
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('career_twin_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Dynamic Composite Career Readiness formula
  const readinessScore = Math.min(
    98,
    targetRole.readiness + (completedRoadmap.length * 2) - 2 + (completedProjects.length * 4)
  );

  const handleUpdateAnswers = (index, value) => {
    setUserAnswers(prev => ({ ...prev, [index]: value }));
  };

  const handleFinishOnboarding = () => {
    setCurrentView('recommendations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRoleAndOpenDashboard = (role) => {
    setTargetRole(role);
    setCompletedRoadmap([0]);
    setCompletedProjects([]);
    setCurrentView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleMilestone = (id) => {
    setCompletedRoadmap(prev => {
      if (prev.includes(id)) {
        return prev.filter(x => x !== id);
      }
      return [...prev, id];
    });
  };

  const handleToggleProject = (projectTitle) => {
    setCompletedProjects(prev => {
      if (prev.includes(projectTitle)) {
        return prev.filter(p => p !== projectTitle);
      }
      return [...prev, projectTitle];
    });
  };

  const handleResetData = () => {
    setUserAnswers({
      0: 'Alex',
      1: ['B.Tech / B.E.'],
      2: ['Final Year Student'],
      3: ['Communication', 'Analytics'],
      4: ['Technology & AI', 'Product Building'],
      5: ['Summer Internship'],
      6: ['Classroom / Academic'],
      7: ['Product Management'],
      8: 'Become an Associate PM',
      9: ['B2B SaaS'],
      10: ['Interactive Hands-on Projects']
    });
    setTargetRole(CAREER_ROLES[0]);
    setCompletedRoadmap([0]);
    setCompletedProjects([]);
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <div style={{ flex: 1 }}>
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            targetRole={targetRole}
            onSelectRole={setTargetRole}
          />
        )}

        {currentView === 'institutions' && (
          <InstitutionsView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'pricing' && (
          <PricingView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'onboarding' && (
          <OnboardingView
            userAnswers={userAnswers}
            onUpdateAnswers={handleUpdateAnswers}
            onFinishOnboarding={handleFinishOnboarding}
          />
        )}

        {currentView === 'recommendations' && (
          <RecommendationsView
            onSelectRoleAndOpenDashboard={handleSelectRoleAndOpenDashboard}
          />
        )}

        {currentView === 'dashboard' && (
          <DashboardView
            targetRole={targetRole}
            onSelectRole={(role) => {
              setTargetRole(role);
              setCompletedRoadmap([0]);
              setCompletedProjects([]);
            }}
            userAnswers={userAnswers}
            completedRoadmap={completedRoadmap}
            onToggleMilestone={handleToggleMilestone}
            completedProjects={completedProjects}
            onToggleProject={handleToggleProject}
            readinessScore={readinessScore}
            onResetData={handleResetData}
            theme={theme}
            onToggleTheme={toggleTheme}
          />
        )}
      </div>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
