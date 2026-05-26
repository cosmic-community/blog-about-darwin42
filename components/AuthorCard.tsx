import Link from 'next/link'
import { Author } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function AuthorCard({ author }: { author: Author }) {
  const avatar = author.metadata?.avatar
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const role = getMetafieldValue(author.metadata?.role)
  const bio = getMetafieldValue(author.metadata?.bio)

  return (
    <Link href={`/authors/${author.slug}`} className="group block">
      <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-warm-100 text-center h-full">
        {avatar && (
          <img
            src={`${avatar.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
            alt={name}
            width={120}
            height={120}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-warm-200 group-hover:border-warm-400 transition-colors"
          />
        )}
        <h3 className="text-lg font-bold text-terracotta-900 group-hover:text-warm-600 transition-colors">
          {name}
        </h3>
        {role && (
          <p className="text-sm text-warm-600 font-medium mb-2">{role}</p>
        )}
        {bio && (
          <p className="text-terracotta-700 text-sm line-clamp-3">{bio}</p>
        )}
      </article>
    </Link>
  )
}