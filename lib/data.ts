// lib/data.ts — all content for the Tech Job Guide

export const TABS = [
  { id: "roadmap", label: "Roadmap", icon: "🗺️" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "checklist", label: "Checklist", icon: "✅" },
  { id: "resources", label: "Resources", icon: "📚" },
  { id: "tips", label: "Insider Tips", icon: "💡" },
] as const;

export type TabId = (typeof TABS)[number]["id"];

// ─── ROADMAP ────────────────────────────────────────────────────────────────
export interface RoadmapItem {
  id: string;
  week: string;
  title: string;
  body: string;
  tags: { label: string; variant: "default" | "accent" | "teal" }[];
}

export const ROADMAP: RoadmapItem[] = [
  {
    id: "r1",
    week: "Weeks 1–2",
    title: "Foundation & Role Targeting",
    body: "Audit your current skills against your target role (Marketing, Web/Growth, PM, Ops, Design). Research companies on your radar — size, funding stage, tech stack, culture. Define your unique angle: what can you bring that a generic applicant can't?",
    tags: [
      { label: "Skills audit", variant: "default" },
      { label: "Role research", variant: "default" },
      { label: "Target list", variant: "accent" },
    ],
  },
  {
    id: "r2",
    week: "Weeks 3–4",
    title: "Brand & Portfolio Polish",
    body: "Tighten your LinkedIn headline, portfolio (abigaillehr.com), and GitHub. Update SeaForth Strategies site to reflect your best recent work. Write a startup/tech-tailored resume — one page, impact metrics, no corporate filler. Show the full-stack marketer + builder combo.",
    tags: [
      { label: "Resume", variant: "default" },
      { label: "Portfolio", variant: "teal" },
      { label: "LinkedIn", variant: "default" },
      { label: "GitHub", variant: "default" },
    ],
  },
  {
    id: "r3",
    week: "Weeks 5–6",
    title: "Network Activation",
    body: "Join tech/startup Slack groups, Discord communities, and attend virtual demo days. Reach out to 5 people per week for informational interviews. Warm intros convert at 10x the rate of cold apps — your existing network is your edge.",
    tags: [
      { label: "Networking", variant: "default" },
      { label: "Warm outreach", variant: "accent" },
      { label: "Communities", variant: "default" },
    ],
  },
  {
    id: "r4",
    week: "Weeks 7–8",
    title: "Active Applications",
    body: "Apply to 5–10 targeted companies per week. Customize every cover letter to the company's mission and product. Use Wellfound, LinkedIn, YC job board, and direct outreach to founders or heads of marketing/growth at seed/Series A companies.",
    tags: [
      { label: "Applications", variant: "default" },
      { label: "Wellfound", variant: "teal" },
      { label: "Direct outreach", variant: "accent" },
    ],
  },
  {
    id: "r5",
    week: "Weeks 9–10",
    title: "Interview Prep Crunch",
    body: "Prepare STAR behavioral stories (you have great ones from the campaign + SeaForth). Study each company's product, metrics, competitors, and recent news. Practice presenting case studies from your portfolio — treat them as live problem-solving sessions.",
    tags: [
      { label: "STAR stories", variant: "accent" },
      { label: "Case studies", variant: "teal" },
      { label: "Company research", variant: "default" },
    ],
  },
  {
    id: "r6",
    week: "Weeks 11–12",
    title: "Offers & Negotiation",
    body: "For tech roles, evaluate total comp: salary, equity (options vs. RSUs), vesting, and benefits. Research benchmarks on Levels.fyi and Glassdoor. Never accept on the spot — always take 48 hours, always counter.",
    tags: [
      { label: "Offer eval", variant: "default" },
      { label: "Equity 101", variant: "accent" },
      { label: "Negotiation", variant: "default" },
    ],
  },
];

// ─── SKILLS ─────────────────────────────────────────────────────────────────
export interface Skill {
  name: string;
  width: number;
  level: string;
}

