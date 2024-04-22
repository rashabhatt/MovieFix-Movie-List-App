import MovieList from '../components/main/MoviesList'
import Header from '../components/shared/HeaderComponent'
import Hero from '../components/shared/HeroComponent'

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <MovieList />
    </div>
  )
}

export default HomePage
