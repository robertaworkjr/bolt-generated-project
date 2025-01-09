import Card from '../components/ui/Card'

export default function Cointelegraph() {
  const sections = [
    {
      title: 'Bitcoin News',
      url: 'https://cointelegraph.com/tags/bitcoin',
      description: 'Latest Bitcoin updates and analysis'
    },
    {
      title: 'Ethereum News',
      url: 'https://cointelegraph.com/tags/ethereum',
      description: 'Ethereum ecosystem updates and developments'
    },
    {
      title: 'DeFi News',
      url: 'https://cointelegraph.com/tags/defi',
      description: 'Decentralized finance news and trends'
    }
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cointelegraph News</h1>
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
