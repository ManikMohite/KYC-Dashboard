import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const range = searchParams.get('range') || 'today'
  const factor = range === 'month' ? 10 : 1

  const data = [
    { label: 'KYC Initiated', count: 120 * factor },
    { label: 'Under Process', count: 86 * factor },
    { label: 'Registered', count: 62 * factor },
    { label: 'Validated', count: 48 * factor },
    { label: 'Hold', count: 10 * factor },
    { label: 'Docs Pending', count: 14 * factor },
  ]

  return Response.json(data)
}
