// app/posts/[slug]/page.tsx
import { getPost } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  const image = post.metadata?.featured_image
  const content = getMetafieldValue(post.metadata?.content) || post.content || ''
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const category = getMetafieldValue(post.metadata?.category)
  const date = getMetafieldValue(post.metadata?.published_date)
  const author = post.metadata?.author
  const robot = post.metadata?.featured_robot

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {category && (
        <span className="inline-block px-4 py-1 bg-warm-100 text-warm-700 text-sm font-semibold rounded-full mb-4">
          {category}
        </span>
      )}
      <h1 className="text-4xl md:text-5xl font-extrabold text-terracotta-900 mb-4 leading-tight">
        {post.title}
      </h1>
      {excerpt && (
        <p className="text-xl text-terracotta-700 mb-6">{excerpt}</p>
      )}
      <div className="flex items-center gap-4 text-sm text-terracotta-600 mb-8 pb-8 border-b border-warm-200">
        {author && (
          <Link href={`/authors/${author.slug}`} className="flex items-center gap-2 hover:text-warm-600">
            {author.metadata?.avatar && (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={author.title}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <span className="font-medium">{getMetafieldValue(author.metadata?.name) || author.title}</span>
          </Link>
        )}
        {date && (
          <span>
            {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        )}
      </div>

      {image && (
        <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
          <img
            src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={post.title}
            width={1000}
            height={560}
            className="w-full h-auto"
          />
        </div>
      )}

      <div
        className="prose prose-lg max-w-none prose-headings:text-terracotta-900 prose-a:text-warm-600 prose-strong:text-terracotta-900"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {robot && (
        <div className="mt-12 p-6 bg-gradient-to-br from-warm-50 to-cream-100 rounded-2xl border border-warm-200">
          <p className="text-sm font-semibold text-warm-700 uppercase tracking-wide mb-3">Featured Robot</p>
          <Link href={`/robots/${robot.slug}`} className="flex items-center gap-4 group">
            {robot.metadata?.hero_image && (
              <img
                src={`${robot.metadata.hero_image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={robot.title}
                width={80}
                height={80}
                className="w-20 h-20 rounded-xl object-cover"
              />
            )}
            <div>
              <h3 className="text-xl font-bold text-terracotta-900 group-hover:text-warm-600 transition-colors">
                {getMetafieldValue(robot.metadata?.name) || robot.title}
              </h3>
              {robot.metadata?.model_number && (
                <p className="text-sm text-warm-700 font-mono">{getMetafieldValue(robot.metadata.model_number)}</p>
              )}
            </div>
          </Link>
        </div>
      )}
    </article>
  )
}