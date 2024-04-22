import SearchBar from '../components/main/Search'
import Header from '../components/shared/HeaderComponent'
import { searchPage } from '../styles/SearchStyle'

function SearchPage() {
  return (
    <div>
      <Header />
      <div style={searchPage}>
        <SearchBar />
      </div>
    </div>
  )
}

export default SearchPage
