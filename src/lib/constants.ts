// ── Site-wide constants ──────────────────────────────

export const SITE = {
  name: "Acosta Labs",
  url: "https://acostalabs.com",
  author: "Juan Pablo Acosta",
  title: "Software Engineer | AI-Augmented Product Development",
  email: "jp@acostalabs.com",
  phone: "+57 3117700750",
  location: "Armenia, Quindío, Colombia",
  linkedin: "https://www.linkedin.com/in/juan-pablo-acosta-91a521195/",
  github: "https://github.com/JPablo67",
  whatsapp: "https://wa.me/573117700750",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;

export const SERVICES = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web applications built with modern frameworks. From scalable backends (Java, Node.js, Python) to pixel-perfect frontends (React, Angular, Next.js).",
    icon: "Code2" as const,
    highlights: ["React / Next.js", "Java Spring Boot", "Node.js / Python", "TypeScript"],
  },
  {
    title: "AI & LLM Integration",
    description:
      "Transform your business with AI-powered features. Custom chatbots, recommendation engines, RAG pipelines, and intelligent automation using OpenAI, Anthropic, and open-source models.",
    icon: "Brain" as const,
    highlights: ["OpenAI / Anthropic", "RAG Pipelines", "Chatbots", "Personalization"],
  },
  {
    title: "E-Commerce Solutions",
    description:
      "High-converting online stores and marketplace platforms. Shopify custom development, payment gateway integration, and omnichannel commerce strategies that drive real revenue growth.",
    icon: "ShoppingCart" as const,
    highlights: ["Shopify / WooCommerce", "Payment Gateways", "SEO Optimization", "300%+ Revenue Growth"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure and automated deployment pipelines. Docker, Kubernetes, CI/CD, and server management for zero-downtime releases and production-grade reliability.",
    icon: "Cloud" as const,
    highlights: ["AWS / Azure", "Docker / K8s", "CI/CD Pipelines", "Server Management"],
  },
] as const;

export const EXPERIENCES = [
  {
    role: "Full-Stack Developer",
    company: "Salvatech",
    period: "Oct 2024 – Present",
    description:
      "Engineered a 300%+ sales increase by designing a full-stack platform re-architecture — decomposing a monolith into a distributed, service-oriented architecture. Led end-to-end product delivery coordinating multidisciplinary teams, integrated AI-powered features, and unified complex business ecosystems.",
    highlights: [
      "300%+ sales growth through distributed architecture redesign and UX optimization",
      "Designed system architecture for zero-downtime deployments with containerized microservices",
      "Built AI-powered recommendation engines, chatbots, and personalization modules (OpenAI, Anthropic)",
      "Accelerated development with AI-augmented workflows: Claude Code, Copilot, and custom RAG pipelines",
      "Architected distributed integration layer across ERPs, payment gateways, CRM, and POS systems",
      "Centralized business intelligence into automated dashboards (Looker Studio, Power BI, Zoho Analytics)",
    ],
    tech: ["React", "Angular", "Java", "Spring Boot", "Node.js", "Python", "Docker", "Kubernetes", "AI/LLMs"],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "Tecnisoft",
    period: "Nov 2023 – Oct 2024",
    description:
      "Delivered full-stack applications for international clients, achieving 99.9% uptime. Designed scalable software architectures, built workflow automation tooling, and developed real-time tracking and business reporting systems.",
    highlights: [
      "99.9% uptime across production environments for international clients",
      "Designed service boundaries, API contracts, and data flow patterns for scalable architectures",
      "Built custom workflow automation that dramatically improved team productivity",
      "Developed real-time tracking and reporting dashboards for data-driven decision-making",
      "Architected e-commerce and cross-platform mobile solutions (Shopify, Flutter, React Native)",
    ],
    tech: ["React", "Angular", "Java", "Python", "Shopify", "PostgreSQL", "Docker", "AWS"],
  },
  {
    role: "Software Engineer & AI Researcher",
    company: "REDSI",
    period: "Jan 2022 – Jan 2024",
    description:
      "Architected research-backed AI solutions with a microservices architecture, integrating NLP APIs for intelligent chatbots. Led cross-functional collaboration in Agile environments.",
    highlights: [
      "Designed microservices architecture with REST and message queue communication",
      "Integrated AI/NLP APIs for intelligent chatbot and content processing systems",
      "Engineered decoupled frontends with API gateway patterns",
      "Led cross-functional coordination across troubleshooting and third-party integrations",
    ],
    tech: ["Angular", "Java", "Spring Boot", "Python", "Node.js", "Docker", "Kubernetes"],
  },
  {
    role: "IT Support Specialist",
    company: "IT Concierge",
    period: "Oct 2018 – Jan 2020",
    description:
      "Provided bilingual technical support ensuring 99% uptime for business-critical systems. Managed incident tracking and IT infrastructure maintenance.",
    highlights: [
      "Ensured 99% uptime for business-critical systems",
      "Streamlined workflows reducing incident resolution times",
    ],
    tech: ["JIRA", "Linux", "Networking", "Security"],
  },
] as const;

