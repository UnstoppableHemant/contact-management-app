import { Routes, Route } from 'react-router-dom'
import FormPage from './pages/home'
import Dashboard from './pages/dashboard'
import Header from './components/header'
import SideNav from './components/sideNav'

const App = () => {
    return (
        <>
            <Header />
            <div className='flex h-[100%]'>
                <SideNav />
                <div className='w-full p-4 min-h-screen'>
                <Routes>
                    <Route path="/" element={<FormPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
                </div>
            </div>
        </>
    )
}

export default App