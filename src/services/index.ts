const API_KEY = process.env.REACT_APP_API_KEY as string

const apiRequest = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchBanner: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default apiRequest
