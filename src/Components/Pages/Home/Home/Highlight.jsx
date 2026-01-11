import Container from "../../../Container/Container"
import { highlights } from "./High"






const Highlight = () => {

  return (
    <Container>
      {' '}
      <section className={` min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 py-16`}>
        {/* HERO */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Why <span className="text-cyan-400">BookCourier</span> is Special
          </h1>
          <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            বই কেনা আর ডেলিভারি—সবকিছু এখন আরও দ্রুত, নিরাপদ ও সহজ।
          </p>
        </div>

        {/* HIGHLIGHT CARDS */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:scale-[1.03] transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            )
          })}
        </div>

        {/* STATS */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Books Delivered', value: '25K+' },
            { label: 'Happy Readers', value: '18K+' },
            { label: 'Cities Covered', value: '45+' },
            { label: 'Avg Delivery', value: '24h' },
          ].map((stat, i) => (
            <div key={i}>
              <h4 className="text-2xl sm:text-3xl font-bold text-cyan-400">
                {stat.value}
              </h4>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition">
            Explore Books Now
          </button>
        </div>
      </section>
    </Container>
  )
}

export default Highlight
