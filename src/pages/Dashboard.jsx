import { useState, useEffect } from 'react'
import SignUpForm from '../components/auth/SignUpForm'
import FinancialCalendar from '../components/calendar/FinancialCalendar'
import FinanceTracker from '../components/tracker/FinanceTracker'

export default function Dashboard() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  const handleSignUp = (userData) => {
    setUser(userData)
  }

  if (!user) {
    return <SignUpForm onSignUp={handleSignUp} />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome, {user.name}!</h1>
      <div className="space-y-8">
        <FinancialCalendar />
        <FinanceTracker />
      </div>
    </div>
  )
}
