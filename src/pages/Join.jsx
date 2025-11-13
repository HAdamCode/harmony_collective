import PageHero from '../components/PageHero'

const auditionSteps = [
  'Attend three rehearsals (ideally consecutive).',
  'Receive feedback and support from section leaders.',
  "If your sound fits the ensemble, you'll be invited to continue.",
]

export default function Join() {
  return (
    <div className="page">
      <PageHero
        eyebrow="Join Highlyte"
        title="Singers welcome. Heart required."
        subtitle="Quartets are currently closed to auditions, but Highlyte—our community chorus in Littleton—auditions new members year-round."
        backgroundImage="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="section__header">
          <h2>Why Highlyte?</h2>
          <p>
            Highlyte was founded to bring people together through expressive acapella and a supportive rehearsal
            environment. We rehearse weekly in Littleton and perform at community events, nonprofit programs, and seasonal
            concerts.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section__header">
          <h2>Audition Process</h2>
          <p>Highlyte uses a warm, low-pressure audition model:</p>
        </div>
        <ol className="booking-steps">
          {auditionSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>This process helps singers grow while keeping the experience welcoming and personal.</p>
        <div className="section__actions">
          <a className="btn btn--primary" href="https://forms.gle/YmyRcVhWfwUniu728" target="_blank" rel="noreferrer">
            Audition for Highlyte
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>What Makes Highlyte Special</h2>
        </div>
        <div className="card-grid">
          <article className="card">
            <h3>Connection</h3>
            <p>A friendly, encouraging community where singers get to know each other and make music together.</p>
          </article>
          <article className="card">
            <h3>Performances</h3>
            <p>Concerts, nonprofit events, and collaborations with other Harmony Collective groups.</p>
          </article>
          <article className="card">
            <h3>Growth</h3>
            <p>Weekly rehearsals with opportunities for musical development and ensemble-based feedback.</p>
          </article>
        </div>
      </section>
    </div>
  )
}
