import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const view = searchParams.get('view') || 'both'

  const common = [
    { label: 'RI - Individual', value: 68 },
    { label: 'NRI - Individual', value: 32 },
    { label: 'RI - Non-Individual', value: 54 },
    { label: 'NRI - Non-Individual', value: 46 },
  ]

  let items = common
  if (view === 'individual') {
    items = common.filter(i => i.label.includes('Individual') && !i.label.includes('Non-'))
  } else if (view === 'non-individual') {
    items = common.filter(i => i.label.includes('Non-Individual'))
  }

  const groups = [
    { title: 'Categories — Distribution A', items: items.slice(0,2) },
    { title: 'Categories — Distribution B', items: items.slice(2,4) },
  ]

  return Response.json(groups)
}
