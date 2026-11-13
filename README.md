# ექიმების დირექტორია (Telemedicine & Clinic Management System)

## პროექტის მიმოხილვა
ვებ-აპლიკაცია ტელემედიცინისა და კლინიკის მართვისთვის. პაციენტს შეუძლია:
- ექიმების სიის ნახვა, სახელით ძიება და სპეციალობით ფილტრაცია;
- ექიმთან ვიზიტის დაჯავშნა (ვალიდაციით);
- სამედიცინო ჩანაწერების ნახვა;
- ექიმთან ჩატში მიმოწერა.

## გამოყენებული ტექნოლოგიები
React (Vite), TypeScript, Tailwind CSS, Sass/SCSS, React Hooks, React Router, Redux Toolkit, Formik + Yup, Fetch API (doctors.json), Git

## გაშვების ინსტრუქცია
```bash
npm install
npm run dev     # დეველოპმენტი
npm run build   # პროდაქშენი (dist/)
```

## ბმულები
- Live Demo: არ არის გამოქვეყნებული
- GitHub: https://github.com/totladzelevani9-spec/telemedicine-doctors-directory
- ჩემი ბრენჩი: `feature/doctor-directory`
- ბოლო კოდის commit hash: 33a708f

## გუნდის როლები

> ეს არის ინდივიდუალური პროექტი. მასწავლებლის ნებართვით, ოთხივე როლი მე
> (ლევანი თოთლაძე) თავად შევასრულე. სტუდენტი 2, 3 და 4 სიმულირებული
> თანაგუნდელები არიან. ყველა კომიტი ჩემი საკუთარი git სახელითაა,
> ყალბი ავტორები არ გამოყენებულა.

| როლი | სახელი | პასუხისმგებლობა | ბრენჩი |
|------|--------|-----------------|--------|
| სტუდენტი 1 | ლევანი თოთლაძე | ექიმების კატალოგი: `Doctor` ინტერფეისი, `useFetchDoctors`, `useMemo` ფილტრაცია, `DoctorDirectory`, `DoctorCard` | feature/doctor-types, feature/fetch-hook, feature/doctor-card, feature/doctor-directory |
| სტუდენტი 2 | ლევანი თოთლაძე (სიმულირებული, „ლევანი 2") | ჯავშნის ფორმა: Formik + Yup, `useCallback`, `useBookingForm`, `BookingModal`, `BookingForm` | feature/booking |
| სტუდენტი 3 | ლევანი თოთლაძე (სიმულირებული, „ლევანი 3") | სამედიცინო ჩანაწერები: Redux Toolkit, `useMedicalRecords`, `PatientDashboard`, `RecordCard` | feature/medical-records |
| სტუდენტი 4 | ლევანი თოთლაძე (სიმულირებული, „ლევანი 4") | ჩატი: `useRef` ავტომატური სქროლი, `useChat`, `ChatWidget`, `MessageItem` | feature/chat |
| ინტეგრაცია | ლევანი თოთლაძე | როუტერი და Redux Provider `App.tsx`-ში | feature/app-routing |