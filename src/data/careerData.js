export const CAREER_ROLES = [
  {
    id: 'pm',
    title: 'Product Manager',
    readiness: 72,
    overview: 'Owns the "why", "what", and "when" of a product—aligning user needs, business targets, and engineering constraints.',
    fitReason: 'Strong communication and business intuition; product analytics and systematic user research are the primary gap areas.',
    progression: 'Associate PM → Product Manager → Senior PM → Group PM → VP of Product',
    salaryRange: '₹12L - ₹32L / yr',
    demandLevel: 'Very High',
    skills: [
      { name: 'Product Strategy', current: 75, target: 85 },
      { name: 'Data Analytics', current: 45, target: 80 },
      { name: 'Executive Communication', current: 85, target: 85 },
      { name: 'User Research & Testing', current: 40, target: 75 },
      { name: 'SQL & Querying', current: 30, target: 70 },
      { name: 'Roadmap & Sprint Planning', current: 65, target: 80 }
    ],
    project: {
      title: 'Customer Churn Analysis Dashboard & Strategy Memo',
      why: 'Proves your capacity to extract behavioral insights from raw data and synthesize them into high-stakes executive product decisions.',
      skills: ['SQL', 'Product Analytics', 'Cohort Analysis', 'Storytelling'],
      difficulty: 'Intermediate',
      deliverable: 'Interactive Looker/Metabase Dashboard + 1-Page Strategy & Churn Mitigation Memo',
      tools: 'PostgreSQL / BigQuery, Looker Studio, Notion',
      portfolioValue: 'Tier 1: Mirrors exact case evaluations during real Senior/Associate PM hiring cycles'
    }
  },
  {
    id: 'da',
    title: 'Data Analyst',
    readiness: 61,
    overview: 'Transforms complex raw datasets into predictive insights, business metrics, and automated decision engines.',
    fitReason: 'Comfortable with analytical logic and quantitative reasoning; requires deeper mastery of window functions in SQL and statistical modeling.',
    progression: 'Junior Data Analyst → Data Analyst → Senior Analyst → Lead BI Architect → Head of Analytics',
    salaryRange: '₹8L - ₹24L / yr',
    demandLevel: 'High',
    skills: [
      { name: 'Advanced SQL', current: 55, target: 85 },
      { name: 'Applied Statistics', current: 50, target: 80 },
      { name: 'Data Visualization & BI', current: 60, target: 80 },
      { name: 'Python (Pandas & NumPy)', current: 45, target: 75 },
      { name: 'Data Modeling & ETL', current: 35, target: 70 }
    ],
    project: {
      title: 'End-to-End E-Commerce Revenue & Retention Engine',
      why: 'Exercises data cleaning, metric definition, statistical hypothesis testing, and executive visual reporting end-to-end.',
      skills: ['SQL Window Functions', 'Python Cleaning', 'Power BI / Tableau', 'A/B Test Design'],
      difficulty: 'Intermediate',
      deliverable: 'Cleaned Dataset, Jupyter Analysis Notebook, & Multi-Tab Executive Power BI Report',
      tools: 'Python (Pandas), DuckDB/PostgreSQL, Power BI',
      portfolioValue: 'High: Demonstrates enterprise-grade data hygiene and commercial acumen'
    }
  },
  {
    id: 'se',
    title: 'Software Engineer',
    readiness: 58,
    overview: 'Architects, engineers, and scales reliable distributed software services, web applications, and resilient APIs.',
    fitReason: 'Solid algorithmic foundations and core programming fluency; system design principles, concurrency, and end-to-end automated testing require practical depth.',
    progression: 'SDE I → SDE II → Senior Engineer → Staff Engineer → Principal Architect',
    salaryRange: '₹10L - ₹36L / yr',
    demandLevel: 'Extreme',
    skills: [
      { name: 'Data Structures & Algorithms', current: 60, target: 85 },
      { name: 'Distributed System Design', current: 35, target: 75 },
      { name: 'Git & Production CI/CD', current: 70, target: 80 },
      { name: 'Automated Testing (Unit/E2E)', current: 40, target: 70 },
      { name: 'API Engineering & Security', current: 50, target: 80 }
    ],
    project: {
      title: 'Full-Stack High-Concurrency Event Booking Platform',
      why: 'Proves mastery over RESTful microservices, state reconciliation, race condition prevention, relational caching, and modern React architectures.',
      skills: ['React', 'Node.js / Go', 'PostgreSQL', 'Redis', 'Docker'],
      difficulty: 'Advanced',
      deliverable: 'Containerized Deployed Application + Postman Collection + Comprehensive System Architecture README',
      tools: 'React, Node.js/Express, PostgreSQL, Redis, Docker, Render',
      portfolioValue: 'Tier 1: Directly qualifies candidates for Tier-1 Product Engineering technical rounds'
    }
  },
  {
    id: 'ux',
    title: 'UX / Product Designer',
    readiness: 49,
    overview: 'Orchestrates intuitive human-computer interfaces, conducting user research, design systems, and seamless workflows.',
    fitReason: 'High empathetic curiosity and creative sensibility; needs structured usability heuristics, Figma design systems, and conversion-centered interaction frameworks.',
    progression: 'Junior Product Designer → UX Designer → Senior Designer → Design Lead → VP of Design',
    salaryRange: '₹8L - ₹26L / yr',
    demandLevel: 'High',
    skills: [
      { name: 'User Research & Discovery', current: 40, target: 80 },
      { name: 'Rapid Interactive Prototyping', current: 50, target: 80 },
      { name: 'Design Systems & Auto-Layout', current: 45, target: 75 },
      { name: 'Usability Testing & Maze', current: 30, target: 70 },
      { name: 'Information Architecture', current: 42, target: 75 }
    ],
    project: {
      title: 'Fintech Onboarding Flow Redesign & Usability Benchmark',
      why: 'Showcases empirical design methodology: qualitative interviews, heuristic audits, iterative wireframes, and measurable drop-off reductions.',
      skills: ['Figma Variables', 'User Testing', 'Micro-interactions', 'Case Study Documentation'],
      difficulty: 'Intermediate',
      deliverable: 'Comprehensive Behance / Medium Case Study + Interactive High-Fidelity Prototype',
      tools: 'Figma, Maze, FigJam, Miro',
      portfolioValue: 'High: Hiring managers focus exclusively on process depth in case studies over mere aesthetics'
    }
  },
  {
    id: 'ma',
    title: 'Growth & Marketing Analyst',
    readiness: 66,
    overview: 'Engineers customer acquisition loops, measures multichannel campaign attribution, and optimizes conversion funnels.',
    fitReason: 'Natural narrative articulation and creative intuition; multi-touch attribution, CAC/LTV economics, and SQL querying are the core missing links.',
    progression: 'Growth Specialist → Performance Analyst → Growth Lead → Head of Growth / CMO',
    salaryRange: '₹7L - ₹22L / yr',
    demandLevel: 'High',
    skills: [
      { name: 'Multichannel Campaign Analytics', current: 55, target: 80 },
      { name: 'Technical SEO & Content Strategy', current: 60, target: 75 },
      { name: 'Advanced Spreadsheets & Modeling', current: 70, target: 85 },
      { name: 'Brand & Narrative Storytelling', current: 75, target: 80 },
      { name: 'Conversion Rate Optimization (CRO)', current: 45, target: 75 }
    ],
    project: {
      title: 'Omnichannel B2B Acquisition Audit & Optimization Playbook',
      why: 'Demonstrates end-to-end mastery of marketing attribution, landing page A/B testing, and ROI-driven budget reallocation.',
      skills: ['GA4 Attribution', 'Funnel Modeling', 'A/B Testing', 'Executive Deck Design'],
      difficulty: 'Intermediate',
      deliverable: 'Audit Presentation Deck + Predictive CAC/LTV Spreadsheet Simulation Model',
      tools: 'Google Analytics 4, Google Sheets, Looker Studio, Canva',
      portfolioValue: 'High: Provides tangible proof of immediate revenue-generating capability'
    }
  },
  {
    id: 'ba',
    title: 'Business Analyst',
    readiness: 69,
    overview: 'Bridges organizational vision and technical execution by synthesizing stakeholder needs into rigorous system requirements and process flows.',
    fitReason: 'Exceptional interpersonal coordination and business empathy; needs formal BPMN 2.0 modeling, Jira agile story synthesis, and relational database queries.',
    progression: 'Associate BA → Business Analyst → Senior BA → Lead Enterprise Consultant → Director of Ops',
    salaryRange: '₹8L - ₹25L / yr',
    demandLevel: 'High',
    skills: [
      { name: 'Business Requirements Document (BRD)', current: 65, target: 85 },
      { name: 'BPMN 2.0 Process Modeling', current: 50, target: 80 },
      { name: 'Relational Database & SQL', current: 35, target: 70 },
      { name: 'Executive Stakeholder Comms', current: 80, target: 85 },
      { name: 'Agile & User Story Grooming', current: 60, target: 80 }
    ],
    project: {
      title: 'Enterprise Order Fulfillment Digitization & BRD Package',
      why: 'Demonstrates deep analytical rigor in identifying logistical bottlenecks and drafting complete engineering-ready specification packages.',
      skills: ['BPMN 2.0', 'BRD Writing', 'Gap Analysis', 'Cost-Benefit Financial Modeling'],
      difficulty: 'Beginner-Intermediate',
      deliverable: 'Complete 15-Page BRD + As-Is & To-Be BPMN Diagram + ROI Sensitivity Matrix',
      tools: 'Lucidchart, Microsoft Excel, Jira, Confluence',
      portfolioValue: 'Very High: The hallmark benchmark artifact requested during enterprise BA interviews'
    }
  }
];

