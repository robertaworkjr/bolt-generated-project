import Card from '../components/ui/Card'

export default function CryptoSlate() {
  const sections = [
    {
      title: 'Breaking News',
      url: 'https://cryptoslate.com/news',
      description: 'Latest cryptocurrency updates and breaking news'
    },
    {
      title: 'Research',
      url: 'https://cryptoslate.com/research',
      description: 'In-depth analysis and research reports'
    },
    {
      title: 'Coins',
      url: 'https://cryptoslate.com/coins',
      description: 'Detailed information about various cryptocurrencies'
    }
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">CryptoSlate News</h1>
      <div className="space-y-4">
        {sections.map((section, index) => (
          <a 
            key={index}
            href={section.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <h3 className="font-bold">{section.title}</h3>
              <p className="text-gray-400">{section.description}</p>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}
