import Card from '../components/ui/Card'

export default function CoinDesk() {
  const sections = [
    {
      title: 'Market Analysis',
      url: 'https://www.coindesk.com/markets',
      description: 'Real-time cryptocurrency market data and analysis'
    },
    {
      title: 'Technology',
      url: 'https://www.coindesk.com/tech',
      description: 'Blockchain and cryptocurrency technology news'
    },
    {
      title: 'Business',
      url: 'https://www.coindesk.com/business',
      description: 'Industry updates and business developments'
    }
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">CoinDesk News</h1>
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
