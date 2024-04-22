import { useState, useEffect } from 'react'
import instance from '../../services/axios'
import { Grid, Typography, CardMedia, Card } from '@mui/material'
import { ImageOverlay, MovieCardContainer, OverlayContent } from '../../styles/MoviesList'
import MovieGenreSelector from './MovieGenreSelector'

interface Movie {
  title?: string
  release_year?: number
  id?: number
  poster_path?: any
  isTv?: any
  backdrop_path?: any
  genre_ids?: number[]
}

interface Genre {
  id: number
  name: string
}

const MovieList = (props: Movie) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [groupedMovies, setGroupedMovies] = useState<{ [year: number]: Movie[] }>({})
  const [genres, setGenres] = useState<Genre[]>([])
  const [selectedGenre, setSelectedGenre] = useState<number | undefined>()
  const [selectedGenreName, setSelectedGenreName] = useState<string>('All Movies')
  const base_url = process.env.REACT_APP_IMG_URL as string
  const startYear = 2012
  const endYear = new Date().getFullYear()

  useEffect(() => {
    fetchMovies(startYear, endYear)
    fetchGenres()
  }, [])

  useEffect(() => {
    const grouped = movies.reduce<{ [year: number]: Movie[] }>((acc, movie: any) => {
      if (acc[movie?.release_year]) {
        acc[movie?.release_year].push(movie)
      } else {
        acc[movie?.release_year] = [movie]
      }
      return acc
    }, {})
    setGroupedMovies(grouped)
  }, [movies])

  const fetchMovies = async (start: number, end: number) => {
    try {
      let allMovies: Movie[] = []
      for (let year = start; year <= end; year++) {
        const response = await instance.get('/discover/movie', {
          params: {
            api_key: process.env.REACT_APP_API_KEY as string,
            primary_release_year: year,
            page: 1,
          },
        })
        const data = response.data
        if (!data.results || !Array.isArray(data.results)) {
          throw new Error('Invalid data format')
        }
        const moviesWithGenres = data.results.map((movie: any) => ({
          title: movie.title,
          release_year: movie.release_date ? new Date(movie.release_date).getFullYear() : 0,
          poster_path: movie.poster_path,
          genre_ids: movie.genre_ids, // Store genre_ids in Movie object
        }))
        allMovies = [...allMovies, ...moviesWithGenres]
      }
      console.log('all movies', allMovies)
      setMovies(allMovies)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  const fetchGenres = async () => {
    try {
      const response = await instance.get('/genre/movie/list', {
        params: {
          api_key: process.env.REACT_APP_API_KEY as string,
        },
      })
      const data = response.data
      setGenres(data.genres)
    } catch (error) {
      console.error('Error fetching genres:', error)
    }
  }

  const handleSelectGenre = (genreId: number | undefined) => {
    setSelectedGenre(genreId)
    const genreName = genres.find((genre) => genre.id === genreId)?.name || 'All Movies'
    setSelectedGenreName(genreName)
  }

  return (
    <div>
      <MovieGenreSelector genres={genres} onSelectGenre={handleSelectGenre} />
      <Typography variant='h5' component='h5' sx={{ mt: '15px', mb: '15px',  ml: '8px', color: 'white' }}>
        {selectedGenreName}
      </Typography>
      <Grid container spacing={3}>
        {Object.entries(groupedMovies).map(([year, movies]) => (
          <Grid item xs={12} key={year}>
            <Typography
              variant='h5'
              component='h5'
              sx={{ mt: '15px', mb: '15px', ml: '8px', color: 'white' }}
            >
              {!selectedGenre ? `Release Year: ${year}` : year}
            </Typography>
            <Grid container spacing={3}>
              {movies
                ?.filter(
                  (movie) =>
                    !selectedGenre || (movie.genre_ids && movie.genre_ids.includes(selectedGenre)),
                )
                .map((movie, index) => (
                  <Grid item xs={6} sm={4} md={4} lg={3} key={index}>
                    <MovieCardContainer>
                      <Card>
                        <CardMedia
                          component='img'
                          height='70%'
                          image={`${base_url}${movie.poster_path}`}
                          alt={movie.title}
                        />
                        <ImageOverlay className='overlay'>
                          <OverlayContent>
                            <Typography variant='h4' component='h2'>
                              {movie?.title}
                            </Typography>
                            <Typography variant='h6' color='white'>
                              Release Year: {movie?.release_year}
                            </Typography>
                          </OverlayContent>
                        </ImageOverlay>
                      </Card>
                    </MovieCardContainer>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default MovieList
