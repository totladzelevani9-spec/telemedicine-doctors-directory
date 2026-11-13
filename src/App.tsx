import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import DoctorDirectory from './components/DoctorDirectory'
import BookingModal from './components/BookingModal'
import BookingForm from './components/BookingForm'
import PatientDashboard from './components/PatientDashboard'
import ChatWidget from './components/ChatWidget'

const links = [['/', 'ექიმები'], ['/booking', 'ჯავშანი'], ['/records', 'სამედიცინო ბარათი'], ['/chat', 'კონსულტაცია']]

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <header className="page-header">
          <div className="mx-auto max-w-6xl">
            <h1>კლინიკის პორტალი</h1>
            <nav className="mt-4 flex flex-wrap gap-4" aria-label="მთავარი ნავიგაცია">
              {links.map(([to, label]) => (
                <NavLink key={to} to={to} end className={({ isActive }) => `pb-1 ${isActive ? 'border-b-2 border-white font-semibold' : 'opacity-80'}`}>{label}</NavLink>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl p-4 py-8">
          <Routes>
            <Route path="/" element={<DoctorDirectory />} />
            <Route path="/booking" element={<BookingModal><BookingForm /></BookingModal>} />
            <Route path="/records" element={<PatientDashboard />} />
            <Route path="/chat" element={<ChatWidget />} />
          </Routes>
        </main>
      </HashRouter>
    </Provider>
  )
}
