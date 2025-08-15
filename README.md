# KYC Dashboard (Next.js 14 + TailwindCSS)

A fully interactive KYC Dashboard built for the assignment. Includes:
- App Router (Next.js 14)
- TailwindCSS (custom theme + dark mode)
- Recharts (bar + doughnut charts)
- Framer Motion animations
- Loading skeletons
- Mock API (`/api/dashboard`)
- Responsive layout with collapsible sidebar

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Features
- **Top Navbar**: breadcrumb, search, notifications, date, dark mode toggle
- **Sidebar**: collapsible, active highlight
- **Dashboard**: KPI cards, bar chart (Individual vs Non-Individual), doughnut chart (PAN cycle), status cards, category progress, PAN/data stats
- **Tabs**: time range (Today/This Month) and view (Individual/Non-Individual)
- **Mock API**: switches data based on selected range
- **Dark Mode**: persists in localStorage
- **Animations**: hover/elevation and transitions

## Tech
- Next.js 14
- TypeScript
- TailwindCSS 3
- Recharts
- Framer Motion
- Lucide Icons

---

© 2025 Lumio Partners — Assignment Solution
