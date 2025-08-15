'use client'

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function DoughnutChartCard({ data }: { data: { name: string, value: number }[] }) {
  return (
    <div className="card p-4 h-80">
      <div className="text-sm text-gray-500 mb-2">PANs: Solicited vs Received vs Consumed vs Pending</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} label />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
