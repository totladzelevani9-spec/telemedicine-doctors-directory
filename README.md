# სტუდენტი 1 — ექიმების დირექტორია (ინდივიდუალური ნაწილი)

**ავტორი:** ლევანი თოთლაძე
**ბრენჩი:** feature/doctor-directory

## რას აკეთებს
ექიმების სია, ძიება სახელით და ფილტრაცია სპეციალობით.

## ძირითადი ნაწილები
- `Doctor` TypeScript ინტერფეისი
- `useFetchDoctors`: მონაცემების ჩატვირთვა (fetch, async/await, loading/error)
- `useMemo`: ფილტრაცია, რომელიც ხელახლა ითვლება მხოლოდ ძიების ან ფილტრის ცვლილებისას
- `DoctorDirectory` და `DoctorCard` (Tailwind)

## გაშვება
npm install, შემდეგ npm run dev