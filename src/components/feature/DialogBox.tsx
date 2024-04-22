import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'
import StarRating from './StarRating'

interface Movie {
  title: string
  overview: string
  popularity: number | any
}

interface DialogProps {
  open: boolean
  onClose: () => void
  movie: Movie | null
}

const MovieDialog: React.FC<DialogProps> = ({ open, onClose, movie }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent sx={{ backgroundColor: '#616161' }}>
        <DialogTitle color={'white'}>{movie?.title} : </DialogTitle>
        <StarRating popularity={movie?.popularity} />
        <DialogContentText color={'white'}>{movie?.overview}</DialogContentText>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: '#616161' }}>
        <Button onClick={onClose} color='error'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default MovieDialog
