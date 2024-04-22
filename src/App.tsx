import Hero from './components/shared/HeroComponent'
import Header from './components/shared/HeaderComponent'
import MovieList from './components/main/MoviesList'

function App() {
  const VARIABLE_NAME = process.env.REACT_APP_API_URL
  console.log('name', VARIABLE_NAME)
  return (
    <div>
      <Header />
      <Hero />
      <MovieList />
    </div>
  )
}

export default App
