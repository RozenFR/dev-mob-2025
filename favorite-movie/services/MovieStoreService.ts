import AsyncStorage from '@react-native-async-storage/async-storage'
import { Movie, MOVIE_STORE_KEY, MovieStore } from '../models/Movie'
import { getAllFavoriteMovies } from './FavoriteMovieStoreService'
import { FAVORITE_MOVIES_STORE_KEY } from '../models/FavoriteMovie'

export const initMovies = async () => {
  const movies: Movie[] = []

  const f1 = require('../assets/PopularMovies_p1.json')
  const f2 = require('../assets/PopularMovies_p2.json')

  const responses = [...f1.results, ...f2.results]
  responses.forEach(response => {
    movies.push({
      id: response.id,
      original_language: response.original_language,
      original_title: response.original_title,
      title: response.title,
      vote_average: response.vote_average,
      vote_count: response.vote_count,
      video: response.video,
      adult: response.adult,
      release_date: response.release_date,
      overview: response.overview,
    })
  })
  await AsyncStorage.setItem(MOVIE_STORE_KEY, JSON.stringify({ movies }))
  return movies
}

export const getAllMovies = async () => {
  const movieStoreItem = await AsyncStorage.getItem(MOVIE_STORE_KEY)
  if (movieStoreItem) {
    return JSON.parse(movieStoreItem) as MovieStore
  } else {
    return { movies: await initMovies() }
  }
}

export const getAllMoviesById = async (movieIds: number[]) => {
  const movies = await getAllMovies()
  const result: Movie[] = []
  movieIds.forEach(id => {
    const movie = movies.movies.find(movie => movie.id === id)
    if (movie) {
      result.push(movie)
    }
  })
  return { movies: result }
}

export const getMovie = async (id: number) => {
  const movieStore = await getAllMovies()
  return movieStore.movies.find(movie => movie.id === id)
}

export const saveUpdateMovie = async (movie: Movie) => {
  const movieStore = await getAllMovies()
  const favoriteMovie = await getAllFavoriteMovies()
  if (movie.id) {
    const movieIndex = movieStore.movies.findIndex(m => m.id === movie.id)
    const favoriteMovieIndex = favoriteMovie.movies.findIndex(
      m => m.id === movie.id,
    )
    movieStore.movies.splice(movieIndex, 1, movie)
    favoriteMovie.movies.splice(favoriteMovieIndex, 1, movie)
  } else {
    movieStore.movies.push(movie)
    favoriteMovie.movies.push(movie)
  }
  await AsyncStorage.setItem(MOVIE_STORE_KEY, JSON.stringify(movieStore))
  await AsyncStorage.setItem(
    FAVORITE_MOVIES_STORE_KEY,
    JSON.stringify(favoriteMovie),
  )
}

export const deleteMovie = async (movieId: number) => {
  const movieStore = await getAllMovies()
  const movieIndex = movieStore.movies.findIndex(movie => movie.id === movieId)
  movieStore.movies.splice(movieIndex, 1)
  await AsyncStorage.setItem(MOVIE_STORE_KEY, JSON.stringify(movieStore))
}
