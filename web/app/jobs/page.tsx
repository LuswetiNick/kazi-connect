export default function JobsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Available Jobs</h1>
        <div className="flex space-x-4">
          <input
            type="search"
            placeholder="Search jobs..."
            className="px-4 py-2 border rounded-lg"
          />
          <select className="px-4 py-2 border rounded-lg">
            <option value="">All Categories</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile Development</option>
            <option value="design">Design</option>
            <option value="writing">Content Writing</option>
          </select>
        </div>
      </div>

      {/* Job listings grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample job cards - will be populated dynamically */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold">Frontend Developer</h2>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
              $500-1000
            </span>
          </div>
          <p className="text-gray-600 mt-2">
            Looking for an experienced frontend developer...
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">TypeScript</span>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">Posted 2 days ago</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="flex space-x-2">
          <button className="px-4 py-2 border rounded">Previous</button>
          <button className="px-4 py-2 border rounded bg-blue-500 text-white">1</button>
          <button className="px-4 py-2 border rounded">2</button>
          <button className="px-4 py-2 border rounded">3</button>
          <button className="px-4 py-2 border rounded">Next</button>
        </nav>
      </div>
    </div>
  );
}
