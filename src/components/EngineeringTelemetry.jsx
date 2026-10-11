import { useAudio } from '../hooks/useAudio';
import profilePhoto from '../assets/MYphoto.jpeg';

export default function EngineeringTelemetry() {
  const { playHoverSound, playClickSound } = useAudio();

  return (
    <div className="telemetry-command-deck gsap-reveal font-mono">
      {/* Top Header Bar - Clean and Professional */}
      <div className="telemetry-header">
        <div className="telemetry-header-left">
          <span className="telemetry-live-dot" />
          <span className="telemetry-hud-tag">Current Activity & Profiles</span>
        </div>
        <span className="telemetry-hud-status">Active in 2026 • Open for Opportunities</span>
      </div>

      {/* 3-Column Profile & Activity Grid */}
      <div className="telemetry-grid">
        {/* Card 1: What I'm Working On */}
        <div className="telemetry-card hoverable">
          <div className="telemetry-card-top">
            <span className="card-badge">CURRENT FOCUS</span>
            <span className="card-indicator">Active</span>
          </div>
          <h3 className="telemetry-card-title">AI-Augmented Systems</h3>
          <p className="telemetry-card-text text-gray">
            Architecting decoupled full-stack systems, designing component and API contracts, and directing generative AI co-pilots for rapid code implementation.
          </p>
          <div className="telemetry-meta-row text-gray">
            <span>CORE STACK:</span>
            <span className="meta-highlight">Next.js, Cloudflare Pages, Gemini AI, Tailwind CSS</span>
          </div>
        </div>

        {/* Card 2: Production Systems */}
        <div className="telemetry-card hoverable">
          <div className="telemetry-card-top">
            <span className="card-badge">LIVE SYSTEMS</span>
            <span className="card-indicator">7+ Deployed</span>
          </div>
          <h3 className="telemetry-card-title">System Architectures</h3>
          <p className="telemetry-card-text text-gray">
            Over 7 live production platforms deployed to edge infrastructure—featuring e-commerce, AI education portals, booking engines, and real-time systems.
          </p>
          <div className="telemetry-actions-list">
            <a
              href="#work"
              className="telemetry-btn hoverable"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>Explore Featured Work</span>
              <span className="telemetry-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Card 3: Social & Professional Profile */}
        <div className="telemetry-card telemetry-card-comms hoverable">
          <div className="telemetry-card-top">
            <span className="card-badge">PROFESSIONAL PROFILE</span>
            <span className="card-indicator">Open to Roles</span>
          </div>

          {/* Clean Identity Preview */}
          <div className="linkedin-profile-preview">
            <img
              src={profilePhoto}
              alt="Torven S"
              className="linkedin-preview-avatar"
            />
            <div className="linkedin-preview-info">
              <div className="linkedin-preview-name">
                <span>Torven S</span>
                <span className="linkedin-check" title="Verified Profile">✓</span>
              </div>
              <div className="linkedin-preview-role text-gray">
                Full Stack Developer • @torvensnow
              </div>
            </div>
          </div>

          <p className="telemetry-card-text text-gray" style={{ marginBottom: '1rem' }}>
            Open for full-stack engineering roles, AI-assisted development, and modern cloud deployment projects.
          </p>

          <div className="telemetry-actions-list">
            <a
              href="https://t.me/torvensnow7"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn telemetry-btn-tg hoverable"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>Chat on Telegram</span>
              <span className="telemetry-arrow">↗</span>
            </a>

            <a
              href="https://www.instagram.com/torvensnow/"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn telemetry-btn-insta hoverable"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>Connect on Instagram</span>
              <span className="telemetry-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
