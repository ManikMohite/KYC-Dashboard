'use client'

import { useEffect, useState } from 'react'
import StatsCard from './StatsCard'
import BarChartCard from './BarChartCard'
import DoughnutChartCard from './DoughnutChartCard'
import ProgressBar from './ProgressBar'
import Tabs from './Tabs'
import SkeletonLoader from './SkeletonLoader'

type RangeKey = 'today' | 'thisMonth'

export default function DashboardClient({ initial }: { initial: any }) {
  const [loading, setLoading] = useState(!initial)
  const [data, setData] = useState<any>(initial)
  const [range, setRange] = useState<RangeKey>('today')
  const [view, setView] = useState<'individual'|'nonIndividual'>('individual')

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/dashboard')
      const json = await res.json()
      setData(json)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!initial) fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!data) {
    return <div className="space-y-4">
      <SkeletonLoader className="h-24" />
      <SkeletonLoader className="h-80" />
      <SkeletonLoader className="h-80" />
    </div>
  }

  const s = data.stats[range]
  const doughnutData = [
    { name: 'Solicited', value: s.panCycle.solicited },
    { name: 'Received', value: s.panCycle.received },
    { name: 'Consumed', value: s.panCycle.consumed },
    { name: 'Pending', value: s.panCycle.pending },
  ]

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <Tabs items={['Today', 'This Month']} onChange={(i)=>setRange(i===0?'today':'thisMonth')} initial={0} />
        <Tabs items={['Individual', 'Non-Individual']} onChange={(i)=>setView(i===0?'individual':'nonIndividual')} initial={0} />
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="New KYC" value={s.newKYC.count} change={s.newKYC.change} positive={s.newKYC.change>=0} />
        <StatsCard title="Modified KYC" value={s.modifiedKYC.count} change={s.modifiedKYC.change} positive={s.modifiedKYC.change>=0} />
        <div className="card p-4">
          <div className="text-sm text-gray-500 mb-2">KYC View</div>
          <div className="text-2xl font-semibold capitalize">{view.replace('non','Non- ')}</div>
          <div className="text-xs text-gray-500 mt-1">Generated at {new Date(data.generatedAt).toLocaleString()}</div>
        </div>
        <button onClick={fetchData} className="card p-4 text-left hover:shadow-md transition-shadow">
          <div className="text-sm text-gray-500 mb-1">Refresh Data</div>
          <div className="text-2xl font-semibold">Fetch latest</div>
          <div className="text-xs text-gray-500 mt-1">Mock API (no-store)</div>
        </button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          {loading ? <SkeletonLoader className="h-80" /> : <BarChartCard data={s.bar} />}
        </div>
        <div>
          {loading ? <SkeletonLoader className="h-80" /> : <DoughnutChartCard data={doughnutData} />}
        </div>
      </div>

      {/* KYC Status */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(s.kycStatus).map(([k,v]) => (
          <div key={k} className="card p-4">
            <div className="text-xs text-gray-500 capitalize">{k.replace(/([A-Z])/g,' $1')}</div>
            <div className="mt-1 text-2xl font-semibold">{v as number}</div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card p-4 space-y-3">
          <div className="text-sm text-gray-500 mb-1">Categories — Individual</div>
          <ProgressBar label="RI" value={s.categories.individual.RI} />
          <ProgressBar label="NRI" value={s.categories.individual.NRI} />
        </div>
        <div className="card p-4 space-y-3">
          <div className="text-sm text-gray-500 mb-1">Categories — Non-Individual</div>
          <ProgressBar label="RI" value={s.categories.nonIndividual.RI} />
          <ProgressBar label="NRI" value={s.categories.nonIndividual.NRI} />
        </div>
      </div>

      {/* PAN & Data Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-4">
          <div className="text-sm text-gray-500">PANs Solicited (with image)</div>
          <div className="text-3xl font-semibold mt-2">{s.panStats.withImage}</div>
        </div>
        <div className="card p-4">
          <div className="text-sm text-gray-500">PANs Solicited (without image)</div>
          <div className="text-3xl font-semibold mt-2">{s.panStats.withoutImage}</div>
        </div>
        <div className="card p-4">
          <div className="text-sm text-gray-500">Data Received (with image)</div>
          <div className="text-3xl font-semibold mt-2">{s.panStats.dataWithImage}</div>
        </div>
        <div className="card p-4">
          <div className="text-sm text-gray-500">Data Received (without image)</div>
          <div className="text-3xl font-semibold mt-2">{s.panStats.dataWithoutImage}</div>
        </div>
      </div>
    </div>
  )
}
