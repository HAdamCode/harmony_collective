import { useState } from 'react'
import PageHero from '../components/PageHero'
import { groups } from '../data/groups'
import { sendEmail } from '../utils/sendEmail'
import contactHero from '../assets/images/contact.JPG'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      formName: 'contact',
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      message: formData.get('message') || '',
    }

    setStatus('submitting')
    setFeedback('')

    try {
      await sendEmail(payload)
      form.reset()
      setStatus('success')
      setFeedback('Thanks! We received your message and will be in touch soon.')
    } catch (error) {
      console.error(error)
      setStatus('error')
      setFeedback(error.message)
    }
  }

  return (
    <div className="page">
      <PageHero
        eyebrow="Contact"
        title="We’d love to hear from you."
        subtitle="Send a message to the Harmony Collective team or connect with an ensemble below."
        backgroundImage={contactHero}
      />

      <section className="section">
        <div className="section__header">
          <h2>General inquiries</h2>
          <p>We’ll get back to you as soon as we can.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" required placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="How can we help?" />
          </label>
          <button className="btn btn--primary" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="form-status form-status--success" role="status" aria-live="polite">
              {feedback}
            </p>
          )}
          {status === 'error' && (
            <p className="form-status form-status--error" role="status" aria-live="polite">
              {feedback}
            </p>
          )}
        </form>
      </section>

      <section className="section section--alt">
        <div className="section__header">
          <h2>Group contacts</h2>
          <p>Email available directors directly or connect with ensembles via socials.</p>
        </div>
        <div className="card-grid contact-cards">
          {groups.map((group) => (
            <article className="contact-card" key={group.slug}>
              <div className="contact-card__image" style={{ backgroundImage: `url(${group.heroImage})` }} />
              <div className="contact-card__body">
                <h3>{group.name}</h3>
                <p>{group.type}</p>
                {group.contactEmail ? (
                  <a href={`mailto:${group.contactEmail}`}>{group.contactEmail}</a>
                ) : (
                  <p className="contact-card__note">Use social links for booking and updates.</p>
                )}
                {group.socials && (
                  <ul className="social-list">
                    {Object.entries(group.socials).map(([network, url]) => (
                      <li key={network}>
                        <a href={url} target="_blank" rel="noreferrer">
                          {network}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
