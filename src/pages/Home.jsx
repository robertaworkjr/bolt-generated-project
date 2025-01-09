import Hero from '../components/Hero'
import NewsSection from '../components/NewsSection'
import { cryptoLinks, financeLinks } from '../constants/newsLinks'

export default function Home({ onNewsCardClick }) {
  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto">
        <NewsSection 
          title="Cryptocurrency News" 
          links={cryptoLinks} 
          onCardClick={onNewsCardClick}
        />
        <NewsSection 
          title="Financial News" 
          links={financeLinks}
        />
      </main>
    </>
  )
}
