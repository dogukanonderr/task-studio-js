import { ClipboardList, Clock3, Trophy } from 'lucide-react'

function TaskStats({ tasks }) {
  const plannedTasks = tasks.filter((task) => task.status === 'Planlandi').length
  const activeTasks = tasks.filter((task) => task.status === 'Devam ediyor').length
  const completedTasks = tasks.filter((task) => task.status === 'Tamamlandi').length

  const stats = [
    {
      title: 'Planlandi',
      value: plannedTasks,
      color: 'bg-sky-50 text-sky-700',
      icon: ClipboardList,
    },
    {
      title: 'Devam ediyor',
      value: activeTasks,
      color: 'bg-violet-50 text-violet-700',
      icon: Clock3,
    },
    {
      title: 'Tamamlandi',
      value: completedTasks,
      color: 'bg-emerald-50 text-emerald-700',
      icon: Trophy,
    },
  ]

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div key={stat.title} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${stat.color}`}>
              <Icon size={24} />
            </div>
            <p className="text-3xl font-black text-zinc-950">{stat.value}</p>
            <p className="mt-1 text-sm font-semibold text-zinc-500">{stat.title}</p>
          </div>
        )
      })}
    </section>
  )
}

export default TaskStats