export const ONBOARDING_QUESTIONS = [
  {
    id: 'name',
    title: 'What should your Career Twin call you?',
    subtitle: 'This will personalize your twin intelligence profile and reports.',
    type: 'text',
    placeholder: 'e.g. Priya Sharma'
  },
  {
    id: 'education',
    title: 'What is your current education background?',
    subtitle: 'Helps calibrate appropriate career starting points and foundation requirements.',
    type: 'chips',
    options: ['B.Tech / B.E.', 'B.Sc / B.Com / BA', 'BCA / MCA', 'MBA / Masters', 'Diploma', 'Self-Taught / Other']
  },
  {
    id: 'status',
    title: 'What is your current academic or career stage?',
    subtitle: 'Determines whether your timeline targets immediate placement or multi-year ramp-up.',
    type: 'chips',
    options: ['1st / 2nd Year Student', 'Pre-final Year Student', 'Final Year Student', 'Recent Graduate (0-1 yr)', 'Working Professional (Switching)']
  },
  {
    id: 'skills',
    title: 'Select skills you currently possess or have studied',
    subtitle: 'Choose everything you feel moderately confident with.',
    type: 'chips',
    options: ['Communication', 'Excel & Spreadsheets', 'Python', 'SQL & Databases', 'UI/UX Design', 'Creative Writing', 'Leadership & Teamwork', 'Data Analytics', 'JavaScript / React', 'Public Speaking', 'Git & GitHub']
  },
  {
    id: 'interests',
    title: 'What topics spark your curiosity the most?',
    subtitle: 'Your twin uses this to suggest career paths with high intrinsic motivation.',
    type: 'chips',
    options: ['Technology & AI', 'Business Strategy', 'Design & Aesthetics', 'Data & Math', 'Growth Marketing', 'Product Building', 'Finance & Markets']
  },
  {
    id: 'experience',
    title: 'What hands-on experience do you have so far?',
    subtitle: 'Calibrates the seniority of your initial milestones.',
    type: 'chips',
    options: ['None yet', 'College Club Lead', 'Summer Internship', 'Part-time Freelance', '1–2 Years Full-Time', '3+ Years Experience']
  },
  {
    id: 'projects',
    title: 'What kind of projects have you created?',
    subtitle: 'Helps us recommend projects that elevate rather than repeat your existing work.',
    type: 'chips',
    options: ['None yet', 'Classroom / Academic', 'Personal Side-Projects', 'Open-Source Contributions', 'Client / Freelance Work']
  },
  {
    id: 'careerInterests',
    title: 'Which career domains excite you most?',
    subtitle: 'Pick any trajectories you would consider pursuing.',
    type: 'chips',
    options: ['Product Management', 'Data Analytics & BI', 'Software Engineering', 'UI/UX Design', 'Growth & Marketing', 'Business Analysis']
  },
  {
    id: 'careerGoal',
    title: 'What is your ambitious career goal?',
    subtitle: 'Specify your ideal role, company tier, or timeline target.',
    type: 'text',
    placeholder: 'e.g. Become an Associate Product Manager at a fast-growing tech startup within 18 months'
  },
  {
    id: 'preferredIndustries',
    title: 'Preferred industry sectors',
    subtitle: 'Enables tailored domain case studies and relevant project datasets.',
    type: 'chips',
    options: ['Fintech & Payments', 'Healthtech & Biotech', 'Edtech', 'E-commerce & D2C', 'B2B SaaS', 'Consulting & Strategy', 'Climate & CleanTech']
  },
  {
    id: 'learningPreferences',
    title: 'How do you learn best?',
    subtitle: 'Optimizes learning recommendations to your cognitive rhythm.',
    type: 'chips',
    options: ['Interactive Hands-on Projects', 'Deep Dive Video Walkthroughs', 'Technical Books & Articles', '1-on-1 Mentorship', 'Self-Paced Sprints']
  }
];

