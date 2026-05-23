const PostJobPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
      <p className="text-gray-700 mb-4">Fill out the form below to post a new job opening.</p>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="job-title">Job Title</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" id="job-title" placeholder="e.g. Senior React Developer" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="company">Company Name</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" id="company" placeholder="e.g. Tech Company Inc." />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="location">Location</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" id="location" placeholder="e.g. Remote" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="description">Job Description</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" id="description" rows="5" placeholder="Describe the job responsibilities and requirements"></textarea>
        </div>
        <button className="bg-violet-800 text-white px-4 py-2 rounded hover:bg-violet-700" type="submit">Post Job</button>
      </form>
    </div>
  )
}

export default PostJobPage