import JobListing from "./JobListing"
import { useLocation } from "react-router-dom"
import Spinner from "./Spinner"
// import { useEffect } from "react"

const JobListings = ({ jobs, isLoading }) => {
  const location = useLocation()

  // const handleScroll = (e) => {
  //   const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
  //   if (scrollTop + clientHeight >= scrollHeight - 10) {
  //     console.log("Scrolled to bottom, loading more jobs...")
  //     setPage((prevPage) => prevPage + 1)
  //   }
  // }
//   useEffect(() => {
//     const handleScroll = () => {
//       const { scrollTop, scrollHeight, clientHeight } = document.documentElement
//       if (scrollTop + clientHeight >= scrollHeight - 10) {
//         setPage((prev) => prev + 1)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
// }, [setPage])
    

  return (
    <div className="px-4 bg-violet-100 py-8">
      <h1 className="text-3xl font-bold text-violet-800 text-center">{location.pathname === '/jobs' ? 'Browse Jobs' : 'Recent Jobs'}</h1>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobListing key={job.id} job={job} />
        ))}
        {isLoading && (
          <div className="col-span-full flex justify-center">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  )
}

export default JobListings