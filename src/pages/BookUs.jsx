import { useMemo } from 'react'
import PageHero from '../components/PageHero'
import { groups } from '../data/groups'

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

  return (
    <div className="page">
      <PageHero
        eyebrow="Booking"
        title="Bring Harmony Collective to your stage."
        subtitle="Concerts, residencies, conferences, brand launches, festivals, and donor events—we tailor vocal experiences to your goals."
        backgroundImage="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80"
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
        <form
          className="contact-form booking-form"
          onSubmit={(event) => {
            event.preventDefault()
            alert('Thanks for reaching out! Our team will follow up shortly.')
          }}
        >
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
          <button className="btn btn--primary" type="submit">
            Submit Inquiry
          </button>
        </form>
      </section>
    </div>
  )
}
