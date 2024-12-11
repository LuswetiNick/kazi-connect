export default function JobApplicationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Apply for Frontend Developer Position</h1>

      <form className="space-y-6 bg-white p-6 rounded-lg shadow">
        {/* Cover Letter */}
        <div>
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            rows={6}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Explain why you're the best fit for this position..."
          />
        </div>

        {/* Expected Rate */}
        <div>
          <label htmlFor="rate" className="block text-sm font-medium text-gray-700">
            Expected Rate (USD)
          </label>
          <input
            type="number"
            id="rate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Availability */}
        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
            Availability
          </label>
          <select
            id="availability"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select availability</option>
            <option value="immediate">Immediate</option>
            <option value="1week">Within 1 week</option>
            <option value="2weeks">Within 2 weeks</option>
            <option value="1month">Within 1 month</option>
          </select>
        </div>

        {/* Portfolio/Previous Work */}
        <div>
          <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">
            Portfolio Links (optional)
          </label>
          <input
            type="text"
            id="portfolio"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Links to your previous work or portfolio"
          />
        </div>

        {/* Additional Information */}
        <div>
          <label htmlFor="additional" className="block text-sm font-medium text-gray-700">
            Additional Information
          </label>
          <textarea
            id="additional"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Any additional information you'd like to share..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
