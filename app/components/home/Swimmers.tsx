export function Swimmers() {
  const swimmers = [
    {
      name: "Swimmer 1",
      image: "/images/swimmer1.jpg",
      description: "Professional swimmer with multiple channel crossings."
    },
    {
      name: "Swimmer 2",
      image: "/images/swimmer2.jpg",
      description: "Endurance athlete and ocean conservation advocate."
    },
    {
      name: "Swimmer 3",
      image: "/images/swimmer3.jpg",
      description: "Record-holding long-distance swimmer."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Swimmers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {swimmers.map((swimmer) => (
            <div key={swimmer.name} className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={swimmer.image} 
                alt={swimmer.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{swimmer.name}</h3>
                <p className="text-gray-300">{swimmer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 