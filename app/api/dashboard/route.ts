import { NextResponse } from 'next/server'

export async function GET() {
  // Mock data with two time ranges and entity types
  const now = new Date().toISOString()
  const data = {
    generatedAt: now,
    ranges: ['today', 'thisMonth'],
    entities: ['individual', 'nonIndividual'],
    stats: {
      today: {
        newKYC: { count: 128, change: 14 },
        modifiedKYC: { count: 42, change: -6 },
        kycStatus: {
          initiated: 56,
          underProcess: 40,
          registered: 18,
          validated: 8,
          hold: 4,
          docsPending: 2
        },
        bar: [
          { label: 'Today', individual: 75, nonIndividual: 53 },
          { label: 'Yesterday', individual: 68, nonIndividual: 49 }
        ],
        categories: {
          individual: { RI: 70, NRI: 30 },
          nonIndividual: { RI: 55, NRI: 45 }
        },
        panCycle: { solicited: 180, received: 150, consumed: 120, pending: 30 },
        panStats: {
          withImage: 95,
          withoutImage: 85,
          dataWithImage: 88,
          dataWithoutImage: 77
        }
      },
      thisMonth: {
        newKYC: { count: 2120, change: 9 },
        modifiedKYC: { count: 860, change: -3 },
        kycStatus: {
          initiated: 820,
          underProcess: 610,
          registered: 340,
          validated: 180,
          hold: 70,
          docsPending: 45
        },
        bar: [
          { label: 'Week 1', individual: 420, nonIndividual: 300 },
          { label: 'Week 2', individual: 520, nonIndividual: 360 },
          { label: 'Week 3', individual: 480, nonIndividual: 390 },
          { label: 'Week 4', individual: 510, nonIndividual: 410 }
        ],
        categories: {
          individual: { RI: 64, NRI: 36 },
          nonIndividual: { RI: 58, NRI: 42 }
        },
        panCycle: { solicited: 4200, received: 3900, consumed: 3200, pending: 700 },
        panStats: {
          withImage: 1890,
          withoutImage: 1510,
          dataWithImage: 1760,
          dataWithoutImage: 1460
        }
      }
    }
  }
  return NextResponse.json(data)
}
