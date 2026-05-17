import { CalendarDays, Edit3, Trash2 } from 'lucide-react'

function TaskCard({ task, onEditTask, onDeleteTask }) {
  const priorityColors = {
    Dusuk: 'bg-emerald-100 text-emerald-700',
    Orta: 'bg-amber-100 text-amber-700',
    Yuksek: 'bg-rose-100 text-rose-700',
  }

  const statusColors = {
    Planlandi: 'bg-sky-100 text-sky-700',
    'Devam ediyor': 'bg-violet-100 text-violet-700',
    Tamamlandi: 'bg-zinc-900 text-white',
  }

  return (
    <article className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className={`rounded-full px-3 py-1 text-xs font-black ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-black ${statusColors[task.status]}`}>
          {task.status}
        </span>
        <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-black text-cyan-700">
          {task.category}
        </span>
      </div>

      <h3 className="text-xl font-black text-zinc-950">{task.title}</h3>
      <p className="mt-3 min-h-14 text-sm leading-6 text-zinc-600">{task.description}</p>

      <div className="mt-5 flex flex-col gap-4 border-t border-zinc-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500">
          <CalendarDays size={17} />
          {task.dueDate || 'Tarih yok'}
        </div>

        <div className="flex gap-2">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition hover:bg-cyan-100 hover:text-cyan-700"
            type="button"
            aria-label="Gorevi duzenle"
            onClick={() => onEditTask(task)}
          >
            <Edit3 size={18} />
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition hover:bg-rose-100 hover:text-rose-700"
            type="button"
            aria-label="Gorevi sil"
            onClick={() => onDeleteTask(task.id)}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default TaskCard
