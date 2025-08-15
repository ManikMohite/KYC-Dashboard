import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const range = searchParams.get('range') || 'today'
  const factor = range === 'month' ? 12 : 1

  return Response.json({
    panSolicitedWithImage: 180 * factor,
    panSolicitedWithoutImage: 60 * factor,
    dataReceivedWithImage: 150 * factor,
    dataReceivedWithoutImage: 40 * factor,
  })
}
