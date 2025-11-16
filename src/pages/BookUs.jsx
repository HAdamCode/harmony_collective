import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import { groups } from '../data/groups'
import bookHero from '../assets/images/book.JPG'
import { sendEmail } from '../utils/sendEmail'

const bookingSteps = [
  'Share a bit about your event: when it is, where it is, and the kind of atmosphere you want.',
  "We'll recommend the group that best matches your needs.",
  "We work with you to make sure everything feels smooth and stress-free, from timing to song choices to any community moments you'd like to include.",
]

export default function BookUs() {
  const groupOptions = useMemo(
    () => [
      { label: 'Any Ensemble / Not sure', value: 'any' },
      ...groups.map((group) => ({ label: group.name, value: group.slug })),
    ],
    [],
  )

  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      formName: 'booking',
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      phone: formData.get('phone') || '',
      organization: formData.get('organization') || '',
      date: formData.get('date') || '',
      location: formData.get('location') || '',
      eventType: formData.get('eventType') || '',
      group: formData.get('group') || '',
      message: formData.get('message') || '',
    }

    setStatus('submitting')
    setFeedback('')

    try {
      await sendEmail(payload)
      form.reset()
      setStatus('success')
      setFeedback('Thanks for reaching out! Our team will follow up shortly.')
    } catch (error) {
      console.error(error)
      setStatus('error')
      setFeedback(error.message)
    }
  }

  return (
    <div className="page">
      <PageHero
        eyebrow="Booking"
        title="Bring Harmony Collective to your stage."
        subtitle="Concerts, residencies, conferences, brand launches, festivals, and community gatherings—we tailor vocal experiences to your goals."
        backgroundImage={bookHero}
      />

      <section className="section">
        <div className="section__header">
          <h2>How Booking Works</h2>
          <p>Our goal is to make your event feel joyful, welcoming, and full of connection.</p>
        </div>
        <ol className="booking-steps">
          {bookingSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="booking-note">We love creating spaces where people can come together through music.</p>
      </section>

      <section className="section section--alt">
        <div className="section__header">
          <h2>Booking form</h2>
          <p>Tell us about your event and we will respond with availability, pricing, and next steps.</p>
        </div>
        <form className="contact-form booking-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required placeholder="Your full name" />
          </label>
          <label>
            Email
            <input type="email" name="email" required placeholder="you@example.com" />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" placeholder="(###) ###-####" />
          </label>
          <label>
            Organization
            <input type="text" name="organization" placeholder="Optional" />
          </label>
          <label>
            Event date
            <input type="date" name="date" />
          </label>
          <label>
            Location
            <input type="text" name="location" placeholder="Venue / city" />
          </label>
          <label>
            Event type
            <input type="text" name="eventType" placeholder="Conference, gala, festival…" />
          </label>
          <label>
            Preferred group
            <select name="group">
              {groupOptions.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="Event goals, audience size, tech needs" />
          </label>
          <button className="btn btn--primary" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Submit Inquiry'}
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
    </div>
  )
}
