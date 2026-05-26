// app/robots/[slug]/page.tsx
import { getRobot, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'

export default async function RobotPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const robot = await getRobot(slug)

  if (!robot) notFound()

  const heroImage = robot.metadata?.hero_image
  const name = getMetafieldValue(robot.metadata?.name) || robot.title
  const model = getMetafieldValue(robot.metadata?.model_number)
  const description = getMetafieldValue(robot.metadata?.description)
  const status = getMetafieldValue(robot.metadata?.status)
  const specs = getMetafieldValue(robot.metadata?.specs)
  const gallery = robot.metadata?.gallery

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {heroImage && (
        <div className="rounded-3xl overflow-hidden mb-10 shadow-xl">
          <img
            src={`${heroImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={name}
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 mb-4">
        {status && (
          <span className="px-3 py-1 bg-warm-500 text-white text-sm font-semibold rounded-full">
            {status}
          </span>
        )}
        {model && (
          <span className="px-3 py-1 bg-cream-200 text-terracotta-800 text-sm font-mono rounded-full">
            {model}
          </span>
        )}
      </div>

      <h1 className="text-5xl font-extrabold text-terracotta-900 mb-6">{name}</h1>

      {description && (
        <p className="text-xl text-terracotta-700 leading-relaxed mb-10">{description}</p>
      )}

      {specs && (
        <div className="bg-gradient-to-br from-warm-50 to-cream-100 rounded-2xl p-8 mb-10 border border-warm-200">
          <h2 className="text-2xl font-bold text-terracotta-900 mb-4">Specifications</h2>
          <div
            className="prose prose-lg max-w-none prose-headings:text-terracotta-900"
            dangerouslySetInnerHTML={{ __html: specs }}
          />
        </div>
      )}

      {gallery && gallery.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-terracotta-900 mb-6">Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-md aspect-square">
                <img
                  src={`${img.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                  alt={`${name} ${idx + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}