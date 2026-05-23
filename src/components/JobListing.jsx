import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'

const JobListing = ({ job }) => {
  const [fullDescription, setFullDescription] = useState(false)

  const timeDiff = Math.abs(new Date() - new Date(job.datePosted))
  const jobPostedDaysAgo = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

  const jobPosted = () => {
    if (Math.floor(jobPostedDaysAgo / 365) > 0) {
      return `${Math.floor(jobPostedDaysAgo / 365)}y`
    } else if (Math.floor(jobPostedDaysAgo / 30) > 0) {
      return `${Math.floor(jobPostedDaysAgo / 30)}mo`
    } else {
      return `${jobPostedDaysAgo}d`
    }
  }

  return (
    <div key={job.id} className="bg-white hover:bg-violet-50 rounded-lg shadow-md p-6 justify-between flex flex-col">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
              <div className="flex items-center justify-between">
                <p className="text-amber-700 font-semibold">
                  <FaMapMarker className="inline mr-2" />
                  {job.location}
                </p>
                <p className="text-gray-500 text-sm">{jobPosted()}</p>
              </div>
              <p className="text-gray-700 mt-2 text-justify">{fullDescription ? job.description : job.description.substring(0, 100)}
                <span
                  className="text-blue-600 mt-2 cursor-pointer"
                  onClick={() => setFullDescription(!fullDescription)}
                >
                  {fullDescription ? (<p>less</p>) : "...more"}
                </span>
              </p>
            </div>
            <div>
              <div className="mt-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                  {job.type}
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {job.salary}
                </span>
              </div>
              <div className="mt-4 text-center text-white py-2 px-4 rounded-lg bg-blue-800 hover:bg-violet-800">
                Read More
              </div>
            </div>
          </div>
  )
}

export default JobListing