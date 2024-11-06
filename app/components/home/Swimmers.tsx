export function Swimmers() {
  const swimmers = [
    {
      name: "Noah Tepicky",
      image: "/images/swimmer1.jpg",
      description: "Suspendisse molestie purus vel aliquet venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eu vehicula mi. Suspendisse venenatis congue velit, vel pellentesque sapien varius nec. Sed convallis egestas scelerisque."
    },
    {
      name: "Robert Connelly",
      image: "/images/swimmer2.jpg",
      description: "Suspendisse molestie purus vel aliquet venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eu vehicula mi. Suspendisse venenatis congue velit, vel pellentesque sapien varius nec. Sed convallis egestas scelerisque."
    },
    {
      name: "Zane Tackett",
      image: "/images/swimmer3.jpg",
      description: "Suspendisse molestie purus vel aliquet venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eu vehicula mi. Suspendisse venenatis congue velit, vel pellentesque sapien varius nec. Sed convallis egestas scelerisque."
    }
  ]

  return (
    <section className="py-20">
      {/* Contained Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="w-full bg-[#38A4B6] py-6 rounded-t-lg">
          <h2 className="text-4xl font-bold text-white text-center">THE SWIMMERS</h2>
        </div>

        {/* Swimmers Content - Dark Background */}
        <div className="bg-[#262629] p-8 rounded-b-lg">
          <div className="grid md:grid-cols-3 gap-8">
            {swimmers.map((swimmer) => (
              <div key={swimmer.name} className="flex flex-col items-center">
                {/* Name Badge */}
                <div className="bg-[#38A4B6] text-white px-8 py-2 rounded-full mb-4 z-10">
                  {swimmer.name}
                </div>
                
                {/* Image Container */}
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img 
                    src={swimmer.image} 
                    alt={swimmer.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <p className="text-white text-center text-sm">
                  {swimmer.description}
                </p>

                {/* Donation Circle */}
                <div className="mt-6 w-12 h-12 rounded-full bg-[#38A4B6] flex items-center justify-center cursor-pointer hover:bg-[#2d8a96] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Donation Controls */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <button className="bg-[#38A4B6] text-white px-4 py-2 rounded">
              select token
            </button>
            <div className="bg-[#38A4B6]/10 text-white px-4 py-2 rounded">
              0.22 ETH
            </div>
            <button className="bg-[#38A4B6] text-white px-4 py-2 rounded">
              Donate to Swimmer!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 