export const ROADMAP_MILESTONES = [
  {
    id: 0,
    title: 'Foundation & Role Immersion',
    description: 'Understand target role expectations, day-in-the-life realities, and establish daily 90-minute learning habits.',
    badge: 'Phase 1',
    estHours: '15 hrs',
    deliverables: ['Role Competency Matrix', 'Weekly Study Calendar']
  },
  {
    id: 1,
    title: 'Core Technical Skill Building',
    description: 'Master non-negotiable fundamentals (e.g. SQL data manipulation, analytical reasoning, and role tooling).',
    badge: 'Phase 2',
    estHours: '30 hrs',
    deliverables: ['Completed 30 SQL Challenges', 'Technical Notes Repository']
  },
  {
    id: 2,
    title: 'Applied Case Studies & Real Datasets',
    description: 'Synthesize theory into practical problem solving by breaking down actual business cases and messy industry data.',
    badge: 'Phase 3',
    estHours: '25 hrs',
    deliverables: ['Case Breakdown Slide Deck', 'Data Cleaning Pipeline']
  },
  {
    id: 3,
    title: 'Signature Capstone Project Building',
    description: 'Ship your recommended end-to-end flagship project with clean code, robust documentation, and live deployment.',
    badge: 'Phase 4',
    estHours: '40 hrs',
    deliverables: ['Live Project URL', 'Comprehensive GitHub Repository']
  },
  {
    id: 4,
    title: 'Portfolio & Proof-of-Work Architecture',
    description: 'Transform project artifacts into a persuasive portfolio deck and 1-page executive memos that impress recruiters.',
    badge: 'Phase 5',
    estHours: '15 hrs',
    deliverables: ['Notion / Web Portfolio', 'LinkedIn Project Breakdown Post']
  },
  {
    id: 5,
    title: 'Industry Readiness, Mocks & Targeted Outreach',
    description: 'Run targeted mock interviews, optimize your resume for ATS screening, and execute direct warm networking.',
    badge: 'Phase 6',
    estHours: '20 hrs',
    deliverables: ['Tailored ATS Resume', '2 Passed Mock Technical Interviews', 'Cold Outreach Script']
  }
];

