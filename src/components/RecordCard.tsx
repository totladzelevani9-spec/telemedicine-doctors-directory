import type { MedicalRecord } from '../store/recordsSlice'

export default function RecordCard({ record }: { record: MedicalRecord }) {
  return (
    <article className="rounded-lg border border-teal-900/15 bg-white p-4">
      <div className="flex items-center justify-between text-sm text-slate-600">
        <span className={`badge ${record.kind === 'დანიშნულება' ? 'badge--on' : 'badge--off'}`}>{record.kind}</span>
        <time>{record.date}</time>
      </div>
      <h3 className="mt-2 font-semibold">{record.title}</h3>
      <p className="text-slate-700">{record.details}</p>
    </article>
  )
}