export interface SkillCategory {
  id: string;
  icon: string;
  title: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "sc1",
    icon: "📣",
    title: "Digital Marketing",
    skills: [
      { name: "Strategy & Campaign Execution", width: 95, level: "Expert" },
      { name: "SEO / Content Marketing", width: 80, level: "Strong" },
      { name: "Email Marketing & Automation", width: 85, level: "Strong" },
      { name: "Paid Ads (Meta, Google)", width: 65, level: "Growing" },
    ],
  },
  {
    id: "sc2",
    icon: "🌐",
    title: "Web & Development",
    skills: [
      { name: "Next.js / React (Cursor-assisted)", width: 75, level: "Solid" },
      { name: "HTML / CSS / JavaScript", width: 70, level: "Solid" },
      { name: "WordPress / Squarespace", width: 90, level: "Expert" },
      { name: "GitHub & Version Control", width: 75, level: "Solid" },
    ],
  },
  {
    id: "sc3",
    icon: "🎨",
    title: "Design & Brand",
    skills: [
      { name: "Visual Branding Systems", width: 90, level: "Expert" },
      { name: "Figma / Canva / Adobe", width: 85, level: "Strong" },
      { name: "UI/UX Fundamentals", width: 75, level: "Solid" },
      { name: "Social & Email Graphics", width: 92, level: "Expert" },
    ],
  },
  {
    id: "sc4",
    icon: "📊",
    title: "Analytics & Growth",
    skills: [
      { name: "GA4 & Event Tracking", width: 80, level: "Strong" },
      { name: "CRM Management", width: 85, level: "Strong" },
      { name: "Funnel Analysis & Reporting", width: 75, level: "Solid" },
      { name: "A/B Testing Concepts", width: 60, level: "Growing" },
    ],
  },
  {
    id: "sc5",
    icon: "🤖",
    title: "AI & Automation",
    skills: [
      { name: "AI-Assisted Development (Cursor)", width: 80, level: "Strong" },
      { name: "Prompt Engineering", width: 85, level: "Strong" },
      { name: "Workflow Automation", width: 75, level: "Solid" },
      { name: "AI-Assisted Copywriting", width: 90, level: "Expert" },
    ],
  },
  {
    id: "sc6",
    icon: "🤝",
    title: "Soft Skills (Tech Culture)",
    skills: [
      { name: "Bias to Action & Ownership", width: 98, level: "Core" },
      { name: "Cross-functional Communication", width: 90, level: "Expert" },
      { name: "Ambiguity Tolerance", width: 92, level: "Expert" },
      { name: "Client & Stakeholder Management", width: 95, level: "Expert" },
    ],
  },
];

// ─── CHECKLIST ───────────────────────────────────────────────────────────────
export interface ChecklistItem {
  id: string;
  text: string;
}

export interface ChecklistCard {
  id: string;
  icon: string;
  iconVariant: "yellow" | "teal" | "red" | "purple";
  title: string;
  items: ChecklistItem[];
}

export const CHECKLIST_CARDS: ChecklistCard[] = [
  {
    id: "cc1",
    icon: "🎯",
    iconVariant: "yellow",
    title: "Targeting & Research",
    items: [
      { id: "c1", text: "Define target role: Marketing, Growth, PM, or Design" },
      { id: "c2", text: "Build a list of 30–50 target tech companies" },
      { id: "c3", text: "Research each company's funding stage and product" },
      { id: "c4", text: "Read recent news and press releases for top targets" },
      { id: "c5", text: "Identify preferred company size (startup vs. scale-up vs. FAANG)" },
    ],
  },
  {
    id: "cc2",
    icon: "📄",
    iconVariant: "teal",
    title: "Resume & Profile",
    items: [
      { id: "c6", text: "Tailor resume to tech company job descriptions (keywords)" },
      { id: "c7", text: "Update LinkedIn headline: 'Digital Marketer & Web Builder for Tech'" },
      { id: "c8", text: "Create or refresh AngelList/Wellfound profile" },
      { id: "c9", text: "Pin 3 best GitHub repos with clear README files" },
      { id: "c10", text: "Update abigaillehr.com to reflect tech-focused positioning" },
    ],
  },
  {
    id: "cc3",
    icon: "🤝",
    iconVariant: "red",
    title: "Networking",
    items: [
      { id: "c11", text: "Join 3+ marketing/growth/tech Slack communities" },
      { id: "c12", text: "Attend 1 tech meetup, demo day, or virtual event" },
      { id: "c13", text: "Request 5 informational interviews with people at target companies" },
      { id: "c14", text: "Follow and engage with 10 tech founders and marketers on LinkedIn" },
      { id: "c15", text: "Ask 2 people in your network for warm introductions" },
    ],
  },
  {
    id: "cc4",
    icon: "🧠",
    iconVariant: "purple",
    title: "Interview Prep",
    items: [
      { id: "c16", text: "Prepare 5 STAR behavioral stories (campaign, SeaForth, events)" },
      { id: "c17", text: "Practice presenting 3 portfolio case studies as structured teardowns" },
      { id: "c18", text: "Prepare a 'why this company' answer for each target" },
      { id: "c19", text: "Practice explaining technical decisions to non-technical audiences" },
      { id: "c20", text: "Do 2 mock interviews via peers or interviewing.io" },
    ],
  },
  {
    id: "cc5",
    icon: "📬",
    iconVariant: "yellow",
    title: "Applications",
    items: [
      { id: "c21", text: "Write a startup/tech-tailored cover letter template" },
      { id: "c22", text: "Apply to first 10 companies (quality, not spray-and-pray)" },
      { id: "c23", text: "Set up job alerts on Wellfound, LinkedIn, and Greenhouse" },
      { id: "c24", text: "Track all applications in Notion or Airtable" },
      { id: "c25", text: "Follow up on every application after 7–10 days" },
    ],
  },
  {
    id: "cc6",
    icon: "💸",
    iconVariant: "teal",
    title: "Offer & Negotiation",
    items: [
      { id: "c26", text: "Research market comp on Levels.fyi and Glassdoor" },
      { id: "c27", text: "Understand equity: options vs RSUs, cliff, vesting schedule" },
      { id: "c28", text: "Evaluate company runway and growth trajectory" },
      { id: "c29", text: "Prepare a counter-offer script and walk-away number" },
      { id: "c30", text: "Negotiate confidently — never accept on the spot" },
    ],
  },
];

