export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors ${className}`}>
      {children}
    </div>
  )
}
