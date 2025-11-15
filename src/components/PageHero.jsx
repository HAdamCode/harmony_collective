export default function PageHero({ eyebrow, title, subtitle, children, backgroundImage, align = 'left' }) {
  const hasImage = Boolean(backgroundImage)

  return (
    <section
      className={`page-hero ${hasImage ? 'page-hero--image' : ''} page-hero--${align}`}
      style={
        hasImage
          ? { backgroundImage: `linear-gradient(rgba(5,6,12,0.58), rgba(5,6,12,0.58)), url(${backgroundImage})` }
          : undefined
      }
    >
      <div className="page-hero__content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="lead">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
