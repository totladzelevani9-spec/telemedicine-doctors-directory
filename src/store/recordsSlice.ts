import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface MedicalRecord { id: number; date: string; kind: 'ანამნეზი' | 'დანიშნულება'; title: string; details: string }

export const fetchRecords = createAsyncThunk('records/fetch', async () => {
  const res = await fetch(`${import.meta.env.BASE_URL}records.json`)
  if (!res.ok) throw new Error('fetch failed')
  return (await res.json()) as MedicalRecord[]
})

const recordsSlice = createSlice({
  name: 'records',
  initialState: { items: [] as MedicalRecord[], status: 'idle' as 'idle' | 'loading' | 'done' | 'error' },
  reducers: {},
  extraReducers: b => {
    b.addCase(fetchRecords.pending, s => { s.status = 'loading' })
      .addCase(fetchRecords.fulfilled, (s, a) => { s.items = a.payload; s.status = 'done' })
      .addCase(fetchRecords.rejected, s => { s.status = 'error' })
  },
})
export default recordsSlice.reducer
