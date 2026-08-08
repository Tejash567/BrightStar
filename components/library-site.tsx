'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  Copy,
  Facebook,
  Heart,
  ImageOff,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Sofa,
  Star,
  Users,
  Utensils,
  Wifi,
  X,
} from 'lucide-react';
import {
  announcements,
  facilities,
  galleryItems,
  getWhatsAppUrl,
  libraryConfig,
  membershipPlans,
  whatsappMessages,
} from '@/lib/site-config';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Membership', href: '#membership' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const iconMap = {
  seats: Users,
  wifi: Wifi,
  female: Heart,
  washroom: BookOpen,
  utensils: Utensils,
  rest: Sofa,
  clock: Clock3,
} as const;

type IconName = keyof typeof iconMap;

function WhatsAppButton({ message = whatsappMessages.general, children, className = '' }: { message?: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={`button button-primary ${className}`} href={getWhatsAppUrl(message)} target="_blank" rel="noreferrer">
      <MessageCircle size={17} strokeWidth={2.2} />
      {children}
    </a>
  );
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function FacilityIcon({ name }: { name: IconName }) {
  const Icon = iconMap[name];
  return <Icon size={22} strokeWidth={1.8} />;
}

function ImagePlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`image-placeholder ${className}`} role="img" aria-label={label}>
      <ImageOff size={30} strokeWidth={1.4} />
      <span>Photo coming soon</span>
    </div>
  );
}

