import { getPosts } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-terracotta-900 mb-4">All Posts</h1>
        <p className="text-lg text-terracotta-600">Browse all articles about Darwin42 robots</p>
      </div>
      {posts.length === 0 ? (
        <p className="text-center text-terracotta-600">No posts yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}