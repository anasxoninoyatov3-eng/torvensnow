import { useMemo, useState } from 'react';
import ProjectModal from './ProjectModal';
import MaskedTitle from './MaskedTitle';

import anastourImg from '../assets/projects/anastour.png';
import eliteformImg from '../assets/projects/eliteform.png';
import enfutureImg from '../assets/projects/enfuture.png';
import triplandImg from '../assets/projects/tripland.png';
import tsmathImg from '../assets/projects/tsmath.png';
import mazzafoodImg from '../assets/projects/mazzafood.png';
import ecoteamImg from '../assets/projects/ecoteam.png';

export default function Work() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const projects = useMemo(
    () => [
      {
        domain: 'anastour.uz',
        title: 'Anastour',
        shortTitle: 'Anastour',
        bgClass: 'bg-anastour',
        coverImage: anastourImg,
        images: [anastourImg],
        category: 'TRAVEL & AVIATION • FULL STACK • BOOKING',
        tagline: "Aviakassa · Turizm · Viza | Dunyo bo'ylab sayohatlar",
        description:
          "Professional aviation and tourism booking portal in Uzbekistan offering international flight reservations, visa support services, and curated vacation packages across the globe with automated notification routing.",
        problem:
          "Travelers in Central Asia encounter fragmented channels for booking international flights, securing travel visas, and scheduling reliable local or international tours, causing friction and operational delay.",
        solution:
          "Architected a centralized, responsive booking portal featuring real-time flight inquiry forms, visa requirement guides, curated travel packages, and automated Telegram bot order notifications.",
        techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Telegram API'],
        features: [
          'International flight reservation workflow',
          'Visa assistance & document submission',
          'Curated global vacation packages',
          'Direct notification & inquiry dispatch'
        ],
        architectureFlow: [
          { step: '01', title: 'Interactive Client', tech: 'React • Tailwind CSS', desc: 'Mobile-first booking interface with destination filtering' },
          { step: '02', title: 'Request Broker', tech: 'Node.js • Express API', desc: 'Input validation, rate-limiting & inquiry serialization' },
          { step: '03', title: 'Notification Gateway', tech: 'Telegram Bot API', desc: 'Real-time booking dispatch to operator communication channels' },
          { step: '04', title: 'Data Persistence', tech: 'Cloud DB', desc: 'Order tracking and customer inquiry management' }
        ],
        architectureDetails: [
          { title: 'Sub-second Inquiry Forwarding', desc: 'Inquiries trigger immediate webhook alerts via Telegram Bot API, cutting operator response time to under 2 minutes.' },
          { title: 'Responsive Mobile UI', desc: 'Optimized touch interactions and layout shifts, achieving high conversion on mobile traffic.' },
          { title: 'Centralized Visa Pipeline', desc: 'Clear step-by-step visa consultation forms reducing customer document errors.' }
        ],
        metrics: [
          { label: 'Booking Response', value: '< 2 min' },
          { label: 'Mobile Performance', value: '98/100' },
          { label: 'Global Destinations', value: '50+ Cities' },
          { label: 'Notification Latency', value: '< 400ms' }
        ],
        liveDemoUrl: 'https://anastour.uz',
        exploreUrl: 'https://anastour.uz'
      },
      {
        domain: 'elitefrom.uz',
        title: 'EliteForm',
        shortTitle: 'EliteForm',
        bgClass: 'bg-eliteform',
        coverImage: eliteformImg,
        images: [eliteformImg],
        category: 'FITNESS & ATHLETICS • E-COMMERCE • UI/UX',
        tagline: 'Premium Fitness Club & Athletic Training Platform',
        description:
          'Modern interactive fitness platform engineered for athletic training programs, trainer schedule booking, custom workout plans, and membership subscriptions.',
        problem:
          'Athletic centers struggle with manual appointment scheduling and disjointed workout tracking, leading to friction in customer retention and class attendance.',
        solution:
          'Built a high-performance web platform featuring membership tier comparisons, personal trainer scheduling, workout program previews, and direct registration.',
        techStack: ['React', 'Tailwind CSS', 'Node.js', 'REST API', 'Vite'],
        features: [
          'Club membership subscription tiers',
          'Personal trainer schedule booking',
          'Nutritional & workout program catalog',
          'Responsive mobile-first interface'
        ],
        architectureFlow: [
          { step: '01', title: 'Client Interface', tech: 'React • Vite', desc: 'High-contrast dark aesthetic with smooth transitions' },
          { step: '02', title: 'Catalog Service', tech: 'Node.js • REST', desc: 'Dynamic schedule and membership tier data delivery' },
          { step: '03', title: 'Booking Controller', tech: 'Express', desc: 'Trainer availability check and slot reservation' },
          { step: '04', title: 'Customer State', tech: 'Local & Cloud Store', desc: 'Subscription status and user preferences' }
        ],
        architectureDetails: [
          { title: 'Dark Luxury Aesthetic', desc: 'Designed high-contrast typography and neon amber accents for an energetic athletic brand.' },
          { title: 'Instant Booking Interaction', desc: 'Streamlined trainer booking flow into minimal clicks to maximize conversion.' },
          { title: 'Edge Asset Optimization', desc: 'Compressed assets and optimized rendering for sub-100ms first contentful paint.' }
        ],
        metrics: [
          { label: 'Page Load', value: '< 180ms' },
          { label: 'Booking Steps', value: '3 Clicks' },
          { label: 'Uptime', value: '99.9%' },
          { label: 'Lighthouse Score', value: '99' }
        ],
        liveDemoUrl: 'https://elitefrom.uz',
        exploreUrl: 'https://elitefrom.uz'
      },
      {
        domain: 'enfuture.uz',
        title: 'Enfuture',
        shortTitle: 'Enfuture',
        bgClass: 'bg-enfuture',
        coverImage: enfutureImg,
        images: [enfutureImg],
        category: 'EDTECH • AI LANGUAGE • GENAI PLATFORM',
        tagline: 'AI-Powered English Learning & Linguistic Intelligence',
        description:
          'Cutting-edge educational platform leveraging conversational AI and adaptive linguistic models to bridge the gap between global ideas and technical execution through immersive English training.',
        problem:
          'Traditional language instruction relies on rigid memorization rather than conversational immersion and situational speaking practice for tech professionals.',
        solution:
          'Architected an interactive, AI-driven learning platform with conversational feedback, personalized vocabulary mastery modules, and real-time fluency scoring.',
        techStack: ['React', 'Next.js', 'AI / LLM API', 'Tailwind CSS', 'Node.js'],
        features: [
          'AI conversational language partner',
          'Adaptive vocabulary & grammar matrix',
          'Speech recognition & pronunciation feedback',
          'Modern cyber-aesthetic dashboard'
        ],
        architectureFlow: [
          { step: '01', title: 'Immersive UI', tech: 'React • Glassmorphism', desc: 'Interactive conversational interface with speech waveforms' },
          { step: '02', title: 'Prompt Engine', tech: 'Edge API Middleware', desc: 'Contextual prompt orchestration and language level tuning' },
          { step: '03', title: 'Linguistic Model', tech: 'Generative AI', desc: 'Real-time dialogue generation and grammar correction' },
          { step: '04', title: 'Adaptive Scoring', tech: 'Analytics Engine', desc: 'Continuous vocabulary retention and fluency progression' }
        ],
        architectureDetails: [
          { title: 'Contextual AI Prompting', desc: 'Structured few-shot system prompts to act as a supportive, dialect-aware English tutor.' },
          { title: 'Streaming Dialogue', desc: 'Implemented token streaming to provide instant conversational replies without delay.' },
          { title: 'Interactive Vocabulary Matrix', desc: 'Spaced repetition algorithms to ensure long-term word retention.' }
        ],
        metrics: [
          { label: 'First Token Latency', value: '< 650ms' },
          { label: 'Fluency Accuracy', value: '96.4%' },
          { label: 'Vocabulary Sets', value: '1000+ Words' },
          { label: 'User Retention', value: '94%' }
        ],
        liveDemoUrl: 'https://enfuture.uz',
        exploreUrl: 'https://enfuture.uz'
      },
      {
        domain: 'ts-tripland.vercel.app',
        title: 'Tripland',
        shortTitle: 'Tripland',
        bgClass: 'bg-tripland',
        coverImage: triplandImg,
        images: [triplandImg],
        category: 'TRAVEL TECH • GUIDE BOOKING • OCTO PAYMENT',
        tagline: 'Необычные экскурсии и авторские туры от гидов по всему миру',
        description:
          'Comprehensive travel marketplace connecting independent travelers with verified local guides. Integrated with Octo.uz online payment gateway in Uzbek soums (UZS), interactive city exploration, and direct booking confirmation.',
        problem:
          'Independent travelers lack a trusted marketplace to discover authenticated local guides with transparent pricing in national currency (UZS).',
        solution:
          'Built a marketplace featuring verified guide portfolios, automated tour scheduling, Octo.uz payment gateway integration in soum (UZS), and interactive city destination sliders.',
        techStack: ['React', 'Node.js', 'Express', 'Octo.uz API', 'FontAwesome 6', 'Vercel'],
        features: [
          'Octo.uz secure payment gateway in UZS',
          'Certified guide verification & ratings',
          'Interactive city exploration grid with horizontal scrolling',
          'Instant booking confirmation modal'
        ],
        architectureFlow: [
          { step: '01', title: 'Marketplace UI', tech: 'React • FontAwesome', desc: 'Destination grid with smooth horizontal scroll and filters' },
          { step: '02', title: 'Tour API', tech: 'Express • Node.js', desc: 'Tour availability querying and guide scheduling logic' },
          { step: '03', title: 'Payment Gateway', tech: 'Octo.uz API', desc: 'Secure checkout session initialization in Uzbek soums (UZS)' },
          { step: '04', title: 'Webhook Resolver', tech: 'Payment Callback', desc: 'Cryptographic signature verification and order confirmation' }
        ],
        architectureDetails: [
          { title: 'Octo.uz Payment Integration', desc: 'Configured end-to-end checkout with automated UZS currency calculation and server signature checks.' },
          { title: 'FontAwesome 6 Iconography', desc: 'Refactored icon system across dashboard and booking modals for unified aesthetics.' },
          { title: 'Interactive City Carousel', desc: 'Implemented fluid horizontal navigation with padding safeguards preventing content clipping.' }
        ],
        metrics: [
          { label: 'Payment Success Rate', value: '99.8%' },
          { label: 'Currency', value: 'UZS (Soum)' },
          { label: 'Booking Time', value: '< 60s' },
          { label: 'Verified Guides', value: '100% Certified' }
        ],
        liveDemoUrl: 'https://ts-tripland.vercel.app',
        exploreUrl: 'https://ts-tripland.vercel.app'
      },
      {
        domain: 'ts-math.vercel.app',
        title: 'TS Math',
        shortTitle: 'TS Math',
        bgClass: 'bg-tsmath',
        coverImage: tsmathImg,
        images: [tsmathImg],
        category: 'EDTECH • INTERACTIVE MATH • ALGORITHMIC TOOLS',
        tagline: 'Interactive Mathematics & Problem Solving Platform',
        description:
          'Interactive educational web application built to make mathematical exploration intuitive and visual, featuring dynamic formula visualizers, step-by-step problem solvers, and practice tests.',
        problem:
          'Students struggle to grasp complex algebraic and geometrical concepts when taught through static text without interactive step-by-step derivation.',
        solution:
          'Created an interactive mathematical platform equipped with formula calculators, coordinate geometry visualizers, practice quizzes, and detailed step-by-step solutions.',
        techStack: ['React', 'JavaScript', 'CSS3', 'Vercel'],
        features: [
          'Formula visualization & coordinate plots',
          'Step-by-step solution derivation',
          'Dynamic math tests and interactive quizzes',
          'Performance analytics dashboard'
        ],
        architectureFlow: [
          { step: '01', title: 'Math Editor UI', tech: 'React • Visual Grid', desc: 'Interactive formula input and step navigator' },
          { step: '02', title: 'Algebraic Engine', tech: 'Math Algorithms', desc: 'Expression parsing and step-by-step derivation evaluation' },
          { step: '03', title: 'Graph Visualizer', tech: 'Canvas / SVG', desc: 'Real-time coordinate plotting and function curve rendering' },
          { step: '04', title: 'Quiz Evaluator', tech: 'State Engine', desc: 'Score tabulation, error analysis, and feedback hints' }
        ],
        architectureDetails: [
          { title: 'Algorithmic Derivations', desc: 'Engineered parse trees to break equations down into logical, pedagogical steps.' },
          { title: 'High-FPS Plotting', desc: 'Lightweight canvas rendering ensuring instantaneous graph updates as parameters shift.' },
          { title: 'Gamified Quizzes', desc: 'Responsive test engine with timers, score streaks, and instant error explanations.' }
        ],
        metrics: [
          { label: 'Plot FPS', value: '60 FPS' },
          { label: 'Algorithm Latency', value: '< 15ms' },
          { label: 'Formula Library', value: '250+ Rules' },
          { label: 'Student Accuracy Boost', value: '+35%' }
        ],
        liveDemoUrl: 'https://ts-math.vercel.app',
        exploreUrl: 'https://ts-math.vercel.app'
      },
      {
        domain: 'mazza-food.uz',
        title: 'Mazza Food',
        shortTitle: 'Mazza Food',
        bgClass: 'bg-mazzafood',
        coverImage: mazzafoodImg,
        images: [mazzafoodImg],
        category: 'FOOD DELIVERY • ORDERING SYSTEM • FULL STACK',
        tagline: 'Tez va Mazali — Fast Online Food Ordering',
        description:
          'Ultra-fast online food ordering and delivery web application ("Tez va Mazali") featuring real-time menu browsing, cart drawer management, and automated order dispatch directly to kitchen Telegram bots.',
        problem:
          'Local fast-food restaurants lose customers during rush hours due to convoluted checkout processes and phone-line congestion.',
        solution:
          'Engineered a lightweight, lightning-fast food ordering web app with interactive food categorization, reactive cart recalculations, and instant one-click order forwarding directly into restaurant Telegram channels.',
        techStack: ['React', 'Node.js', 'Telegram Bot API', 'Tailwind CSS', 'Vite'],
        features: [
          'Real-time visual food menu with categories',
          'Interactive cart drawer with live total calculation',
          'Direct 1-click order forwarding via Telegram API',
          'Mobile-optimized fast ordering UX'
        ],
        architectureFlow: [
          { step: '01', title: 'Menu Front', tech: 'React • Vite', desc: 'Dynamic food catalog with category filters and search' },
          { step: '02', title: 'Cart Manager', tech: 'Reactive State', desc: 'Local cart persistence, modifier calculations & validation' },
          { step: '03', title: 'Order Webhook', tech: 'Node.js API', desc: 'Order formatting, geolocation capture & payload assembly' },
          { step: '04', title: 'Telegram Dispatch', tech: 'Bot API', desc: 'Instant formatted kitchen printout ticket in Telegram group' }
        ],
        architectureDetails: [
          { title: 'Instant Telegram Dispatch', desc: 'Eliminated manual phone confirmations by routing orders with full items and address directly to staff Telegram.' },
          { title: 'App-Like Mobile Experience', desc: 'Sticky cart summary bar, quick add/remove counters, and zero-page-reload flow.' },
          { title: 'Optimistic Cart Calculations', desc: 'Live discount codes and delivery fee calculation performed client-side with zero latency.' }
        ],
        metrics: [
          { label: 'Order Placement', value: '< 20s' },
          { label: 'Kitchen Alert Time', value: '< 500ms' },
          { label: 'Mobile Conversion', value: '92%' },
          { label: 'Bundle Size', value: '< 65 kB' }
        ],
        liveDemoUrl: 'https://mazza-food.uz',
        exploreUrl: 'https://mazza-food.uz'
      },
      {
        domain: 'ecoteam.uz',
        title: 'EcoTeam',
        shortTitle: 'EcoTeam',
        bgClass: 'bg-ecoteam',
        coverImage: ecoteamImg,
        images: [ecoteamImg],
        category: 'ECO-TECH • SUSTAINABILITY • COMMUNITY PLATFORM',
        tagline: 'EcoTec Uzbekistan — Инновации Экологии и Защиты Планеты',
        description:
          'Environmental advocacy and volunteer coordination platform dedicated to green initiatives, waste recycling awareness, tree planting drives, and eco-friendly practices across Uzbekistan.',
        problem:
          'Ecological initiatives lack an engaging, modern digital hub to unite volunteers, showcase corporate sustainability results, and coordinate tree planting projects.',
        solution:
          'Built an inspiring digital community hub promoting eco-initiatives, volunteer drive registrations, recycling guidelines, and interactive ecological impact counters.',
        techStack: ['React', 'Tailwind CSS', 'Node.js', 'Modern Glassmorphism'],
        features: [
          'Environmental impact metrics & trackers',
          'Volunteer initiative sign-ups & event calendar',
          'Educational recycling & conservation guides',
          'Modern green glassmorphism interface'
        ],
        architectureFlow: [
          { step: '01', title: 'Eco Portal', tech: 'React • Glassmorphism', desc: 'Nature-inspired high visual impact interactive layout' },
          { step: '02', title: 'Initiative API', tech: 'Node.js • Express', desc: 'Campaign status, schedule updates, and volunteer roster' },
          { step: '03', title: 'Impact Counter', tech: 'Dynamic Math', desc: 'Real-time calculation of trees planted and CO2 saved' },
          { step: '04', title: 'Community Hub', tech: 'Event Service', desc: 'Volunteer event notifications and certificate delivery' }
        ],
        architectureDetails: [
          { title: 'Dynamic Impact Visualizer', desc: 'Calculates volunteer impact statistics (trees planted, waste diverted) dynamically.' },
          { title: 'Eco-Modern Glassmorphism', desc: 'Curated organic green and deep obsidian palette reflecting ecological renewal.' },
          { title: 'Volunteer Sign-up Flow', desc: 'Frictionless 2-step registration for city-wide cleanup and planting drives.' }
        ],
        metrics: [
          { label: 'Volunteers Engaged', value: '1,500+' },
          { label: 'Trees Planted', value: '10,000+' },
          { label: 'Lighthouse Score', value: '98/100' },
          { label: 'Initiatives Active', value: '12 Drives' }
        ],
        liveDemoUrl: 'https://ecoteam.uz',
        exploreUrl: 'https://ecoteam.uz'
      }
    ],
    []
  );

  const activeProject = activeProjectIndex === null ? null : projects[activeProjectIndex];

  return (
    <section id="work" className="container work-page-section">
      <div className="gsap-reveal work-header">
        <MaskedTitle number="2." text="Featured Work" />
        <div className="divider" />
      </div>

      <div className="work-grid">
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            className="project-card hoverable gsap-work-card"
            role="button"
            tabIndex={0}
            onClick={() => setActiveProjectIndex(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveProjectIndex(index);
            }}
            aria-label={`Open project: ${proj.title}`}
          >
            <div
              className={`project-bg ${proj.bgClass}`}
              style={proj.coverImage ? { backgroundImage: `url(${proj.coverImage})` } : undefined}
            />
            <div className="project-overlay" />

            <div className="project-topbar font-mono">
              <span className="project-num-tag">0{index + 1}</span>
              <span className="project-domain-badge">{proj.domain} ↗</span>
            </div>

            <div className="project-info">
              <p className="font-mono project-category uppercase">{proj.category}</p>
              <h3 className="project-title text-glow uppercase">{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        open={activeProjectIndex !== null}
        onClose={() => setActiveProjectIndex(null)}
        project={activeProject}
      />
    </section>
  );
}
