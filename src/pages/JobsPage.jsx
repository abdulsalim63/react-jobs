import JobListings from '../components/JobListings'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

const JobsPage = () => {
  const [allJobs, setAllJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  // const [page, setPage] = useState(1)

  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message)
    }
  }, [location])

  useEffect(() => {
    let cancelled = false

    const fetchAllJobs = async () => {
      try {
        setTimeout(async () => {
          const response = await fetch("/api/jobs?_sort=-datePosted")
          const data = await response.json()

          if (!cancelled) {
            setAllJobs(data)
            setIsLoading(false)
          }
        }, 500) // Simulate network delay
      } catch (error) {
        console.error("Error fetching all jobs:", error)
        if (!cancelled) setIsLoading(false)
      }
    }

    fetchAllJobs()

    return () => {
      cancelled = true  // discard result from the first (discarded) mount
    }
  }, [])
  return (
    <section>
      <JobListings jobs={allJobs} isLoading={isLoading} />
    </section>
  )
}

export default JobsPage