export function Causes() {
  const causes = [
    {
      title: "Marine Conservation",
      description: "Supporting efforts to protect and preserve the Andaman Sea's marine ecosystem."
    },
    {
      title: "Local Communities",
      description: "Empowering coastal communities through sustainable development initiatives."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Causes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {causes.map((cause) => (
            <div key={cause.title} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{cause.title}</h3>
              <p className="text-gray-300">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 