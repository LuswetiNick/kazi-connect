export default function JobDetailsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Job Header */}
        <div className="p-6 border-b">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">Frontend Developer</h1>
              <div className="mt-2 flex items-center space-x-4">
                <span className="text-gray-600">Posted by Company Name</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-600">2 days ago</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-green-600">$500-1000</div>
          </div>
        </div>

        {/* Job Details */}
        <div className="p-6 space-y-6">
          {/* Job Description */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <p className="text-gray-600">
              We are looking for an experienced Frontend Developer to join our team...
            </p>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>3+ years of experience with React</li>
              <li>Strong understanding of TypeScript</li>
              <li>Experience with responsive design</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 px-3 py-1 rounded-full">React</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">TypeScript</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">CSS</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">HTML</span>
            </div>
          </div>
        </div>

        {/* Application Section */}
        <div className="p-6 bg-gray-50 border-t">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Interested in this role?</h2>
              <p className="text-gray-600 mt-1">Apply now to get started</p>
            </div>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
              Apply for this Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
