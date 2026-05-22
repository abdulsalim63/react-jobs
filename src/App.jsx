import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"
import Navbar from "./components/Navbar"

const App = () => {
  return <>
    <Navbar />
    <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and experience." />
    <HomeCards />
    <JobListings />
  </>
}

export default App