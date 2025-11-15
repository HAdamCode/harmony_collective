import PageHero from '../components/PageHero'
import { groups } from '../data/groups'
import donateHero from '../assets/images/donate.JPG'

const impactAreas = [
  {
    title: 'Music purchases',
    copy: 'Your support helps us buy sheet music, licenses, and arrangements.',
  },
  {
    title: 'Rehearsal space',
    copy: 'Donations keep rehearsals accessible and consistent for our singers.',
  },
  {
    title: 'Sound equipment',
    copy: 'Your gifts help us maintain and upgrade the equipment we rely on.',
  },
  {
    title: 'Concert costs',
    copy: 'Support covers venues, programs, and the essentials that make performances possible.',
  },
  {
    title: 'Competition expenses',
    copy: 'Your generosity helps quartets travel, register, and represent our community.',
  },
]

const paymentOptions = [
  { label: 'Venmo', value: '@HarmonyCollective' },
  { label: 'PayPal', value: 'hello@harmonycollective.org' },
  { label: 'Zelle', value: 'finance@harmonycollective.org' },
]

export default function Donate() {
  return (
    <div className="page">
      <PageHero
        eyebrow="Donate"
        title="Fuel warm, community-first music."
        subtitle="Your gift helps cover rehearsal spaces, purchase music, support equipment needs, and make performances and competitions possible for our groups."
        backgroundImage={donateHero}
      />

      <section className="section">
        <div className="section__header">
          <h2>Gratitude</h2>
          <p>Harmony Collective exists because people believe in the power of shared music. Thank you for helping make it possible.</p>
        </div>
        <div className="gallery-grid gallery-grid--mosaic">
          {groups.map((group) => (
            <div className="gallery-grid__item" key={group.slug} style={{ backgroundImage: `url(${group.heroImage})` }}>
              <div className="gallery-grid__label">{group.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="section__header">
          <h2>How gifts are allocated</h2>
          <p>Specify a group in the payment note to direct funds. Without a designation, donations are shared across the Collective.</p>
        </div>
        <ul className="impact-list">
          {impactAreas.map((area) => (
            <li key={area.title} className="card">
              <h3>{area.title}</h3>
              <p>{area.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Ways to Give</h2>
          <p>Choose the method that’s easiest for you. Every gift supports our singers and community programs.</p>
        </div>
        <div className="payment-options">
          {paymentOptions.map((option) => (
            <article className="card" key={option.label}>
              <h3>{option.label}</h3>
              <p>{option.value}</p>
            </article>
          ))}
        </div>
        <article className="card donor-letter">
          <h3>Donor Letter</h3>
          <p>Prefer to send a note with your gift? We’re happy to receive it at:</p>
          <a href="mailto:give@harmonycollective.org">give@harmonycollective.org</a>
        </article>
      </section>
    </div>
  )
}
