import React, { useState } from 'react'
import { Chip, Grid } from '@mui/material'
import { chipStyle, GridContainerStyle } from '../../styles/MovieGenerator'

interface Genre {
  id: number
  name: string
}

interface GenreSelectorProps {
  genres?: Genre[]
  selectedGenre?: number | undefined
  onSelectGenre: (genreId: number | undefined) => void
}

const MovieGenreSelector: React.FC<GenreSelectorProps> = ({ genres, onSelectGenre }) => {
  const [selectedGenre, setSelectedGenre] = useState<number | undefined>(undefined)
  const handleGenreClick = (genreId: number | undefined) => {
    setSelectedGenre(genreId)
    onSelectGenre(genreId)
  }

  return (
    <Grid container item xs={12} lg={12} spacing={3}>
      <Grid
        item
        xs={12}
        lg={12}
        bgcolor={'black'}
        sx={{
          ...GridContainerStyle,
        }}
      >
        <Chip
          label='All'
          onClick={() => handleGenreClick(undefined)}
          color={'error'}
          sx={{
            ...chipStyle,
            backgroundColor: !selectedGenre ? '#f44336' : '#484848',
          }}
        />
        {genres?.map((genre, index) => (
          <Chip
            key={index}
            clickable
            label={genre.name}
            onClick={() => handleGenreClick(genre.id)}
            color={'error'}
            sx={{
              ...chipStyle,
              backgroundColor: selectedGenre === genre.id ? '#f44336' : '#484848',
            }}
          />
        ))}
      </Grid>
    </Grid>
  )
}

export default MovieGenreSelector
