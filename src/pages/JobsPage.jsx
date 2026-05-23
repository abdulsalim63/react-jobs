import JobListings from '../components/JobListings'
import { useState, useEffect } from 'react'

const JobsPage = () => {
  const [allJobs, setAllJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        setTimeout(async () => {
          const response = await fetch("/api/jobs?_sort=-datePosted")
          const data = await response.json()
          setAllJobs(data)
          setIsLoading(false)
        }, 500)
      } catch (error) {
        console.error("Error fetching all jobs:", error)
        setIsLoading(false)
      }
    }

    fetchAllJobs()
  }, [])
  return (
    <section>
      <JobListings jobs={allJobs} isLoading={isLoading} />
    </section>
  )
}

export default JobsPage