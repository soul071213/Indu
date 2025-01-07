import './App.css'
import { Routes, Route } from 'react-router-dom'
import Onboard from './page/Onboard'
import Chat from './page/chat'

function App() {
  return (
    <div className='MainLayout'>
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App