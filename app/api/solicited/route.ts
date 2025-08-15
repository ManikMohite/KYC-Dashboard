import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const range = searchParams.get('range') || 'today'
  const factor = range === 'month' ? 4 : 1

  const data = [
    { name: 'Solicited', value: 400 * factor },
    { name: 'Received', value: 320 * factor },
    { name: 'Consumed', value: 260 * factor },
    { name: 'Pending', value: 80 * factor },
  ]
  return Response.json(data)
}
