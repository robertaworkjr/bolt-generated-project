import Header from '../components/Header'

export default function MainLayout({ children, setCurrentPage }) {
  return (
    <div className="min-h-screen">
      <Header setCurrentPage={setCurrentPage} />
      {children}
    </div>
  )
}
