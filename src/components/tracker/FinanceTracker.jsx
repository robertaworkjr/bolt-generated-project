import { useState, useEffect } from 'react'
import Card from '../ui/Card'

export default function FinanceTracker() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions')
    return saved ? JSON.parse(saved) : []
  })
  
  const [newTransaction, setNewTransaction] = useState({
    type: 'income',
    amount: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newTransaction.amount || !newTransaction.description) return
    
    setTransactions(prev => [...prev, { ...newTransaction, id: Date.now() }])
    setNewTransaction({
      type: 'income',
      amount: '',
      description: '',
      date: new Date().toISOString().split('T')[0]
    })
  }

  const handlePrint = () => {
    window.print()
  }

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0)

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0)

  return (
    <Card className="max-w-2xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Finance Tracker</h2>
        <button
          onClick={handlePrint}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
        >
          Print Report
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-blue-500 rounded">
          <div className="text-sm">Total Income</div>
          <div className="text-2xl font-bold">${totalIncome.toFixed(2)}</div>
        </div>
        <div className="p-4 bg-red-500 rounded">
          <div className="text-sm">Total Expenses</div>
          <div className="text-2xl font-bold">${totalExpenses.toFixed(2)}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <select
              value={newTransaction.type}
              onChange={e => setNewTransaction(prev => ({ ...prev, type: e.target.value }))}
              className="w-full p-2 rounded bg-slate-700 border border-slate-600"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <input
              type="number"
              value={newTransaction.amount}
              onChange={e => setNewTransaction(prev => ({ ...prev, amount: e.target.value }))}
              className="w-full p-2 rounded bg-slate-700 border border-slate-600"
              min="0"
              step="0.01"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <input
            type="text"
            value={newTransaction.description}
            onChange={e => setNewTransaction(prev => ({ ...prev, description: e.target.value }))}
            className="w-full p-2 rounded bg-slate-700 border border-slate-600"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            value={newTransaction.date}
            onChange={e => setNewTransaction(prev => ({ ...prev, date: e.target.value }))}
            className="w-full p-2 rounded bg-slate-700 border border-slate-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Add Transaction
        </button>
      </form>

      <div className="space-y-4">
        <h3 className="font-medium">Recent Transactions</h3>
        {transactions.map(transaction => (
          <div
            key={transaction.id}
            className={`p-4 rounded flex justify-between items-center ${
              transaction.type === 'income' ? 'bg-blue-500/20' : 'bg-red-500/20'
            }`}
          >
            <div>
              <div className="font-medium">{transaction.description}</div>
              <div className="text-sm text-gray-400">{transaction.date}</div>
            </div>
            <div className="font-medium">
              {transaction.type === 'income' ? '+' : '-'}${parseFloat(transaction.amount).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
