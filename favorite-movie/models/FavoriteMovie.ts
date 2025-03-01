export type FavoriteMovie = {
    id: number;
}

export type FavoriteMovieStore = {
    movies: FavoriteMovie[];
}

export const FAVORITE_MOVIES_STORE_KEY = 'FAVORITE_MOVIES_STORE';