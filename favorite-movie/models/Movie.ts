export type Movie = {
    id: number | undefined;
    original_language: string;
    original_title: string;
    title: string;
    vote_average: number;
    vote_count: number;
    video: boolean;
    adult: boolean;
    release_date: string;
    overview: string;
}

export type MovieStore = {
    movies: Movie[];
}

export const MOVIE_STORE_KEY = 'MOVIES_STORE';