import { useMemo, useState } from 'react'
import { useFetchDoctors } from '../hooks/useFetchDoctors'
import DoctorCard from './DoctorCard'

const ALL = 'ყველა'

export default function DoctorDirectory() {
  const { doctors, loading, error } = useFetchDoctors(`${import.meta.env.BASE_URL}doctors.json`)
  const [specialty, setSpecialty] = useState(ALL)
  const [query, setQuery] = useState('')

  const specialties = useMemo(() => [ALL, ...new Set(doctors.map(d => d.specialty))], [doctors])

  const filtered = useMemo(
    () => doctors.filter(d =>
      (specialty === ALL || d.specialty === specialty) &&
      d.name.toLowerCase().includes(query.trim().toLowerCase())),
    [doctors, specialty, query]
  )

  if (loading) return <p role="status">იტვირთება...</p>
  if (error) return <p role="alert" className="text-red-700">{error}</p>

  return (
    <section>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="მოძებნეთ ექიმი სახელით"
          aria-label="ძიება" className="field flex-1" />
        <select value={specialty} onChange={e => setSpecialty(e.target.value)} aria-label="სპეციალობა" className="field">
          {specialties.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>
      <p className="mb-3 text-sm text-slate-600">ნაპოვნია: {filtered.length}</p>
      {filtered.length === 0
        ? <p>ამ პარამეტრებით ექიმი ვერ მოიძებნა. სცადეთ სხვა სპეციალობა.</p>
        : <div className="doctor-grid">{filtered.map(d => <DoctorCard key={d.id} doctor={d} />)}</div>}
    </section>
  )
}
