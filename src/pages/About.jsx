import PageHero from '../components/PageHero'

const values = ['Community', 'Impact', 'Musical Excellence', 'Accessibility', 'Joy']

export default function About() {
  return (
    <div className="page">
      <PageHero
        eyebrow="About the Collective"
        title="Harmony for people, not profit."
        subtitle="Harmony Collective uplifts community-focused acapella groups across Denver, Littleton, and Golden. We bring singers and audiences together through joyful, impactful music-making."
        backgroundImage="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="section__header">
          <h2>Mission</h2>
          <p>
            We exist to resource vocal ensembles so they can focus on building connection through song. Every concert,
            workshop, and rehearsal reflects the belief that harmony can be warm, modern, and accessible.
          </p>
        </div>
        <div className="about-grid">
          <article className="card">
            <h3>Origin</h3>
            <p>
              Harmony Collective formed when a handful of quartets realized they shared collaborators, audiences, and a
              desire to platform inclusive storytelling. Pooling resources lets us support each other, host open
              rehearsals, and show presenters a cohesive roster.
            </p>
          </article>
          <article className="card">
            <h3>What drives us</h3>
            <p>
              The Collective is intentionally not profit-driven. Donations, booking fees, and sponsorships loop back into
              rehearsal space, music purchases, touring scholarships, and education programs.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section__header">
          <h2>Values</h2>
          <p>The heartbeat of everything we produce.</p>
        </div>
        <ul className="values-list">
          {values.map((value) => (
            <li key={value} className="card value-card">
              <h3>{value}</h3>
              <p>
                {value === 'Community' &&
                  'Neighbors, students, donors, and artists all feel welcomed the moment they walk into a rehearsal.'}
                {value === 'Impact' && 'Programs emphasize measurable benefits—scholarships, outreach, and shared stages.'}
                {value === 'Musical Excellence' &&
                  'Directors, clinicians, and arrangers invest in professional-level artistry for every group.'}
                {value === 'Accessibility' &&
                  'Sliding-scale dues, open rehearsals, and sensory-friendly concerts keep the door open.'}
                {value === 'Joy' && 'Warmth, humor, and celebration lead every rehearsal, meeting, and concert.'}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
