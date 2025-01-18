import { Sparkles, Globe2, Zap } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Dubbing',
    description: 'State-of-the-art AI technology for natural-sounding voice translations'
  },
  {
    icon: Globe2,
    title: 'Multiple Languages',
    description: 'Support for various Indian languages including Hindi, Tamil, Telugu, and more'
  },
  {
    icon: Zap,
    title: 'Fast Processing',
    description: 'Quick turnaround time for video translations with high accuracy'
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Our Platform?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-[#EB3678] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

