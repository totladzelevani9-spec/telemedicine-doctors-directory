import { useMedicalRecords } from '../hooks/useMedicalRecords'
import RecordCard from './RecordCard'

export default function PatientDashboard() {
  const { records, status } = useMedicalRecords()
  if (status === 'loading' || status === 'idle') return <p role="status">იტვირთება...</p>
  if (status === 'error') return <p role="alert" className="text-red-700">ბარათის ჩატვირთვა ვერ მოხერხდა.</p>
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">პაციენტის სამედიცინო ბარათი</h2>
      <div className="grid gap-3 md:grid-cols-2">{records.map(r => <RecordCard key={r.id} record={r} />)}</div>
    </section>
  )
}
