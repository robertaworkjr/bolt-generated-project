import { useState } from 'react'
import Card from '../ui/Card'

const IMPORTANT_DATES = [
  { date: '01-15', description: 'Q4 Estimated Tax Payment Due' },
  { date: '04-15', description: 'Tax Filing Deadline & Q1 Estimated Tax Payment Due' },
  { date: '06-15', description: 'Q2 Estimated Tax Payment Due' },
  { date: '09-15', description: 'Q3 Estimated Tax Payment Due' },
  { date: '10-15', description: 'Extended Tax Filing Deadline' },
  { date: '12-31', description: 'Last Day for Tax Deductible Contributions' }
]

export default function FinancialCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ]

  const getMonthDates = (monthIndex) => {
    return IMPORTANT_DATES.filter(date => {
      const [month] = date.date.split('-')
      return parseInt(month) === monthIndex + 1
    })
  }

  return (
    <Card className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Financial Calendar</h2>
      <div className="mb-4">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
          className="w-full p-2 rounded bg-slate-700 border border-slate-600"
        >
          {months.map((month, index) => (
            <option key={month} value={index}>{month}</option>
          ))}
        </select>
      </div>
      <div className="space-y-4">
        {getMonthDates(selectedMonth).map((date, index) => (
          <div key={index} className="p-4 bg-slate-700 rounded">
            <div className="font-medium">{months[selectedMonth]} {date.date.split('-')[1]}</div>
            <div className="text-gray-300">{date.description}</div>
          </div>
        ))}
        {getMonthDates(selectedMonth).length === 0 && (
          <p className="text-gray-400">No important dates this month</p>
        )}
      </div>
    </Card>
  )
}
