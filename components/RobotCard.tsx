import Link from 'next/link'
import { Robot } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function RobotCard({ robot }: { robot: Robot }) {
  const image = robot.metadata?.hero_image
  const name = getMetafieldValue(robot.metadata?.name) || robot.title
  const model = getMetafieldValue(robot.metadata?.model_number)
  const description = getMetafieldValue(robot.metadata?.description)
  const status = getMetafieldValue(robot.metadata?.status)

  return (
    <Link href={`/robots/${robot.slug}`} className="group block">
      <article className="bg-gradient-to-br from-warm-50 to-cream-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-warm-200 h-full">
        {image && (
          <div className="aspect-square overflow-hidden bg-warm-100">
            <img
              src={`${image.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={name}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-terracotta-900 group-hover:text-warm-600 transition-colors">
              {name}
            </h3>
            {status && (
              <span className="text-xs font-semibold px-2 py-1 bg-warm-500 text-white rounded-full">
                {status}
              </span>
            )}
          </div>
          {model && (
            <p className="text-sm text-warm-700 font-mono mb-2">{model}</p>
          )}
          {description && (
            <p className="text-terracotta-700 text-sm line-clamp-2">{description}</p>
          )}
        </div>
      </article>
    </Link>
  )
}