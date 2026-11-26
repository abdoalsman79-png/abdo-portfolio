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
  metrics: { label: string; value: string }[]; architecture: string[]; demo: string; demoLabel?: string; repo?: string; image?: string; gallery?: string[]; accent: string
}
export const projects: Project[] = [
  // Machine learning: real public notebooks from kaggle.com/abdoalsman
  {
    id: 'bangalore', image: '/projects/bangalore.jpg', title: 'Bangalore Real Estate Price Modeling', category: 'AI & ML', accent: '#00F0FF',
    summary: 'Predicts house prices from location, size, bedrooms and bathrooms. Compares a linear baseline with a tuned Random Forest.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'Seaborn'],
    metrics: [{ label: 'Models compared', value: '2' }, { label: 'Hyperparameter search', value: 'Random' }],
    architecture: ['Cleaned the Bengaluru house price data: parsed BHK and square-foot ranges, fixed types', 'Explored price against area, BHK and location with Seaborn', 'Trained a Linear Regression baseline and a Random Forest regressor', 'Tuned the forest with RandomizedSearchCV and scored with R2, MAE and MSE on a held-out test set'],
    demo: 'https://www.kaggle.com/code/abdoalsman/bangalore-real-estate-price-modeling', demoLabel: 'View notebook on Kaggle',
  },
  {
    id: 'medical', image: '/projects/medical.jpg', title: 'Medical Insurance Cost Analysis & Prediction', category: 'AI & ML', accent: '#8B5CF6',
    summary: 'Finds what drives individual medical insurance charges, with a focus on smoking status, and prepares the data for prediction.',
    stack: ['Python', 'Pandas', 'scikit-learn', 'Seaborn'],
    metrics: [{ label: 'Target', value: 'Charges' }, { label: 'Focus', value: 'Smoker impact' }],
    architecture: ['Checked shape, types, nulls and duplicates in the insurance dataset', 'Label-encoded sex and smoker, one-hot encoded region', 'Visualised charges by age, smoker status and distribution', 'Feature set ready for regression models'],
    demo: 'https://www.kaggle.com/code/abdoalsman/medical-insurance-cost-analysis-prediction', demoLabel: 'View notebook on Kaggle',
  },
  {
    id: 'phones', image: '/projects/phones.jpg', title: 'Used Phones Price Prediction & Advanced EDA', category: 'AI & ML', accent: '#10B981',
    summary: 'Deep exploratory analysis of a one-million-row used phone market dataset, preparing features to predict resale price.',
    stack: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib'],
    metrics: [{ label: 'Dataset', value: '1M rows' }, { label: 'Target', value: 'Resale price' }],
    architecture: ['Profiled brand, release year, OS, damage and repair history', 'Label-encoded brand and model, ordinal-mapped city tier, one-hot encoded OS and seller type', 'Plotted price distributions against processor score, storage and condition', 'Model-ready feature table'],
    demo: 'https://www.kaggle.com/code/abdoalsman/used-phones-price-prediction-advanced-eda', demoLabel: 'View notebook on Kaggle',
  },
  {
    id: 'churn', image: '/projects/churn.jpg', title: 'Churn Prediction Data Pipeline', category: 'AI & ML', accent: '#00F0FF',
    summary: 'A cleaning and feature engineering pipeline for telecom customer churn, built to feed a classifier.',
    stack: ['Python', 'Pandas', 'NumPy', 'Seaborn'],
    metrics: [{ label: 'Domain', value: 'Telecom churn' }, { label: 'Stage', value: 'Data pipeline' }],
    architecture: ['Fixed TotalCharges types and filled missing values', 'Engineered num_services and tenure group features', 'Profiled service usage across customers', 'Output ready for model training'],
    demo: 'https://www.kaggle.com/code/abdoalsman/churn-prediction-data-pipeline-py', demoLabel: 'View notebook on Kaggle',
  },
  // Data analytics: real EDA notebooks. Swap in dashboard projects here when ready.
  {
    id: 'omnichannel', image: '/projects/omnichannel.jpg', title: 'Omnichannel Sales Performance EDA', category: 'Data Analytics', accent: '#8B5CF6',
    summary: 'Combines Cairo, Giza and nationwide sales files to compare revenue by region, channel, category and segment.',
    stack: ['Python', 'Pandas', 'Excel', 'Seaborn'],
    metrics: [{ label: 'Sources', value: '3 Excel files' }, { label: 'Cuts', value: 'Region, channel' }],
    architecture: ['Concatenated the Cairo, Giza and all-region workbooks', 'Derived year, month and day fields from dates', 'Grouped revenue by region, channel, category and quarter', 'Pivot of region against channel and a discount summary by category'],
    demo: 'https://www.kaggle.com/code/abdoalsman/omnichannel-sales-performance-eda', demoLabel: 'View notebook on Kaggle',
  },
  {
    id: 'student', image: '/projects/students.jpg', title: 'Student Course Enrollments & Performance', category: 'Data Analytics', accent: '#10B981',
    summary: 'Cleans a large university enrollment table and analyses course demand, delivery methods and grades.',
    stack: ['Python', 'Pandas', 'Excel', 'Matplotlib'],
    metrics: [{ label: 'Source', value: 'One big table' }, { label: 'Focus', value: 'Enrollment, grades' }],
    architecture: ['Typed ID and category columns, dropped personal fields', 'Filled ungraded records and normalised course titles', 'Counted enrollments per course and students by gender', 'Compared grades across delivery methods'],
    demo: 'https://www.kaggle.com/code/abdoalsman/student-course-enrollments-and-performance-dataset', demoLabel: 'View notebook on Kaggle',
  },
  {
    id: 'sf', image: '/projects/sf-employees.jpg', title: 'SF Employees Compensation: Cleaning & Insights', category: 'Data Analytics', accent: '#00F0FF',
    summary: 'Cleans San Francisco public employee pay data and pulls out job-title and take-home insights.',
    stack: ['Python', 'Pandas', 'Matplotlib'],
    metrics: [{ label: 'Focus', value: 'Pay and benefits' }, { label: 'Step', value: 'Cleaning' }],
    architecture: ['Dropped empty notes and status columns, filled missing benefits', 'Removed remaining nulls and checked duplicates', 'Ranked the top job titles', 'Calculated estimated net pay after tax'],
    demo: 'https://www.kaggle.com/code/abdoalsman/sf-employees-compensation-cleaning-insights', demoLabel: 'View notebook on Kaggle',
  },
  // Dashboard projects: REAL work from Abdo's own project files (screenshots in public/projects/da).
  // Figures below are read from the dashboards themselves. Tool names were inferred from the screenshots.
  {
    id: 'supply-chain', title: 'Supply Chain Analysis Dashboard', image: '/projects/da/supply-chain-0.jpg', category: 'Data Analytics', accent: '#F59E0B',
    summary: 'Multi-page Power BI report on sales, profit, delivery status and late orders across years, regions, departments and customer segments.',
    stack: ['Power BI', 'DAX', 'Data Modelling'],
    metrics: [{ label: 'Total sales', value: '36.78M' }, { label: 'Total orders', value: '66K' }],
    architecture: ['Overview page with sales by year, department, region map and delivery status', 'Sales & Profit page with profit by category and a category bubble chart', 'Products and Customer pages with top 10 products by sales and quantity', 'Orders page tracking late vs on-time orders and average shipping days'],
    gallery: ['/projects/da/supply-chain-1.jpg', '/projects/da/supply-chain-2.jpg', '/projects/da/supply-chain-3.jpg'], demo: '',
  },
  {
    id: 'cycles-sales', title: 'Cycles Sales & Product Dashboard', image: '/projects/da/cycles-sales-0.jpg', category: 'Data Analytics', accent: '#00F0FF',
    summary: 'Power BI sales report with orders by year, monthly trends, product sales by category, a territory map and drill-through tooltips.',
    stack: ['Power BI', 'DAX', 'Maps', 'Tooltips'],
    metrics: [{ label: 'Total due', value: '$123M' }, { label: 'Orders', value: '31K' }],
    architecture: ['KPI row for total due, orders, subtotal, freight and YoY growth', 'Orders by year and sales by month compared across years', 'Product sales by category and sales by territory map', 'Hover tooltips that break a product sale down by sub-category and country'],
    gallery: ['/projects/da/cycles-sales-1.jpg', '/projects/da/cycles-sales-2.jpg'], demo: '',
  },
  {
    id: 'bikes-store', title: 'Bikes Store Sales Dashboard', image: '/projects/da/bikes-store-0.jpg', category: 'Data Analytics', accent: '#EC4899',
    summary: 'Power BI report with a home page and separate sales, product and customer views, including year-over-year and month-over-month growth tables.',
    stack: ['Power BI', 'DAX', 'Navigation'],
    metrics: [{ label: 'Total sales', value: '$29M' }, { label: 'Customers', value: '18K' }],
    architecture: ['Landing page with sales, quantity, orders, customers, products and AOV', 'Sales overview with category split and top products by sales', 'Products overview with yearly and monthly growth versus last year', 'Page navigation buttons and country and month filters'],
    gallery: ['/projects/da/bikes-store-1.jpg', '/projects/da/bikes-store-2.jpg', '/projects/da/bikes-store-3.jpg'], demo: '',
  },
  {
    id: 'call-center', title: 'Call Center Analysis Dashboard', image: '/projects/da/call-center-0.jpg', category: 'Data Analytics', accent: '#00F0FF',
    summary: 'Call center performance report covering answer rate, resolution rate, speed of answer, handle time and satisfaction by agent, topic, day and hour.',
    stack: ['Power BI', 'Excel', 'Pivot Tables'],
    metrics: [{ label: 'Calls analysed', value: '5,000' }, { label: 'Resolution rate', value: '90%' }],
    architecture: ['KPI cards for answer rate, resolution rate, ASA, AHT and satisfaction', 'Calls by topic, by day, by month and by hour', 'Average handle time and satisfaction rating per agent', 'Excel pivot version and a second dark-themed report layout'],
    gallery: ['/projects/da/call-center-1.jpg', '/projects/da/call-center-2.jpg', '/projects/da/call-center-3.jpg'], demo: '',
  },
  {
    id: 'hr-performance', title: 'HR Employee Performance Dashboard', image: '/projects/da/hr-performance-0.jpg', category: 'Data Analytics', accent: '#F59E0B',
    summary: 'Bilingual HR dashboard on headcount, salary, tenure and performance change between 2019 and 2020 by location, department and job title.',
    stack: ['Power BI', 'DAX', 'Arabic RTL'],
    metrics: [{ label: 'Employees', value: '94' }, { label: 'Improved / declined', value: '27 / 62' }],
    architecture: ['KPI row for employees, total salary, average salary, age and experience', 'Headcount by department, location and gender', 'Performance 2019 vs 2020 by location, department and job title', 'Min, max and average salary by location, education and gender'],
    gallery: ['/projects/da/hr-performance-1.jpg', '/projects/da/hr-performance-2.jpg'], demo: '',
  },
  {
    id: 'recruitment', title: 'Recruitment Analysis Dashboard', image: '/projects/da/recruitment-0.jpg', category: 'Data Analytics', accent: '#10B981',
    summary: 'Hiring funnel report with applications, interview stages, time to hire, decline reasons, source of applicants and recruitment cost.',
    stack: ['Power BI', 'Excel', 'Funnel Charts'],
    metrics: [{ label: 'Applications', value: '50' }, { label: 'Days to hire', value: '37.4' }],
    architecture: ['Funnel from application to phone interview, onsite, offer and hire', 'Average time per recruitment stage', 'Applications by sector and by source, plus decline reasons', 'Internal, external and total cost with cost per hire'],
    gallery: ['/projects/da/recruitment-1.jpg', '/projects/da/recruitment-2.jpg'], demo: '',
  },
  {
    id: 'social-media', title: 'Social Media Analysis Dashboard', image: '/projects/da/social-media-0.jpg', category: 'Data Analytics', accent: '#EC4899',
    summary: 'Compares Facebook, Instagram, LinkedIn and X by impressions, reach, likes and new fans, with weekly trends and platform slicers.',
    stack: ['Excel', 'Pivot Tables', 'Slicers'],
    metrics: [{ label: 'Impressions', value: '2.34M' }, { label: 'Post reach', value: '1.64M' }],
    architecture: ['KPI cards for new fans, impressions, likes and post reach', 'Weekly impressions line chart by platform', 'Impressions and reach by platform with a combined overview chart', 'Platform and week slicers plus a summary table with response and engagement rate'],
    gallery: ['/projects/da/social-media-1.jpg', '/projects/da/social-media-2.jpg'], demo: '',
  },
  {
    id: 'cookies', title: 'Cookies Sales Report', image: '/projects/da/cookies-0.jpg', category: 'Data Analytics', accent: '#F59E0B',
    summary: 'Sales report for a cookie business: sales, cost, profit and quantity by cookie type, state, customer and month.',
    stack: ['Power BI', 'DAX'],
    metrics: [{ label: 'Total sales', value: '£4.69M' }, { label: 'Total profit', value: '£2.72M' }],
    architecture: ['KPI cards for sales, cost, profit and quantity', 'Total sales and orders by cookie type', 'Order count by state and orders by customer', 'Year, quarter and month slicers'],
    gallery: ['/projects/da/cookies-1.jpg'], demo: '',
  },
  {
    id: 'sales-profit', title: 'Sales & Profit Analysis (Excel)', image: '/projects/da/sales-profit-0.jpg', category: 'Data Analytics', accent: '#10B981',
    summary: 'Excel sales dashboard plus a pivot-based profit analysis, with slicers for region, quarter and year.',
    stack: ['Excel', 'Pivot Tables', 'Slicers', 'Conditional Formatting'],
    metrics: [{ label: 'Total profit', value: '£286K' }, { label: 'Years covered', value: '2015-2018' }],
    architecture: ['Sales by subcategory, by category and year, by month and by region', 'Profit by category, sub-category and month in pivot tables', 'Profit and order counts with trend arrows and data bars', 'Region, quarter and year slicers'],
    gallery: ['/projects/da/sales-profit-1.jpg'], demo: '',
  },
  {
    id: 'hr-analytics', title: 'HR Analytics Dashboard (Excel)', image: '/projects/da/hr-analytics-0.jpg', category: 'Data Analytics', accent: '#00F0FF',
    summary: 'Excel dashboard on employment type, employee status, education, branch and yearly hiring for a 200 person company.',
    stack: ['Excel', 'Pivot Charts', 'Dashboards'],
    metrics: [{ label: 'Employees', value: '200' }, { label: 'Branches', value: '5' }],
    architecture: ['Employment type by department', 'Employee status: active, terminated and on leave', 'Employee count by education and by branch', 'Hires per year and total bonus by department'],
    demo: '',
  },
  // Front-end: sites built and deployed by Abdo
  {
    id: 'elg', title: 'EL G PERFUMES', category: 'Creative Front-End', accent: '#8B5CF6',
    summary: 'Arabic luxury perfume brand site with a cinematic hero, product showcase and smooth motion.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    metrics: [{ label: 'Language', value: 'Arabic, RTL' }, { label: 'Hosting', value: 'Vercel' }],
    architecture: ['Hand-built responsive layout in Arabic with right-to-left support', 'Cinematic hero and product sections with smooth motion', 'Deployed from GitHub to Vercel with auto deploy on push'],
    demo: 'https://el-g-perfumes.vercel.app', demoLabel: 'Visit live site', repo: 'https://github.com/abdoalsman79-png/el-g-perfumes', image: '/projects/el-g-perfumes.jpg',
  },
  {
    id: 'sofra', title: 'Sofra: Egyptian Recipes', category: 'Creative Front-End', accent: '#F59E0B',
    summary: 'Step-by-step Egyptian cooking site in Arabic with illustrated steps, ingredient lists and a meal picker.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    metrics: [{ label: 'Recipes', value: '49' }, { label: 'Language', value: 'Arabic, RTL' }],
    architecture: ['49 recipes with ingredients and illustrated steps', 'What-should-I-eat picker by meal', 'Responsive on desktop and mobile', 'Auto-deployed from GitHub to Vercel'],
    demo: 'https://metricra-landing.vercel.app', demoLabel: 'Visit live site', repo: 'https://github.com/abdoalsman79-png/metricra-landing', image: '/projects/sofra.jpg',
  },
  {
    id: 'portfolio', title: 'This Portfolio', category: 'Creative Front-End', accent: '#00F0FF',
    summary: 'The site you are on: a human-to-robot X-ray reveal hero, WebGL neural network, live data sandbox and terminal.',
    stack: ['React', 'TypeScript', 'Three.js', 'Tailwind', 'Framer Motion'],
    metrics: [{ label: 'Hero', value: 'X-ray reveal' }, { label: '3D', value: 'React Three Fiber' }],
    architecture: ['Cursor spotlight mask with spring physics, plus a draggable scan beam on touch screens', 'React Three Fiber neural node layer with mouse parallax', 'Interactive analytics sandbox and project case-study drawer', 'All content centralised in portfolioData.ts'],
    demo: 'https://abdo-portfolio-ten.vercel.app', demoLabel: 'Visit live site', repo: 'https://github.com/abdoalsman79-png/abdo-portfolio', image: '/projects/portfolio.jpg',
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
