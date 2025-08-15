'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export default function BarCompare({ data }: { data: { label: string; individual: number; nonIndividual: number }[] }) {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={18}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="individual" stackId="a" />
          <Bar dataKey="nonIndividual" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
