import { Save, X } from 'lucide-react'
import { categoryOptions, emptyTask, priorityOptions, statusOptions } from '../Interfaces/taskData'

function TaskForm({ formTask, setFormTask, editingId, onSaveTask, onCancelEdit }) {
  function handleChange(event) {
    const { name, value } = event.target
    setFormTask({ ...formTask, [name]: value })
  }

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-normal text-cyan-700">Gorev formu</p>
        <h2 className="mt-1 text-2xl font-black text-zinc-950">
          {editingId ? 'Gorevi guncelle' : 'Yeni gorev ekle'}
        </h2>
      </div>

      <form className="grid gap-4" onSubmit={onSaveTask}>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-zinc-700">Baslik</span>
          <input
            className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
            name="title"
            value={formTask.title}
            onChange={handleChange}
            placeholder="Ornek: Sunum hazirla"
            required
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-zinc-700">Aciklama</span>
          <textarea
            className="min-h-28 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
            name="description"
            value={formTask.description}
            onChange={handleChange}
            placeholder="Gorevin kisa aciklamasi"
            required
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-zinc-700">Kategori</span>
            <select
              className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
              name="category"
              value={formTask.category}
              onChange={handleChange}
            >
              {categoryOptions.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-zinc-700">Oncelik</span>
            <select
              className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
              name="priority"
              value={formTask.priority}
              onChange={handleChange}
            >
              {priorityOptions.map((priority) => (
                <option key={priority}>{priority}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-zinc-700">Durum</span>
            <select
              className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
              name="status"
              value={formTask.status}
              onChange={handleChange}
            >
              {statusOptions.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-zinc-700">Son tarih</span>
            <input
              className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
              type="date"
              name="dueDate"
              value={formTask.dueDate}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <button
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-5 py-3 font-bold text-white transition hover:bg-cyan-700"
            type="submit"
          >
            <Save size={18} />
            {editingId ? 'Guncelle' : 'Ekle'}
          </button>

          {editingId && (
            <button
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 px-5 py-3 font-bold text-zinc-700 transition hover:border-rose-200 hover:bg-rose-50"
              type="button"
              onClick={() => {
                setFormTask(emptyTask)
                onCancelEdit()
              }}
            >
              <X size={18} />
              Vazgec
            </button>
          )}
        </div>
      </form>
    </section>
  )
}

export default TaskForm
