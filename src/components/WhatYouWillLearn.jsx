import lady from "../assets/lady.png";
export default function WhatYouWillLearn() {
  return (
    <section className="bg-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-red-600">
              WHAT YOU WILL LEARN
            </h1>
            <p className="text-xl md:text-3xl font-bold text-center md:text-left">
              In just one day, you will gain access to:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">🔹</span>
                <p className="text-base md:text-lg leading-relaxed">
                  10+ global migration pathways beyond education
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">🔹</span>
                <p className="text-base md:text-lg leading-relaxed">
                  How to get remote jobs + international freelance gigs
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">🔹</span>
                <p className="text-base md:text-lg leading-relaxed">
                  100+ fellowships, visa-free options, and funders
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">🔹</span>
                <p className="text-base md:text-lg leading-relaxed">
                  How to build a LinkedIn and CV that gets noticed globally
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">🔹</span>
                <p className="text-base md:text-lg leading-relaxed">
                  A personalized 12-month Global Go Plan you can start
                  immediately
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={lady}
              alt="Professional woman"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-white pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
