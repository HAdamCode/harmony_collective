import { Link, useParams } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { blogPosts } from '../../data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <div className="page section">
        <h1>Post not found</h1>
        <Link className="btn btn--ghost" to="/blog">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="page blog-post-page">
      <PageHero eyebrow={post.category} title={post.title} subtitle={`By ${post.author} · ${post.date}`} backgroundImage={post.image} />

      <article className="section blog-post">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <Link className="btn btn--ghost" to="/blog">
          ← Back to Blog
        </Link>
      </article>
    </div>
  )
}
