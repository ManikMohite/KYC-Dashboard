'use client'

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function BarChartCard({ data }: { data: any[] }) {
  return (
    <div className="card p-4 h-80">
      <div className="text-sm text-gray-500 mb-2">Individual vs Non-Individual</div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="individual" />
          <Bar dataKey="nonIndividual" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
