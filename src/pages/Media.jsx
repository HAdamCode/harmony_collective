import PageHero from '../components/PageHero'
import { collectiveGallery, groupSpotlights } from '../data/media'
import { groups } from '../data/groups'
import mediaHero from '../assets/images/piano.JPG'
import { formatYouTubeEmbed } from '../utils/media'

export default function Media() {
  return (
    <div className="page">
      <PageHero
        eyebrow="Media"
        title="Photos and videos from our concerts, community events, and performances."
        subtitle="Explore highlights from across the Collective or browse media by group."
        backgroundImage={mediaHero}
      />

      <section className="section">
        <div className="section__header">
          <h2>Collective Gallery</h2>
          <p>Warm, vibrant moments from our rehearsals, concerts, and community events.</p>
        </div>
        <div className="gallery-grid gallery-grid--wide">
          {collectiveGallery.map((item) => (
            <figure className="gallery-grid__item" key={item.image} style={{ backgroundImage: `url(${item.image})` }}>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="section__header">
          <h2>Group Spotlights</h2>
          <p>A closer look at the people, performances, and harmony behind each group.</p>
        </div>
        <div className="group-spotlights">
          {groupSpotlights.map((spotlight) => {
            const group = groups.find((g) => g.slug === spotlight.slug)
            return (
              <article className="spotlight" key={spotlight.slug}>
                <div className="spotlight__media" style={{ backgroundImage: `url(${spotlight.image})` }} />
                <div className="spotlight__body">
                  <p className="eyebrow">{group?.type}</p>
                  <h3>{spotlight.name}</h3>
                  <p>{spotlight.blurb}</p>
                  <div className="video-embed video-embed--compact">
                    <iframe
                      title={`${spotlight.name} video`}
                      src={formatYouTubeEmbed(spotlight.video)}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="mini-gallery">
                    {spotlight.gallery.map((image) => (
                      <div className="mini-gallery__item" key={image} style={{ backgroundImage: `url(${image})` }} />
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
