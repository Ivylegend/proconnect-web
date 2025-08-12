import three from "../assets/three.png";
export default function WhoShouldAttend() {
  return (
    <section className="bg-white md:px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl lg:text-4xl font-bold text-center text-red-600">
              WHO SHOULD ATTEND
            </h2>
            <p className="text-xl md:text-2xl font-bold text-center md:text-left">
              This session is perfect for:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">🔹</span>
                <p className="text-base md:text-lg leading-relaxed">
                  Working professionals seeking global exposure
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">🔹</span>
                <p className="text-base md:text-lg leading-relaxed">
                  Freelancers looking to earn in USD or EUR
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">🔹</span>
                <p className="text-base md:text-lg leading-relaxed">
                  Entrepreneurs interested in startup/founder visas
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">🔹</span>
                <p className="text-base md:text-lg leading-relaxed">
                  Final-year students planning post-school pathways through
                  scholarships
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl md:text-2xl font-bold">🔹</span>
                <p className="text-base md:text-lg leading-relaxed">
                  Career changers & digital creatives
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={three}
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