export const MENTOR_KNOWLEDGE_BASE = {
  'What career fits my current skills?': 
    'Based on your twin profile, your strong communication, business intuition, and logical baseline make **Product Manager** or **Business Analyst** ideal fits. If you prefer deeper quantitative modeling, **Data Analyst** is also within immediate reach with focused SQL practice.',
  
  'What skills am I missing?': 
    'Your primary skill gaps for your target path are: **Data Analytics / SQL** (current: 45%, target: 80%) and **Structured User Research** (current: 40%, target: 75%). Your baseline communication and strategic thinking are already well-positioned.',
  
  'What should I learn next?': 
    'Prioritize **SQL & Product Analytics Fundamentals** first. This is your single highest-leverage gap—mastering it unlocks your recommended capstone project and immediately raises your industry readiness index by +14%.',
  
  'Which project should I build?': 
    'Build the **Customer Churn Analysis Dashboard & Strategy Memo**. It forces you to combine data querying with executive decision-making, producing the exact artifact hiring managers look for during portfolio screens.',
  
  'Validate my career plan': 
    'Your trajectory is realistic and achievable within a 6-9 month dedicated sprint. A non-technical or early background is completely fine if you anchor your portfolio with data-backed project proof. Schedule 2 informational chats with practicing PMs to validate your local market trends.',
  
  'How industry-ready am I?': 
    'Your current Career Readiness Index is calculated on your Overview tab. It combines your assessed competency gaps, roadmap completion, and shipped portfolio projects into a dynamic composite readiness score.'
};

export const NAVIGATION_TABS = [
  { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
  { id: 'twin', label: 'My Career Twin', icon: 'Sparkles' },
  { id: 'paths', label: 'Career Paths', icon: 'Compass' },
  { id: 'skills', label: 'Skill Gaps', icon: 'BarChart2' },
  { id: 'roadmap', label: 'Learning Roadmap', icon: 'Milestone' },
  { id: 'projects', label: 'Project Guidance', icon: 'Briefcase' },
  { id: 'mentor', label: 'AI Mentor', icon: 'Bot' },
  { id: 'progress', label: 'Progress Tracking', icon: 'TrendingUp' },
  { id: 'settings', label: 'Profile / Settings', icon: 'Settings' }
];
