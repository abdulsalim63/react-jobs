import JobListing from "./JobListing"
import { useLocation } from "react-router-dom"
import Spinner from "./Spinner"
// import { useEffect } from "react"
import { useContext } from "react"
import { ThemeContext } from "../layouts/MainLayout"

const JobListings = ({ jobs, isLoading }) => {
  const location = useLocation()
  const { theme, themes } = useContext(ThemeContext)

  // const [page, setPage] = useState(1

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
    <div className={`px-4 ${themes.find(t => t.name === theme).bgLight} py-8`}>
      <h1 className={`text-3xl font-bold ${themes.find(t => t.name === theme).text} text-center`}>{location.pathname === '/jobs' ? 'Browse Jobs' : 'Recent Jobs'}</h1>
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