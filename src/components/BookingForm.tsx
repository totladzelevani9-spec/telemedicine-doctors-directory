import { SLOTS, useBookingForm, type BookingValues } from '../hooks/useBookingForm'
import { useFetchDoctors } from '../hooks/useFetchDoctors'

export default function BookingForm() {
  const { doctors } = useFetchDoctors(`${import.meta.env.BASE_URL}doctors.json`)
  const { formik: f, confirmed } = useBookingForm()
  const err = (k: keyof BookingValues) =>
    f.touched[k] && f.errors[k] ? <p className="text-sm text-red-700">{f.errors[k]}</p> : null

  if (confirmed) return <p role="status" className="font-semibold text-teal-800">ვიზიტი დაჯავშნილია: {confirmed}</p>

  return (
    <form onSubmit={f.handleSubmit} noValidate className="flex flex-col gap-3">
      <select aria-label="ექიმი" className="field" {...f.getFieldProps('doctor')}>
        <option value="">აირჩიეთ ექიმი</option>
        {doctors.map(d => <option key={d.id} value={d.name}>{d.name} — {d.specialty}</option>)}
      </select>
      {err('doctor')}
      <input placeholder="სახელი და გვარი" aria-label="სახელი" className="field" {...f.getFieldProps('name')} />
      {err('name')}
      <input placeholder="ტელეფონი (5XXXXXXXX)" aria-label="ტელეფონი" className="field" {...f.getFieldProps('phone')} />
      {err('phone')}
      <input type="date" aria-label="თარიღი" min={new Date().toISOString().slice(0, 10)} className="field" {...f.getFieldProps('date')} />
      {err('date')}
      <div className="flex flex-wrap gap-2" role="group" aria-label="დრო">
        {SLOTS.map(s => (
          <button type="button" key={s} aria-pressed={f.values.slot === s}
            onClick={() => f.setFieldValue('slot', s)}
            className={`rounded-md border px-3 py-1 ${f.values.slot === s ? 'bg-teal-800 text-white' : 'bg-white'}`}>{s}</button>
        ))}
      </div>
      {err('slot')}
      <button type="submit" className="btn">დაჯავშნა</button>
    </form>
  )
}
