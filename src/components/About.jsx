import profilePhoto from '../assets/MYphoto.jpeg';
import EngineeringTelemetry from './EngineeringTelemetry';
import Timeline from './Timeline';
import MaskedTitle from './MaskedTitle';

export default function About() {
  return (
    <div className="about-page-wrapper">
      {/* 1. Core Background & Engineering Philosophy */}
      <section id="about" className="container about-intro-section">
        <div className="about-grid">
          <div className="gsap-reveal">
            <MaskedTitle number="1." text="About Me" />
            <div className="divider" />
            <p className="text-gray about-text">
              I'm Torvensnow, a passionate Full Stack Developer focused on building modern, scalable, and user-friendly web applications. I specialize in crafting responsive UI layouts, designing efficient backend architectures, and developing seamless API integrations using modern technologies. Rather than just writing code, I focus on solving real-world problems through clean architecture, creative thinking, and AI-assisted development. I continuously explore new tools and technologies to optimize workflows, improve performance, and deliver high-quality digital experiences. My goal is to transform ideas into reliable, production-ready applications with elegant design and powerful functionality.
            </p>
            <div className="font-mono text-gray skill-list text-sm">
              <p><span style={{ color: '#fff' }}></span> System Architecture & Data Flows</p>
              <p><span style={{ color: '#fff' }}></span> AI-Augmented Code Synthesis & Prompting</p>
              <p><span style={{ color: '#fff' }}></span> UI Layout Craft (HTML, CSS, Tailwind)</p>
              <p><span style={{ color: '#fff' }}></span> Cloud & Edge Deployments (Cloudflare & Vercel)</p>
            </div>
          </div>

          <div className="abstract-box hoverable gsap-reveal">
            <div className="about-photo-wrapper">
              <img
                src={profilePhoto}
                alt="Torvensnow - Full Stack Developer"
                className="about-photo-img"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Real-Time Engineering Telemetry & Verified Command Channels */}
        <EngineeringTelemetry />
      </section>

      {/* 2. Interactive Evolution Roadmap (Auto-looping + Move Buttons) */}
      <Timeline />
    </div>
  );
}