// ─── RESOURCES ───────────────────────────────────────────────────────────────
export interface Resource {
  id: string;
  type: "free" | "paid" | "community";
  title: string;
  desc: string;
}

export interface ResourceSection {
  id: string;
  tag: string;
  items: Resource[];
}

export const RESOURCE_SECTIONS: ResourceSection[] = [
  {
    id: "rs1",
    tag: "🔍 Job Boards",
    items: [
      { id: "r1", type: "free", title: "Wellfound (AngelList)", desc: "Best for startup roles. Filter by equity, remote, and funding stage." },
      { id: "r2", type: "free", title: "YC Work at a Startup", desc: "Curated jobs at Y Combinator portfolio companies — high signal." },
      { id: "r3", type: "free", title: "LinkedIn Jobs", desc: "Use 'company size: 11–200' filter to surface tech startup roles." },
      { id: "r4", type: "free", title: "Hacker News: Who's Hiring", desc: "Monthly thread with direct posts from founders. Very low noise." },
    ],
  },
  {
    id: "rs2",
    tag: "📖 Marketing & Growth Learning",
    items: [
      { id: "r5", type: "free", title: "Lenny's Newsletter", desc: "Deep dives on product, growth, and career — essential reading." },
      { id: "r6", type: "free", title: "Reforge Blog", desc: "High-level growth strategy content used by top tech companies." },
      { id: "r7", type: "paid", title: "CXL Institute", desc: "Marketing and growth certifications trusted by tech teams." },
      { id: "r8", type: "free", title: "Marketing Examined", desc: "Tactical breakdowns of real marketing campaigns from top brands." },
    ],
  },
  {
    id: "rs3",
    tag: "💻 Web & Dev Resources",
    items: [
      { id: "r9", type: "free", title: "Next.js Docs (nextjs.org)", desc: "Official documentation — start here for any Next.js questions." },
      { id: "r10", type: "free", title: "Cursor Docs (cursor.sh)", desc: "Master AI-assisted development to ship faster than most engineers." },
      { id: "r11", type: "free", title: "Vercel Platform", desc: "Deploy and manage your Next.js apps with zero config." },
      { id: "r12", type: "free", title: "ui.shadcn.com", desc: "Copy-paste React components — pairs perfectly with Next.js + Tailwind." },
    ],
  },
  {
    id: "rs4",
    tag: "🌐 Communities",
    items: [
      { id: "r13", type: "community", title: "Hacker News", desc: "The best tech community. Read daily to stay current." },
      { id: "r14", type: "community", title: "Product Hunt", desc: "Discover hot startups. Great for company research and who's hiring." },
      { id: "r15", type: "community", title: "Indie Hackers", desc: "Builders and founders. Great for understanding startup culture." },
      { id: "r16", type: "community", title: "Women in Tech Slack Groups", desc: "Elpha, Tech Ladies, and Women in Marketing are especially strong." },
    ],
  },
];

