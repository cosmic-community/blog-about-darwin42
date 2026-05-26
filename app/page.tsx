import { getPosts, getRobots } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import RobotCard from '@/components/RobotCard'
import Link from 'next/link'

export default async function HomePage() {
  const [posts, robots] = await Promise.all([getPosts(), getRobots()])
  const featuredPosts = posts.slice(0, 3)
  const featuredRobots = robots.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-warm-50 via-cream-100 to-warm-100 py-20 border-b border-warm-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-terracotta-900 mb-6 leading-tight">
            Stories from the world of <span className="text-warm-600">Darwin42</span> robots
          </h1>
          <p className="text-xl text-terracotta-700 mb-8 max-w-2xl mx-auto">
            Dive into articles, robot profiles, and insights from our team exploring the fascinating evolution of Darwin42 robotics.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/posts" className="px-6 py-3 bg-warm-600 hover:bg-warm-700 text-white font-semibold rounded-full transition-colors shadow-lg shadow-warm-200">
              Read the Blog
            </Link>
            <Link href="/robots" className="px-6 py-3 bg-white hover:bg-warm-50 text-terracotta-800 font-semibold rounded-full transition-colors border border-warm-300">
              Meet the Robots
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-terracotta-900 mb-2">Latest Posts</h2>
              <p className="text-terracotta-600">Fresh stories from our team</p>
            </div>
            <Link href="/posts" className="text-warm-600 hover:text-warm-700 font-semibold">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Robots */}
      {featuredRobots.length > 0 && (
        <section className="py-16 bg-cream-100 border-y border-warm-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-terracotta-900 mb-2">Featured Robots</h2>
                <p className="text-terracotta-600">Meet the stars of Darwin42</p>
              </div>
              <Link href="/robots" className="text-warm-600 hover:text-warm-700 font-semibold">
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRobots.map((robot) => (
                <RobotCard key={robot.id} robot={robot} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}