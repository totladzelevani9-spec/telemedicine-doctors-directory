import { useEffect, useState } from 'react'
import type { Doctor } from '../types/doctor'

export function useFetchDoctors(url: string) {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        setDoctors(await res.json())
      } catch {
        setError('მონაცემების ჩატვირთვა ვერ მოხერხდა. სცადეთ თავიდან.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [url])

  return { doctors, loading, error }
}
