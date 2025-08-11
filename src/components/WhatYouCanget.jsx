import race from "../assets/race.png";

export default function WhatYouCanget() {
  return (
    <section className="bg-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={race}
              alt="Professional woman"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-white pointer-events-none" />
          </div>

          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-red-600">
              WHAT YOU WILL GET{" "}
            </h1>
            <p className="text-xl md:text-3xl font-bold text-center md:text-left">
              When you sign up, you will receive:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">📝</span>
                <p className="text-base md:text-lg leading-relaxed">
                A downloadable Global Action Planner template
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">🌐</span>
                <p className="text-base md:text-lg leading-relaxed">
                Our Global Opportunities Masterlist (140+ links!)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">📹</span>
                <p className="text-base md:text-lg leading-relaxed">
                Session recording + replay access
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">🪪</span>
                <p className="text-base md:text-lg leading-relaxed">
                Certificate of Participation
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">💬</span>
                <p className="text-base md:text-lg leading-relaxed">
                Access to our private LinkedIn community for monthly check-ins
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
