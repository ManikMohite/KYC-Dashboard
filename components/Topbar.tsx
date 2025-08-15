export default function TopNavbar() {
  return (
    <div className="h-16 bg-card border-b border-border flex items-center justify-between px-6 shadow-sm">
      <h1 className="text-lg font-semibold">Welcome to KYC Dashboard</h1>
      <button className="px-4 py-2 bg-background border border-border rounded-lg hover:shadow transition-shadow">
        Log out
      </button>
    </div>
  )
}
