import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { blogPosts } from '../../data/blogPosts'

export default function BlogIndex() {
  return (
    <div className="page">
      <PageHero
        eyebrow="Blog"
        title="Stories, recaps, and behind-the-scenes notes."
        subtitle="From event recaps to education tips, stay current on everything happening inside Harmony Collective."
        backgroundImage="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="card-grid blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <div
                className="blog-card__image"
                style={{ backgroundImage: `linear-gradient(rgba(5,6,12,0.35), rgba(5,6,12,0.35)), url(${post.image})` }}
              />
              <div className="blog-card__content">
                <p className="blog-card__meta">
                  {post.category} · {post.date}
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <p className="blog-card__author">By {post.author}</p>
                <Link className="btn btn--ghost btn--small" to={`/blog/${post.slug}`}>
                  Read Story
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
