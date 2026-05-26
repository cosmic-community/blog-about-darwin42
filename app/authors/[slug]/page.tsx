// app/authors/[slug]/page.tsx
import { getAuthor, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthor(slug)

  if (!author) notFound()

  const avatar = author.metadata?.avatar
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const role = getMetafieldValue(author.metadata?.role)
  const bio = getMetafieldValue(author.metadata?.bio)

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-center">
      {avatar && (
        <img
          src={`${avatar.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
          alt={name}
          width={160}
          height={160}
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-warm-200 shadow-lg"
        />
      )}
      <h1 className="text-4xl font-extrabold text-terracotta-900 mb-2">{name}</h1>
      {role && (
        <p className="text-lg text-warm-600 font-semibold mb-6">{role}</p>
      )}
      {bio && (
        <p className="text-lg text-terracotta-700 leading-relaxed">{bio}</p>
      )}
    </div>
  )
}