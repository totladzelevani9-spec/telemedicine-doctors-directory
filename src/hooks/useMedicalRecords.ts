import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecords } from '../store/recordsSlice'
import type { AppDispatch, RootState } from '../store'

export function useMedicalRecords() {
  const dispatch = useDispatch<AppDispatch>()
  const { items, status } = useSelector((s: RootState) => s.records)
  useEffect(() => { if (status === 'idle') dispatch(fetchRecords()) }, [dispatch, status])
  return { records: items, status }
}