export default function LibrarySite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    await navigator.clipboard.writeText(libraryConfig.address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Clock3 size={14} /> Open 24 hours</span>
          <span className="topbar-divider" />
          <span><MapPin size={14} /> {libraryConfig.addressShort}</span>
          <a href={`tel:${libraryConfig.phoneDigits}`}><Phone size={14} /> {libraryConfig.phoneDisplay}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Bright Star Library home">
            <img className="brand-logo" src={libraryConfig.logoPath} alt="Bright Star Library logo" />
          </a>
          <nav className={`desktop-nav ${menuOpen ? 'mobile-nav-open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            <WhatsAppButton message={whatsappMessages.general}>Enquire now</WhatsAppButton>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-pattern" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="rating-pill"><span className="rating-stars"><Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /></span><strong>{libraryConfig.rating}</strong><span>from {libraryConfig.reviewCount}</span></div>
            <h1>Your space to <em>study,</em><br />focus & grow.</h1>
            <p className="hero-lede">A peaceful and comfortable study environment with 120+ seats, Wi-Fi, a separate female section and essential facilities for focused learning.</p>
            <div className="hero-actions">
              <WhatsAppButton>Enquire on WhatsApp</WhatsAppButton>
              <a className="button button-outline" href={libraryConfig.directionsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> Get directions</a>
            </div>
            <div className="hero-trust"><span><Check size={15} /> 120+ seats</span><span><Check size={15} /> 24-hour access</span><span><Check size={15} /> Wi-Fi</span><span><Check size={15} /> Separate female section</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap"><ImagePlaceholder label="Bright Star Library photo coming soon" /><div className="image-shade" /><div className="hero-image-caption"><span className="caption-dot" /><span>Make room for what matters</span></div></div>
            <div className="hero-note"><BookOpen size={17} /><span><strong>Ready when you are.</strong><br />Open every hour, every day.</span></div>
          </div>
        </div>
        <div className="hero-bottom container"><span className="scroll-label">Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="announcement-section">
        <div className="container announcement-card">
          <div className="announcement-label"><span className="announcement-dot" /> Notice board</div>
          <div className="announcement-content">
            {announcements.filter((item) => item.active).length ? (
              announcements.filter((item) => item.active).map((announcement) => (
                <div key={announcement.id}><h3>{announcement.title}</h3><p>{announcement.content}</p></div>
              ))
            ) : (
              <div><h3>No announcements at the moment</h3><p>Check back here for the latest library updates.</p></div>
            )}
          </div>
          {!announcements.filter((item) => item.active).length && <span className="announcement-empty-icon"><ImageOff size={18} /></span>}
        </div>
      </section>

      <section className="about-section section-space" id="about">
        <div className="container about-grid">
          <div className="about-images">
            <div className="about-main-image"><ImagePlaceholder label="Bright Star Library photo coming soon" /></div>
            <div className="about-small-image"><ImagePlaceholder label="Bright Star Library photo coming soon" /></div>
            <div className="experience-stamp"><span className="stamp-star">✦</span><strong>THE<br />QUIET<br /><i>PLACE</i></strong></div>
          </div>
          <div className="about-copy">
            <SectionIntro eyebrow="About the library" title="A little more space for your big plans." description="Bright Star Library is a dedicated place in Jhabrera, Uttarakhand for students who want the freedom to study at their own pace, in a calm and comfortable setting." />
            <p>Whether you are preparing for an exam, working through a course or simply building a better routine, our study environment is designed to help you settle in and stay focused.</p>
            <div className="about-signature"><span className="signature-line" /><span>Focus feels better here.</span></div>
            <a className="text-link" href="#facilities">Explore our facilities <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="facilities-section section-space" id="facilities">
        <div className="container">
          <SectionIntro eyebrow="Everything you need" title="Settle in. Stay focused." description="Thoughtful essentials that make long study sessions more comfortable and convenient." />
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <article className={`facility-card ${index === 0 ? 'facility-card-featured' : ''}`} key={facility.id}>
                <div className="facility-icon"><FacilityIcon name={facility.icon} /></div>
                <span className="facility-number">0{index + 1}</span>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container quote-inner">
          <Quote size={35} className="quote-mark" />
          <blockquote>Give your goals a place<br />to take root.</blockquote>
          <p>A quiet, comfortable environment can make a meaningful difference to the way you study.</p>
        </div>
      </section>

      <section className="membership-section section-space" id="membership">
        <div className="container">
          <SectionIntro eyebrow="Membership" title="Choose your rhythm." description="Make Bright Star Library part of your study routine. Membership details and pricing are available on enquiry." />
          {membershipPlans.length ? (
            <div className="plans-grid">
              {membershipPlans.map((plan) => (
                <article key={plan.id} className={`plan-card ${plan.featured ? 'plan-card-featured' : ''}`}>
                  {plan.featured && <span className="popular-label">A popular choice</span>}
                  <h3>{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                  <div className="plan-price">{plan.price}</div>
                  <div className="plan-rule" />
                  <ul>{plan.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
                  <WhatsAppButton message={whatsappMessages.membership} className="plan-button">Ask about this plan <ArrowRight size={16} /></WhatsAppButton>
                </article>
              ))}
            </div>
          ) : (
            <div className="membership-empty">
              <p>Membership plans and pricing will be shared here once they are available.</p>
              <span className="membership-empty-note">In the meantime, please contact us for membership details.</span>
              <WhatsAppButton message={whatsappMessages.membership}>Contact us for membership details</WhatsAppButton>
            </div>
          )}
        </div>
      </section>

      <section className="gallery-section section-space" id="gallery">
        <div className="container">
          <SectionIntro eyebrow="A glimpse inside" title="A place that helps you begin." description="Photos of Bright Star Library will appear here once they are available." />
          {galleryItems.length ? (
            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <figure className={`gallery-item gallery-item-${index + 1}`} key={item.id}>
                  <img src={item.image} alt={item.alt} />
                  <figcaption><span>{item.category}</span><strong>{item.title}</strong></figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="gallery-empty">
              <ImageOff size={34} strokeWidth={1.3} />
              <strong>Photos coming soon</strong>
              <p>Real photographs of Bright Star Library will be added here shortly.</p>
            </div>
          )}
        </div>
      </section>

      <section className="contact-section section-space" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <SectionIntro eyebrow="Come by" title="Visit Bright Star Library." description={`Find us at ${libraryConfig.address}. We are open 24 hours.`} />
            <div className="contact-details">
              <div className="contact-detail">
                <span className="detail-icon"><MapPin size={18} /></span>
                <div>
                  <small>Visit us</small>
                  <p>{libraryConfig.address}</p>
                  <button onClick={copyAddress} className="copy-button">{copied ? <Check size={13} /> : <Copy size={13} />} {copied ? 'Copied' : 'Copy address'}</button>
                </div>
              </div>
              <div className="contact-detail">
                <span className="detail-icon"><Phone size={18} /></span>
                <div><small>Call us</small><a href={`tel:${libraryConfig.phoneDigits}`}>{libraryConfig.phoneDisplay}</a></div>
              </div>
              <div className="contact-detail">
                <span className="detail-icon"><Clock3 size={18} /></span>
                <div><small>Opening hours</small><p>{libraryConfig.hours}</p></div>
              </div>
            </div>
            <div className="contact-actions">
              <a className="button button-dark" href={`tel:${libraryConfig.phoneDigits}`}><Phone size={17} /> Call now</a>
              <WhatsAppButton>WhatsApp</WhatsAppButton>
              {libraryConfig.socialLinks.instagramUrl && <a className="button button-outline" href={libraryConfig.socialLinks.instagramUrl} target="_blank" rel="noreferrer" aria-label="Visit Bright Star Library on Instagram"><Instagram size={17} /> Instagram</a>}
            </div>
          </div>
          <div className="map-card">
            <div className="map-grid" />
            <div className="map-pin"><MapPin size={27} fill="currentColor" /></div>
            <div className="map-card-info">
              <span className="eyebrow">Bright Star Library</span>
              <p>{libraryConfig.address}</p>
              <a href={libraryConfig.directionsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div>
            <a className="brand brand-footer" href="#home" aria-label="Bright Star Library home"><img className="brand-logo" src={libraryConfig.logoPath} alt="Bright Star Library logo" /></a>
            <p className="footer-tagline">A quiet place for your next big step.</p>
          </div>
          <div className="footer-links">
            <span className="footer-heading">Explore</span>
            {navItems.slice(1, 5).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <div className="footer-links">
            <span className="footer-heading">Connect</span>
            <a href={`tel:${libraryConfig.phoneDigits}`}>{libraryConfig.phoneDisplay}</a>
            <a href={getWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">WhatsApp</a>
            {libraryConfig.socialLinks.instagramUrl && <a href={libraryConfig.socialLinks.instagramUrl} target="_blank" rel="noreferrer" aria-label="Visit Bright Star Library on Instagram"><Instagram size={15} /> Instagram</a>}
            {libraryConfig.socialLinks.facebookUrl && <a href={libraryConfig.socialLinks.facebookUrl} target="_blank" rel="noreferrer" aria-label="Visit Bright Star Library on Facebook"><Facebook size={15} /> Facebook</a>}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Bright Star Library</span>
          <span>{libraryConfig.addressShort}</span>
        </div>
      </footer>
    </main>
  );
}
