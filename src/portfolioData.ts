// Central place to edit everything shown on the site.
export const profile = {
  name: 'Abdelrahman Alaa',
  nickname: 'Abdo',
  roles: ['AI Engineer', 'Data Analyst', 'Creative Front-End Developer'],
  location: 'Alexandria, EG',
  email: 'hello@example.com', // TODO: replace with your real email
  github: 'https://github.com/abdoalsman79-png',
  linkedin: 'https://www.linkedin.com/in/abdelrahman-alaa-52399a384/',
  cvUrl: '#sandbox',
  headline: 'Bridging Raw Data, Artificial Intelligence & Interactive Design.',
  subtitle:
    'I am Abdo, an AI Engineer, Data Analyst & Creative Front-End Developer. I turn messy data into models, and models into interfaces people actually enjoy using.',
  status: '[SYSTEM ONLINE // READY FOR DEPLOYMENT]',
  telemetry: { accuracy: '99.2%', fps: '60', location: 'Alexandria, EG' },
}

export const pillars = [
  { id: 'ai', title: 'AI Engineering', color: '#00F0FF', text: 'Training, evaluating and shipping machine learning models, from feature engineering to inference.', tags: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn'] },
  { id: 'data', title: 'Data Analytics', color: '#8B5CF6', text: 'Cleaning, modelling and visualising data so that teams can make decisions with confidence.', tags: ['SQL', 'Pandas', 'Power BI', 'Tableau'] },
  { id: 'fe', title: 'Front-End Craft', color: '#10B981', text: 'Fast, accessible, motion-rich interfaces with React, TypeScript and WebGL.', tags: ['React', 'TypeScript', 'Three.js', 'Tailwind'] },
]

export const skills = [
  { name: 'Machine Learning', value: 88 },
  { name: 'Data Visualization', value: 90 },
  { name: 'SQL / Python', value: 92 },
  { name: 'React / Next.js', value: 85 },
  { name: '3D WebGL', value: 74 },
]

export type Category = 'AI & ML' | 'Data Analytics' | 'Creative Front-End'
export interface Project {
  id: string; title: string; category: Category; summary: string; stack: string[]
  metrics: { label: string; value: string }[]; architecture: string[]; demo: string; repo: string; accent: string
}
export const projects: Project[] = [
  {
    id: 'churn', title: 'ChurnSense', category: 'AI & ML', accent: '#00F0FF',
    summary: 'Gradient-boosted churn predictor with explainable risk scores per customer.',
    stack: ['Python', 'XGBoost', 'SHAP', 'FastAPI'],
    metrics: [{ label: 'Recall', value: '+27%' }, { label: 'Inference', value: '0.8s' }],
    architecture: ['Ingest and clean raw CRM exports with Pandas pipelines', 'Feature store with rolling behavioural aggregates', 'XGBoost model with SHAP explanations for every prediction', 'FastAPI service behind a small React dashboard'],
    demo: '#', repo: 'https://github.com/abdoalsman79-png',
  },
  {
    id: 'pulse', title: 'RetailPulse Dashboard', category: 'Data Analytics', accent: '#8B5CF6',
    summary: 'Executive sales dashboard with forecasting, cohort retention and anomaly alerts.',
    stack: ['SQL', 'Power BI', 'Python', 'Prophet'],
    metrics: [{ label: 'Reporting time', value: '-60%' }, { label: 'Forecast MAPE', value: '6.1%' }],
    architecture: ['Star-schema warehouse modelled in SQL', 'Scheduled refresh with automated data-quality checks', 'Prophet forecasts blended into Power BI visuals', 'Alert rules for revenue anomalies'],
    demo: '#', repo: 'https://github.com/abdoalsman79-png',
  },
  {
    id: 'lingua', title: 'LinguaStream NLP', category: 'AI & ML', accent: '#10B981',
    summary: 'Real-time Arabic and English sentiment stream with topic clustering.',
    stack: ['Transformers', 'PyTorch', 'Kafka', 'React'],
    metrics: [{ label: 'F1 score', value: '0.91' }, { label: 'Throughput', value: '1.2k msg/s' }],
    architecture: ['Fine-tuned multilingual transformer for sentiment', 'Streaming ingestion with micro-batching', 'Embedding clustering for emerging topics', 'Live WebSocket feed into the UI'],
    demo: '#', repo: 'https://github.com/abdoalsman79-png',
  },
  {
    id: 'neural', title: 'Neural Atlas 3D', category: 'Creative Front-End', accent: '#00F0FF',
    summary: 'Interactive 3D explorer that lets you fly through a neural network and inspect each layer.',
    stack: ['React Three Fiber', 'TypeScript', 'GLSL', 'Framer Motion'],
    metrics: [{ label: 'Frame rate', value: '60 FPS' }, { label: 'Conversion', value: '+34%' }],
    architecture: ['Instanced meshes for thousands of neurons', 'Custom shaders for glowing edges', 'Scroll-driven camera paths', 'Accessible fallback view for reduced motion'],
    demo: '#', repo: 'https://github.com/abdoalsman79-png',
  },
]

export const experience = [
  { period: '2026', title: 'Data Analysis Scholarship', org: 'NTI', text: 'Completed an intensive data analysis programme covering SQL, Python, statistics and dashboards.' },
  { period: '2026', title: 'Machine Learning Specialist', org: 'Intrast', text: 'Finished a 100-hour machine learning specialisation with hands-on model projects.' },
  { period: 'In progress', title: 'B.Sc. Computer Science & Mathematics', org: 'Alexandria University', text: 'Studying the maths behind algorithms, while building web products on the side.' },
  { period: 'Ongoing', title: 'Front-End Projects', org: 'Independent', text: 'Designing and shipping brand sites and web apps, deployed on Vercel.' },
]

export const techStack = [
  { cat: 'AI / ML', items: ['Python', 'PyTorch', 'TensorFlow'] },
  { cat: 'Data', items: ['SQL', 'Power BI', 'Tableau'] },
  { cat: 'Front-End', items: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS'] },
]

export const datasets = [
  { id: 'sales', label: 'Predictive Sales Forecasting', unit: '$k', color: '#00F0FF',
    series: [42, 45, 48, 47, 52, 58, 61, 59, 66, 120, 72, 78], anomalies: [9], insight: 'Spike at week 10 is 71% above the forecast band: likely a one-off promotion. Excluded from the trend.',
    kpis: [{ label: 'Forecast accuracy', value: 93.8, suffix: '%' }, { label: 'Projected growth', value: 18.4, suffix: '%' }, { label: 'Anomalies', value: 1, suffix: '' }] },
  { id: 'nlp', label: 'NLP Sentiment Stream', unit: '%', color: '#8B5CF6',
    series: [62, 64, 61, 66, 68, 30, 67, 70, 72, 71, 74, 76], anomalies: [5], insight: 'Sentiment dropped 38 points in one window, correlated with a service outage keyword cluster.',
    kpis: [{ label: 'Positive share', value: 76, suffix: '%' }, { label: 'Messages / min', value: 1240, suffix: '' }, { label: 'Anomalies', value: 1, suffix: '' }] },
  { id: 'churn', label: 'Customer Churn Clustering', unit: '%', color: '#10B981',
    series: [9, 8.5, 8.8, 8.2, 7.9, 7.5, 16, 7.2, 6.9, 6.6, 6.4, 6.1], anomalies: [6], insight: 'Cluster C3 doubled its churn in one month after a pricing change. Flagged for retention outreach.',
    kpis: [{ label: 'Churn rate', value: 6.1, suffix: '%' }, { label: 'Clusters found', value: 5, suffix: '' }, { label: 'Anomalies', value: 1, suffix: '' }] },
]

export const terminalResponses: Record<string, string[]> = {
  help: ['Available commands:', '  help      show this list', '  skills    what I work with', '  socials   where to find me', '  hire      start a project together', '  whoami    short intro', '  clear     clear the screen'],
  skills: ['> Machine Learning ........ 88%', '> Data Visualization ...... 90%', '> SQL / Python ............ 92%', '> React / Next.js ......... 85%', '> 3D WebGL ............... 74%'],
  socials: [`GitHub   : ${profile.github}`, `LinkedIn : ${profile.linkedin}`],
  hire: ['Opening channel... done.', 'I am open to AI, data and front-end work.', 'Use the form on the left or connect on LinkedIn.'],
  whoami: [`${profile.name} // AI Engineer, Data Analyst, Front-End Developer // ${profile.location}`],
}
