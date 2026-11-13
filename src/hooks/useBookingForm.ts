import { useCallback, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const SLOTS = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00']

export interface BookingValues { doctor: string; name: string; phone: string; date: string; slot: string }

const schema = Yup.object({
  doctor: Yup.string().required('აირჩიეთ ექიმი'),
  name: Yup.string().min(3, 'სახელი მინიმუმ 3 სიმბოლოა').required('შეიყვანეთ სახელი'),
  phone: Yup.string().matches(/^5\d{8}$/, 'ნომერი უნდა იყოს ფორმატით 5XXXXXXXX').required('შეიყვანეთ ტელეფონი'),
  date: Yup.string().required('აირჩიეთ თარიღი'),
  slot: Yup.string().required('აირჩიეთ დრო'),
})

export function useBookingForm() {
  const [confirmed, setConfirmed] = useState<string | null>(null)
  const onSubmit = useCallback((v: BookingValues) => setConfirmed(`${v.doctor}, ${v.date}, ${v.slot}`), [])
  const formik = useFormik<BookingValues>({
    initialValues: { doctor: '', name: '', phone: '', date: '', slot: '' },
    validationSchema: schema,
    onSubmit,
  })
  return { formik, confirmed }
}
