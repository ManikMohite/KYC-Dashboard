import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const range = searchParams.get('range') || 'today'
  const view = searchParams.get('view') || 'both'

  // simple mock adjustments
  const factor = range === 'month' ? 10 : 1
  const baseNew = 120 * factor
  const baseMod = 45 * factor

  const res = {
    newKyc: baseNew,
    newKycChange: 12.5,
    modifiedKyc: baseMod,
    modifiedKycChange: -4.2,
    bar: [
      { label: 'Yesterday', individual: 80 * factor, nonIndividual: 40 * factor },
      { label: 'Today', individual: 95 * factor, nonIndividual: 60 * factor },
    ]
  }

  if (view === 'individual') {
    (res as any).bar = res.bar.map(b => ({ ...b, nonIndividual: 0 }))
  } else if (view === 'non-individual') {
    (res as any).bar = res.bar.map(b => ({ ...b, individual: 0 }))
  }

  return Response.json(res)
}
