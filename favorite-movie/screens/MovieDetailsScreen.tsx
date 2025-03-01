import React, { useEffect, useState } from 'react'
import {
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import {
  MovieDetailsScreenRouteProp,
  ScreenNavigationProp,
} from '../models/Routing'
import { getFavoriteMovie } from '../services/FavoriteMovieStoreService'
import { DeleteFavoriteMovieButton } from '../components/DeleteFavoriteMovieButton'
import { AddFavoriteMovieButton } from '../components/AddFavoriteMovieButton'
import { MovieDetails } from '../components/MovieDetails'
import { getMovie } from '../services/MovieStoreService'
import { Movie } from '../models/Movie'

export const MovieDetailsScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const route = useRoute<MovieDetailsScreenRouteProp>()
  const movieId = route.params.movieId
  const [favoriteMovie, setFavoriteMovie] = useState<Movie | null>(null)
  const [movie, setMovie] = useState<Movie | undefined>(undefined)

  const renderFavoriteButton = () => {
    return favoriteMovie ? (
      <DeleteFavoriteMovieButton movieId={movieId} />
    ) : (
      <AddFavoriteMovieButton movieId={movieId} />
    )
  }

  useEffect(() => {
    getMovie(movieId).then(movie => (movie ? setMovie(movie) : null))
    getFavoriteMovie(movieId).then(movie =>
      movie ? setFavoriteMovie(movie) : undefined,
    )
    navigation.setOptions({
      headerRight: () => renderFavoriteButton(),
    })
  })

  return <MovieDetails movie={movie} />
}
