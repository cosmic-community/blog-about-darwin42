import Link from 'next/link'
import { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function PostCard({ post }: { post: Post }) {
  const image = post.metadata?.featured_image
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const category = getMetafieldValue(post.metadata?.category)
  const date = getMetafieldValue(post.metadata?.published_date)

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-warm-100 h-full">
        {image && (
          <div className="aspect-[16/10] overflow-hidden bg-warm-100">
            <img
              src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6">
          {category && (
            <span className="inline-block px-3 py-1 bg-warm-100 text-warm-700 text-xs font-semibold rounded-full mb-3">
              {category}
            </span>
          )}
          <h3 className="text-xl font-bold text-terracotta-900 mb-2 group-hover:text-warm-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          {excerpt && (
            <p className="text-terracotta-700 text-sm line-clamp-3 mb-3">{excerpt}</p>
          )}
          {date && (
            <p className="text-xs text-terracotta-500">
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}