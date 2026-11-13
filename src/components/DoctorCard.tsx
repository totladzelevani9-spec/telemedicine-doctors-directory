import type { Doctor } from '../types/doctor'

interface Props { doctor: Doctor }

export default function DoctorCard({ doctor }: Props) {
  const initials = doctor.name.split(' ').map(w => w[0]).join('')
  return (
    <article className="doctor-card flex gap-4 rounded-lg border border-teal-900/15 bg-white p-4">
      <div className="avatar" aria-hidden="true">{initials}</div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-lg">{doctor.name}</h3>
        <p className="text-teal-800">{doctor.specialty}</p>
        <p className="text-sm text-slate-600">{doctor.clinic} · გამოცდილება {doctor.experience} წელი</p>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span>რეიტინგი: <b>{doctor.rating.toFixed(1)}</b></span>
          {doctor.available
            ? <span className="badge badge--on">ხელმისაწვდომია</span>
            : <span className="badge badge--off">დაკავებულია</span>}
        </div>
      </div>
    </article>
  )
}
