import { FaBitcoin } from 'react-icons/fa'

export default function Header({ setCurrentPage }) {
  const handleNavClick = (page, e) => {
    e.preventDefault()
    setCurrentPage(page)
  }

  return (
    <header className="flex items-center justify-between p-6 bg-slate-800 sticky top-0 z-50">
      <div 
        className="flex items-center gap-2 cursor-pointer" 
        onClick={(e) => handleNavClick('home', e)}
      >
        <FaBitcoin className="text-3xl text-yellow-500" />
        <h1 className="text-2xl font-bold">CryptoFinance</h1>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a 
              href="#" 
              onClick={(e) => handleNavClick('home', e)}
              className="hover:text-yellow-500 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => handleNavClick('dashboard', e)}
              className="hover:text-yellow-500 transition-colors"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => handleNavClick('crypto', e)}
              className="hover:text-yellow-500 transition-colors"
            >
              Crypto
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => handleNavClick('finance', e)}
              className="hover:text-yellow-500 transition-colors"
            >
              Finance
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
