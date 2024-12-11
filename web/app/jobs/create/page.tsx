export default function CreateJobPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Job</h1>

      <form className="space-y-6 bg-white p-6 rounded-lg shadow">
        {/* Job Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Job Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Job Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Budget Range */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="minBudget" className="block text-sm font-medium text-gray-700">
              Minimum Budget
            </label>
            <input
              type="number"
              id="minBudget"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="maxBudget" className="block text-sm font-medium text-gray-700">
              Maximum Budget
            </label>
            <input
              type="number"
              id="maxBudget"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile Development</option>
            <option value="design">Design</option>
            <option value="writing">Content Writing</option>
          </select>
        </div>

        {/* Required Skills */}
        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
            Required Skills (comma separated)
          </label>
          <input
            type="text"
            id="skills"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g. React, TypeScript, CSS"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}
