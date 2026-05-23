import JobListing from "./JobListing"
import { useLocation } from "react-router-dom"
import Spinner from "./Spinner"

const JobListings = ({ jobs, isLoading }) => {
  const location = useLocation()

  return (
    <div className="px-4 bg-violet-100 py-8">
      <h1 className="text-3xl font-bold text-violet-800 text-center">{location.pathname === '/jobs' ? 'Browse Jobs' : 'Recent Jobs'}</h1>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-full flex justify-center">
            <Spinner />
          </div>
        ) : (
          jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))
        )}
      </div>
    </div>
  )
}

export default JobListings