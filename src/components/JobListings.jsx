import jobs from "../jobs.json"

const JobListings = () => {
  return (
    <div className="px-4 bg-violet-100 py-8">
      <h1 className="text-3xl font-bold text-violet-800 text-center">Browse Jobs</h1>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white hover:bg-violet-50 rounded-lg shadow-md p-6 justify-between flex flex-col">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
              <p className="text-amber-700 font-semibold">{job.location}</p>
              <p className="text-gray-700 mt-2">{job.description}</p>
              <div className="mt-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                  {job.type}
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {job.salary}
                </span>
              </div>
            </div>
            <div className="mt-4 text-center text-white py-2 px-4 rounded-lg bg-blue-800 hover:bg-violet-800">
              Read More
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobListings