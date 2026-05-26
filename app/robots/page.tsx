import { getRobots } from '@/lib/cosmic'
import RobotCard from '@/components/RobotCard'

export default async function RobotsPage() {
  const robots = await getRobots()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-terracotta-900 mb-4">The Robots</h1>
        <p className="text-lg text-terracotta-600">Meet every Darwin42 in our showcase</p>
      </div>
      {robots.length === 0 ? (
        <p className="text-center text-terracotta-600">No robots yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {robots.map((robot) => (
            <RobotCard key={robot.id} robot={robot} />
          ))}
        </div>
      )}
    </div>
  )
}