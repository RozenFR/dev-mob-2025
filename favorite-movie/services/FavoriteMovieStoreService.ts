import {FAVORITE_MOVIES_STORE_KEY, FavoriteMovieStore} from "../models/FavoriteMovie";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllFavoriteMovies = async () => {
    const favoriteMoviesStoreItem = await AsyncStorage.getItem(FAVORITE_MOVIES_STORE_KEY);
    if (favoriteMoviesStoreItem) {
        return JSON.parse(favoriteMoviesStoreItem) as FavoriteMovieStore;
    }
    return {movies: []};
}

export const getFavoriteMovie = async (movieId: number) => {
    const favoriteMoviesStore = await getAllFavoriteMovies();
    return favoriteMoviesStore.movies.find(movie => movie.id === movieId);
}

export const addFavoriteMovie = async (movieId: number) => {
    const favoriteMoviesStore = await getAllFavoriteMovies();
    const movie = await getFavoriteMovie(movieId);
    if (movie) {
        return;
    } else {
        favoriteMoviesStore.movies.push({id: movieId});
        await AsyncStorage.setItem(FAVORITE_MOVIES_STORE_KEY, JSON.stringify(favoriteMoviesStore));
    }
}

export const deleteFavoriteMovie = async (movieId: number) => {
    const favoriteMoviesStore = await getAllFavoriteMovies();
    const movieIndex = favoriteMoviesStore.movies.findIndex(movie => movie.id === movieId);
    favoriteMoviesStore.movies.splice(movieIndex, 1);
    await AsyncStorage.setItem(FAVORITE_MOVIES_STORE_KEY, JSON.stringify(favoriteMoviesStore));
}