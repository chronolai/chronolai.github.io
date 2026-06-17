import { Head } from 'vite-react-ssg'
import './App.css'
import { resume } from './data/resume'
import { Icon } from './components/icons'
import { ThemeToggle } from './components/ThemeToggle'

// Display text for a contact href: full URL for the web, bare address for email.
function contactValue(href: string) {
  return href.startsWith('mailto:') ? href.slice('mailto:'.length) : href
}

// CV-only bullet list under an experience/education entry; each item may carry a
// trailing external-link icon (the link convention used across the site).
function Highlights({ items }: { items: { text: string; href?: string }[] }) {
  return (
    <ul className="entry-highlights">
      {items.map((h) => (
        <li key={h.text}>
          {h.text}
          {h.href ? (
            <a
              className="entry-link"
              href={h.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${h.text} — external link`}
              title="Open link"
            >
              <Icon name="external-link" size={14} />
            </a>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

// Section <h2> with a markdown-style permalink: a `#` that appears on hover and
// links to the heading's own id.
function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <h2 id={id} className="section-heading">
      {title}
      <a className="heading-anchor" href={`#${id}`} aria-label={`Permalink to ${title}`}>
        #
      </a>
    </h2>
  )
}

function App({ variant = 'home' }: { variant?: 'home' | 'cv' }) {
  const {
    name,
    title,
    location,
    gravatarHash,
    contacts,
    experience,
    education,
    awards,
    certifications,
    talks,
    hackathons,
    interests,
    projects,
  } = resume

  const isCv = variant === 'cv'

  return (
    <div className="resume">
      <Head>
        <title>{isCv ? 'Chrono Lai — CV' : 'Chrono Lai — Resume'}</title>
      </Head>
      <div className="resume-topbar">
        <ThemeToggle />
      </div>
      <header className="resume-header">
        <div className="resume-identity">
          {gravatarHash ? (
            <img
              className="resume-avatar"
              src={`https://gravatar.com/avatar/${gravatarHash}?s=192`}
              srcSet={`https://gravatar.com/avatar/${gravatarHash}?s=384 2x`}
              width={96}
              height={96}
              alt={name}
              loading="eager"
            />
          ) : null}
          <div className="resume-headings">
            <h1>{name}</h1>
            <p className="resume-title">
              {title}
              {location ? <span className="resume-location"> · {location}</span> : null}
            </p>
          </div>
          <nav className="resume-contacts" aria-label="Contact and social links">
            {contacts
              .filter((c) => !c.hidden)
              .map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={c.label}
                  title={c.label}
                >
                  <Icon name={c.icon} />
                </a>
              ))}
          </nav>
        </div>
      </header>

      {interests && interests.length > 0 && (
        <div className="interest-sections">
          {interests.map((group) => {
            const headingId = group.category.toLowerCase()
            return (
              <section
                key={group.category}
                className="resume-section"
                aria-labelledby={headingId}
              >
                <SectionHeading id={headingId} title={group.category} />
                <ul className="interest-list">
                  {group.items.map((it) => (
                    <li key={it.label} className="interest">
                      <Icon name={it.icon} />
                      <span>{it.label}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      )}

      {experience.length > 0 && (
        <section className="resume-section" aria-labelledby="experience">
          <SectionHeading id="experience" title="Experience" />
          <ul className="entry-list">
            {experience.map((e, i) => (
              <li key={`${e.company}-${i}`} className="entry entry--dated">
                <span className="entry-meta">
                  {e.period}
                  {e.location ? ` · ${e.location}` : ''}
                </span>
                <div className="entry-content">
                  <span className="entry-title">{e.role}</span>
                  <div className="entry-org entry-subtitle">
                    {e.company}
                    {e.href ? (
                      <a
                        className="entry-link"
                        href={e.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${e.company} — external link`}
                        title="Visit website"
                      >
                        <Icon name="external-link" size={14} />
                      </a>
                    ) : null}
                  </div>
                  {e.team ? <div className="entry-lab">{e.team}</div> : null}
                  {e.highlights && e.highlights.length > 0 ? (
                    <Highlights items={e.highlights} />
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {education.length > 0 && (
        <section className="resume-section" aria-labelledby="education">
          <SectionHeading id="education" title="Education" />
          <ul className="entry-list">
            {education.map((e, i) => (
              <li key={`${e.school}-${i}`} className="entry entry--dated">
                <span className="entry-meta">{e.period}</span>
                <div className="entry-content">
                  <span className="entry-title">{e.degree}</span>
                  <div className="entry-org entry-subtitle">{e.school}</div>
                  {e.lab ? (
                    <div className="entry-lab">
                      {e.lab.name}
                      {e.lab.href ? (
                        <a
                          className="entry-link"
                          href={e.lab.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${e.lab.name} — external link`}
                          title="Visit lab page"
                        >
                          <Icon name="external-link" size={14} />
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                  {e.highlights && e.highlights.length > 0 ? (
                    <Highlights items={e.highlights} />
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {isCv && awards && awards.length > 0 && (
        <section className="resume-section" aria-labelledby="awards">
          <SectionHeading id="awards" title="Awards" />
          <ul className="entry-list">
            {awards.map((a, i) => (
              <li key={`${a.title}-${i}`} className="entry entry--dated">
                <span className="entry-meta">{a.year}</span>
                <div className="entry-content">
                  <span className="entry-title">
                    {a.title}
                    {a.href ? (
                      <a
                        className="entry-link"
                        href={a.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${a.title} — external link`}
                        title="View details"
                      >
                        <Icon name="external-link" size={14} />
                      </a>
                    ) : null}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {isCv && certifications && certifications.length > 0 && (
        <section className="resume-section" aria-labelledby="certifications">
          <SectionHeading id="certifications" title="Certifications" />
          <ul className="entry-list">
            {certifications.map((c, i) => (
              <li key={`${c.title}-${i}`} className="entry entry--dated">
                <span className="entry-meta">{c.date}</span>
                <div className="entry-content">
                  <span className="entry-title">{c.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {isCv && talks && talks.length > 0 && (
        <section className="resume-section" aria-labelledby="talks">
          <SectionHeading id="talks" title="Talks" />
          <ul className="entry-list">
            {talks.map((t, i) => (
              <li key={`${t.title}-${i}`} className="entry entry--dated">
                <span className="entry-meta">{t.date}</span>
                <div className="entry-content">
                  <span className="entry-title">
                    {t.title} <span className="talk-venue">@ {t.venue}</span>
                    {t.href ? (
                      <a
                        className="entry-link"
                        href={t.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${t.title} — external link`}
                        title="View talk"
                      >
                        <Icon name="external-link" size={14} />
                      </a>
                    ) : null}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {isCv && hackathons && hackathons.length > 0 && (
        <section className="resume-section" aria-labelledby="hackathons">
          <SectionHeading id="hackathons" title="Hackathons" />
          <ul className="entry-list">
            {hackathons.map((h, i) => (
              <li key={`${h.name}-${i}`} className="entry entry--dated">
                <span className="entry-meta">{h.date}</span>
                <div className="entry-content">
                  <span className="entry-title">
                    {h.name}
                    {h.href ? (
                      <a
                        className="entry-link"
                        href={h.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${h.name} — external link`}
                        title="View details"
                      >
                        <Icon name="external-link" size={14} />
                      </a>
                    ) : null}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {isCv && contacts.length > 0 && (
        <section className="resume-section" aria-labelledby="contacts">
          <SectionHeading id="contacts" title="Contacts" />
          <ul className="entry-list contact-list">
            {contacts.map((c) => {
              const isExternal = c.href.startsWith('http')
              return (
                <li key={c.href} className="entry entry--dated">
                  <span className="entry-meta">
                    {c.label}
                    <Icon name={c.icon} size={16} />
                  </span>
                  <div className="entry-content">
                    <a
                      className="contact-value"
                      href={c.href}
                      aria-label={c.label}
                      {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {contactValue(c.href)}
                    </a>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {isCv && projects && projects.length > 0 && (
        <section className="resume-section" aria-labelledby="projects">
          <SectionHeading id="projects" title="Projects" />
          <ul className="entry-list">
            {projects.map((p, i) => (
              <li key={`${p.name}-${i}`} className="entry">
                <div className="entry-head">
                  <span className="entry-title">
                    {p.name}
                    {p.href ? (
                      <a
                        className="entry-link"
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} — external link`}
                        title="View project"
                      >
                        <Icon name="external-link" size={14} />
                      </a>
                    ) : null}
                  </span>
                </div>
                <p className="entry-desc">{p.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="resume-footer">Last Update: {__RESUME_UPDATED__}</footer>
    </div>
  )
}

export default App
