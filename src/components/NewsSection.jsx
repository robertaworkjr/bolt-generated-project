import NewsCard from './ui/NewsCard'

export default function NewsSection({ title, links, onCardClick }) {
  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {links.map((link, index) => (
          <NewsCard
            key={index}
            title={link.title}
            description={link.description}
            url={link.url}
            onClick={onCardClick ? (e) => {
              e.preventDefault()
              onCardClick(link.url.replace('#', ''))
            } : undefined}
            external={!onCardClick}
          />
        ))}
      </div>
    </section>
  )
}
