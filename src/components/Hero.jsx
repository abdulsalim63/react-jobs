const Hero = (props) => {
  const { title, subtitle } = props

  return (
    <section className="bg-gray-700 text-white p-12 text-center space-y-2">
      <div className="text-4xl font-bold">{title}</div>
      <div className="text-lg">{subtitle}</div>
    </section>
  )
}

export default Hero