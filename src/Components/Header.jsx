import { CalendarCheck, Github, Sparkles } from 'lucide-react'

function Header({ totalTasks, completedTasks }) {
  return (
    <header className="overflow-hidden rounded-[2rem] bg-zinc-950 text-white shadow-glow">
      <div className="relative px-6 py-8 sm:px-10 sm:py-10">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute bottom-0 left-12 h-36 w-36 rounded-full bg-rose-500/25 blur-3xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-zinc-100">
              <Sparkles size={16} />
              React gorev yonetim paneli
            </div>
            <h1 className="text-4xl font-black tracking-normal sm:text-6xl">Task Studio</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">
              Gunluk isleri planlamak, onceliklendirmek ve biten gorevleri takip etmek icin
              hazirlanmis modern bir CRUD uygulamasi.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:min-w-80">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <CalendarCheck className="mb-4 text-emerald-300" size={28} />
              <p className="text-3xl font-black">{totalTasks}</p>
              <p className="mt-1 text-sm text-zinc-300">Toplam gorev</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <Github className="mb-4 text-amber-300" size={28} />
              <p className="text-3xl font-black">{completedTasks}</p>
              <p className="mt-1 text-sm text-zinc-300">Tamamlanan</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
