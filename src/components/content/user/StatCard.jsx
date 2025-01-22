import React from 'react'

export default function StatCard({ icon, title, value }) {
  return (
    <div className="flex items-center p-4 bg-gray-800 rounded-lg">
        <div className="stat-icon">{icon}</div>
        <div>
            <p className="text-sm text-gray-400">{title}</p>
            <p className="stat-value">{value}</p>
        </div>
  </div>
  )
}
