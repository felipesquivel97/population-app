import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { ContinentPage } from './pages/ContinentPage'

function App() {
  return (
    <main>
      <h1 className='title'>POPULATION APP</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
          <Route path='/:continent' element={<ContinentPage></ContinentPage>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
