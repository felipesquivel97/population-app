import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomeView } from './pages/HomeView'
import { ContinentView } from './pages/ContinentView'

function App() {
  return (
    <main>
      <h1 className='title'>POPULATION APP</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeView></HomeView>} />
          <Route path='/:continent' element={<ContinentView></ContinentView>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
