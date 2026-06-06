// Data Models extracted systematically from KAVITA BISHT.pdf
// Project URLs are explicitly mapped to target repository profiles
const projects = [
  {
    title: 'Healthcare Cost Analysis',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI'],
    problem: 'Healthcare organizations need to understand factors driving medical insurance charges to improve cost forecasting and decision-making.',
    repoUrl: 'https://github.com/KavitaBishtDataScientist',
    tasks: [
      'Performed Exploratory Data Analysis (EDA) on healthcare insurance data.',
      'Analyzed the impact of age, BMI, smoking status, and region on medical insurance charges.',
      'Conducted statistical analysis and created visualizations to identify trends and patterns.',
      'Developed an interactive Power BI dashboard to present business insights and cost forecasting.'
    ]
  },
  {
    title: 'Superstore Sales Analysis',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    problem: 'Retail businesses need insights into sales performance, profitability, and customer behavior to improve decision-making.',
    repoUrl: 'https://github.com/KavitaBishtDataScientist',
    tasks: [
      'Conducted EDA on retail sales data across sales, profit, discount, and segments.',
      'Identified top-performing categories, products, and customer segments.',
      'Investigated loss-making products and regions to locate leakages.',
      'Evaluated the impact of aggressive discounts on absolute business profitability.'
    ]
  },
  {
    title: 'Traffic Data Analysis',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    problem: 'Aide transit management frameworks via automated constraint and peak congestion processing pipelines.',
    repoUrl: 'https://github.com/KavitaBishtDataScientist',
    tasks: [
      'Cleaned and analyzed dense regional structural traffic datasets.',
      'Identified peak traffic hours and recurring bottleneck congestion patterns.',
      'Created visualizations to highlight traffic density maps and timeline trends.',
      'Generated insights to support structural routing optimizations.'
    ]
  },
  {
    title: 'Weather Data Analysis',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    problem: 'Understand macro climate trends and localize metric anomalies from climate tables.',
    repoUrl: 'https://github.com/KavitaBishtDataScientist',
    tasks: [
      'Analyzed weather datasets containing temperature, rainfall, and climate metrics.',
      'Identified unique seasonal trends and mathematical weather anomalies.',
      'Created visual execution records to communicate metrics directly to stakeholders.'
    ]
  },
  {
    title: 'Spotify Data Analysis',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    problem: 'Map audio feature metrics to evaluate global popularity indexes of modern audio media tracking.',
    repoUrl: 'https://github.com/KavitaBishtDataScientist',
    tasks: [
      'Analyzed song popularity, artist performance metrics, and key audio features.',
      'Explored underlying properties influencing listener metric preferences.',
      'Isolated statistical characteristics highly correlated with popular performance tracks.'
    ]
  },
  {
    title: 'NASDAQ Stock Market Analysis',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    problem: 'Translate raw historical market quotes into clear directional price fluctuations.',
    repoUrl: 'https://github.com/KavitaBishtDataScientist',
    tasks: [
      'Performed exploratory data analysis on historical stock indices.',
      'Studied intraday price movements, structural trends, and trading volumes.',
      'Engineered clean charts useful for structural market data processing.'
    ]
  }
];

const experience = [
  { role: 'PRT Teacher (Mathematics & EVS/Science)', institution: 'Rainbow Cantonment Public School, Agra', timeline: '2022 - 2023' },
  { role: 'PRT Teacher (Mathematics & EVS/Science)', institution: 'Delhi Public School, Agra', timeline: '2017 - 2022' },
  { role: 'PRT Teacher (Mathematics & EVS/Science)', institution: 'Shemford Futuristic School, Agra', timeline: '2015 - 2017' },
  { role: 'Mother Teacher - Class 1', institution: 'Wellam Garden School, Agra', timeline: '2014 - 2015' }
];

const education = [
  { degree: 'Diploma in Data Analyst', institution: 'VijAi Robotics, Haldwani', info: 'Core Analytics Focus' },
  { degree: 'D.EL.ED (Diploma in Elementary Education)', institution: 'DIET, Agra', info: 'Class of 2019' },
  { degree: 'Bachelor of Commerce (B.Com)', institution: 'Dr. B.R. Ambedkar University, Agra', info: 'Class of 2015' }
];

// Single Page Application (SPA) Multi-page Routing Engine
function switchPage(pageId) {
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  const targetedSection = document.getElementById(`page-${pageId}`);
  const targetedLink = document.getElementById(`nav-${pageId}`);
  
  if(targetedSection) targetedSection.classList.add('active');
  if(targetedLink) targetedLink.classList.add('active');
  
  window.scrollTo(0,0);
}

// Render Engine Hook
document.addEventListener('DOMContentLoaded', () => {
  const projectGrid = document.getElementById('projectGrid');
  projectGrid.innerHTML = ''; // Clear previous elements
  
  // Populate Project Collections dynamically with strict anchor tag redirections
  projects.forEach(p => {
    const card = document.createElement('a');
    card.className = 'panel project-card';
    card.href = p.repoUrl;
    card.target = '_blank';
    card.rel = 'noreferrer';
    card.innerHTML = `
      <div>
        <h3>${p.title}</h3>
        <div class="business-problem"><strong>Problem:</strong> ${p.problem}</div>
        <h4>Key Responsibilities</h4>
        <ul class="responsibilities-list">
          ${p.tasks.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
      <div>
        <div class="tags">
          ${p.tools.map(tool => `<span>${tool}</span>`).join('')}
        </div>
      </div>
    `;
    projectGrid.appendChild(card);
  });

  // Populate Professional History Timeline
  const expContainer = document.getElementById('experienceList');
  experience.forEach(e => {
    const block = document.createElement('div');
    block.className = 'timeline-item';
    block.innerHTML = `
      <h3>${e.role}</h3>
      <div class="meta-location">${e.institution}</div>
      <p>Tenure: ${e.timeline} — Handled educational target configurations, performance management, and complex structural delivery metrics.</p>
    `;
    expContainer.appendChild(block);
  });

  // Populate Educational Qualifications
  const eduContainer = document.getElementById('educationList');
  education.forEach(edu => {
    const eCard = document.createElement('div');
    eCard.className = 'panel edu-card';
    eCard.innerHTML = `
      <h3>${edu.degree}</h3>
      <p>${edu.institution}</p>
      <span style="font-size:0.8rem; color:var(--color-cyan); font-weight:600;">${edu.info}</span>
    `;
    eduContainer.appendChild(eCard);
  });

  // Comment Box Form Controller 
  const form = document.getElementById('portfolioForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const message = document.getElementById('form-message').value;
    const status = document.getElementById('form-status');

    console.log(`%cNew Portfolio Feedback Captured!`, 'color: #34d399; font-weight: bold; font-size: 1.2rem;');
    console.log(`From: ${name} (${email})\nMessage: ${message}`);
    
    status.style.color = 'var(--color-teal)';
    status.textContent = `Thank you, ${name}! Your comment was successfully captured and simulated in the console logs.`;
    form.reset();
  });
});