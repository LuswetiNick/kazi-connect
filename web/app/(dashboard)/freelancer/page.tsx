export default function FreelancerDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Freelancer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
          {/* Available jobs list */}
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">My Applications</h2>
          {/* Applications list */}
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          {/* Profile information */}
        </div>
      </div>
    </div>
  );
}
