export function Causes() {
  const causes = [
    {
      title: "Thai Swim Program for Youths",
      description: "Drowning is the 2nd leading cause of death for children under 15 years old. Each year, around 1,500 people drown in Thailand, with the majority of these deaths occurring among children. For youths under the age of 15, drowning accounts for about 20% of all deaths, making it the second leading cause of death after traffic accidents. Together, with GRIP IT, we aim to leave a lasting impact on Thai Swim Culture within children and grow a completely free, for kids, Swim Program across the nation."
    },
    {
      title: "Aiding Indigenous Island People of Thailand with Solar Energy",
      description: "Through GRIP IT, we learned that many indigenous island populations are experiencing a loss of population due to the lack of basic life needs, such as renewable energy access and good school materials. With GRIP IT, we aim to support local island populations (that we are swimming past) with better schooling materials for their youths, and free solar energy and battery installations so that they can support their local population easier. Hopefully allowing it to thrive."
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="w-full bg-[#38A4B6] py-6 rounded-t-lg">
          <h2 className="text-4xl font-bold text-white text-center">THE CAUSES</h2>
        </div>

        {/* Causes Content */}
        <div className="bg-[#262629] p-8 rounded-b-lg">
          <div className="space-y-8">
            {causes.map((cause, index) => (
              <div key={cause.title} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                {/* Text Content */}
                <div className="flex-1 space-y-4">
                  <div className="inline-block bg-white text-[#262629] px-6 py-2 rounded-full">
                    {cause.title}
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    {cause.description}
                  </p>
                </div>

                {/* Image Placeholder */}
                <div className="flex-1">
                  <div className="bg-gray-200 rounded-lg w-full aspect-video">
                    {/* Add image here if needed */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 