// ─── TIPS ────────────────────────────────────────────────────────────────────
export interface Tip {
  id: string;
  num: string;
  title: string;
  body: string;
}

export const TIPS: Tip[] = [
  {
    id: "t1",
    num: "01",
    title: "Your 'builder + marketer' combo is rare — lead with it",
    body: "Most marketers can't build. Most builders can't market. You do both — Next.js, Cursor, GA4, copy, brand, campaigns. That's a genuine superpower at a startup where one person needs to own digital end-to-end. Don't bury this. Make it your headline.",
  },
  {
    id: "t2",
    num: "02",
    title: "Warm intros beat cold apps 10:1",
    body: "Startups hire on trust. A referral from anyone inside the company — even a junior employee — leapfrogs you past hundreds of applicants. With your campaign and SeaForth network, you likely already know people adjacent to your targets. Activate them.",
  },
  {
    id: "t3",
    num: "03",
    title: "Show up with pre-work — audit their product before the interview",
    body: "Before any interview, analyze the company's website, SEO, social presence, and onboarding. Come in with 3 specific, actionable observations. This separates you from everyone who just 'wants to learn the space.' Founders remember this every time.",
  },
  {
    id: "t4",
    num: "04",
    title: "Frame every resume bullet around impact, not tasks",
    body: "Don't say 'managed social media.' Say 'grew engagement 40% YoY by shifting to short-form video, driving 2x campaign website traffic.' Tech hiring managers skim for numbers. Every bullet should answer: so what did it change?",
  },
  {
    id: "t5",
    num: "05",
    title: "Understand the company's primary metric before every interview",
    body: "Know their business model and core KPI — MRR, DAU, GMV, NPS, whatever it is. Then explain how your role would move that number. Saying 'I want to reduce CAC by improving top-of-funnel content quality' floors most interviewers.",
  },
  {
    id: "t6",
    num: "06",
    title: "Use your political campaign experience — it's more impressive than you think",
    body: "Running digital strategy for a real campaign — under pressure, with real stakes, at speed — is proof of execution under uncertainty. Tech companies love this. Position it as: shipped fast, adapted quickly, owned outcomes. That's startup DNA.",
  },
  {
    id: "t7",
    num: "07",
    title: "Target Series A–B companies for the best growth leverage",
    body: "Seed is too chaotic, FAANG too slow. Series A–B companies have product-market fit and are aggressively building their team. You can own a real function, grow with the company, and have genuine equity upside. This is your sweet spot.",
  },
  {
    id: "t8",
    num: "08",
    title: "Write cover letters that show you actually use the product",
    body: "Start with: 'I signed up for [product] last week and noticed X. Here's how I'd improve it.' This shows curiosity, initiative, and product thinking — all things startups need in a marketer who also builds. Generic letters get binned instantly.",
  },
  {
    id: "t9",
    num: "09",
    title: "Treat your job search like a sprint with weekly OKRs",
    body: "Set weekly targets: 5 applications, 2 coffee chats, 1 informational interview. Track it all in Airtable or Notion (tools you already use). Review your funnel weekly — if one stage is broken, iterate your approach. You know how to do this.",
  },
  {
    id: "t10",
    num: "10",
    title: "Always negotiate — they expect it",
    body: "Even early-stage startups build negotiation room into offers. Say: 'I'm really excited. Based on my research, I was expecting closer to X — is there flexibility?' Then go quiet. Silence is your friend. Never apologize for negotiating.",
  },
  {
    id: "t11",
    num: "11",
    title: "Ask questions that signal strategic thinking",
    body: "Strong questions: 'What's the biggest bottleneck to your growth right now?' / 'How does this role affect your core metric in year one?' / 'What would exceptional performance look like at 6 months?' These show you think like an owner, not a job-seeker.",
  },
  {
    id: "t12",
    num: "12",
    title: "Your first tech company job compounds everything",
    body: "Tech roles expose you to fast iteration, data-driven decisions, and high-leverage tools. Even 18 months at a growth-stage company will reshape how you think and work. Optimize for learning and ownership in your first role. Salary will follow.",
  },
];
