import logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-700 text-white border-b-2 border-gray-500">
      <div className="flex items-center space-x-2">
        <img className="h-10 w-auto" src={logo} width="200" />
        <p className="text-xl font-bold">React Jobs</p>
      </div>
      <div className="flex space-x-4 text-lg">
        <button className="btn">Home</button>
        <button className="btn">Jobs</button>
        <button className="btn">Post a Job</button>
      </div>
    </nav>
  )
}

export default Navbar