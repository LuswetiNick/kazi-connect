export default function SellerDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Seller Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">My Job Postings</h2>
          {/* Job postings list */}
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Applications</h2>
          {/* Applications received */}
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Post New Job</h2>
          {/* New job form */}
        </div>
      </div>
    </div>
  );
}
