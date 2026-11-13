import DoctorDirectory from './components/DoctorDirectory'

export default function App() {
  return (
    <>
      <header className="page-header">
        <div className="mx-auto max-w-6xl"><h1>ექიმების დირექტორია</h1><p>იპოვეთ სპეციალისტი და ნახეთ მისი ხელმისაწვდომობა</p></div>
      </header>
      <main className="mx-auto max-w-6xl p-4 py-8"><DoctorDirectory /></main>
    </>
  )
}
