import { FaExternalLinkAlt } from 'react-icons/fa'
import Card from './Card'

export default function NewsCard({ title, description, url, onClick, external }) {
  return (
    <a
      href={url}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block"
    >
      <Card>
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{title}</h3>
          {external && <FaExternalLinkAlt className="text-sm text-gray-400" />}
        </div>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
      </Card>
    </a>
  )
}
