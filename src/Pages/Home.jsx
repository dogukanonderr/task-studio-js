import { useEffect, useState } from 'react'
import Header from '../Components/Header.jsx'
import TaskCard from '../Components/TaskCard.jsx'
import TaskForm from '../Components/TaskForm.jsx'
import TaskStats from '../Components/TaskStats.jsx'
import { emptyTask, starterTasks } from '../Interfaces/taskData.js'

function Home() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('taskStudioTasks')
    return savedTasks ? JSON.parse(savedTasks) : starterTasks
  })
  const [formTask, setFormTask] = useState(emptyTask)
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    localStorage.setItem('taskStudioTasks', JSON.stringify(tasks))
  }, [tasks])

  const completedTasks = tasks.filter((task) => task.status === 'Tamamlandi').length

  function saveTask(event) {
    event.preventDefault()

    if (!formTask.title.trim() || !formTask.description.trim()) {
      return
    }

    if (editingId) {
      const updatedTasks = tasks.map((task) => {
        if (task.id === editingId) {
          return { ...formTask, id: editingId }
        }

        return task
      })

      setTasks(updatedTasks)
      setEditingId(null)
      setFormTask(emptyTask)
      return
    }

    const newTask = {
      ...formTask,
      id: Date.now(),
    }

    setTasks([newTask, ...tasks])
    setFormTask(emptyTask)
  }

  function editTask(task) {
    setEditingId(task.id)
    setFormTask({
      title: task.title,
      description: task.description,
      category: task.category,
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function deleteTask(taskId) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(filteredTasks)

    if (editingId === taskId) {
      setEditingId(null)
      setFormTask(emptyTask)
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb] px-4 py-6 text-zinc-900 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6">
        <Header totalTasks={tasks.length} completedTasks={completedTasks} />

        <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
          <div className="grid content-start gap-6">
            <TaskForm
              formTask={formTask}
              setFormTask={setFormTask}
              editingId={editingId}
              onSaveTask={saveTask}
              onCancelEdit={() => setEditingId(null)}
            />
            <TaskStats tasks={tasks} />
          </div>

          <section className="rounded-3xl border border-zinc-200 bg-white/70 p-5 shadow-sm backdrop-blur">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-normal text-rose-700">Gorev listesi</p>
                <h2 className="mt-1 text-2xl font-black text-zinc-950">Aktif calisma alani</h2>
              </div>
              <p className="text-sm font-semibold text-zinc-500">{tasks.length} kayit listeleniyor</p>
            </div>

            {tasks.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-10 text-center">
                <p className="text-2xl font-black text-zinc-950">Henuz gorev yok</p>
                <p className="mt-2 text-zinc-500">Soldaki formdan ilk gorevini ekleyebilirsin.</p>
              </div>
            ) : (
              <div className="grid gap-4 xl:grid-cols-2">
                {tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEditTask={editTask}
                    onDeleteTask={deleteTask}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default Home
