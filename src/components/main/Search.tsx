import React, { useState } from 'react'
import instance from '../../services/axios'
import { ImageOverlay, MovieCardContainer, OverlayContent } from '../../styles/MoviesList'
import { Grid, CardMedia, Typography, Card } from '@mui/material'
import Header from '../shared/HeaderComponent'

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const base_url = process.env.REACT_APP_IMG_URL as string

  const handleSearch = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY as string
      const response = await instance.get(
        `/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchTerm)}&page=1`,
      )
      setSearchResults(response.data.results)
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  return (
    <>
      <Header />
      <div>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Enter search term'
        />
        <button onClick={handleSearch}>Search</button>
        <Grid container>
          {searchResults.map((result) => (
            <Grid item xs={6} sm={4} md={4} lg={3} key={result}>
              <MovieCardContainer>
                <Card>
                  <CardMedia
                    component='img'
                    height='70%'
                    image={`${base_url}${result.poster_path}`}
                    alt={result.title}
                  />
                  <ImageOverlay className='overlay'>
                    <OverlayContent>
                      <Typography variant='h4' component='h2'>
                        {result?.title}
                      </Typography>
                      <Typography variant='h6' color='white'>
                        Release Year: {result?.release_year}
                      </Typography>
                    </OverlayContent>
                  </ImageOverlay>
                </Card>
              </MovieCardContainer>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default SearchBar
