import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage' 

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/search' element={<SearchPage/>} />
      {/* <Route path='/movie/:id' element={<MovieInfo />} />
      <Route path='/actors/:id' element={<Actors />} />
      <Route path='/profile/:id' element={<Profile />} />  */}
    </Routes>
  )
}

export default App
