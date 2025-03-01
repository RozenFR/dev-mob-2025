import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
  Home: undefined
  FavoriteMovies: undefined
  NewMovie: undefined
  MovieDetails: { movieId: number }
  EditMovie: { movieId: number }
}

export type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>

export type MovieDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'MovieDetails'
>
