export const emptyTask = {
  title: '',
  description: '',
  category: 'Okul',
  priority: 'Orta',
  status: 'Planlandi',
  dueDate: '',
}

export const starterTasks = [
  {
    id: 1,
    title: 'Proje ekran tasarimini bitir',
    description: 'Dashboard, form ve gorev kartlarinin son halini hazirla.',
    category: 'Frontend',
    priority: 'Yuksek',
    status: 'Devam ediyor',
    dueDate: '2026-05-20',
  },
  {
    id: 2,
    title: 'README dosyasini duzenle',
    description: 'Kurulum adimlari, ekran goruntusu ve canli link bilgisi eklenecek.',
    category: 'Dokuman',
    priority: 'Orta',
    status: 'Planlandi',
    dueDate: '2026-05-22',
  },
  {
    id: 3,
    title: 'CRUD kontrollerini test et',
    description: 'Ekleme, listeleme, guncelleme ve silme akislarini dene.',
    category: 'Test',
    priority: 'Dusuk',
    status: 'Tamamlandi',
    dueDate: '2026-05-24',
  },
]

export const categoryOptions = ['Okul', 'Frontend', 'Dokuman', 'Test', 'Kisisel']
export const priorityOptions = ['Dusuk', 'Orta', 'Yuksek']
export const statusOptions = ['Planlandi', 'Devam ediyor', 'Tamamlandi']