export const TECH_STACK = {
  Frontend: [
    { name: "React" },
    { name: "Next.js" },
    { name: "Angular" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "HTML/CSS" },
    { name: "Shopify Liquid" },
  ],
  Backend: [
    { name: "Java / Spring Boot" },
    { name: "Python (FastAPI, Django)" },
    { name: "Node.js / Express" },
    { name: "Ruby" },
    { name: "PHP" },
    { name: "Kotlin" },
    { name: "REST / GraphQL APIs" },
  ],
  "AI & ML": [
    { name: "OpenAI API" },
    { name: "Anthropic (Claude)" },
    { name: "RAG Pipelines" },
    { name: "Prompt Engineering" },
    { name: "AI Agent Development" },
    { name: "TensorFlow / PyTorch" },
    { name: "NLP / LLMs" },
    { name: "N8N (AI Automation)" },
  ],
  "AI-Augmented Dev": [
    { name: "Claude Code" },
    { name: "GitHub Copilot" },
    { name: "Cursor" },
    { name: "AI Code Review" },
    { name: "Context-Aware Models" },
  ],
  "Cloud & DevOps": [
    { name: "AWS" },
    { name: "Azure" },
    { name: "GCP" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "CI/CD (GitHub Actions)" },
    { name: "Nginx" },
    { name: "Linux Server Admin" },
    { name: "Serverless (Lambda)" },
  ],
  Databases: [
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "MongoDB" },
  ],
  "Architecture": [
    { name: "Distributed Systems" },
    { name: "High-Concurrency" },
    { name: "Software Architecture" },
    { name: "Microservices" },
    { name: "OOP / SOLID" },
    { name: "Agile (Scrum/Kanban)" },
  ],
} as const;

export const PROJECTS = [
  {
    title: "E-Commerce Platform Transformation",
    description:
      "Full-stack overhaul of a high-traffic retail/wholesale platform that drove 300%+ sales growth and 5x user scaling. Modernized the UI, stabilized the backend, integrated AI-powered recommendations, and achieved 99.9% uptime with 95+ Lighthouse scores.",
    tags: ["React", "Java", "Spring Boot", "AI", "E-Commerce"],
    category: "E-Commerce",
    metrics: "300%+ sales · 5x users · 99.9% uptime · 95+ Lighthouse",
    image: "/images/projects/ecommerce-platform.webp",
  },
  {
    title: "AI-Powered Educational Chatbot",
    description:
      "Custom AI chatbot designed for children's education, featuring age-appropriate interactions, guided content, and safety-focused conversational design. Built with modern LLM APIs.",
    tags: ["Python", "OpenAI", "NLP", "React", "Education"],
    category: "AI",
    metrics: "Research-backed AI solution",
    image: "/images/projects/ai-chatbot.webp",
  },
  {
    title: "Business Intelligence Dashboard",
    description:
      "Centralized analytics platform synthesizing data from ERPs, CRMs, and marketing tools into real-time dashboards with A/B testing and heatmapping insights.",
    tags: ["React", "Node.js", "PostgreSQL", "Analytics", "REST API"],
    category: "Web",
    metrics: "Unified 5+ data streams",
    image: "/images/projects/bi-dashboard.webp",
  },
  {
    title: "Omnichannel Commerce Ecosystem",
    description:
      "Unified operations across ERPs (SAP, Zoho), payment gateways (Stripe, PayPal), CRM platforms (Salesforce), and POS systems with real-time sync.",
    tags: ["Java", "Node.js", "Shopify", "Stripe", "Docker"],
    category: "E-Commerce",
    metrics: "Real-time sync across 8+ systems",
    image: "/images/projects/omnichannel.webp",
  },
] as const;

export const GLOBE_ARCS = [
  { startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, label: "NYC → London" },
  { startLat: 40.7128, startLng: -74.006, endLat: 35.6762, endLng: 139.6503, label: "NYC → Tokyo" },
  { startLat: 37.7749, startLng: -122.4194, endLat: 1.3521, endLng: 103.8198, label: "SF → Singapore" },
  { startLat: 4.533889, startLng: -75.681389, endLat: 40.7128, endLng: -74.006, label: "Colombia → NYC" },
  { startLat: 4.533889, startLng: -75.681389, endLat: 51.5074, endLng: -0.1278, label: "Colombia → London" },
  { startLat: -23.5505, startLng: -46.6333, endLat: 48.8566, endLng: 2.3522, label: "São Paulo → Paris" },
  { startLat: 51.5074, startLng: -0.1278, endLat: 25.2048, endLng: 55.2708, label: "London → Dubai" },
  { startLat: 51.5074, startLng: -0.1278, endLat: 35.6762, endLng: 139.6503, label: "London → Tokyo" },
  { startLat: 48.8566, startLng: 2.3522, endLat: 28.6139, endLng: 77.209, label: "Paris → Delhi" },
  { startLat: 25.2048, startLng: 55.2708, endLat: 1.3521, endLng: 103.8198, label: "Dubai → Singapore" },
  { startLat: 25.2048, startLng: 55.2708, endLat: -1.2921, endLng: 36.8219, label: "Dubai → Nairobi" },
  { startLat: 35.6762, startLng: 139.6503, endLat: 1.3521, endLng: 103.8198, label: "Tokyo → Singapore" },
  { startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, label: "Singapore → Sydney" },
  { startLat: 28.6139, startLng: 77.209, endLat: 51.5074, endLng: -0.1278, label: "Delhi → London" },
  { startLat: -33.8688, startLng: 151.2093, endLat: 37.7749, endLng: -122.4194, label: "Sydney → SF" },
] as const;

export const METRICS = [
  { value: "300%+", label: "Sales Growth Delivered" },
  { value: "5x", label: "User Scaling Achieved" },
  { value: "99.9%", label: "Uptime (Grafana / Prometheus)" },
  { value: "95+", label: "Lighthouse Score" },
] as const;
