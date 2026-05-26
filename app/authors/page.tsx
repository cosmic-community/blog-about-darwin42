import { getAuthors } from '@/lib/cosmic'
import AuthorCard from '@/components/AuthorCard'

export default async function AuthorsPage() {
  const authors = await getAuthors()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-terracotta-900 mb-4">Our Authors</h1>
        <p className="text-lg text-terracotta-600">Meet the team behind Darwin42 stories</p>
      </div>
      {authors.length === 0 ? (
        <p className="text-center text-terracotta-600">No authors yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      )}
    </div>
  )
}