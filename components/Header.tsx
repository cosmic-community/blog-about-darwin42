import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-cream-50 border-b border-warm-200 sticky top-0 z-40 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl">🤖</span>
          <div>
            <h1 className="text-xl font-bold text-terracotta-700 group-hover:text-terracotta-600 transition-colors">
              Darwin42
            </h1>
            <p className="text-xs text-terracotta-500 -mt-1">Robots Blog</p>
          </div>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-terracotta-800 hover:text-warm-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="/posts" className="text-terracotta-800 hover:text-warm-600 font-medium transition-colors">
            Posts
          </Link>
          <Link href="/robots" className="text-terracotta-800 hover:text-warm-600 font-medium transition-colors">
            Robots
          </Link>
          <Link href="/authors" className="text-terracotta-800 hover:text-warm-600 font-medium transition-colors">
            Authors
          </Link>
        </nav>
      </div>
    </header>
  )
}