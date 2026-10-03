import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Sparkles, 
  Compass, 
  BarChart2, 
  Milestone, 
  Briefcase, 
  Bot, 
  TrendingUp, 
  Settings 
} from 'lucide-react';
import { OverviewTab } from './dashboard-tabs/OverviewTab';
import { TwinCardTab } from './dashboard-tabs/TwinCardTab';
import { CareerPathsTab } from './dashboard-tabs/CareerPathsTab';
import { SkillGapsTab } from './dashboard-tabs/SkillGapsTab';
import { RoadmapTab } from './dashboard-tabs/RoadmapTab';
import { ProjectsTab } from './dashboard-tabs/ProjectsTab';
import { AiMentorTab } from './dashboard-tabs/AiMentorTab';
import { ProgressTab } from './dashboard-tabs/ProgressTab';
import { SettingsTab } from './dashboard-tabs/SettingsTab';

const TAB_CONFIG = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'twin', label: 'My Career Twin', icon: Sparkles },
  { id: 'paths', label: 'Career Paths', icon: Compass },
  { id: 'skills', label: 'Skill Gaps', icon: BarChart2 },
  { id: 'roadmap', label: 'Learning Roadmap', icon: Milestone },
  { id: 'projects', label: 'Project Guidance', icon: Briefcase },
  { id: 'mentor', label: 'AI Mentor', icon: Bot },
  { id: 'progress', label: 'Progress Tracking', icon: TrendingUp },
  { id: 'settings', label: 'Profile / Settings', icon: Settings }
];

export function DashboardView({
  targetRole,
  onSelectRole,
  userAnswers,
  completedRoadmap,
  onToggleMilestone,
  completedProjects,
  onToggleProject,
  readinessScore,
  onResetData,
  theme,
  onToggleTheme
}) {
  const [activeTab, setActiveTab] = useState('overview');

  const rawName = String(userAnswers[0] || '').trim();
  const userName = rawName ? rawName.split(/\s+/)[0] : 'Alex';

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="app-sidebar">
        {TAB_CONFIG.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              className={`sidebar-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={18} color={isActive ? 'var(--ac)' : 'currentColor'} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </aside>

      {/* Main Content Pane */}
      <main className="app-main">
        {activeTab === 'overview' && (
          <OverviewTab
            userName={userName}
            targetRole={targetRole}
            readinessScore={readinessScore}
            onNavigateTab={setActiveTab}
            completedRoadmap={completedRoadmap}
            completedProjects={completedProjects}
          />
        )}

        {activeTab === 'twin' && (
          <TwinCardTab
            userAnswers={userAnswers}
            targetRole={targetRole}
            readinessScore={readinessScore}
            completedRoadmap={completedRoadmap}
            completedProjects={completedProjects}
          />
        )}

        {activeTab === 'paths' && (
          <CareerPathsTab
            targetRole={targetRole}
            onSelectRole={onSelectRole}
          />
        )}

        {activeTab === 'skills' && (
          <SkillGapsTab
            targetRole={targetRole}
          />
        )}

        {activeTab === 'roadmap' && (
          <RoadmapTab
            completedMilestones={completedRoadmap}
            onToggleMilestone={onToggleMilestone}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsTab
            targetRole={targetRole}
            completedProjects={completedProjects}
            onToggleProject={onToggleProject}
          />
        )}

        {activeTab === 'mentor' && (
          <AiMentorTab
            targetRole={targetRole}
            readinessScore={readinessScore}
            userName={userName}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressTab
            targetRole={targetRole}
            readinessScore={readinessScore}
            completedRoadmap={completedRoadmap}
            completedProjects={completedProjects}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsTab
            userName={userName}
            userAnswers={userAnswers}
            targetRole={targetRole}
            onResetData={onResetData}
            theme={theme}
            onToggleTheme={onToggleTheme}
          />
        )}
      </main>
    </div>
  );
}
