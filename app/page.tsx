export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="card">
        <h3 className="text-lg font-semibold">Total Users</h3>
        <p className="text-3xl font-bold mt-2 text-accent">1,245</p>
      </div>
      <div className="card">
        <h3 className="text-lg font-semibold">Verified KYC</h3>
        <p className="text-3xl font-bold mt-2 status-success">1,000</p>
      </div>
      <div className="card">
        <h3 className="text-lg font-semibold">Pending KYC</h3>
        <p className="text-3xl font-bold mt-2 status-warning">245</p>
      </div>
    </div>
  )
}
